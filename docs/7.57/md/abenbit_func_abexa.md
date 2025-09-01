---
title: "Source Code"
description: |
  REPORT demo_bit_set. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(number) = 1. cl_demo_input=>request( CHANGING field = number ). IF abs( number ) <= 200. cl_demo_output=>display( CONV xstring( bit-set( number ) ) ). ELSE. cl
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_func_abexa.htm"
abapFile: "abenbit_func_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenbit", "func", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbinary_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: bit_func - Setting Bits, ABENBIT_FUNC_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

bit\_func - Setting Bits

This example demonstrates how bit-set works.

Source Code   

REPORT demo\_bit\_set.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(number) = 1.
    cl\_demo\_input=>request( CHANGING field = number ).
    IF abs( number ) <= 200.
      cl\_demo\_output=>display( CONV xstring( bit-set( number ) ) ).
    ELSE.
      cl\_demo\_output=>display(
       'Number in Example must not exceed 200' ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The output of the program shows how bits are set in a specified place in hexadecimal form.