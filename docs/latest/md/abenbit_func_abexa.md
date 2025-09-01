---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_bit_set DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_bit_set IMPLEMENTATION. METHOD main. DATA(number) = 1. cl_demo_input=>new( )-
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_func_abexa.htm"
abapFile: "abenbit_func_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenbit", "func", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinary_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20bit_func%20-%20Setting%20Bits%2C%20ABENBIT_FUNC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

bit\_func - Setting Bits

This example demonstrates how bit-set works.

Source Code   

\* Public class definition
CLASS cl\_demo\_bit\_set DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_bit\_set IMPLEMENTATION.
  METHOD main.
    DATA(number) = 1.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
    IF abs( number ) <= 200.
      out->write( CONV xstring( bit-set( number ) ) ).
    ELSE.
      out->write(
       'Number in Example must not exceed 200' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The output of the class shows how bits are set in a specified place in hexadecimal form.