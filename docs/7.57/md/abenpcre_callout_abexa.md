---
title: "Source Code"
description: |
  REPORT demo_pcre_callout. CLASS handle_regex DEFINITION. PUBLIC SECTION. INTERFACES if_abap_matcher_callout. ENDCLASS. CLASS handle_regex IMPLEMENTATION. METHOD if_abap_matcher_callout~callout. cl_demo_output=>write(  callout_num   callout_string  ). ENDMETHOD. ENDCLASS. CLASS de
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_callout_abexa.htm"
abapFile: "abenpcre_callout_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenpcre", "callout", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm) →  [regex - System Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - PCRE Regular Expression with Callouts, ABENPCRE_CALLOUT_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

regex - PCRE Regular Expression with Callouts

The example demonstrates how to call an ABAP method from a PCRE regular expression.

Source Code   

REPORT demo\_pcre\_callout.
CLASS handle\_regex DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_abap\_matcher\_callout.
ENDCLASS.
CLASS handle\_regex IMPLEMENTATION.
  METHOD if\_abap\_matcher\_callout~callout.
    cl\_demo\_output=>write( |{ callout\_num } { callout\_string }| ).
  ENDMETHOD.
ENDCLASS.
CLASS demo\_pcre DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo\_pcre IMPLEMENTATION.
  METHOD main.
    FINAL(regex) = cl\_abap\_regex=>create\_pcre(
      pattern = \`a(?C1)b(?C2)c(?C3)d(?C"D")e(?C"E")\` ).
    FINAL(matcher) = regex->create\_matcher( text = \`abcde\` ).
    FINAL(handler) = NEW handle\_regex( ).
    matcher->set\_callout( handler ).
    matcher->match( ).
    cl\_demo\_output=>display( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_pcre=>main( ).

Description   

An object-oriented representation of a PCRE regular expression is created from class [CL\_ABAP\_REGEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm). The regular expression contains the [special characters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_pcre_syntax_specials.htm) (?C...) for callouts. The first three callouts pass numeric data, the other two pass string data.

A local class handle\_regex implements the interface IF\_ABAP\_MATCHER\_CALLOUT and an instance of that class is set as the callout handler. When the regular expression is matched, the interface method CALLOUT is called for each callout position and can access the passed parameter.