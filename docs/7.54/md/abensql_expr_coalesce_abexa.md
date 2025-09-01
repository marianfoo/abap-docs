---
title: "SQL Expressions, Coalesce Function"
description: |
  This example demonstrates the coalesce function in SQL expressions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm). Source Code REPORT demo_sql_expr_coalesce NO STANDARD PAGE HEADING. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PR
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_coalesce_abexa.htm"
abapFile: "abensql_expr_coalesce_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "abensql", "expr", "coalesce", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_functions.htm) →  [sql\_exp - sql\_coalesce](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm) → 

SQL Expressions, Coalesce Function

This example demonstrates the coalesce function in [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm).

Source Code

REPORT demo\_sql\_expr\_coalesce NO STANDARD PAGE HEADING.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA: wa1 TYPE demo\_join1,
                wa2 TYPE demo\_join2,
                out TYPE REF TO if\_demo\_output.
    CLASS-DATA BEGIN OF wa.
    INCLUDE STRUCTURE wa1 AS wa1 RENAMING WITH SUFFIX 1.
    INCLUDE STRUCTURE wa2 AS wa2 RENAMING WITH SUFFIX 2.
    CLASS-DATA END OF wa.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab LIKE TABLE OF wa WITH EMPTY KEY.
    out = cl\_demo\_output=>new(
     )->begin\_section( \`OUTER JOIN with Coalesce\` ).
    SELECT t1~a AS a1, t1~b AS b1, t1~c AS c1, t1~d AS d1,
           COALESCE( t2~d, '--' ) AS d2,
           COALESCE( t2~e, '--' ) AS e2,
           COALESCE( t2~f, '--' ) AS f2,
           COALESCE( t2~g, '--' ) AS g2,
           COALESCE( t2~h, '--' ) AS h2
       FROM demo\_join1 AS t1
         LEFT OUTER JOIN demo\_join2 AS t2 ON t2~d = t1~d
       ORDER BY t1~d
       INTO CORRESPONDING FIELDS OF TABLE @itab.
    out->display( itab ).  ENDMETHOD.
  METHOD class\_constructor.
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
START-OF-SELECTION.
  demo=>main( ).

Description

This executable example is an excerpt from the [joins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjoins_abexa.htm) example. Here, the function [COALESCE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm) is used to replace null values produced by an outer join with a different value.