---
title: "Table Comprehensions, Multiple FOR Expressions"
description: |
  This example demonstrates a sequence of FOR expressions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_in_itab.htm) in a table comprehension(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehension_glosry.htm 'Glossary Entry'). Source Code REPORT dem
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_cmprhnsns_for_for_abexa.htm"
abapFile: "abentable_cmprhnsns_for_for_abexa.htm"
keywords: ["select", "loop", "do", "try", "method", "class", "data", "types", "internal-table", "abentable", "cmprhnsns", "for", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm) →  [Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehensions_abexas.htm) → 

Table Comprehensions, Multiple FOR Expressions

This example demonstrates a sequence of [FOR expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_in_itab.htm) in a table [comprehension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_table\_comprh\_nested.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(itab1) = VALUE itab1(
      ( col1 = 1 col2 = VALUE line1-col2( ( col1 = 111 col2 = 112 )
                                          ( col1 = 121 col2 = 122 ) ) )
      ( col1 = 2 col2 = VALUE line1-col2( ( col1 = 211 col2 = 212 )
                                          ( col1 = 221 col2 = 222 ) ) )
      ( col1 = 3 col2 = VALUE line1-col2( ( col1 = 311 col2 = 312 )
                                          ( col1 = 321 col2 = 322 ) ) )
                             ).
    LOOP AT itab1 INTO DATA(line1).
      out->write( name = |ITAB1, Line { sy-tabix }, COL2|
                  data = line1-col2 ).
    ENDLOOP.
    DATA(itab2) = VALUE itab2(
      FOR wa1 IN itab1
      FOR wa2 IN wa1-col2
        ( col1 = wa1-col1
          col2 = wa2-col1
          col3 = wa2-col2 ) ).
    out->write( itab2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The nested internal table is evaluated in a further FOR expression after the FOR expression for itabl. The result is an internal table, itab2, that contains the content of itab1 in a flat row structure. The behavior of the sequence of FOR expressions is the same as in the nested LOOPs.