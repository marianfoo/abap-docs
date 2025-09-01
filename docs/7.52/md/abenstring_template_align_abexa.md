---
title: "Character String Templates, Alignments, and Padding"
description: |
  This example demonstrates how to specify an alignment and how to pad embedded expressions. Source Code REPORT demo_string_template_align_pad. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA pad TYPE c LENGTH 1. cl_demo_input=>re
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_align_abexa.htm"
abapFile: "abenstring_template_align_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenstring", "template", "align", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) →  [Examples of string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_abexas.htm) → 

Character String Templates, Alignments, and Padding

This example demonstrates how to specify an alignment and how to pad embedded expressions.

Source Code

REPORT demo\_string\_template\_align\_pad.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA pad TYPE c LENGTH 1.
    cl\_demo\_input=>request( CHANGING field = pad ).
    cl\_demo\_output=>new(
      )->write( |{ 'Left'   WIDTH = 20 ALIGN = LEFT   PAD = pad }<---|
      )->write( |{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad }<---|
      )->write( |{ 'Right'  WIDTH = 20 ALIGN = RIGHT  PAD = pad }<---|
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The alignment of three character string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.