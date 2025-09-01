  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [INSERT, UPDATE, MODIFY, DELETE, target](javascript:call_link\('abapiumd_target.htm'\)) →  [INSERT, UPDATE, MODIFY, DELETE dbtab, CLIENT, CLIENTS](javascript:call_link\('abapiumd_client.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%2C%20CLIENT%2C%20ABENINSERT_CLIENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT, CLIENT

This example demonstrates client handling in the ABAP SQL statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_insert\_using\_clients DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_insert\_using\_clients IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_clnt                               "#EC CI\_NOWHERE
                USING ALL CLIENTS.                       "#EC CI\_CLIENT
    DELETE FROM demo\_no\_clnt.                           "#EC CI\_NOWHERE
    INSERT demo\_clnt CLIENT SPECIFIED FROM TABLE         "#EC CI\_CLIENT
      @( VALUE #( ( mandt = '000' id = 1 num = 1 )
                  ( mandt = '000' id = 2 num = 2 )
                  ( mandt = '000' id = 3 num = 3 )
                  ( mandt = '000' id = 4 num = 4 )
                  ( mandt = '000' id = 5 num = 5 )
                  ( mandt = '100' id = 1 num = 1 )
                  ( mandt = '100' id = 2 num = 2 )
                  ( mandt = '100' id = 3 num = 3 ) ) ) .
    INSERT demo\_no\_clnt FROM TABLE
      @( VALUE #( ( id = 1 num = 1 )
                  ( id = 2 num = 2 )
                  ( id = 3 num = 3 )
                  ( id = 4 num = 4 ) ) ).
    out->next\_section( \`Subquery USING CLIENT\` ).
    SELECT FROM demo\_no\_clnt AS nocl                     "#EC CI\_CLIENT
                LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                USING CLIENT '100'
                FIELDS cl~mandt,
                       nocl~id,
                       cl~num
                INTO TABLE @FINAL(subquery1).
    out->write( subquery1 ).
    out->next\_section( \`INSERT ( USING CLIENT )\` ).
    DELETE FROM demo\_clnt\_target                        "#EC CI\_NOWHERE
                USING ALL CLIENTS.                       "#EC CI\_CLIENT
    INSERT demo\_clnt\_target USING CLIENT '100' FROM      "#EC CI\_CLIENT
      ( SELECT FROM demo\_no\_clnt AS nocl
                 LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                 USING CLIENT '100'
                 FIELDS nocl~id,
                        coalesce( cl~num, 0 ) ).
    SELECT FROM demo\_clnt\_target  USING CLIENT '100'     "#EC CI\_CLIENT
           FIELDS \*
           INTO TABLE @FINAL(result1).                  "#EC CI\_NOWHERE
    out->write( result1 ).
    out->next\_section( \`Subquery USING CLIENTS\` ).
    SELECT FROM demo\_no\_clnt AS nocl                     "#EC CI\_CLIENT
             LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
             USING CLIENTS IN @( VALUE #( ( sign = 'I'
                                            option = 'EQ'
                                            low = '100' ) ) )
           FIELDS cl~mandt,
                  nocl~id,
                  cl~num
           INTO TABLE @FINAL(subquery2).
    out->write( subquery2 ).
    out->next\_section( \`INSERT ( USING CLIENTS IN )\` ).
    DELETE FROM demo\_clnt\_target                        "#EC CI\_NOWHERE
                     USING ALL CLIENTS.                  "#EC CI\_CLIENT
    TRY.
        INSERT demo\_clnt\_target CLIENT SPECIFIED FROM    "#EC CI\_CLIENT
          ( SELECT FROM demo\_no\_clnt AS nocl
                     LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                     USING CLIENTS IN @( VALUE #( ( sign = 'I'
                                                    option = 'EQ'
                                                    low = '100' ) ) )
                    FIELDS cl~mandt,
                           nocl~id,
                           cl~num ) ##null\_values.
        SELECT FROM demo\_clnt\_target USING CLIENT '100'  "#EC CI\_CLIENT
               FIELDS \*
               INTO TABLE @FINAL(result2).              "#EC CI\_NOWHERE
        out->write( result2 ).
      CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->next\_section( \`INSERT ( USING CLIENTS IN ) with Correction\` ).
    DELETE FROM demo\_clnt\_target                        "#EC CI\_NOWHERE
                USING ALL CLIENTS.                       "#EC CI\_CLIENT
    TRY.
        INSERT demo\_clnt\_target CLIENT SPECIFIED FROM    "#EC CI\_CLIENT
          ( SELECT FROM demo\_no\_clnt AS nocl
                     LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                     USING CLIENTS IN @( VALUE #( ( sign = 'I'
                                                    option = 'EQ'
                                                    low = '100' ) ) )
                   FIELDS coalesce( cl~mandt, '100' ),
                          nocl~id,
                          coalesce( cl~num, 0 )  ).
        SELECT FROM demo\_clnt\_target USING CLIENT '100'  "#EC CI\_CLIENT
               FIELDS \*
               INTO TABLE @FINAL(res3).                 "#EC CI\_NOWHERE
        out->write( res3 ).
      CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc1).
        out->write( exc1->get\_text( ) ).
    ENDTRY.
    DELETE FROM demo\_clnt\_target                        "#EC CI\_NOWHERE
                USING ALL CLIENTS.                       "#EC CI\_CLIENT
  ENDMETHOD.
ENDCLASS.

Description   

The example demonstrates how the additions [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) are used in [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statements that use various [subqueries](javascript:call_link\('abapinsert_from_select.htm'\)) as data sources. The example uses two DDIC database tables, the client-dependent table DEMO\_CLNT and the client-independent table DEMO\_NO\_CLNT, which are linked in the subqueries using a join.

-   First, [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)) statements are used to delete all data in both DDIC database tables without specifying a condition or a source. For the client-dependent table, the addition USING ALL CLIENTS is used to delete the data of all clients.
-   [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) statements are then used to fill both tables with data from internal tables constructed in a host expression. For the client-dependent table, the addition CLIENT SPECIFIED is used to respect the client IDs in the client column of the internal table.
-   The output shows the result set of the query used as a subquery in the following INSERT statement. This query uses the addition USING CLIENT to ensure that data from the client 100 is read. A LEFT OUTER JOIN between the client-dependent table and client-independent table produces a null value in the client column.
-   When the result set of the subquery is inserted, INSERT also uses the addition USING CLIENT. This ensures that the content of the client column of the subquery is overwritten by the value 100 for each row. This means that the null value itself is ignored. The result is shown in the output.
-   The next output shows the result set of a further query that uses the addition USING CLIENTS IN @rtab instead of USING CLIENT. The ranges table also selects only the client 100, which means that the result is the same as in the preceding query.
-   However, a difference arises when the query is used as a subquery in an INSERT statement. USING CLIENTS IN @rtab is interpreted in such a way that the client ID of the subquery is to be inserted, which is why implicit client handling by the INSERT statement using CLIENT SPECIFIED has to be switched accordingly. Since the client column of the subquery contains a null value, the corresponding exception is raised.
-   The final INSERT statement bypasses the exception by using the [COALESCE](javascript:call_link\('abensql_coalesce.htm'\)) function in the SELECT list to replace the null value with the client ID 100.