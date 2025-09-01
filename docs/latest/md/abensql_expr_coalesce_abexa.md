---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_sql_expr_coalesce DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. DATA: wa1 TYPE demo_join1, wa2 TYPE demo_join2. DATA BEGIN OF wa. INCLUDE STRUCTURE wa
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_expr_coalesce_abexa.htm"
abapFile: "abensql_expr_coalesce_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "abensql", "expr", "coalesce", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - SQL Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_functions.htm) →  [sql\_func - Coalesce Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Coalesce%20Function%2C%20ABENSQL_EXPR_COALESCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - Coalesce Function

This example demonstrates the coalesce function in [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_expr\_coalesce DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA: wa1 TYPE demo\_join1,
          wa2 TYPE demo\_join2.
    DATA BEGIN OF wa.
    INCLUDE STRUCTURE wa1 AS wa1 RENAMING WITH SUFFIX 1.
    INCLUDE STRUCTURE wa2 AS wa2 RENAMING WITH SUFFIX 2.
    DATA END OF wa.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_expr\_coalesce IMPLEMENTATION.
  METHOD main.
    DATA itab LIKE TABLE OF wa WITH EMPTY KEY.
    out->begin\_section( \`OUTER JOIN with Coalesce\` ).
    SELECT t1~a AS a1, t1~b AS b1, t1~c AS c1, t1~d AS d1,
           coalesce( t2~d, '--' ) AS d2,
           coalesce( t2~e, '--' ) AS e2,
           coalesce( t2~f, '--' ) AS f2,
           coalesce( t2~g, '--' ) AS g2,
           coalesce( t2~h, '--' ) AS h2
       FROM demo\_join1 AS t1
         LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d
       ORDER BY t1~d
       INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->write( itab ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_join1.
    INSERT demo\_join1 FROM TABLE @( VALUE #(
      ( a = 'a1' b = 'b1' c = 'c1'  d = 'uu' )
      ( a = 'a2' b = 'b2' c = 'c2'  d = 'uu' )
      ( a = 'a3' b = 'b3' c = 'c3'  d = 'vv' )
      ( a = 'a4' b = 'b4' c = 'c4'  d = 'ww' ) ) ).
    DELETE FROM demo\_join2.
    INSERT demo\_join2 FROM TABLE @( VALUE #(
      ( d = 'uu' e = 'e1' f = 'f1'  g = 'g1'  h = 'h1' )
      ( d = 'ww' e = 'e2' f = 'f2'  g = 'g2'  h = 'h2' )
      ( d = 'xx' e = 'e3' f = 'f3'  g = 'g3'  h = 'h3' ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example is an excerpt from the executable example for [joins](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoins_abexa.htm). Here, the function [COALESCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm) is used to replace null values produced by an outer join with a different value.