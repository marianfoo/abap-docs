  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm) →  [Transaction Call, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Transaction Call, Dialog Transaction, ABENCALL_TRANSACTION_DIALOG_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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