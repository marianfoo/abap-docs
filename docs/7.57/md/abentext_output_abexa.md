---
title: "Source Code"
description: |
  REPORT  demo_show_text. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: text       TYPE REF TO cl_demo_text, text_table TYPE cl_demo_text=>t_text, text_line  TYPE cl_demo_text=>t_line. text = cl_demo_text=>new( ). text
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_output_abexa.htm"
abapFile: "abentext_output_abexa.htm"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "abentext", "output", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Text Output, ABENTEXT_OUTPUT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

dynpro - Text Output

This example demonstrates the output of unformatted text.

Source Code   

REPORT  demo\_show\_text.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: text       TYPE REF TO cl\_demo\_text,
          text\_table TYPE cl\_demo\_text=>t\_text,
          text\_line  TYPE cl\_demo\_text=>t\_line.
    text = cl\_demo\_text=>new( ).
    text\_line = 'First line of text'.
    text->add\_line( text\_line ).
    text->add\_line( ' ' ).
    DO 10 TIMES.
      CLEAR text\_line.
      text\_line(3) = sy-index.
      text\_line  = |Table line { text\_line }|.
      APPEND text\_line TO text\_table.
    ENDDO.
    text->add\_table( text\_table ).
    text->add\_line( ' ' ).
    text\_line = 'Last line of text'.
    text->add\_line( text\_line ).
    text->display( ).
    text->delete( ).
    text->add\_line( 'New text' ).
    text->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The program uses the methods of the class CL\_DEMO\_TEXT, which was designed for this purpose. The class encapsulates the use of a text edit control in a dialog box.

Wrappers like this can replace the use of the statement [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) for simple text output.