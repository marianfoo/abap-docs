  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) →  [ADBC - ABAP Database Connectivity](javascript:call_link\('abenadbc.htm'\)) →  [ADBC Examples](javascript:call_link\('abenadbc_abexas.htm'\)) → 

ADBC, Prepared Statement

The example demonstrates how a [prepared statement](javascript:call_link\('abencl_sql_prepared_statement.htm'\)) is created and executed using ADBC.

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

In this example, a [query](javascript:call_link\('abenadbc_query.htm'\)) is instantiated as a prepared statement and is executed with various parameters.

The work process cannot switch between the calls of the prepared statement, which means that dialogs using dynpros are not possible in the corresponding loop. Instead, the parameters to be evaluated are prepared and collected in a single internal table and the results lists are prepared and collected in another internal table.