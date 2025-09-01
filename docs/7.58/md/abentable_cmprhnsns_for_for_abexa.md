---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_table_comprh_nested DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_table_comprh_nested IMPLEMENTATION. METHOD main. TYPES: BEGIN OF
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_cmprhnsns_for_for_abexa.htm"
abapFile: "abentable_cmprhnsns_for_for_abexa.htm"
keywords: ["loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "for", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehensions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Table%20Comprehensions%2C%20Multiple%20FOR%20Expressions%2C%20ABENTABLE_CMPRHNSNS_FOR_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion%20for%20improvement:)

itab - Table Comprehensions, Multiple FOR Expressions

This example demonstrates a sequence of [FOR expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_in_itab.htm) in a table [comprehension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_table\_comprh\_nested DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_table\_comprh\_nested IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
      END OF line,
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE STANDARD TABLE OF line WITH EMPTY KEY,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      BEGIN OF line2,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE i,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY.
    FINAL(itab1) = VALUE itab1(
      ( col1 = 1 col2 = VALUE line1-col2( ( col1 = 111 col2 = 112 )
                                          ( col1 = 121 col2 = 122 ) ) )
      ( col1 = 2 col2 = VALUE line1-col2( ( col1 = 211 col2 = 212 )
                                          ( col1 = 221 col2 = 222 ) ) )
      ( col1 = 3 col2 = VALUE line1-col2( ( col1 = 311 col2 = 312 )
                                          ( col1 = 321 col2 = 322 ) ) )
                             ).
    LOOP AT itab1 INTO FINAL(line1).
      out->write( name = |ITAB1, Line { sy-tabix }, COL2|
                  data = line1-col2 ).
    ENDLOOP.
    FINAL(itab2) = VALUE itab2(
      FOR wa1 IN itab1
      FOR wa2 IN wa1-col2
        ( col1 = wa1-col1
          col2 = wa2-col1
          col3 = wa2-col2 ) ).
    out->write( itab2 ).
  ENDMETHOD.
ENDCLASS.

Description   

The nested internal table is evaluated in a further FOR expression after the FOR expression for itabl. The result is an internal table itab2 that contains the content of itab1 in a flat line structure. The behavior of the sequence of FOR expressions is the same as in the nested LOOP statements.