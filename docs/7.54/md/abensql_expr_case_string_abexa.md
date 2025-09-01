  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_case](javascript:call_link\('abensql_case.htm'\)) →  [sql\_exp - sql\_simple\_case](javascript:call_link\('abensql_simple_case.htm'\)) → 

SQL Expressions, Simple CASE

This example demonstrates simple case distinctions in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code

REPORT demo\_sql\_expr\_case\_string.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'x' char1 = 'aaaaa' char2 = 'bbbbb' )
      ( id = 'y' char1 = 'xxxxx' char2 = 'yyyyy' )
      ( id = 'z' char1 = 'mmmmm' char2 = 'nnnnn' ) ) ).
    DATA(else) = 'fffff'.
    SELECT id, char1, char2,
           CASE char1
             WHEN 'aaaaa' THEN ( char1 && char2 )
             WHEN 'xxxxx' THEN ( char2 && char1 )
             ELSE @else
           END AS text
           FROM demo\_expressions
           INTO TABLE @DATA(results).
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In a list of columns specified after SELECT, [CASE](javascript:call_link\('abensql_simple_case.htm'\)) is used to make a simple case distinction for the content of a column. The result is a character string chained from column content or taken from a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)). Using the alias name defined after AS, the result is assigned to the column with the same name in an internal table declared inline, results.