  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) →  [Examples of SQL Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_abexas.htm) → 

SQL expressions, arithmetic calculations

This example demonstrates arithmetic calculations in [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm).

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
           CAST( num1 AS FLTP ) / CAST( num2 AS FLTP ) AS ratio,
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

-   To perform [floating point division](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith.htm) with integer columns, these columns are updated to the type FLTP using [cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm).

-   Integer divisions with the functions [DIV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm), [MOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm), and [DIVISION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_arith_func.htm) do not require this update.

-   A [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) is added to the absolute value of a difference between column values.

Using the alternative column names defined after AS, the results are assigned to the columns with the same names of an internal table declared inline, results. The result of the final calculation are used as a sort criterion.