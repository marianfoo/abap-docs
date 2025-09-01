---
title: "INSERT, CLIENT"
description: |
  This example demonstrates client handling in the ABAP SQL statement INSERT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm). Source Code REPORT demo_insert_using_clients. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATI
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninsert_client_abexa.htm"
abapFile: "abeninsert_client_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abeninsert", "client", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Write Accesses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm) →  [INSERT, UPDATE, MODIFY, DELETE - target](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_target.htm) →  [INSERT, UPDATE, MODIFY, DELETE dbtab - CLIENT, CLIENTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) → 

INSERT, CLIENT

This example demonstrates client handling in the ABAP SQL statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm).

Source Code

REPORT demo\_insert\_using\_clients.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES clients TYPE RANGE OF mandt.
    DATA(out) = cl\_demo\_output=>new( ).
    DELETE FROM demo\_clnt USING ALL CLIENTS.
    DELETE FROM demo\_no\_clnt.
    INSERT demo\_clnt CLIENT SPECIFIED FROM TABLE
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
    SELECT FROM demo\_no\_clnt AS nocl
                LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                USING CLIENT '100'
                FIELDS cl~mandt,
                       nocl~id,
                       cl~num
                INTO TABLE @DATA(subquery1).
    out->write( subquery1 ).
    out->next\_section( \`INSERT ( USING CLIENT )\` ).
    DELETE FROM demo\_clnt\_target USING ALL CLIENTS.
    INSERT demo\_clnt\_target USING CLIENT '100' FROM
      ( SELECT FROM demo\_no\_clnt AS nocl
                 LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                 USING CLIENT '100'
                 FIELDS nocl~id,
                        cl~num  ) .
    SELECT FROM demo\_clnt\_target  USING CLIENT '100'
           FIELDS \*
           INTO TABLE @DATA(result1).
    out->write( result1 ).
    out->next\_section( \`Subquery USING CLIENTS\` ).
    SELECT FROM demo\_no\_clnt AS nocl
             LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
             USING CLIENTS IN @( VALUE clients(
                                   ( sign = 'I'
                                     option = 'EQ'
                                     low = '100' ) ) )
           FIELDS cl~mandt,
                  nocl~id,
                  cl~num
           INTO TABLE @DATA(subquery2).
    out->write( subquery2 ).
    out->next\_section( \`INSERT ( USING CLIENTS IN )\` ).
    DELETE FROM demo\_clnt\_target USING ALL CLIENTS.
    TRY.
        INSERT demo\_clnt\_target CLIENT SPECIFIED FROM
          ( SELECT FROM demo\_no\_clnt AS nocl
                     LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                     USING CLIENTS IN @( VALUE clients(
                                           ( sign = 'I'
                                             option = 'EQ'
                                             low = '100' ) ) )
                    FIELDS cl~mandt,
                           nocl~id,
                           cl~num ) ##null\_values.
        SELECT FROM demo\_clnt\_target USING CLIENT '100'
               FIELDS \*
               INTO TABLE @DATA(result2).
        out->write( result2 ).
      CATCH cx\_sy\_open\_sql\_db INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    out->next\_section( \`INSERT ( USING CLIENTS IN ) with Correction\` ).
    DELETE FROM demo\_clnt\_target USING ALL CLIENTS.
    TRY.
        INSERT demo\_clnt\_target CLIENT SPECIFIED FROM
          ( SELECT FROM demo\_no\_clnt AS nocl
                     LEFT OUTER JOIN demo\_clnt AS cl ON nocl~id = cl~id
                     USING CLIENTS IN @( VALUE clients(
                                          ( sign = 'I'
                                            option = 'EQ'
                                            low = '100' ) ) )
                   FIELDS COALESCE( cl~mandt, '100' ),
                          nocl~id,
                          cl~num ).
        SELECT FROM demo\_clnt\_target USING CLIENT '100'
               FIELDS \*
               INTO TABLE @DATA(res3).
        out->write( res3 ).
      CATCH cx\_sy\_open\_sql\_db INTO DATA(exc1).
        out->write( exc1->get\_text( ) ).
    ENDTRY.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example demonstrates how the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm) are used in [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) statements that use various [subqueries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_from_select.htm) as data sources. The example uses two database tables, the client-specific table DEMO\_CLNT and the cross-client table DEMO\_NO\_CLNT, which themselves are associated in the subqueries by a join.

-   First, [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm) statements are used to delete all data in both database tables without specifying a condition or a source. For the client-specific table, the addition USING ALL CLIENTS is used to delete the data of all clients.

-   [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm) statements are then used to fill both tables with data from internal tables constructed in a host expression. For the client-specific table, the addition CLIENT SPECIFIED is used to respect the client IDs in the client column of the internal table.

-   The output shows the results set of the query used as a subquery in the following INSERT statement. This query uses the addition USING CLIENT to ensure that data from the client 100 is read. A LEFT OUTER JOIN between the client-specific table and cross-client table produces a null value in the client column.

-   When the results set of the subquery is inserted, INSERT also uses the addition USING CLIENT. This ensures that the content of the client column of the subquery is overwritten by the value 100 for each row. This means that the null value itself is ignored. The result is shown in the output.

-   The next output shows the results set of a further query that uses the addition USING CLIENTS IN @rtab instead of USING CLIENT. The ranges table also selects only the client 100, which means that the result is the same as in the preceding query.

-   There is, however, a difference in the way the query is used as a subquery in an INSERT statement. USING CLIENTS IN @rtab is interpreted to mean that the client ID of the subquery is inserted, which is why implicit client handling by the INSERT statement using CLIENT SPECIFIED has to be switched accordingly. The client column of the subquery, however, contains a null value and an exception is raised accordingly.

-   The final INSERT statement bypasses the exception by using the [COALESCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm) function in the SELECT list to replace the null value with the client ID 100.