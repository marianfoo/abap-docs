  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hana.htm) →  [ABAP and SAP HANA, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_and_hana_abexas.htm) → 

SAP HANA, from ADBC to AMDP

This example demonstrates how a task can be performed using HANA-specific language elements.

Source Code

REPORT demo\_from\_adbc\_to\_amdp.
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
    DATA(oref) = NEW cl\_demo\_from\_adbc\_to\_amdp( to\_upper( carrier ) ).
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

The task is to read all rows from the database table SFLIGHTS whose key fields MANDT, CARRID, and CONNID occur in a predefined three-column internal table. To do this, the example program calls various methods of the class CL\_DEMO\_FROM\_ADBC\_TO\_AMDP in whose instance constructor the internal table connection\_tab is filled in accordance with user input.

Note

The examples of using HANA-specific language elements shown in the methods are syntax-only examples. The task presented here can be solved just as well using ABAP SQL, which is why ABAP SQL is the preferred method as specified in the [programming guidelines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_guidl.htm "Guideline").

Reference Implementation Using ABAP SQL

The method OSQL shows how the task can be solved in ABAP SQL by simply using the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwhere_logexp_itab.htm). The result of the method is used as a reference for the HANA-specific implementations.

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

Using Native SQL with ADBC

The method ADBC solves the task using HANA-specific [Native SQL statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql.htm) passed to the SAP HANA database using [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc.htm). The table with the key values is evaluated after the addition exists in a subquery of a select statement. To do this, a temporary table DEMO\_ADBC\_CONNECTIONS is created on the database and filled with the content of the connection\_tab using the statement insert. To access the result of the select statement, a standard table std\_flights must be declared as a local internal table of the method, since the return value flights cannot be used for ADBC. The temporary table DEMO\_ADBC\_CONNECTIONS is removed again after SPFLI is read.

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
        \`( MANDT  NVARCHAR(3), \`                                   &&
          \`CARRID NVARCHAR(3), \`                                   &&
          \`CONNID NVARCHAR(4) )\` ).
      sql->set\_param\_table( REF #( connection\_tab ) ).
      sql->execute\_update(
        \`insert into DEMO\_ADBC\_CONNECTIONS values ( ?, ?, ? )\` ).
      DATA(result) = sql->execute\_query(
        \`    select \* \`                                   &&
        \`      from SFLIGHT as S \`                        &&
        \`      where exists (\`                            &&
        \`        select MANDT, CARRID, CONNID \`           &&
        \`               from  DEMO\_ADBC\_CONNECTIONS as C\` &&
        \`               where C.MANDT  = S.MANDT and \`    &&
        \`                     C.CARRID = S.CARRID and \`   &&
        \`                     C.CONNID = S.CONNID )\` ).
      DATA std\_flights TYPE STANDARD TABLE OF sflight WITH EMPTY KEY.
      result->set\_param\_table( REF #( std\_flights ) ).
      result->next\_package( ).
      result->close( ).
      flights = std\_flights.
      sql->execute\_update( 'truncate table DEMO\_ADBC\_CONNECTIONS' ).
      sql->execute\_ddl( '   drop table DEMO\_ADBC\_CONNECTIONS' ).
    CATCH cx\_sql\_exception.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call a Database Procedure Using a Database Procedure Proxy

The method CDBP solves the task by implementing the HANA-specific select statement in a [database procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") called by specifying a [database procedure proxy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry") in the statement [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_database_procedure.htm). In a more realistic example, the database procedure DEMO\_ADBC\_GET\_FLIGHTS and the database procedure proxy DEMO\_ADBC\_GET\_FLIGHTS\_PROXY would already exist and the implementation of the method would be restricted to the call CALL DATABASE PROCEDURE (compare with the executable example for [procedure calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_hana_db_proc_abexa.htm)). In this example, the database procedure and the database procedure proxy are created temporarily using ADBC methods and the associated API, then deleted again. The input parameter connections of the procedure references an additional temporary HANA table type, DEMO\_ADBC\_CONNECTIONS\_TYPE. HANA does not support a separate type for numeric text, which means that the type NVARCHAR(4) must be used for the column CONNID. Also, the internal table connection\_tab must be assigned to a temporary table connections with the correct row type before the procedure is called. No auxiliary table is required for the result, since the row type is described using an ABAP Dictionary type. An appropriate mapping can be performed for this type using the mapping table params. As an alternative to an auxiliary table for connection\_tab, its data type could be declared in ABAP Dictionary too and an appropriate mapping performed.

METHOD cdbp.
  DATA(sql) = NEW cl\_sql\_statement( ).
  TRY.
      sql->execute\_ddl( 'drop type DEMO\_ADBC\_CONNECTIONS\_TYPE' ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl( \`drop procedure DEMO\_ADBC\_GET\_FLIGHTS\` ).
    CATCH cx\_sql\_exception ##no\_handler.
  ENDTRY.
  TRY.
      sql->execute\_ddl(
        \`create type DEMO\_ADBC\_CONNECTIONS\_TYPE as table \` &&
        \`( MANDT  NVARCHAR(3), \`                           &&
          \`CARRID NVARCHAR(3), \`                           &&
          \`CONNID NVARCHAR(4) )\` ).
      sql->execute\_ddl(
        \`create procedure DEMO\_ADBC\_GET\_FLIGHTS  \`            &&
        \`  ( in CONNECTIONS DEMO\_ADBC\_CONNECTIONS\_TYPE,  \`    &&
        \`    out FLIGHTS SFLIGHT ) language sqlscript as \`    &&
        \`      begin \`                                        &&
        \`        FLIGHTS = \`                                  &&
        \`          select \* \`                                 &&
        \`            from SFLIGHT as S \`                      &&
        \`            where exists (  \`                        &&
        \`              select MANDT, CARRID, CONNID \`         &&
        \`                     from :CONNECTIONS as C\`         &&
        \`                     where C.MANDT  = S.MANDT and \`  &&
        \`                           C.CARRID = S.CARRID and \` &&
        \`                           C.CONNID = S.CONNID );\`   &&
        \`      end\` ).
      DATA db\_schema TYPE if\_dbproc\_proxy\_basic\_types=>ty\_db\_name.
      CALL FUNCTION 'DB\_DBSCHEMA\_CURRENT'
        IMPORTING dbschema = db\_schema.
      DATA(params) =
        VALUE if\_dbproc\_proxy\_basic\_types=>ty\_param\_override\_t(
        ( db\_name   = 'FLIGHTS'
          abap\_name = 'FLIGHTS'
          descr     = cl\_abap\_typedescr=>describe\_by\_name(
                      'SFLIGHT' ) ) ).
      DATA(api) = cl\_dbproc\_proxy\_factory=>get\_proxy\_public\_api(
        if\_proxy\_name = 'DEMO\_ADBC\_GET\_FLIGHTS\_PROXY' ).
      api->delete( ).
      api->create\_proxy( EXPORTING
                  if\_proc\_schema    = db\_schema
                  it\_param\_override = params
                  if\_proc\_name      = 'DEMO\_ADBC\_GET\_FLIGHTS' ).
      COMMIT CONNECTION default.
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
      COMMIT CONNECTION default.
      api->delete( ).
      sql->execute\_ddl( \`drop procedure DEMO\_ADBC\_GET\_FLIGHTS\` ).
      sql->execute\_ddl( 'drop type DEMO\_ADBC\_CONNECTIONS\_TYPE' ).
    CATCH cx\_sql\_exception cx\_dbproc\_proxy.
      CLEAR flights.
  ENDTRY.
ENDMETHOD.

Call an AMDP Procedure

The method AMDP solves the task in the easiest possible way by calling an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") AMDP\_METH in which the HANA-specific select statement is implemented in an [AMDP procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_procedure_glosry.htm "Glossary Entry"). The main advantage of the AMDP method is that it can be called in the same way as any ABAP method, without the need to implement any auxiliary tables (as in the preceding examples).

Method was not found