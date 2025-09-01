  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenabap_sql_functions.htm'\)) →  [sql\_func - String Functions](javascript:call_link\('abensql_string_func.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20String%20Functions%2C%20ABENSQL_STRING_FUNC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - String Functions

This example demonstrates [string functions](javascript:call_link\('abensql_string_func.htm'\)) in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_function\_string DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_function\_string IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'X'
        char1 = ' 0123'
        char2 = 'aAaA' ) ) ).
    SELECT SINGLE
     char1 AS text1,
     char2 AS text2,
     concat(               char1,char2 )     AS concat,
     concat\_with\_space(    char1,char2, 1 )  AS concat\_with\_space,
     initcap(              char2 )           AS initcap,
     instr(                char1,'12' )      AS instr,
     left(                 char1,3 )         AS left,
     length(               char1 )           AS length,
     like\_regexpr(         pcre = '\\CA',
                           value = char2 )   AS like\_regex,
     locate(               char2,'A',-1,2 )  AS locate,
     locate\_regexpr(       pcre = 'A(?=a)',
                           value = char2 )   AS locate\_regexpr,
     locate\_regexpr\_after( pcre = 'A(?!a)',
                           value = char2 )   AS locate\_regexpr\_after,
     lower(                char2 )           AS lower,
     lpad(                 char1,10,'x' )    AS lpad,
     ltrim(                char1,' ' )       AS ltrim,
     occurrences\_regexpr(  pcre = '\\CA',
                           value = char2 )   AS occ\_regex,
     replace(              char1,'12','\_\_' ) AS replace,
     replace\_regexpr(      pcre = '\\CA',
                           value = char2,
                           with = 'bb' )     AS replace\_regex,
     right(                char1,3 )         AS right,
     rpad(                 char1,10,'x' )    AS rpad,
     rtrim(                char1,'3' )       AS rtrim,
     substring(            char1,3,3 )       AS substring,
     substring\_regexpr(    pcre = 'A(a|b)',
                           value = char2 )   AS substring\_regexpr,
     upper(                char2 )           AS upper
     FROM demo\_expressions
     INTO @FINAL(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

Uses the string functions supported by ABAP SQL as elements of a SELECT list.