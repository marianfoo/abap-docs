---
title: "Source Code"
description: |
  REPORT demo_sql_function_string. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DELETE FROM demo_expressions. INSERT demo_expressions FROM TABLE @( VALUE #( ( id = 'X' char1 = ' 0123' char2 = 'aAaA' ) ) ). SELECT SINGLE char1 AS text
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func_abexa.htm"
abapFile: "abensql_string_func_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "abensql", "string", "func", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_functions.htm) →  [sql\_func - String Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - String Functions, ABENSQL_STRING_FUNC_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_func - String Functions

This example demonstrates [string functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) in [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm).

Source Code   

REPORT demo\_sql\_function\_string.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'X'
        char1 = ' 0123'
        char2 = 'aAaA' ) ) ).
    SELECT SINGLE
     char1 AS text1,
     char2 AS text2,
     CONCAT(               char1,char2 )     AS concat,
     CONCAT\_WITH\_SPACE(    char1,char2, 1 )  AS concat\_with\_space,
     INITCAP(              char2 )           AS initcap,
     INSTR(                char1,'12' )      AS instr,
     LEFT(                 char1,3 )         AS left,
     LENGTH(               char1 )           AS length,
     LIKE\_REGEXPR(         PCRE = '\\CA',
                           VALUE = char2 )   AS like\_regex,
     LOCATE(               char2,'A',-1,2 )  AS locate,
     LOCATE\_REGEXPR(       PCRE = 'A(?=a)',
                           VALUE = char2 )   AS locate\_regexpr,
     LOCATE\_REGEXPR\_AFTER( PCRE = 'A(?!a)',
                           VALUE = char2 )   AS locate\_regexpr\_after,
     LOWER(                char2 )           AS lower,
     LPAD(                 char1,10,'x' )    AS lpad,
     LTRIM(                char1,' ' )       AS ltrim,
     OCCURRENCES\_REGEXPR(  PCRE = '\\CA',
                           VALUE = char2 )   AS occ\_regex,
     REPLACE(              char1,'12','\_\_' ) AS replace,
     REPLACE\_REGEXPR(      PCRE = '\\CA',
                           VALUE = char2,
                           WITH = 'bb' )     AS replace\_regex,
     RIGHT(                char1,3 )         AS right,
     RPAD(                 char1,10,'x' )    AS rpad,
     RTRIM(                char1,'3' )       AS rtrim,
     SUBSTRING(            char1,3,3 )       AS substring,
     SUBSTRING\_REGEXPR(    PCRE = 'A(a|b)',
                           VALUE = char2 )   AS substring\_regexpr,
     UPPER(                char2 )           AS upper
     FROM demo\_expressions
     INTO @FINAL(result).
    cl\_demo\_output=>display( result ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Uses the string functions supported by ABAP SQL as elements of a SELECT list.