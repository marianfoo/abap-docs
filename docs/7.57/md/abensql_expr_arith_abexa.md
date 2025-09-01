  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_arith](javascript:call_link\('abensql_arith.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_exp - Arithmetic Calculations, ABENSQL_EXPR_ARITH_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_exp - Arithmetic Calculations

This example demonstrates arithmetic calculations in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code   

REPORT demo\_sql\_expr\_arith.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(rnd) = cl\_abap\_random\_int=>create(
      seed = CONV i( sy-uzeit ) min = 1 max = 100 ).
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      FOR i = 0 UNTIL i > 9
      ( id = |{ i }|
        num1 = rnd->get\_next( )
        num2 = rnd->get\_next( ) ) ) ).
    FINAL(offset) = 10000.
    SELECT id, num1, num2,
           CAST( num1 AS D34N ) / CAST( num2 AS D34N ) AS ratio,
           DIV( num1, num2 ) AS div,
           DIVISION( num1, num2, 2 ) AS division,
           MOD( num1, num2 ) AS mod,
           @offset + ABS( num1 - num2 ) AS sum
           FROM demo\_expressions
           ORDER BY sum DESCENDING
           INTO TABLE @FINAL(results).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Calculations are made and functions called in a list of columns specified after SELECT.

-   To perform [floating point division](javascript:call_link\('abensql_arith.htm'\)) with integer columns, these columns are updated to the type DECFLOAT34 using [cast](javascript:call_link\('abensql_cast.htm'\)).
-   Integer divisions with the functions [DIV](javascript:call_link\('abensql_arith_func.htm'\)), [MOD](javascript:call_link\('abensql_arith_func.htm'\)), and [DIVISION](javascript:call_link\('abensql_arith_func.htm'\)) do not require this update.
-   A [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) is added to the absolute value of a difference between column values.

Using the alias names defined after AS, the results are assigned to identically named columns of an internal table results declared inline. The result of the final calculation is used as a sort criterion.