  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Examples](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20cmax%2C%20cmin%2C%20and%20segment%2C%20ABENCMAX_CMIN_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

string\_func - cmax, cmin, and segment

This example demonstrates the extremum functions [cmax](javascript:call_link\('abencmax_cmin_functions.htm'\)) and [cmin](javascript:call_link\('abennmax_nmin_functions.htm'\)), plus the segment function [segment](javascript:call_link\('abensegment_functions.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_cmax\_cmin DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cmax\_cmin IMPLEMENTATION.
  METHOD main.
    DATA: txt TYPE string,
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
    out->write(
      |Maximum is { max } and minimum is { min }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This class determines the minimum and the maximum segment of a character string with respect to the current [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry").