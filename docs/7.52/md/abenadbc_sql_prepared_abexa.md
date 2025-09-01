  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql.htm) →  [ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) →  [ADBC Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_abexas.htm) → 

ADBC, Prepared Statement

The example demonstrates the generation and execution of a [prepared statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_sql_prepared_statement.htm) with ADBC.

Source Code

REPORT demo\_adbc\_prepared\_statement.
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
        sql = NEW #( \`SELECT carrid, connid \`      &&
                     \`FROM spfli \`                 &&
                     \`WHERE mandt = '\` && sy-mandt &&
                     \`' AND carrid = ?\` ).
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

In this example, a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_query.htm) is instantiated as a prepared statement and is executed with various parameters.

Since the work process is not allowed to be switched between the calls of the prepared statement, no dialog using screens is possible in the corresponding loop. Instead, the parameters that are to be evaluated are prepared and collected in one internal table and the result lists are prepared and collected in another internal table.