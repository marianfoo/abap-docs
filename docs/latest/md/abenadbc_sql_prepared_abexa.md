  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql.htm) →  [ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc.htm) →  [ADBC - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADBC%20-%20Prepared%20Statement%2C%20ABENADBC_SQL_PREPARED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ADBC - Prepared Statement

The example demonstrates how a [prepared statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_sql_prepared_statement.htm) is created and executed using ADBC.

Source Code   

\* Public class definition
CLASS cl\_demo\_adbc\_prepared\_stmnt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: BEGIN OF result\_line,
            carrid TYPE sflight-carrid,
            connid TYPE sflight-connid,
          END OF result\_line,
          result\_tab LIKE TABLE OF result\_line.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_adbc\_prepared\_stmnt IMPLEMENTATION.
  METHOD main.
    DATA: sql        TYPE REF TO cl\_sql\_prepared\_statement,
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
          FINAL(result) = sql->execute\_query( ).
          result->set\_param\_struct( struct\_ref = REF #( result\_line )
                                    corresponding\_fields = cols ).
          result\_tab = VALUE #( BASE result\_tab
                                FOR j = 1 WHILE result->next( ) > 0
                                ( result\_line ) ).
        ENDLOOP.
        sql->close( ).
        out->write( result\_tab ).
      CATCH cx\_sql\_exception INTO FINAL(err).
        out->write( err->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

In this example, a [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_query.htm) is instantiated as a prepared statement and is executed with different parameters.

The work process must not switch between the calls of the prepared statement, which means that dialogs using dynpros are not possible in the corresponding loop. Instead, the parameters to be evaluated are prepared and collected in a single internal table and the results lists are prepared and collected in another internal table.