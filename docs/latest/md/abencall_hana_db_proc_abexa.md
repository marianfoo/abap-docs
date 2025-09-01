  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_and_hana_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SAP%20HANA%2C%20Call%20Database%20Procedure%2C%20ABENCALL_HANA_DB_PROC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SAP HANA, Call Database Procedure

This example demonstrates how a database procedure in the SAP HANA database can be called.

Source Code   

\* Public class definition
CLASS cl\_demo\_call\_hana\_db\_proc DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_call\_hana\_db\_proc IMPLEMENTATION.
  METHOD main.
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure )
                       ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      out->write(
      \`Current database system does not support all procedure calls\` ).
      RETURN.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    FINAL(oref) =
      NEW cl\_demo\_call\_hana\_db\_procedure( to\_upper( carrier ) ).
    IF oref->ok IS INITIAL.
      out->write( 'Error in setup' ).
      RETURN.
    ENDIF.
    FINAL(osql\_result) = oref->osql( ).
    FINAL(adbc\_result) = oref->adbc( ).
    FINAL(cdbp\_result) = oref->cdbp( ).
    FINAL(amdp\_result) = oref->amdp( ).
    IF NOT cl\_shdb\_hc=>is\_hana\_cloud(  ).
      IF osql\_result = adbc\_result AND
         osql\_result = cdbp\_result AND
         osql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, CALL DATABASE PROCEDURE, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ELSE.
      IF osql\_result = adbc\_result AND
         osql\_result = amdp\_result.
        out->begin\_section(
          \`Result of ABAP SQL, ADBC, and AMDP\`
          )->write( amdp\_result ).
      ELSE.
        out->write( 'Error' ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

Take a database procedure called /1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS in the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"):

begin
  FLIGHTS =
    select \*
           from SFLIGHT as S
           where exists (
                  select MANDT, CARRID, CONNID
                  from :CONNECTIONS as C
                  where C.MANDT  = S.MANDT and
                        C.CARRID = S.CARRID and
                        C.CONNID = S.CONNID );
end

The procedure has a tabular input parameter CONNECTIONS with the three-column HANA table type DEMO\_ADBC\_CONNECTIONS\_TYPE and an output parameter FLIGHTS with the type SFLIGHT defined in the ABAP Dictionary. The HANA table type has three character-like columns, MANDT with length 3, CARRID with length 3, and CONNID with length 4. The task is to call this procedure from ABAP while passing an internal table to the input parameter and copying the output parameter to an internal table.

To do this, the example class calls various methods of the class CL\_DEMO\_CALL\_HANA\_DB\_PROCEDURE. The table to be passed connection\_tab is filled in the instance constructor of the class in accordance with user input. Furthermore, the database procedure, the HANA table type, and a database procedure proxy, which is usually static, are created here temporarily.

Comparison Implementation Using ABAP SQL   

The method OSQL shows how the implementation of the database procedure can also be expressed in ABAP SQL. If the function is required only in ABAP, an implementation in SQLScript is unnecessary in this case and should be avoided in accordance with the relevant [programming guideline](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_guidl.htm "Guideline"). In our example, the database procedure is a replacement for a globally available procedure that is also to be called in ABAP. The result of the method OSQL is compared with the results of the various procedure calls to determine whether they are correct.

METHOD osql.
  IF connection\_tab IS NOT INITIAL.
    SELECT \*
          FROM sflight
          FOR ALL ENTRIES IN @connection\_tab
          WHERE carrid = @connection\_tab-carrid AND
                connid = @connection\_tab-connid
          INTO TABLE @flights.
  ENDIF.
ENDMETHOD.

Call with Native SQL Using ADBC   

The method ADBC uses [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry") and [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry") to call the database procedure. To pass the internal table connection\_tab to the database procedure, a temporary table DEMO\_ADBC\_CONNECTIONS with the required type DEMO\_ADBC\_CONNECTIONS\_TYPE is created on the database and provided with the values of the internal table using insert. The database procedure is then called with the temporary table as an input parameter and the result is assigned to an ADBC result set. To read from the result set, a standard table flights\_std is required as an auxiliary table, since the return value flights is a sorted table that cannot be used for ADBC. The temporary table DEMO\_ADBC\_CONNECTIONS is removed again after the database procedure is called.

METHOD adbc.
  DATA(sql) = NEW cl\_sql\_statement( ).
  TRY.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl(    'drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl(
        \`create global temporary row table DEMO\_ADBC\_CONNECTIONS \` &&
           \`like DEMO\_ADBC\_CONNECTIONS\_TYPE\` ).
      sql->set\_param\_table( REF #( connection\_tab ) ).
      sql->execute\_update(
        \`insert into DEMO\_ADBC\_CONNECTIONS values ( ?, ?, ? )\` ).
      DATA(result) =
              sql->execute\_query(
                \`call "/1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS"( \` &&
                \`  CONNECTIONS =>DEMO\_ADBC\_CONNECTIONS, \` &&
                \`  FLIGHTS => NULL )\` ).
      DATA flights\_std TYPE STANDARD TABLE OF sflight WITH EMPTY KEY.
      result->set\_param\_table( REF #( flights\_std ) ).
      result->next\_package( ).
      result->close( ).
      flights = flights\_std.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl(    'drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call Using Database Procedure Proxy   

The method CDBP calls the database procedure with the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm) using the assigned [database procedure proxy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") DEMO\_ADBC\_GET\_FLIGHTS\_PROXY. The only thing to note here is that input parameters and output parameters of the database procedure have different row types than the internal tables that are to be assigned to them. In both cases, the column CONNID has the type NVARCHAR(4) on the database, but the type n with length 4 in ABAP. For this reason, the internal table connection\_tab is first assigned to a temporary table connections with the correct row type before the procedure is called. No auxiliary table is required for the result flights, since the row type is described using an ABAP Dictionary type. An appropriate mapping can be performed for this type using the mapping table params. As an alternative to an auxiliary table for connection\_tab, its data type could also be declared in the ABAP Dictionary and an appropriate mapping performed.

The statement CALL DATABASE PROCEDURE is not possible on a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry").

METHOD cdbp.
  TYPES:
    BEGIN OF connection,
      mandt  TYPE c LENGTH 3,
      carrid TYPE c LENGTH 3,
      connid TYPE c LENGTH 4,
    END OF connection.
  DATA connections TYPE STANDARD TABLE OF connection
                   WITH EMPTY KEY.
  IF cl\_shdb\_hc=>is\_hana\_cloud(  ).
    RETURN.
  ENDIF.
  connections = connection\_tab.
  CALL DATABASE PROCEDURE ('DEMO\_ADBC\_GET\_FLIGHTS\_PROXY')
    EXPORTING connections = connections
    IMPORTING flights     = flights.
ENDMETHOD.

Call Using AMDP   

The method AMDP calls the [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") AMDP\_METH, in which a call of the database procedure is implemented in SQLScript. In this case, all type-dependent actions required are performed by the AMDP framework.

METHOD amdp.
  amdp\_meth( EXPORTING connections = connection\_tab
             IMPORTING flights     = flights ).
ENDMETHOD.

METHOD amdp\_meth BY DATABASE PROCEDURE FOR HDB LANGUAGE SQLSCRIPT.
  call "/1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS"(
         CONNECTIONS => :CONNECTIONS,
         FLIGHTS => :FLIGHTS );
ENDMETHOD.