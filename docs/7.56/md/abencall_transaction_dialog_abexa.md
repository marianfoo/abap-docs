  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [Transaction Call, Examples](javascript:call_link\('abentransactions_abexas.htm'\)) → 

Transaction Call, Dialog Transaction

This example demonstrates a dialog transaction where the first dynpro is a selection screen.

Source Code

\*&---------------------------------------------------------------------\*
\*& Modulpool  SAPMSSLS                                                 \*
\*&---------------------------------------------------------------------\*
PROGRAM  sapmdemo\_selscreen\_dynp.
SET EXTENDED CHECK OFF.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
  SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME.
    PARAMETERS: cityfr LIKE spfli-cityfrom,
                cityto LIKE spfli-cityto.
  SELECTION-SCREEN END OF BLOCK sel1.
  SELECTION-SCREEN BEGIN OF BLOCK sel2 WITH FRAME.
    PARAMETERS: airpfr LIKE spfli-airpfrom,
              airpto LIKE spfli-airpto.
  SELECTION-SCREEN END OF BLOCK sel2.
SELECTION-SCREEN END OF SCREEN 500.
AT SELECTION-SCREEN.
   ...
   LEAVE TO SCREEN 100.

Description

When the associated transaction DEMO\_SELSCREEN\_DYNP is called, the program starts by displaying selection screen 500. The user input on the selection screen can be processed, for example, at the event AT SELECTION-SCREEN or later in the application logic. After the event AT SELECTION-SCREEN is processed (PAI of the selection screen), the program branches to a next dynpro, 100.