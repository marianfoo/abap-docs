  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Screens, Text output

The example illustrates the output of unformatted text.

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

The program uses the methods of the class CL\_DEMO\_TEXT, which was designed for this purpose. The class encapsulates the usage of a Textedit Control in a dialog window.

Wrapper like this can replace the usage of the statement [WRITE](javascript:call_link\('abapwrite-.htm'\)) for simple text outputs.