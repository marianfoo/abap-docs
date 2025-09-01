---
title: "Transaction Call, BDC Table"
description: |
  This example shows how a transaction is called using a batch input table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm 'Glossary Entry'). Source Code REPORT demo_call_transaction_bdc. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLA
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm"
abapFile: "abencall_transaction_bdc_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "internal-table", "abencall", "transaction", "bdc", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [Transaction Call - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm) → 

Transaction Call, BDC Table

This example shows how a transaction is called using a [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_call\_transaction\_bdc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'.
    DATA bdcdata\_tab TYPE TABLE OF bdcdata.
    DATA opt TYPE ctu\_params.
    bdcdata\_tab = VALUE #(
      ( program  = 'SAPLSEOD' dynpro   = '1000' dynbegin = 'X' )
      ( fnam = 'BDC\_CURSOR'       fval = 'SEOCLASS-CLSNAME' )
      ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name )
      ( fnam = 'BDC\_OKCODE'       fval = '=WB\_DISPLAY' ) ).
    opt-dismode = 'E'.
    opt-defsize = 'X'.
    TRY.
        CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                                USING bdcdata\_tab OPTIONS FROM opt.
      CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Call Class Builder (transaction SE24) and display the class CL\_ABAP\_BROWSER. The required authorization is checked by using the addition WITH AUTHORITY-CHECK. The internal table bdcdata\_tab contains the entry for the processing of the first dynpro (1000) in the transaction. The structure opt is used to configure processing to skip the first screen and display the subsequent screen in standard size.