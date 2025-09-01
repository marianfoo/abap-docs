  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

string\_tmpl - Alignments and Padding

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

The alignment of three string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.