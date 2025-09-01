  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Expressions (string\_exp)](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates (string\_tmpl)](javascript:call_link\('abenstring_templates.htm'\)) →  [string\_tmpl - Examples](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Alignments%20and%20Padding%2C%20ABENSTRING_TEMPLATE_ALIGN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

string\_tmpl - Alignments and Padding

This example demonstrates how to specify an alignment and how to pad embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_align\_pad DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_align\_pad IMPLEMENTATION.
  METHOD main.
    DATA pad TYPE c LENGTH 1.
    cl\_demo\_input=>new( )->request( CHANGING field = pad ).
    out->write(
          |{ 'Left'   WIDTH = 20 ALIGN = LEFT   PAD = pad }<---|
      )->write(
         |{ 'Center' WIDTH = 20 ALIGN = CENTER PAD = pad }<---|
      )->write(
         |{ 'Right'  WIDTH = 20 ALIGN = RIGHT  PAD = pad }<---| ).
  ENDMETHOD.
ENDCLASS.

Description   

The alignment of three string templates is declared statically. The character used to pad the superfluous places can be entered using an input field.