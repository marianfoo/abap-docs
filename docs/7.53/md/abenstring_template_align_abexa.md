  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm) →  [Examples of String Templates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_abexas.htm) → 

String Templates, Alignments, and Padding

This example demonstrates how to specify an alignment and how to pad embedded expressions.

Source Code

REPORT demo\_string\_template\_align\_pad.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA pad TYPE c LENGTH 1.
    cl\_demo\_input=>request( CHANGING field = pad ).
    cl\_demo\_output=>new(
      )->write( |{ 'Left'   WIDTH = 20 ALIGN = LEFT   PAD = pad }<---|
      )->write( |{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad }<---|
      )->write( |{ 'Right'  WIDTH = 20 ALIGN = RIGHT  PAD = pad }<---|
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The alignment of three character string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.