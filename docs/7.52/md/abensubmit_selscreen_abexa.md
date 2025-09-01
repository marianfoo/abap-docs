---
title: "Program Calls, Filling the Selection Screen"
description: |
  The example shows how to fill the standard selection screen when a program is called. Source Code REPORT demo_program_submit_sel_screen. SELECTION-SCREEN BEGIN OF SCREEN 1100. PARAMETERS: rsparams  RADIOBUTTON GROUP grp1, withexpr  RADIOBUTTON GROUP grp1. SELECTION-SCREEN END OF SCREEN 1100. CLA
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubmit_selscreen_abexa.htm"
abapFile: "abensubmit_selscreen_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abensubmit", "selscreen", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) →  [SUBMIT - selscreen\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_interface.htm) → 

Program Calls, Filling the Selection Screen

The example shows how to fill the standard selection screen when a program is called.

Source Code

REPORT demo\_program\_submit\_sel\_screen.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
PARAMETERS: rsparams  RADIOBUTTON GROUP grp1,
            withexpr  RADIOBUTTON GROUP grp1.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: seltab    TYPE RANGE OF i,
          rspar     TYPE TABLE OF rsparams.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    IF rsparams = 'X'.
      rspar = VALUE #(
       ( selname = 'SELECTO'
         kind = 'S'
         sign = 'E'
         option = 'BT'
         low  = 14
         high = 17 )
       ( selname = 'PARAMET'
         kind = 'P'
         low  = 'RSPARAMS' )
       ( selname = 'SELECTO'
         kind = 'S'
         sign = 'I'
         option = 'GT'
         low  = 10 ) ).
      SUBMIT demo\_program\_submit\_rep
             VIA SELECTION-SCREEN
             WITH SELECTION-TABLE rspar
             AND RETURN.
    ELSEIF withexpr = 'X'.
      seltab = VALUE #(
        ( sign = 'I'
          option = 'BT'
          low  = 1
          high   = 5 ) ).
      SUBMIT demo\_program\_submit\_rep
             VIA SELECTION-SCREEN
             WITH paramet EQ 'WITH EXPR'
             WITH selecto IN seltab
             WITH selecto NE 3
             AND RETURN.
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

When the program is executed, the system displays a prompt and depending on the selection made there fills the standard selection screen of the program called either using a table of the type RSPARAMS or using multiple WITH additions.

In both calls of demo\_program\_submit\_rep, the system passes values leading to two-row selection tables selecto. The second row is displayed in the dialog box Multiple Selection for selecto. Without the addition VIA SELECTION-SCREEN of the statement SUBMIT, the system would equally fill but not display paramet and selecto in demo\_program\_submit\_rep.