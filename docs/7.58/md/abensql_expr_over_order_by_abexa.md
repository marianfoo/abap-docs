  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_over_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_win%20-%20Window%20Expressions%20with%20Sort%2C%20ABENSQL_EXPR_OVER_ORDER_BY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

sql\_win - Window Expressions with Sort

This example demonstrates [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) with a sort.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_over\_order\_by DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_over\_order\_by IMPLEMENTATION.
  METHOD main.
    SELECT char1, char2,
           num1,
           COUNT(\*)      OVER( PARTITION BY char1 ) AS cnt,
           ROW\_NUMBER( ) OVER( PARTITION BY char1 ) AS rnum,
           '-'                                      AS rank,
           '-'                                      AS schlank,
           MAX( num1 )   OVER( PARTITION BY char1 ) AS max,
           MIN( num1 )   OVER( PARTITION BY char1 ) AS min,
           SUM( num1 )   OVER( PARTITION BY char1 ) AS sum,
           division( 100 \* num1,
                     SUM( num1 ) OVER( PARTITION BY char1 ),
                     2 ) AS perc
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @FINAL(windowed\_no\_order).
    out->write( windowed\_no\_order ).
    SELECT char1, char2,
           num1,
           COUNT(\*)      OVER( PARTITION BY char1
                               ORDER BY char2 ) AS cnt,
           ROW\_NUMBER( ) OVER( PARTITION BY char1
                               ORDER BY char2 ) AS rnum,
           RANK( )       OVER( PARTITION BY char1
                               ORDER BY char2 ) AS rank,
           DENSE\_RANK( ) OVER( PARTITION BY char1
                               ORDER BY char2 ) AS schlank,
           MAX( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 ) AS max,
           MIN( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 ) AS min,
           SUM( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 ) AS sum,
           division( 100 \* num1,
                     SUM( num1 ) OVER( PARTITION BY char1
                                       ORDER BY char2 ),
                     2 ) AS perc
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @FINAL(windowed\_order\_ascending).
    out->write( windowed\_order\_ascending ).
    SELECT char1, char2,
           num1,
           COUNT(\*)      OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS cnt,
           ROW\_NUMBER( ) OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS rnum,
           RANK( )       OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS rank,
           DENSE\_RANK( ) OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS schlank,
           MAX( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS max,
           MIN( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS min,
           SUM( num1 )   OVER( PARTITION BY char1
                               ORDER BY char2 DESCENDING ) AS sum,
           division( 100 \* num1,
                     SUM( num1 ) OVER( PARTITION BY char1
                                 ORDER BY char2 DESCENDING ),
                     2 ) AS perc
           FROM demo\_expressions
           ORDER BY char1 DESCENDING, char2 DESCENDING
           INTO TABLE @FINAL(windowed\_order\_descending).
    out->write( windowed\_order\_descending ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    TYPES tab\_type TYPE STANDARD TABLE OF
                   demo\_expressions WITH EMPTY KEY.
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type(
      LET r1 = cl\_abap\_random\_int=>create(
                 seed = CONV i(
                  cl\_demo\_date\_time=>get\_user\_time( ) )
                  min = 1 max = 10 )
          r2 = cl\_abap\_random\_int=>create(
                 seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 )
          c = \`AB\` IN
      INIT t TYPE tab\_type
      FOR i = 0 THEN i + 1 UNTIL i >= 25
      NEXT t = VALUE #(
                 BASE t ( id    = abcde+i(1)
                          num1  = r1->get\_next( )
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

Description   

The example compares SELECT statements with identical [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) with and without the addition ORDER BY specified after OVER. The use of the [ranking functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenranking_function_glosry.htm "Glossary Entry") [RANK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm) and [DENSE\_RANK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm) is only possible in combination with this addition.

-   If the addition ORDER BY is not specified after OVER, the window functions are executed in an undefined order for all rows of the windows defined by the content of the column CHAR1:
    -   The aggregate functions COUNT, MAX, MIN, and SUM evaluate all rows of a window.
    -   The ranking function ROW\_NUMBER assigns a sequential row number within each window, which matches the undefined order of processing.
-   When the addition ORDER BY is specified after OVER the window functions within the window are executed once in ascending order and once in descending order, with respect to the content of the column CHAR2. Only the rows of a frame are respected:
    -   Within a window, that is, all rows with identical content in the column CHAR1, the aggregate functions COUNT, MAX, MIN, and SUM evaluate only those rows that have identical content in CHAR2 or that precede it in the sort.
    -   The ranking function ROW\_NUMBER assigns the row number in accordance with the sort order. The order is then only undefined in rows with identical content in the column CHAR2. The ranking functions RANK and DENSE\_RANK return the rank with respect to the sort order within the current window. Here, identical content in the column CHAR2 has the same rank.

The addition ORDER BY of the SELECT statement is used only to highlight the output. It does not modify the results for the individual rows.