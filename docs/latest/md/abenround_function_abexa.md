  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmathematical_functions.htm) →  [num\_func - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20num_func%20-%20Rounding%20Function%20round%2C%20ABENROUND_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

num\_func - Rounding Function round

This example demonstrates the rounding function [round](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendec_floating_point_functions.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_round DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: BEGIN OF mode,
            value LIKE cl\_abap\_math=>round\_half\_up,
            name  TYPE abap\_attrdescr-name,
          END OF mode,
          modes LIKE SORTED TABLE OF mode
            WITH UNIQUE KEY name.
    METHODS get\_modes.
    TYPES:
      BEGIN OF line,
        number    TYPE decfloat34,
        ceiling   TYPE decfloat34,
        down      TYPE decfloat34,
        floor     TYPE decfloat34,
        half\_down TYPE decfloat34,
        half\_even TYPE decfloat34,
        half\_up   TYPE decfloat34,
        up        TYPE decfloat34,
      END OF line.
    DATA output TYPE TABLE OF line.
    METHODS write\_output IMPORTING VALUE(idx) TYPE i
                                   VALUE(col) TYPE i
                                   text       TYPE clike.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_round IMPLEMENTATION.
  METHOD main.
    DATA number TYPE decfloat34.
    out->begin\_section( \`Rounding Function\` ).
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
    out->write( output ).
  ENDMETHOD.
  METHOD get\_modes.
    DATA: modes TYPE abap\_attrdescr\_tab,
          mode  LIKE LINE OF modes.
    FIELD-SYMBOLS <mode> LIKE cl\_abap\_math=>round\_half\_up.
    modes =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_MATH' )
             )->attributes.
    DELETE modes WHERE name NP 'ROUND\_\*' OR is\_constant <> 'X'.
    LOOP AT modes INTO mode.
      ASSIGN cl\_abap\_math=>(mode-name) TO <mode>.
      me->mode-value = <mode>.
      me->mode-name = mode-name.
      INSERT me->mode INTO TABLE me->modes.
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
    ASSIGN <line>-(col) TO FIELD-SYMBOL(<col>).
    <col> = text.
  ENDMETHOD.
ENDCLASS.

Description   

For fraction numbers between 1 and -1, the class depicts the effect of all rounding types from the class CL\_ABAP\_MATH in the rounding function [round](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendec_floating_point_functions.htm). The class reads the possible rounding methods using RTTI and sorts them by name.