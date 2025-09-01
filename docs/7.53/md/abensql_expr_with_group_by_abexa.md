---
title: "SQL Expressions, Use with GROUP BY"
description: |
  This example demonstrates SQL expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) combined with the addition GROUP BY(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm). Source Code REPORT demo_sql_expr_with_group_by. CLAS
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_with_group_by_abexa.htm"
abapFile: "abensql_expr_with_group_by_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "abensql", "expr", "with", "group", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) →  [Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_abexas.htm) → 

SQL Expressions, Use with GROUP BY

This example demonstrates [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) combined with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm).

Source Code

REPORT demo\_sql\_expr\_with\_group\_by.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    data(out) = cl\_demo\_output=>new( ).
    out->begin\_section( \`GROUP BY num1, num2\` ).
    SELECT num1 + num2 AS sum, COUNT( \* ) AS count
           FROM demo\_expressions
           GROUP BY num1, num2
           ORDER BY sum
           INTO TABLE @DATA(result1).
    out->write( result1 ).
    out->next\_section( \`GROUP BY num1 + num2\` ).
    SELECT num1 + num2 AS sum, COUNT( \* ) AS count
           FROM demo\_expressions
           GROUP BY num1 + num2
           ORDER BY sum
           INTO TABLE @DATA(result2).
    out->write( result2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An [arithmetic expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm) after SELECT adds the values of the columns NUM1 and NUM2 and passes the total to the results set SUM. The [aggregate function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_function_glosry.htm "Glossary Entry") count( \* ) counts the rows of a group. NUM1 and NUM2 must be specified for the grouping after GROUP BY.

-   The first SELECT statement specifies NUM1 and NUM2 as individual columns after GROUP BY. The rows are grouped by these columns. Distinct values in these columns produce separate groups, even if the total is the same.

-   The second SELECT statement specifies NUM1 and NUM2 in an SQL expression after GROUP BY. The rows are grouped by the result of the expression.