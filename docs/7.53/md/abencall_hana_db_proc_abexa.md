  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) →  [ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\)) → 

SAP HANA, Call Database Procedure

This example demonstrates how a database procedure in the SAP HANA database can be called.

Source Code

REPORT demo\_call\_hana\_db\_procedure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    IF NOT cl\_abap\_dbfeatures=>use\_features(
          EXPORTING
            requested\_features =
              VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure )
                       ( cl\_abap\_dbfeatures=>call\_amdp\_method ) ) ).
      cl\_demo\_output=>display(
      \`Current database system does not support all procedure calls\` ).
      RETURN.
    ENDIF.
    DATA carrier TYPE spfli-carrid VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    DATA(oref) =
      NEW cl\_demo\_call\_hana\_db\_procedure( to\_upper( carrier ) ).
    DATA(osql\_result) = oref->osql( ).
    DATA(adbc\_result) = oref->adbc( ).
    DATA(cdbp\_result) = oref->cdbp( ).
    DATA(amdp\_result) = oref->amdp( ).
    IF osql\_result = adbc\_result AND
       osql\_result = cdbp\_result AND
       osql\_result = amdp\_result.
      out->begin\_section(
        \`Result of Open SQL, ADBC, CALL DATABASE PROCEDURE, and AMDP\`
        )->write( amdp\_result ).
    ELSE.
      out->write( 'Error' ).
    ENDIF.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Take a database procedure called /1BCAMDP/DEMO\_ADBC\_GET\_FLIGHTS in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"):

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

The procedure has a tabular input parameter CONNECTIONS with the three-column HANA table type DEMO\_ADBC\_CONNECTIONS\_TYPE and an output parameter FLIGHTS with the type SFLIGHT defined in ABAP Dictionary. The HANA table type has three character-like columns, MANDT with length 3, CARRID with length 3, and CONNID with length 4. The task is to call this procedure from ABAP while passing an internal table to the input parameter and applying the output parameter to an internal table.

To do this, the example program calls various methods of the class CL\_DEMO\_CALL\_HANA\_DB\_PROCEDURE. The passed table connection\_tab is filled in the instance constructor of the class in accordance with user input. Furthermore, the database procedure, the HANA table type, and a database procedure proxy (usually static) are created here temporarily.

Comparison Implementation Using ABAP SQL

The method OSQL shows how the implementation of the database procedure can be expressed in ABAP SQL too. If the function is required only in ABAP, an implementation in SQLScript is unnecessary in this case and should be avoided in fact (as specified in the relevant [programming guideline](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline"). In our example, the database procedure is a replacement for a globally available procedure also to be called in ABAP. The result of the method OSQL is compared with the results of the various procedure calls to check their correctness.

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

The method ADBC uses [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") and [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") to call the database procedure. To pass the internal table connection\_tab to the database procedure, a temporary table DEMO\_ADBC\_CONNECTIONS with the required type DEMO\_ADBC\_CONNECTIONS\_TYPE is created on the database and provided with the values of the internal table using insert. The database procedure is then called with the temporary table as an input parameter and the result is assigned to an ADBC results set. To read from the results set, a standard table flights\_std is required as an auxiliary table, since the return value flights is a sorted table that cannot be used for ADBC. The temporary table DEMO\_ADBC\_CONNECTIONS is removed again after the database procedure is called.

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
        |insert into DEMO\_ADBC\_CONNECTIONS values ( ?, ?, ? )| ).
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

The method CDBP calls the database procedure with the statement [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) using the assigned [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry") DEMO\_ADBC\_GET\_FLIGHTS\_PROXY. The only thing to note here is that input parameters and output parameters of the database procedure have different row types than the internal tables assigned to them. In both cases, the column CONNID has the type NVARCHAR(4) on the database, but the type n with length 4 in ABAP. For this reason, the internal table connection\_tab is first assigned to a temporary table connections with the correct row type before the procedure is called. No auxiliary table is required for the result flights, since the row type is described using an ABAP Dictionary type. An appropriate mapping can be performed for this type using the mapping table params. As an alternative to an auxiliary table for connection\_tab, its data type could be declared in ABAP Dictionary too and an appropriate mapping performed.

METHOD cdbp.
  TYPES:
    BEGIN OF connection,
      mandt  TYPE c LENGTH 3,
      carrid TYPE c LENGTH 3,
      connid TYPE c LENGTH 4,
    END OF connection.
  DATA connections TYPE STANDARD TABLE OF connection
                   WITH EMPTY KEY.
  connections = connection\_tab.
  CALL DATABASE PROCEDURE ('DEMO\_ADBC\_GET\_FLIGHTS\_PROXY')
    EXPORTING connections = connections
    IMPORTING flights     = flights.
ENDMETHOD.

Call Using AMDP

The method AMDP calls the [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") AMDP\_METH, in which a call of the database procedure is implemented in SQLScript. In this case, all type-dependent actions required are performed by the AMDP framework.

Method was not found