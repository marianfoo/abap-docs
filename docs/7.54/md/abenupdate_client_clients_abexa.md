  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [INSERT, UPDATE, MODIFY, DELETE - target](javascript:call_link\('abapiumd_target.htm'\)) →  [INSERT, UPDATE, MODIFY, DELETE dbtab - CLIENT, CLIENTS](javascript:call_link\('abapiumd_client.htm'\)) → 

UPDATE, USING CLIENT, CLIENTS

This example demonstrates client handling in the ABAP SQL statement [UPDATE](javascript:call_link\('abapupdate.htm'\)).

Source Code

REPORT demo\_client\_handling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 10 ).
    DELETE FROM demo\_update USING ALL CLIENTS.
    INSERT demo\_update CLIENT SPECIFIED FROM TABLE @( VALUE #(
        FOR j = 0 UNTIL j > 4
        FOR i = 1 UNTIL i > 4
          ( client = |{ CONV mandt( j \* 100 ) ALPHA = IN }|
            id = substring( val = sy-abcde off = i - 1 len = 1 )
            col1 = rnd->get\_next( )
            col2 = rnd->get\_next( )
            col3 = rnd->get\_next( )
            col4 = rnd->get\_next( ) ) ) ).
    UPDATE demo\_update USING CLIENT '100'
       SET col1 = col1 + 1000.
    TYPES clients TYPE RANGE OF mandt.
    UPDATE demo\_update USING CLIENTS IN
                               @( VALUE clients( ( sign = 'I'
                                                   option = 'BT'
                                                   low = '200'
                                                   high = '300' ) ) )
       SET col2 = col2 + 1000.
    UPDATE demo\_update USING CLIENTS IN T000
       SET col3 = col3 + 1000.
    UPDATE demo\_update USING ALL CLIENTS
       SET col4 = col4 + 1000.
    SELECT client, id, col1, col2, col3, col4
           FROM demo\_update USING ALL CLIENTS
           ORDER BY client, id
           INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example demonstrates how the additions [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) and [USING CLIENTS](javascript:call_link\('abapiumd_client.htm'\)) are used in the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)) and in other ABAP SQL statements.

-   First, the addition [USING ALL CLIENTS](javascript:call_link\('abapiumd_client.htm'\)) of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)) is used to delete all data in all clients from the client-specific table DEMO\_UPDATE.

-   The addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) is used to write data with five different client IDs from a table constructed in a host expression into this database table.

-   The statement [UPDATE](javascript:call_link\('abapupdate.htm'\)) with different variants of the [USING](javascript:call_link\('abapiumd_client.htm'\)) addition is applied to the filled table:

-   USING CLIENT is used to modify the content of the column COL1 for the client 100.

-   USING CLIENTS IN @( ... ) modifies the content of the column COL2 for the clients 200 and 300 that meet the conditions of a ranges table constructed in a host expression.

-   USING CLIENTS IN T000 is used to modify the content of the column COL3 for all clients that also exist in the system table T000.

-   USING ALL CLIENTS is used to modify the content of the column COL4 for all clients.

In this example, the additions USING CLIENTS IN T000 and USING ALL CLIENTS can select different clients, since the validity of the client IDs is not checked when data is inserted. In real application tables, however, only client IDs from the table T000 should occur.

-   Finally, the addition [USING ALL CLIENTS](javascript:call_link\('abapselect_client.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to read and display the data from all clients.