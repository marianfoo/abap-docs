  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_over_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_win%20-%20Window%20Frame%20Specification%2C%20ABENSQL_EXPR_OVER_WIN_FRAME_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

sql\_win - Window Frame Specification

The example demonstrates how different [window functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwindow_function_glosry.htm "Glossary Entry") are applied to frames inside a window.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_ovr\_win\_frm\_spe DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_ovr\_win\_frm\_spe IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_update.
    INSERT demo\_update FROM TABLE @(
        VALUE #( ( id = 'A' col1 = '3' col2 = '7' )
                 ( id = 'B' col1 = '5' col2 = '5' )
                 ( id = 'C' col1 = '4' col2 = '5' )
                 ( id = 'D' col1 = '1' col2 = '1' )
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
       INTO TABLE @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

-   count sorts the rows by the column ID and counts the number of rows from the first row of the window to the current row. The result is the same as that returned by the [ROW\_NUMBER( )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm) function.
-   count\_reverse sorts the rows by the column ID and counts the number of rows from the current row to the last row of the window. The result is reverse numbering.
-   average sorts the rows by the column ID and calculates the rolling averages of a subset of rows from column COL1. The subset consists of the current row plus one preceding and one following row. With this function, it is possible, for example, to calculate the 3-day-average temperature for every day from a list of temperature data.
-   accumulate sorts the rows by the column ID and accumulates the values from the first row of the window up to the current row, thus computing the running total of column COL1.