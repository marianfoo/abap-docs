---
title: "Source Code"
description: |
  REPORT demo_string_template_align_pad. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA pad TYPE c LENGTH 1. cl_demo_input=>request( CHANGING field = pad ). cl_demo_output=>new( )->write(  'Left'   WIDTH = 20 ALIGN = LEFT   P
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_template_align_abexa.htm"
abapFile: "abenstring_template_align_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenstring", "template", "align", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates_abexas.htm) → 

string\_tmpl - Alignments and Padding

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

The alignment of three string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.