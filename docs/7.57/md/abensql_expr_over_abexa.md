  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\)) →  [sql\_win - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_win - Window Expressions, ABENSQL_EXPR_OVER_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_win - Window Expressions

This example demonstrates simple [window expressions](javascript:call_link\('abapselect_over.htm'\)).

Source Code   

REPORT demo\_select\_over.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    SELECT char1 && '\_' && char2 AS group,
           num1,
           COUNT(\*)      OVER( PARTITION BY char1, char2 ) AS cnt,
           ROW\_NUMBER( ) OVER( PARTITION BY char1, char2 ) AS rnum,
           MIN( num1 )   OVER( PARTITION BY char1, char2 ) AS min,
           MAX( num1 )   OVER( PARTITION BY char1, char2 ) AS max,
           SUM( num1 )   OVER( PARTITION BY char1, char2 ) AS sum,
           division( 100 \* num1,
                     SUM( num1 ) OVER( PARTITION BY char1, char2 ),
                     2 ) AS perc
           FROM demo\_expressions
           ORDER BY group
           INTO TABLE @FINAL(windowed).
    out->display( windowed ).  ENDMETHOD.
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

The example demonstrates how different [window functions](javascript:call_link\('abensql_win_func.htm'\)) are applied to windows of a result set of a query defined using [PARTITION](javascript:call_link\('abapselect_over.htm'\)). The content of the columns CHAR1 and CHAR2 is used as a window criterion. All rows that have identical content in these columns form a window. The result of a window function for a row is determined from all rows of the window this row is a part of. The final column perc demonstrates how a window function can be used as arguments of an SQL expression and hence produce row-dependent results, in this case the percentage of the value of the column NUM1 as part of the entire window.