  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Calling Selection Screens](javascript:call_link\('abenselection_screen_call.htm'\)) →  [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\)) → 

Selection screens, call standalone selection screens

The example demonstrates how to call standalone selection screens.

Source Code

REPORT demo\_call\_selection\_screen.
SELECTION-SCREEN BEGIN OF SCREEN 100.
SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1.
PARAMETERS: cityfr TYPE spfli-cityfrom,
            cityto TYPE spfli-cityto.
SELECTION-SCREEN END OF BLOCK sel1.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECTION-SCREEN INCLUDE BLOCKS sel1.
SELECTION-SCREEN BEGIN OF BLOCK sel2
                          WITH FRAME TITLE tit2.
PARAMETERS: airpfr TYPE spfli-airpfrom,
            airpto TYPE spfli-airpto.
SELECTION-SCREEN END OF BLOCK sel2.
SELECTION-SCREEN END OF SCREEN 500.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    tit1 = 'Cities'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    tit1 = 'Cities for Airports'.
    tit2 = 'Airports'.
    CALL SELECTION-SCREEN 500 STARTING AT 10 10.
    tit1 = 'Cities again'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description

In this executable program, two standalone selection screens, 100 and 500, are defined. Selection screen 500 contains the block sel1 of selection screen 100. Note at which events the titles of the individual screens are defined. First, selection screen 100 is called, then 500, and then again 100.