  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\)) →  [sql\_win - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\)) → 

sql\_win - Window Frame Specification

The example demonstrates how different [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") are applied to frames inside a window.

Source Code

REPORT DEMO\_SELECT\_OVER\_WIN\_FRAME\_SPE.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_update.
    INSERT demo\_update FROM TABLE @(
        VALUE #( ( id = 'A' col1 = '3' col2 = '7')
                 ( id = 'B' col1 = '5' col2 = '5')
                 ( id = 'C' col1 = '4' col2 = '5')
                 ( id = 'D' col1 = '1' col2 = '1')
                 ( id = 'E' col1 = '927' )
         ) ).
    SELECT id, col1, col2,
       COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING
                                    AND CURRENT ROW )
                                    AS count,
       COUNT( \* ) OVER( ORDER BY id ROWS BETWEEN CURRENT ROW
                                    AND UNBOUNDED FOLLOWING )
                                    AS count\_reverse,
       AVG( col1 ) OVER( ORDER BY id ROWS BETWEEN 1 PRECEDING
                                     AND 1 FOLLOWING )
                                     AS average,
       SUM( col1 ) OVER( ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING
                                     AND CURRENT ROW )
                                     AS accumulate
       FROM demo\_update
       INTO TABLE @DATA(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

-   count sorts the rows by the column ID and counts the number of rows from the first row of the window to the current row. The result is the same as that returned by the [ROW\_NUMBER( )](javascript:call_link\('abensql_win_func.htm'\)) function.

-   count\_reverse sorts the rows by the column ID and counts the number of rows from the current row to the last row of the window. The result is reverse numbering.

-   average sorts the rows by the column ID and calculates the rolling averages of a subset of rows from column COL1. The subset consists of the current row plus one preceding and one following row. With this function, it is possible, for example, to calculate the 3-day-average temperature for every day from a list of temperature data.

-   accumulate sorts the rows by the column ID and accumulates the values from the first row of the window up to the current row, thus computing the running total of column COL1.