---
title: "Source Code"
description: |
  REPORT demo_string_template_sign. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA:  num1    TYPE i VALUE -10, num2    TYPE i VALUE +10, results TYPE TABLE OF string, formats TYPE abap_attrdescr_tab, format  LIKE LINE OF formats.
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_sign_abexa.htm"
abapFile: "abenstring_template_sign_abexa.htm"
keywords: ["select", "delete", "loop", "do", "if", "case", "method", "class", "data", "abenstring", "template", "sign", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_templates_abexas.htm) → 

string\_tmpl - Sign

The example demonstrates how the plus/minus sign format is specified for embedded expressions.

Source Code

REPORT demo\_string\_template\_sign.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  num1    TYPE i VALUE -10,
           num2    TYPE i VALUE +10,
           results TYPE TABLE OF string,
           formats TYPE abap\_attrdescr\_tab,
           format  LIKE LINE OF formats.
    FIELD-SYMBOLS <sign> LIKE cl\_abap\_format=>s\_left.
    formats =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
             )->attributes.
    DELETE formats WHERE name NP 'S\_\*' OR is\_constant <> 'X'.
    LOOP AT formats INTO format.
      ASSIGN cl\_abap\_format=>(format-name) TO <sign>.
      APPEND |{ format-name WIDTH = 16 }  | &
             |"{ num1 SIGN = (<sign>) }"  | &
             |"{ num2 SIGN = (<sign>) }"  | TO results.
    ENDLOOP.
    cl\_demo\_output=>display( results ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The six possible settings for the case of a string template are specified dynamically.