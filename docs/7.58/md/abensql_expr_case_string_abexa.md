---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sql_expr_case_string DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_sql_expr_case_string IMPLEMENTATION. METHOD main. DELETE FROM
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_case_string_abexa.htm"
abapFile: "abensql_expr_case_string_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "method", "class", "data", "internal-table", "abensql", "expr", "string", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm) →  [sql\_exp - sql\_simple\_case](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_exp%20-%20Simple%20CASE%2C%20ABENSQL_EXPR_CASE_STRING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_exp - Simple CASE

This example demonstrates simple case distinctions in [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_case\_string DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_case\_string IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( VALUE #(
      ( id = 'x' char1 = 'aaaaa' char2 = 'bbbbb' )
      ( id = 'y' char1 = 'xxxxx' char2 = 'yyyyy' )
      ( id = 'z' char1 = 'mmmmm' char2 = 'nnnnn' ) ) ).
    FINAL(else) = 'fffff'.
    SELECT id, char1, char2,
           CASE char1
             WHEN 'aaaaa' THEN ( char1 && char2 )
             WHEN 'xxxxx' THEN ( char2 && char1 )
             ELSE @else
           END AS text
           FROM demo\_expressions
           INTO TABLE @FINAL(results).
    out->write( results ).
  ENDMETHOD.
ENDCLASS.

Description   

In a list of columns specified after SELECT, [CASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) is used to make a simple case distinction for the content of a column. The result is a character string that is concatenated from column content or taken from a [host variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm). Using the alias name defined after AS, the result is assigned to the identically named column in an internal table declared inline, results.