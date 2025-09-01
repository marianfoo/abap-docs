---
title: "Tabstrip Controls on Selection Screens"
description: |
  The example demonstrates how tabstrips can be included in selection screens. Source Code REPORT demo_sel_screen_with_tabstrip. DATA flag(1) TYPE c.  SUBSCREEN 1 SELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN. SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME. PARAMETERS: p1(10) TYPE c, p2(10) T
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_with_tabstrip_abexa.htm"
abapFile: "abensel_screen_with_tabstrip_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "data", "abensel", "screen", "with", "tabstrip", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN - screen\_elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_layout.htm) →  [SELECTION-SCREEN - TABBED BLOCK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_tabbed.htm) → 

Tabstrip Controls on Selection Screens

The example demonstrates how tabstrips can be included in selection screens.

Source Code

REPORT demo\_sel\_screen\_with\_tabstrip.
DATA flag(1) TYPE c.
\* SUBSCREEN 1
SELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME.
PARAMETERS: p1(10) TYPE c,
            p2(10) TYPE c,
            p3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN END OF SCREEN 100.
\* SUBSCREEN 2
SELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME.
PARAMETERS: q1(10) TYPE c OBLIGATORY,
            q2(10) TYPE c OBLIGATORY,
            q3(10) TYPE c OBLIGATORY.
SELECTION-SCREEN END OF BLOCK b2.
SELECTION-SCREEN END OF SCREEN 200.
\* STANDARD SELECTION SCREEN
SELECTION-SCREEN: BEGIN OF TABBED BLOCK mytab FOR 10 LINES,
                  TAB (20) button1 USER-COMMAND push1,
                  TAB (20) button2 USER-COMMAND push2,
                  TAB (20) button3 USER-COMMAND push3
                                   DEFAULT SCREEN 300,
                  END OF BLOCK mytab.
INITIALIZATION.
  button1 = text-010.
  button2 = text-020.
  button3 = text-030.
  mytab-prog = sy-repid.
  mytab-dynnr = 100.
  mytab-activetab = 'BUTTON1'.
AT SELECTION-SCREEN.
  CASE sy-dynnr.
    WHEN 1000.
      CASE sy-ucomm.
        WHEN 'PUSH1'.
          mytab-dynnr = 100.
          mytab-activetab = 'BUTTON1'.
        WHEN 'PUSH2'.
          mytab-dynnr = 200.
          mytab-activetab = 'BUTTON2'.
      ENDCASE.
    WHEN 100.
      MESSAGE s888(sabapdemos) WITH text-040 sy-dynnr.
    WHEN 200.
      MESSAGE s888(sabapdemos) WITH text-040 sy-dynnr.
  ENDCASE.
MODULE init\_0100 OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      CASE flag.
        WHEN 'X'.
          screen\_wa-input = '1'.
        WHEN ' '.
          screen\_wa-input = '0'.
      ENDCASE.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  MESSAGE s888(sabapdemos) WITH text-050 sy-dynnr.
  CASE sy-ucomm.
    WHEN 'TOGGLE'.
      IF flag = ' '.
        flag = 'X'.
      ELSEIF flag = 'X'.
        flag = ' '.
      ENDIF.
  ENDCASE.
ENDMODULE.
START-OF-SELECTION.
  WRITE: / 'P1:', p1,'Q1:', q1,
         / 'P2:', p2,'Q2:', q2,
         / 'P3:', p3,'Q3:', q3.

Description

This program defines two selection screens, 100 and 200, as subscreens, and places a tabstrip control area with three tab pages on the standard selection screen. A subscreen dynpro 300 (from the same program) is assigned statically to the third tab page.

The input/output fields of dynpro 300, p1 to q3, are created by adopting the parameters from the ABAP program and are associated with the modification group "MOD". The pushbutton has the function code TOGGLE. The screen flow logic for dynpro 300 is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_0100.
PROCESS AFTER INPUT.
  MODULE user\_command\_0100.

Both dialog modules are defined in the ABAP program.

When you run the program, the standard selection screen appears. At the event INITIALIZATION, the tab title texts are determined, the subscreen selection screen 100 is assigned initially to the tabstrip area, and the first tab title is enabled.

User actions on the selection screen are processed in the AT SELECTION-SCREEN event block. In particular, it is here that the subscreens are assigned and tab titles activated when the user chooses one of the first two tab titles. This is not necessary for the third tab title, since the static assignment of dynpro 300 is automatically placed in the structure mytab when the title is selected.

Before the subscreen dynpro is displayed, the system executes the PBO module init\_0100, and any user action on the subscreen dynpro triggers the execution of the PAI module. This includes when the user chooses a tab title. After that, the AT SELECTION-SCREEN event is triggered.

Messages in the status line show where an action has been processed.