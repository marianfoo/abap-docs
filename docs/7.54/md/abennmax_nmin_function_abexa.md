  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numerical Functions](javascript:call_link\('abenmathematical_functions.htm'\)) →  [Examples of numerical functions](javascript:call_link\('abennumerical_functions_abexas.htm'\)) → 

Extremum Functions nmax, nmin

This example demonstrates the extremum functions [nmax](javascript:call_link\('abennmax_nmin_functions.htm'\)) and [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\)).

Source Code

REPORT demo\_nmax\_nmin.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: a TYPE i VALUE 1,
          b TYPE i VALUE 0,
          c TYPE i VALUE 0.
    cl\_demo\_input=>new(
      )->add\_text( \`Parabola:\`
      )->add\_field( CHANGING field = a
      )->add\_field( CHANGING field = b
      )->add\_field( CHANGING field = c )->request( ).
    IF a = 0.
      cl\_demo\_output=>display(
        'You must enter a non-zero value for a' ).
      RETURN.
    ENDIF.
    CONSTANTS: xmin TYPE i VALUE -100,
               xmax TYPE i VALUE 100,
               n    TYPE i VALUE 20000.
    DATA: x  TYPE decfloat34,
          y  TYPE decfloat34,
          y0 TYPE decfloat34.
    DATA       txt  TYPE string.
    DO n + 1 TIMES.
      x = ( xmax - xmin ) / n \* ( sy-index - 1 ) + xmin.
      y = a \* x \*\* 2 + b \* x + c.
      IF sy-index = 1.
        y0 = y.
      ELSE.
        IF a > 0.
          txt = 'Minimum'.
          y0 = nmin( val1 = y0 val2 = y ).
        ELSE.
          txt = 'Maximum'.
          y0 = nmax( val1 = y0 val2 = y ).
        ENDIF.
      ENDIF.
    ENDDO.
    cl\_demo\_output=>display( |{ txt } value of parabola is: { y0 }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This program determines the minimum or maximum value of a parabola opened up or down and whose parameters can be entered on the selection screen.