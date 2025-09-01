  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_win](javascript:call_link\('abapselect_over.htm'\)) →  [sql\_win - Examples of Window Expressions](javascript:call_link\('abensql_expr_over_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_win%20-%20Window%20Expressions%20with%20Grouping%2C%20ABENSQL_EXPR_OVER_GROUP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

sql\_win - Window Expressions with Grouping

This example demonstrates [window expressions](javascript:call_link\('abapselect_over.htm'\)) for a grouped result set.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_over\_group DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_over\_group IMPLEMENTATION.
  METHOD main.
    SELECT char1 && '\_' && char2 AS group,
           COUNT(\*)                   AS cnt,
           AVG( num1 AS DEC( 12,2 ) ) AS avg,
           CORR\_SPEARMAN( num1,num2 ) AS corr,
           SUM( num1 )                AS sum,
           COUNT(\*)           OVER( PARTITION BY char1 ) AS win\_cnt,
           ROW\_NUMBER( )      OVER( PARTITION BY char1 ) AS win\_num,
           MIN( AVG( num1 AS DEC( 12,2 ) ) )
                              OVER( PARTITION BY char1 ) AS win\_min,
           MAX( AVG( num1 AS DEC( 12,2 ) ) )
                              OVER( PARTITION BY char1 ) AS win\_max,
           SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ) AS win\_sum,
           VAR( CAST( num1 AS FLTP ) )
                              OVER( PARTITION BY char1 ) AS var,
           division( 100 \* SUM( num1 ),
                     SUM( SUM( num1 ) ) OVER( PARTITION BY char1 ),
                     2 ) AS win\_perc
           FROM demo\_expressions
           GROUP BY char1, char2, num1
           ORDER BY group
           INTO TABLE @FINAL(groups\_windowed).
    out->write( groups\_windowed ).
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

The example shows the combination of [window expressions](javascript:call_link\('abapselect_over.htm'\)) in the SELECT list with a [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause. In this case, [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") used as a [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") can also have aggregate functions as arguments.

The GROUP BY clause groups by the columns CHAR1 and CHAR2. In the result set created by this, [OVER](javascript:call_link\('abapselect_over.htm'\)) is used to define windows whose window criterion is the column CHAR1. Aggregate expressions that can be specified as columns in the SELECT list due to the GROUP BY clause are also used as arguments of window functions.

The aggregate functions used as an argument of window functions would not need to appear as separately specified columns in the SELECT list but are shown here anyway to highlight how these values are produced.