  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Executable Programs](javascript:call_link\('abenabap_submit_report.htm'\)) →  [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) →  [SUBMIT - selscreen\_options](javascript:call_link\('abapsubmit_interface.htm'\)) → 

Program Calls, Filling the Selection Screen

The example demonstrates how to fill the standard selection screen when a program is called.

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

When the program is executed, a prompt is displayed and, depending on the selection made, the standard selection screen of the called program is filled either using a table of the type RSPARAMS or using multiple WITH additions.

In both calls of demo\_program\_submit\_rep, values producing double-row selection tables selecto are passed. The second row is displayed in the dialog box Multiple Selection for selecto. If the addition VIA SELECTION-SCREEN of the statement SUBMIT is not specified, paramet and selecto in demo\_program\_submit\_rep would be filled in exactly the same way but not displayed.