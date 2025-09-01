  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Parameter Interface of Procedures](javascript:call_link\('abenformal_parameters_oview.htm'\)) → 

Parameter Passing

This example demonstrates the difference between passing a parameter to a procedure by value or by reference.

Source Code

REPORT demo\_procedure\_param.
CLASS demo\_fibb DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF line,
               x TYPE i,
               y TYPE i,
               range TYPE i,
           END OF line.
    CLASS-DATA: param TYPE STANDARD TABLE OF line,
                res TYPE i.
    CLASS-METHODS: main,
                   fill\_table  CHANGING  g\_param LIKE param,
                   solve\_table IMPORTING g\_param LIKE param,
                   fibb IMPORTING VALUE(l\_line) TYPE line
                        EXPORTING VALUE(r) TYPE i.
ENDCLASS.
CLASS demo\_fibb IMPLEMENTATION.
  METHOD main.
    fill\_table(  CHANGING  g\_param = param ).
    solve\_table( EXPORTING g\_param = param ).
  ENDMETHOD.
  METHOD fill\_table.
    g\_param = VALUE #( FOR j = 1 UNTIL j > 3
                       ( x = j
                         y = j \*\* 2
                         range = 12 / j ) ).
  ENDMETHOD.
  METHOD solve\_table.
    DATA l\_line LIKE LINE OF g\_param.
    LOOP AT g\_param INTO l\_line.
      fibb( EXPORTING l\_line = l\_line IMPORTING r = res ).
      cl\_demo\_output=>write(
      |Fibb( { l\_line-x }, { l\_line-y }, { l\_line-range }) = { res }| ).
    ENDLOOP.
    cl\_demo\_output=>display( ).
  ENDMETHOD.
  METHOD fibb.
    IF l\_line-range = 1.
      IF l\_line-x < l\_line-y.
        r = l\_line-x.
      ELSE.
        r = l\_line-y.
      ENDIF.
    ELSEIF l\_line-range = 2.
      IF l\_line-x < l\_line-y.
        r = l\_line-y.
      ELSE.
        r = l\_line-x.
      ENDIF.
    ELSE.
      l\_line-range -= 2.
      DO l\_line-range TIMES.
        IF l\_line-x < l\_line-y.
          l\_line-x += l\_line-y.
          r = l\_line-x.
        ELSE.
          l\_line-y += l\_line-x.
          r = l\_line-y.
        ENDIF.
      ENDDO.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_fibb=>main( ).

Description

The method fibb calculates the sequence term with the number range in a Fibonacci sequence with the start values x and y. In this case, the next sequence term is always the sum of two previous sequence terms (that is, two start values). The method inherits two parameters, a structured parameter l\_line with which input values are passed, and a parameter r of type i used to provide the result. Since the parameter l\_line is defined as an IMPORTING parameter but still has to be changed in the method, the keyword VALUE must be set before the parameter when the method is defined. Otherwise, a syntax error occurs. This ensures that a local copy of the parameter is used within the method. The addition VALUE to the output parameter r assigns the result to the static class attribute res only after the method has been processed completely. Otherwise res would be changed for each step of the algorithm.

The internal table param contains the input values for calculating three different sequence terms of the Fibonacci sequence. The method fill\_table is used to provide param with values and the method solve\_table is used to calculate and output fibb for each line of param.