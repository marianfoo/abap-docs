---
title: "Source Code"
description: |
  REPORT demo_round. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-DATA: BEGIN OF mode, value LIKE cl_abap_math=>round_half_up, name  TYPE abap_attrdescr-name, END OF mode, modes LIKE SORTED TABLE OF mode WITH UNIQUE KEY name. CLASS-METHODS get_modes. TYPES:
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenround_function_abexa.htm"
abapFile: "abenround_function_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "method", "class", "data", "types", "abenround", "function", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions_abexas.htm) → 

num\_func - Rounding Function round

This example demonstrates the rounding function [round](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm).

Source Code

REPORT demo\_round.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF mode,
                  value LIKE cl\_abap\_math=>round\_half\_up,
                  name  TYPE abap\_attrdescr-name,
                END OF mode,
                modes LIKE SORTED TABLE OF mode
                      WITH UNIQUE KEY name.
    CLASS-METHODS get\_modes.
    TYPES:
      BEGIN OF line,
        number          TYPE decfloat34,
        ceiling   TYPE decfloat34,
        down      TYPE decfloat34,
        floor     TYPE decfloat34,
        half\_down TYPE decfloat34,
        half\_even TYPE decfloat34,
        half\_up   TYPE decfloat34,
        up        TYPE decfloat34,
      END OF line.
    CLASS-DATA output TYPE TABLE OF line.
    CLASS-METHODS write\_output IMPORTING VALUE(idx) TYPE i
                                         VALUE(col) TYPE i
                                         text       TYPE clike.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA number TYPE decfloat34.
    cl\_demo\_output=>begin\_section( \`Rounding Function\` ).
    get\_modes( ).
    DO 21 TIMES.
      number = - ( sy-index - 11 ) / 10.
      write\_output(
        idx = sy-index
        col = '1'
        text = |{ number }| ).
      LOOP AT modes INTO mode.
        write\_output(
          idx = sy-index
          col = sy-tabix + 1
          text = |{ round( val  = number
                           dec  = 0
                           mode = mode-value ) }| ).
      ENDLOOP.
    ENDDO.
    cl\_demo\_output=>display( output ).  ENDMETHOD.
  METHOD get\_modes.
    DATA: modes   TYPE abap\_attrdescr\_tab,
          mode    LIKE LINE OF modes.
    FIELD-SYMBOLS <mode> LIKE cl\_abap\_math=>round\_half\_up.
    modes =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_MATH' )
             )->attributes.
    DELETE modes WHERE name NP 'ROUND\_\*' OR is\_constant <> 'X'.
    LOOP AT modes INTO mode.
      ASSIGN cl\_abap\_math=>(mode-name) TO <mode>.
      demo=>mode-value = <mode>.
      demo=>mode-name = mode-name.
      INSERT demo=>mode INTO TABLE demo=>modes.
    ENDLOOP.
  ENDMETHOD.
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

For fraction numbers between 1 and -1, the program depicts the effect of all rounding types from the class CL\_ABAP\_MATH in the rounding function [round](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm). The program reads the possible rounding methods using RTTI and sorts them by name.