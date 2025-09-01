  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions (num\_func)](javascript:call_link\('abenmathematical_functions.htm'\)) →  [num\_func - Examples](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: num_func - General Numeric Functions, ABENMATH_FUNC_ABEXA, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

num\_func - General Numeric Functions

This example demonstrates the use of general numeric functions.

Source Code   

REPORT demo\_numerical\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA n TYPE decfloat16.
    DATA m TYPE decfloat16 VALUE '-5.55'.
    FINAL(out) = cl\_demo\_output=>new( ).
    n = abs( m ).
    out->write( |ABS: { n }| ).
    n = sign( m ).
    out->write( |SIGN: { n }| ).
    n = ceil( m ).
    out->write( |CEIL: { n }| ).
    n = floor( m ).
    out->write( |FLOOR: { n }| ).
    n = trunc( m ).
    out->write( |TRUNC: { n }| ).
    n = frac( m ).
    out->write( |FRAC: { n }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The output of the program shows how each of the general numeric functions affects the number -5.55.