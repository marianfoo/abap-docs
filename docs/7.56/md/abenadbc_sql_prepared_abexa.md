  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_abexas.htm) → 

ADBC - Prepared Statement

The example demonstrates how a [prepared statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_sql_prepared_statement.htm) is created and executed using ADBC.

Source Code

REPORT demo\_adbc\_prepared\_statement.
"This program uses platform dependent Native SQL.
"It may not work for every database system.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF result\_line,
                  carrid TYPE sflight-carrid,
                  connid TYPE sflight-connid,
                END OF result\_line,
                result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  sql        TYPE REF TO cl\_sql\_prepared\_statement,
           cols       TYPE adbc\_column\_tab,
           carrid     TYPE sflight-carrid,
           carrid\_tab TYPE TABLE OF sflight-carrid.
    cols = VALUE #( ( CONV adbc\_name( 'CARRID' ) )
                    ( CONV adbc\_name( 'CONNID' ) ) ).
    carrid\_tab = VALUE #( ( CONV s\_carrid( 'AA' ) )
                          ( CONV s\_carrid( 'LH' ) )
                          ( CONV s\_carrid( 'UA' ) ) ).
    TRY.
        sql = NEW #( \`SELECT CARRID, CONNID \`      &&
                     \`FROM SPFLI \`                 &&
                     \`WHERE MANDT = '\` && sy-mandt &&
                     \`' AND CARRID = ?\` ).
        sql->set\_param( REF #( carrid ) ).
        LOOP AT carrid\_tab INTO carrid.
          DATA(result) = sql->execute\_query( ).
          result->set\_param\_struct( struct\_ref = REF #( result\_line )
                                    corresponding\_fields = cols ).
          result\_tab = VALUE #( BASE result\_tab
                                FOR j = 1 WHILE result->next( ) > 0
                                ( result\_line ) ).
        ENDLOOP.
        sql->close( ).
        cl\_demo\_output=>display( result\_tab ).
      CATCH cx\_sql\_exception INTO DATA(err).
        cl\_demo\_output=>display( err->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc_query.htm) is instantiated as a prepared statement and is executed with different parameters.

The work process must not switch between the calls of the prepared statement, which means that dialogs using dynpros are not possible in the corresponding loop. Instead, the parameters to be evaluated are prepared and collected in a single internal table and the results lists are prepared and collected in another internal table.