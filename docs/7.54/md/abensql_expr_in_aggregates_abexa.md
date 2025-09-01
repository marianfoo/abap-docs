---
title: "SQL Expressions, Use in Aggregate Expressions"
description: |
  This example demonstrates SQL expressions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) as an argument of aggregate functions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm). Source Code REPORT demo_sql_expr_in_aggregates. C
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_in_aggregates_abexa.htm"
abapFile: "abensql_expr_in_aggregates_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "abensql", "expr", "aggregates", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) →  [ABAP SQL - Examples of Aggregate Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_expr_abexas.htm) → 

SQL Expressions, Use in Aggregate Expressions

This example demonstrates [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) as an argument of [aggregate functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm).

Source Code

REPORT demo\_sql\_expr\_in\_aggregates.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT char1, char2, num1, num2, num1 + num2 AS sum,
                                     num1 \* num2 AS product
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @DATA(ungrouped).
    out->write( ungrouped ).
    SELECT char1 && '\_' && char2 AS group,
           MAX( num1 + num2 ) AS max,
           MIN( num1 + num2 ) AS min,
           MIN( num1 \* num2 ) AS min\_product
           FROM demo\_expressions
           GROUP BY char1, char2
           ORDER BY group
           INTO TABLE @DATA(grouped).
    out->write( grouped ).
    SELECT char1 && '\_' && char2 AS group,
           MAX( num1 + num2 ) AS max,
           MIN( num1 + num2 ) AS min
           FROM demo\_expressions
           GROUP BY char1, char2
           HAVING MIN( num1 \* num2 ) > 25
           ORDER BY group
           INTO TABLE @DATA(grouped\_having).
    out->write( grouped\_having ).
    out->display(  ).  ENDMETHOD.
  METHOD class\_constructor.
    TYPES tab\_type TYPE STANDARD TABLE OF
                   demo\_expressions WITH EMPTY KEY.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type(
      LET r1 = cl\_abap\_random\_int=>create(
                 seed = CONV i( sy-uzeit ) min = 1 max = 10 )
          r2 = cl\_abap\_random\_int=>create(
                 seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 )
          c = \`AB\` IN
      INIT t TYPE tab\_type
      FOR i = 0 THEN i + 1 UNTIL i > 25
      NEXT t = VALUE #(
                 BASE t ( id    = sy-abcde+i(1)
                          num1  = r1->get\_next( )
                          num2  = r1->get\_next( )
                          char1 = substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) &&
                                  substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 )
                          char2 = substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) &&
                                  substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) ) ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The database table DEMO\_EXPRESSIONS is filled with random values in the static constructor.

-   The first SELECT statement reads the filled columns individually. Here, the total and the product of the numeric columns NUM1 and NUM2 are calculated using [arithmetic statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith.htm) in the SELECT list.

-   The second SELECT statement performs a grouping by the columns CHAR1 and CHAR2. For each group, aggregate functions are used to determined aggregated values whose arguments are [arithmetic expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith.htm)

-   The third SELECT statement performs the same grouping as the second SELECT statement, but restricts the selected groups using a [HAVING clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaphaving_clause.htm) in which a condition is set on an aggregate expression that has an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith.htm) as an argument.

See also the executable example for [using aggregate expressions in SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_aggr_in_expr_abexa.htm). Here, the roles of the expressions are switched and different results are produced.