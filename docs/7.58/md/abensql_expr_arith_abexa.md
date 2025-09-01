---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sql_expr_arith DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_sql_expr_arith IMPLEMENTATION. METHOD main. FINAL(rnd) = cl_abap_ran
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_arith_abexa.htm"
abapFile: "abensql_expr_arith_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "method", "class", "data", "internal-table", "abensql", "expr", "arith", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_arith](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Arithmetic%20Calculations%2C%20ABENSQL_EXPR_ARITH_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Arithmetic Calculations

This example demonstrates arithmetic calculations in [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_arith DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_arith IMPLEMENTATION.
  METHOD main.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i(
        cl\_demo\_date\_time=>get\_user\_time( ) )
        min = 1 max = 100 ).
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      FOR i = 0 UNTIL i > 9
      ( id = |{ i }|
        num1 = rnd->get\_next( )
        num2 = rnd->get\_next( ) ) ) ).
    FINAL(offset) = 10000.
    SELECT id, num1, num2,
           CAST( num1 AS D34N ) / CAST( num2 AS D34N ) AS ratio,
           div( num1, num2 ) AS div,
           division( num1, num2, 2 ) AS division,
           mod( num1, num2 ) AS mod,
           @offset + abs( num1 - num2 ) AS sum
           FROM demo\_expressions
           ORDER BY sum DESCENDING
           INTO TABLE @FINAL(results).
    out->write( results ).
  ENDMETHOD.
ENDCLASS.

Description   

Calculations are made and functions called in a list of columns specified after SELECT.

-   To perform [floating point division](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm) with integer columns, these columns are updated to the type DECFLOAT34 using [cast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm).
-   Integer divisions with the functions [DIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm), [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm), and [DIVISION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) do not require this update.
-   A [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) is added to the absolute value of a difference between column values.

Using the alias names defined after AS, the results are assigned to identically named columns of an internal table results declared inline. The result of the final calculation is used as a sort criterion.