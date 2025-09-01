---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_template_sign DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_str_template_sign IMPLEMENTATION. METHOD main. DATA: num1    TYPE i
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_sign_abexa.htm"
abapFile: "abenstring_template_sign_abexa.htm"
keywords: ["delete", "loop", "do", "if", "case", "method", "class", "data", "abenstring", "template", "sign", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Sign%2C%20ABENSTRING_TEMPLATE_SIGN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Sign

The example demonstrates how the plus/minus sign format is specified for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_sign DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_sign IMPLEMENTATION.
  METHOD main.
    DATA: num1    TYPE i VALUE -10,
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
    out->write( results ).
  ENDMETHOD.
ENDCLASS.

Description   

The six possible settings for the case of a string template are specified dynamically.