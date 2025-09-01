  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_arith](javascript:call_link\('abensql_arith.htm'\)) → 

SQL expressions, arithmetic calculations

This example demonstrates arithmetic calculations in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code

REPORT demo\_sql\_expr\_arith.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 100 ).
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      FOR i = 0 UNTIL i > 9
      ( id = |{ i }|
        num1 = rnd->get\_next( )
        num2 = rnd->get\_next( ) ) ) ).
    DATA(offset) = 10000.
    SELECT id, num1, num2,
           CAST( num1 AS D34N ) / CAST( num2 AS D34N ) AS ratio,
           DIV( num1, num2 ) AS div,
           DIVISION( num1, num2, 2 ) AS division,
           MOD( num1, num2 ) AS mod,
           @offset + ABS( num1 - num2 ) AS sum
           FROM demo\_expressions
           ORDER BY sum DESCENDING
           INTO TABLE @DATA(results).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Calculations are made and functions called in a list of columns specified after SELECT.

-   To perform [floating point division](javascript:call_link\('abensql_arith.htm'\)) with integer columns, these columns are updated to the type DECFLOAT34 using [cast](javascript:call_link\('abensql_cast.htm'\)).

-   Integer divisions with the functions [DIV](javascript:call_link\('abensql_arith_func.htm'\)), [MOD](javascript:call_link\('abensql_arith_func.htm'\)), and [DIVISION](javascript:call_link\('abensql_arith_func.htm'\)) do not require this update.

-   A [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) is added to the absolute value of a difference between column values.

Using the alias names defined after AS, the results are assigned to the columns with the same names of an internal table declared inline, results. The result of the final calculation are used as a sort criterion.