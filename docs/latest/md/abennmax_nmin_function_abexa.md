  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20num_func%20-%20Extremum%20Functions%20nmax%2C%20nmin%2C%20ABENNMAX_NMIN_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

num\_func - Extremum Functions nmax, nmin

This example demonstrates the extremum functions [nmax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm) and [nmin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_nmax\_nmin DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_nmax\_nmin IMPLEMENTATION.
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
      out->write(
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
    out->write( |{ txt } value of parabola is: { y0 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This class determines the minimum or maximum value of a parabola opened up or down and whose parameters can be entered on the selection screen.