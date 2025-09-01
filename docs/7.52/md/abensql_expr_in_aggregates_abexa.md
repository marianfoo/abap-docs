  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [Examples of SQL Expressions](javascript:call_link\('abensql_expr_abexas.htm'\)) → 

SQL Expressions, Use in Aggregate Expressions

This example demonstrates [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as an argument of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)).

Source Code

REPORT demo\_sql\_expr\_in\_aggregates.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT char1, char2, num1, num2, num1 + num2 AS sum,
                                     num1 \* num2 AS product
           FROM demo\_expressions
           ORDER BY char1, char2
           INTO TABLE @DATA(ungrouped).
    out->write( ungrouped ).
    SELECT char1 && '\_' && char2 AS group,
           MAX( num1 + num2 ) AS max,
           MIN( num1 + num2 ) AS min,
           MIN( num1 \* num2 ) AS min\_product
           FROM demo\_expressions
           GROUP BY char1, char2
           ORDER BY group
           INTO TABLE @DATA(grouped).
    out->write( grouped ).
    SELECT char1 && '\_' && char2 AS group,
           MAX( num1 + num2 ) AS max,
           MIN( num1 + num2 ) AS min
           FROM demo\_expressions
           GROUP BY char1, char2
           HAVING MIN( num1 \* num2 ) > 25
           ORDER BY group
           INTO TABLE @DATA(grouped\_having).
    out->write( grouped\_having ).
    out->display(  ).  ENDMETHOD.
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
      FOR i = 0 THEN i + 1 UNTIL i > 25
      NEXT t = VALUE #(
                 BASE t ( id    = sy-abcde+i(1)
                          num1  = r1->get\_next( )
                          num2  = r1->get\_next( )
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

The database table DEMO\_EXPRESSIONS is filled with random values in the static constructor.

-   The first SELECT statement reads the filled columns individually. Here, the total and the product of the numeric columns NUM1 and NUM2 are calculated using [arithmetic statements](javascript:call_link\('abensql_arith.htm'\)) in the SELECT list.

-   The second SELECT statement performs a grouping by the columns CHAR1 and CHAR2. For each group, aggregate functions are used to determined aggregated values whose arguments are [arithmetic expressions](javascript:call_link\('abensql_arith.htm'\)).

-   The third SELECT statement performs the same grouping as the second SELECT statement, but restricts the selected groups using a [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\)) in which a condition is set on an aggregate expression that has an [arithmetic expression](javascript:call_link\('abensql_arith.htm'\)) as an argument.