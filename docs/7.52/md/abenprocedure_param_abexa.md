  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_procedures.htm) →  [Parameter Interface of Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenformal_parameters_oview.htm) → 

Pass by Parameter

This example demonstrates the difference between passing a parameter in a procedure by value or by reference.

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
      l\_line-range = l\_line-range - 2.
      DO l\_line-range TIMES.
        IF l\_line-x < l\_line-y.
          l\_line-x = l\_line-x + l\_line-y.
          r = l\_line-x.
        ELSE.
          l\_line-y = l\_line-x + l\_line-y.
          r = l\_line-y.
        ENDIF.
      ENDDO.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_fibb=>main( ).

Description

The method fibb calculates the sequence term with the number range in a Fibonacci sequence using the start values x and y. As a rule, the next sequence term is always the sum of two previous sequence terms (which is why there are two start values). The method inherits two parameters, a structured parameter l\_line used to pass the input values, and a parameter r of type i used to provide the result. The parameter l\_line is defined as an IMPORTING parameter but still has to be changed in the method, which means that the method definition must contain the keyword VALUE before the parameter. If not, a syntax error occurs. This ensures that a local copy of the parameter is used within the method. The addition VALUE of the output parameter r assigns the result to the static class attribute res only after the method has been processed completely. Otherwise res would be changed in every single step of the algorithm.

The internal table param contains the input values for calculating three different sequence terms of the Fibonacci sequence. The method fill\_table is used to fill param with values and the method solve\_table is used to calculate and display fibb for each line of param.