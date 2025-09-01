---
title: "SELECT, GROUP BY for SQL Expressions"
description: |
  This example demonstrates non elementary SQL expressions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) combined with the addition GROUP BY(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm). Source Code  Public class defi
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_with_group_by_abexa.htm"
abapFile: "abensql_expr_with_group_by_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abensql", "expr", "with", "group", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20GROUP%20BY%20for%20SQL%20Expressions%2C%20ABENSQL_EXPR_WITH_GROUP_BY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

SELECT, GROUP BY for SQL Expressions

This example demonstrates non elementary [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) combined with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_with\_group\_by DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_with\_group\_by IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 1 num1 = 1 num2 = 1 )
      ( id = 2 num1 = 2 num2 = 4 )
      ( id = 3 num1 = 3 num2 = 2 )
      ( id = 4 num1 = 3 num2 = 2 )
      ( id = 5 num1 = 5 num2 = 1 )
      ( id = 6 num1 = 1 num2 = 1 )
      ( id = 7 num1 = 1 num2 = 1 ) ) ).
    out->begin\_section( \`GROUP BY num1, num2\` ).
    SELECT num1 + num2 AS sum, COUNT( \* ) AS count
           FROM demo\_expressions
           GROUP BY num1, num2
           ORDER BY sum
           INTO TABLE @FINAL(result1).
    out->write( result1 ).
    out->next\_section( \`GROUP BY num1 + num2\` ).
    SELECT num1 + num2 AS sum, COUNT( \* ) AS count
           FROM demo\_expressions
           GROUP BY num1 + num2
           ORDER BY sum
           INTO TABLE @FINAL(result2).
    out->write( result2 ).
  ENDMETHOD.
ENDCLASS.

Description   

An [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith.htm) after SELECT adds the values of the columns NUM1 and NUM2 and passes the total to the result set as SUM. The [aggregate function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaggregate_function_glosry.htm "Glossary Entry") count( \* ) counts the rows of a group. NUM1 and NUM2 must be specified for the grouping after GROUP BY.

-   The first SELECT statement specifies NUM1 and NUM2 as individual columns after GROUP BY. The rows are grouped by these columns. Distinct values in these columns produce separate groups, even if the total is the same.
-   The second SELECT statement specifies NUM1 and NUM2 in an SQL expression after GROUP BY. The rows are grouped by the result of the expression.