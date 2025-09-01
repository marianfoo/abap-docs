---
title: "Dynpros, Text Output"
description: |
  This example demonstrates the output of unformatted text. Source Code REPORT  demo_show_text. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: text       TYPE REF TO cl_demo_text, text_table TYPE cl_demo_text=>t_text, text_li
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_output_abexa.htm"
abapFile: "abentext_output_abexa.htm"
keywords: ["select", "delete", "do", "method", "class", "data", "abentext", "output", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Screen and Screen Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_screen.htm) →  [Screen Elements - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_elements_abexas.htm) → 

Dynpros, Text Output

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

Wrappers like this can replace the use of the statement [WRITE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite-.htm) for simple text output.