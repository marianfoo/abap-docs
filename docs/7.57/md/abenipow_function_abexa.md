---
title: "Source Code"
description: |
  REPORT demo_ipow. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA n TYPE i. DATA arg1 TYPE p DECIMALS 1. DATA arg2 TYPE int8. n = 2. arg1 = `1.2`. FINAL(out) = cl_demo_output=>new( )->write(   :  arg1  n  )->write( i
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenipow_function_abexa.htm"
abapFile: "abenipow_function_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abenipow", "function", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: num_func - Integer Power Function ipow, ABENIPOW_FUNCTION_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

num\_func - Integer Power Function ipow

This example demonstrates the integer power function [ipow](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpower_function.htm).

Source Code   

REPORT demo\_ipow.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE i.
    DATA arg1 TYPE p DECIMALS 1.
    DATA arg2 TYPE int8.
    n = 2.
    arg1 = \`1.2\`.
    FINAL(out) = cl\_demo\_output=>new(
      )->write( |\*\*  : { arg1 \*\* n }|
      )->write( |ipow: { ipow( base = arg1 exp = n ) }| ).
    cl\_demo\_output=>line( ).
    n = 62.
    arg2 = 2.
    out->write( |\*\*  : { arg2 \*\* n }|
      )->write( |ipow: { ipow( base = arg2 exp = n ) }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program demonstrates that the integer power function ipow can be used to achieve more precise results than with the [arithmetic operator \*\*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm). In the cases shown here, the operator \*\* produces the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") f. If ipow is used, the calculation type is determined by the arguments arg1 and arg2.