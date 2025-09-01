  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [Examples of SQL Expressions](javascript:call_link\('abensql_expr_abexas.htm'\)) → 

SQL Expressions, Simple CASE and Chainings

This example demonstrates simple case distinctions and chainings in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

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

In a list of columns specified after SELECT, [CASE](javascript:call_link\('abensql_simple_case.htm'\)) is used to make a simple case distinction for the content of a column. The result is a character string chained from column content or taken from a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)). Using the alternative column name defined after AS, the result is assigned to the column with the same name in an internal table declared inline, results.