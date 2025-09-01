  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions](javascript:call_link\('abenstring_functions.htm'\)) →  [Examples of String Functions](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

Character String Functions, cmax, cmin, and segment

This example demonstrates the extremum functions [cmax](javascript:call_link\('abencmax_cmin_functions.htm'\)) and [cmin](javascript:call_link\('abennmax_nmin_functions.htm'\)), plus the segment function [segment](javascript:call_link\('abensegment_functions.htm'\)).

Source Code

REPORT demo\_cmax\_cmin.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:  txt TYPE string,
           max TYPE string,
           min TYPE string,
           msg TYPE string.
    txt = \`one two three four five six seven eight nine ten\`.
    max = \` \`.
    min = \`�\`.
    DO.
      TRY.
          max = cmax( val1 = max
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
          min = cmin( val1 = min
                      val2 = segment( val   = txt
                                      index = sy-index sep = \` \` ) ).
        CATCH cx\_sy\_strg\_par\_val.
          EXIT.
      ENDTRY.
    ENDDO.
    cl\_demo\_output=>display(
      |Maximum is { max } and minimum is { min }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program determines the minimum and the maximum segment of a character string with respect to the current [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry").