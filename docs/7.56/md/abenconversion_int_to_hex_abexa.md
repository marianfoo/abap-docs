  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_elementary.htm) →  [Numeric Source Fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumeric_source_fields.htm) →  [Source Field Type i, int8, (b, s)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_type_ibs.htm) → 

Conversion of Integer Numbers to Bytes

This example demonstrates the conversion of integers into byte fields and byte strings.

Source Code

REPORT demo\_int\_to\_hex.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF line,
        int1 TYPE c LENGTH 60,
        int2 TYPE c LENGTH 60,
        int4 TYPE c LENGTH 60,
        int8 TYPE c LENGTH 60,
      END OF line.
    CLASS-DATA output TYPE TABLE OF line.
    CLASS-METHODS write\_output IMPORTING VALUE(idx) TYPE i
                                         VALUE(col) TYPE i
                                         text       TYPE clike.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: int1 TYPE int1,
          int2 TYPE int2,
          int4 TYPE int4,
          int8 TYPE int8,
          xstr TYPE xstring,
          xfld TYPE x LENGTH 8.
    cl\_demo\_output=>begin\_section(
      \`Conversion of Integers to Byte Fields and Byte Strings\` ).
    DO 9 TIMES.
      int1 = ipow( base = 2 exp = sy-index - 1 ) - 1 .
      xstr = int1.
      xfld = int1.
      write\_output(
        idx = sy-index
        col = 1
        text = |{ int1 WIDTH = 4 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 15 TIMES.
      int2 = - ipow( base = 2 exp = 16 - sy-index ) + 1 .
      xstr = int2.
      xfld = int2.
      write\_output(
        idx = sy-index
        col = 2
        text = |{ int2 WIDTH = 7 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 16 TIMES.
      int2 = ipow( base = 2 exp = sy-index - 1 ) - 1 .
      xstr = int2.
      xfld = int2.
      write\_output(
        idx = sy-index + 15
        col = 2
        text = |{ int2 WIDTH = 7 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 31 TIMES.
      int4 = - CONV decfloat34(
                 ipow( base = 2 exp = 32 - sy-index ) ) + 1 .
      xstr = int4.
      xfld = int4.
      write\_output(
        idx = sy-index
        col = 3
        text = |{ int4 WIDTH = 12 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 32 TIMES.
      int4 = CONV decfloat34(
               ipow( base = 2 exp = sy-index - 1 )  ) - 1 .
      xstr = int4.
      xfld = int4.
      write\_output(
        idx = sy-index + 31
        col = 3
        text = |{ int4 WIDTH = 12 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 63 TIMES.
      int8 = - CONV decfloat34(
                 ipow( base = 2 exp = 64 - sy-index ) ) + 1 .
      xstr = int8.
      xfld = int8.
      write\_output(
        idx = sy-index
        col = 4
        text = |{ int8 WIDTH = 21 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    DO 64 TIMES.
      int8 = CONV decfloat34(
                ipow( base = 2 exp = sy-index - 1 ) ) - 1 .
      xstr = int8.
      xfld = int8.
      write\_output(
        idx = sy-index + 63
        col = 4
        text = |{ int8 WIDTH = 21 ALIGN = RIGHT } {
                  xfld ALIGN = LEFT } { xstr ALIGN = LEFT }| ).
    ENDDO.
    cl\_demo\_output=>display( output ).  ENDMETHOD.
  METHOD write\_output.
    ASSIGN output\[ idx \] TO FIELD-SYMBOL(<line>).
    IF sy-subrc <> 0.
      DO.
        APPEND INITIAL LINE TO output ASSIGNING <line>.
        IF sy-tabix = idx.
          EXIT.
        ENDIF.
      ENDDO.
    ENDIF.
    ASSIGN COMPONENT col OF STRUCTURE <line> TO FIELD-SYMBOL(<col>).
    <col> = text.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program assigns numbers of the data types b, s, and i and int8, which cover the entire value range, to byte fields with the lengths 1, 2, 4, and 8 as well as to a byte string and displays them.

To calculate the numbers with powers of two, the use of the [calculation type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_type.htm) decfloat34 is sometimes forced, to avoid overflows when assigning the results of the function [ipow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenipow_function_abexa.htm) to interim results of the calculation type i or int8.

This example highlights the different lengths that can result from these assignments to byte strings. It also shows that, in the case of assignments of the type s to x, a field length of 4 bytes instead of only 2 bytes is required for negative numbers.