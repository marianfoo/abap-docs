---
title: "Source Code"
description: |
  REPORT demo_find_regex. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA regobj TYPE REF TO cl_abap_regex. DATA(regex)    = `b.atb`. DATA(text)     = `Cathy's cat with the hat sat on Matt's mat.`. DATA standard TYPE cl_aba
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_abexa.htm"
abapFile: "abenregex_abexa.htm"
keywords: ["select", "do", "while", "if", "case", "method", "class", "data", "abenregex", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregular_expressions.htm) →  [regex - System Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) → 

regex - Search for a Regular Expression

The example demonstrates how to search for a regular expression.

Source Code

REPORT demo\_find\_regex.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA regobj TYPE REF TO cl\_abap\_regex.
    DATA(regex)    = \`\\b.at\\b\`.
    DATA(text)     = \`Cathy's cat with the hat sat on Matt's mat.\`.
    DATA standard TYPE cl\_abap\_regex=>regex\_standard.
    standard = cl\_abap\_regex=>c\_regex\_standard-pcre.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = text
      )->add\_field( CHANGING field = regex
      )->add\_field( CHANGING field = standard
      )->request( ).
    CASE standard.
      WHEN cl\_abap\_regex=>c\_regex\_standard-pcre.
        regobj = cl\_abap\_regex=>create\_pcre( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-xpath2.
        regobj = cl\_abap\_regex=>create\_xpath2( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-xsd.
        regobj = cl\_abap\_regex=>create\_xsd( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-posix.
        regobj = cl\_abap\_regex=>create\_posix( regex ) ##regex\_posix.
    ENDCASE.
    FIND REGEX regobj IN text.
    IF sy-subrc = 0.
      REPLACE REGEX regobj IN text
              WITH  \`<font color="#FF0000"><b>$0</b></font>\`.
      cl\_demo\_output=>display\_html(
        \`<html><body>\` && text && \`</body></html>\`).
    ELSE.
      cl\_demo\_output=>display( \`Not found\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example allows to enter a text, a regular expression, and the syntax of the regular expression. The program searches the text line text for the first match of the search pattern defined in the regular expression and highlights this section in the result display. The search is case-sensitive. For searching the statement [FIND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfind.htm) is used, while for marking the result, the statement [REPLACE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreplace.htm) is used where the operator $0 serves as a placeholder for the match in the replacement text.

Hint

You can use the demonstration program DEMO\_REGEX to test regular expressions before using them in programs.