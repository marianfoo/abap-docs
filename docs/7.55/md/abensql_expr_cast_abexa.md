---
title: "Source Code"
description: |
  REPORT demo_sql_expr_cast. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DELETE FROM demo_expressions. INSERT demo_expressions FROM @( VALUE #( id   = 'X' num1 = 111 numlong1 = '123456789' dec3 = '123.456' dats2 = sy-datum ) ). SELE
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expr_cast_abexa.htm"
abapFile: "abensql_expr_cast_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "abensql", "expr", "cast", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_cast](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) → 

sql\_exp - Cast Expression

This example demonstrates [cast expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) in ABAP SQL.

Source Code

REPORT demo\_sql\_expr\_cast.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM @( VALUE #(
             id   = 'X'
             num1 = 111
             numlong1 = '123456789'
             dec3 = '123.456'
             dats2 = sy-datum ) ).
    SELECT SINGLE
           FROM demo\_expressions
           FIELDS CAST( num1     AS CHAR( 20 ) ) AS col1,
                  CAST( numlong1 AS CHAR( 20 ) ) AS col2,
                  CAST( dec3     AS CHAR( 20 ) ) AS col3,
                  CAST( dats2    AS CHAR( 20 ) ) AS col4
           WHERE id = 'X'
           INTO @DATA(result).
    DATA(text)  = \`\`.
    DO.
      ASSIGN COMPONENT sy-index
             OF STRUCTURE result
             TO FIELD-SYMBOL(<col>).
      IF sy-subrc = 0.
        text = text && <col> && \`, \`.
      ELSE.
        EXIT.
      ENDIF.
    ENDDO.
    CONDENSE text.
    SHIFT text RIGHT DELETING TRAILING \`,\`.
    cl\_demo\_output=>display( text ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Transforms numeric columns and a date field from a DDIC database table to columns of the type CHAR, which makes it possible to process them as character strings in the ABAP program.