  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_null](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_null.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - Null Expression, ABENSQL_EXPR_NULL_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

sql\_exp - Null Expression

This example demonstrates [null expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_null.htm) in ABAP SQL.

Source Code   

REPORT demo\_sql\_expr\_null.
TYPES: BEGIN OF result,
         carrid   TYPE scarr-carrid,
         distid   TYPE spfli-distid,
         distance TYPE string,
         null     TYPE string,
       END OF result.
DATA result TYPE TABLE OF result
            WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
SELECT FROM scarr
         LEFT OUTER JOIN spfli
           ON scarr~carrid = spfli~carrid
       FIELDS scarr~carrid,
              distid,
              CASE distid
                 WHEN 'MI' THEN 'Miles'
                 WHEN 'KM' THEN 'Kilometers'
                 ELSE NULL
              END AS distance,
              CASE distid
                 WHEN 'MI' THEN NULL
                 WHEN NULL THEN 'Kilometers'
                 ELSE NULL
              END AS null
       ORDER BY scarr~carrid
       INTO TABLE @result.
DELETE ADJACENT DUPLICATES FROM result.
cl\_demo\_output=>display( result ).

Description   

In the SELECT list, two [simple case distinctions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_simple_case.htm) are made which both explicitly specify the null expression NULL after ELSE.

-   The column distance returns the result of all matches and if there is no match returns the null value.
-   The column null returns an unknown result for the first comparison, which is true, and the null value for the second comparison, which is not true.

The [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") is converted to the type-dependent [initial value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_value_glosry.htm "Glossary Entry") in both cases when passed to the result table.