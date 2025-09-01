  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\)) →  [ABAP SQL - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\)) → 

SQL Expressions, Window Functions LEAD and LAG

This example demonstrates [window expressions](javascript:call_link\('abapselect_over.htm'\)) with the [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") [LEAD](javascript:call_link\('abensql_win_func.htm'\)) and [LAG](javascript:call_link\('abensql_win_func.htm'\)).

Source Code

REPORT demo\_select\_over\_lead\_lag.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT char1, char2,
           num1,
           ROW\_NUMBER( )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS rnum,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead1,
           LAG( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag1,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead2,
           LAG( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag2,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead10,
           LAG( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag10
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @DATA(windowed\_order\_ascending).
    out->write( windowed\_order\_ascending ).
    SELECT char1, char2,
           num1,
           ROW\_NUMBER( )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS rnum,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead1,
           LAG( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag1,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead2,
           LAG( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag2,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead10,
           LAG( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag10
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @DATA(windowed\_order\_descending).
    out->write( windowed\_order\_descending ).
    out->display( ).  ENDMETHOD.
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
      FOR i = 0 THEN i + 1 UNTIL i >= 25
      NEXT t = VALUE #(
                 BASE t ( id    = sy-abcde+i(1)
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
START-OF-SELECTION.
  demo=>main( ).

Description

The example shows results of the window functions [LEAD](javascript:call_link\('abensql_win_func.htm'\)) and [LAG](javascript:call_link\('abensql_win_func.htm'\)) to which all three possible arguments are passed. Like in the executable example, the windows are determined for [window expressions with sorts](javascript:call_link\('abensql_expr_over_order_by_abexa.htm'\)).

-   The first argument determines the result as a character-like representation of the column NUM1 of the row determined by the second argument.

-   The second argument determines the evaluated rows using differently sized distances.

-   The third argument is a literal returned instead of the null value if the evaluated row is not in the current window.