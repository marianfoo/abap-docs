# ABAP - Keyword Documentation / ABAP - Programming Language / Calling and Exiting Program Units / Calling Programs / Calling Transactions / CALL TRANSACTION / Transaction Call, Examples

Included pages: 5


### abentransactions_abexas.htm

---
title: "Transaction Call, Examples"
description: |
  -   Transaction Call, SPA/GPA Parameters(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_abexa.htm) -   Transaction Call, BDC Table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_bdc_abexa.htm) -   Transaction Call, Repo
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactions_abexas.htm"
abapFile: "abentransactions_abexas.htm"
keywords: ["do", "if", "abentransactions", "abexas"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20Examples%2C%20ABENTRANSACTIONS_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Transaction Call, Examples

-   [Transaction Call, SPA/GPA Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_abexa.htm)
-   [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_bdc_abexa.htm)
-   [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_repo_abexa.htm)
-   [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_dialog_abexa.htm)

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPA Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_bdc_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_repo_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_dialog_abexa.htm)


### abencall_transaction_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_call_transaction_spa_gpa. PARAMETERS: carrid TYPE spfli-carrid, connid TYPE spfli-connid. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. SET PARAMETER ID: 'CAR' FIELD carrid, 'CON' FIELD connid. TRY. CALL TRANSACTION 'DEMO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_abexa.htm"
abapFile: "abencall_transaction_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "abencall", "transaction", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) →  [Transaction Call, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20SPA%2FGPA%20Parameters%2C%20ABENCALL_TRANSACTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Transaction Call, SPA/GPA Parameters

The example demonstrates a transaction call using SPA/GPA parameters.

Source Code   

REPORT demo\_call\_transaction\_spa\_gpa.
PARAMETERS: carrid TYPE spfli-carrid,
            connid TYPE spfli-connid.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SET PARAMETER ID: 'CAR' FIELD carrid,
                      'CON' FIELD connid.
    TRY.
        CALL TRANSACTION 'DEMO\_TRANSACTION' WITH AUTHORITY-CHECK.
      CATCH cx\_sy\_authorization\_error.
        RETURN.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The transaction DEMO\_TRANSACTION displays the details for a flight uniquely identified by the airline and the flight number. It is called from main using the statement CALL TRANSACTION and filled with [SPA/GPA parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") as initial values using the statement SET PARAMETER.


### abencall_transaction_bdc_abexa.htm

---
title: "Transaction Call, BDC Table"
description: |
  This example demonstrates a transaction call using a batch input table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_table_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_call_transaction_bdc DEFINITION INHERITING FROM cl_de
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_bdc_abexa.htm"
abapFile: "abencall_transaction_bdc_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencall", "transaction", "bdc", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) →  [Transaction Call, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20BDC%20Table%2C%20ABENCALL_TRANSACTION_BDC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Transaction Call, BDC Table

This example demonstrates a transaction call using a [batch input table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_table_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_call\_transaction\_bdc DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_call\_transaction\_bdc IMPLEMENTATION.
  METHOD main.
    DATA class\_name TYPE c LENGTH 30 VALUE 'CL\_ABAP\_BROWSER'.
    DATA bdcdata\_tab TYPE TABLE OF bdcdata WITH EMPTY KEY.
    bdcdata\_tab = VALUE #(
      ( program  = 'SAPLSEOD' dynpro   = '1000' dynbegin = 'X' )
      ( fnam = 'BDC\_CURSOR'       fval = 'SEOCLASS-CLSNAME' )
      ( fnam = 'SEOCLASS-CLSNAME' fval = class\_name )
      ( fnam = 'BDC\_OKCODE'       fval = '=WB\_DISPLAY' ) ).
    FINAL(opt) = VALUE ctu\_params( dismode = 'E'
                                  defsize = 'X' ).
    TRY.
        CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                                USING bdcdata\_tab OPTIONS FROM opt.
      CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Call of the Class Builder (transaction SE24) and display of the class CL\_ABAP\_BROWSER. The required authorization is checked by using the addition WITH AUTHORITY-CHECK. The internal table bdcdata\_tab contains the entry for the processing of the first dynpro (1000) of the transaction. The structure opt is used to configure processing to skip the first screen and display the subsequent screen in standard size.


### abencall_transaction_repo_abexa.htm

---
title: "Transaction Call, Report Transaction"
description: |
  The example demonstrates a selection screen call using a report transaction. Source Code REPORT demo_call_selection_screen. SELECTION-SCREEN BEGIN OF SCREEN 100. SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1. PARAMETERS: cityfr TYPE spfli-cityfrom, cityto TYPE spfli-cityto. SELECTION
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_repo_abexa.htm"
abapFile: "abencall_transaction_repo_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "abencall", "transaction", "repo", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) →  [Transaction Call, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20Report%20Transaction%2C%20ABENCALL_TRANSACTION_REPO_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Transaction Call, Report Transaction

The example demonstrates a selection screen call using a report transaction.

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

When the assigned transaction DEMO\_REPORT\_TRANSACT is called, the executable program starts with the selection screen 500 in the same GUI window. Further processing is described in the executable example [Selection Screens, Calling Standalone Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensel_screen_call_sel_scr_abexa.htm).


### abencall_transaction_dialog_abexa.htm

---
title: "Transaction Call, Dialog Transaction"
description: |
  This example demonstrates a dialog transaction where the first dynpro is a selection screen. Source Code &--------------------------------------------------------------------- & Modulpool  SAPMSSLS                                                  &------------------------------------------
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_transaction_dialog_abexa.htm"
abapFile: "abencall_transaction_dialog_abexa.htm"
keywords: ["select", "do", "if", "abencall", "transaction", "dialog", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) →  [Transaction Call, Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Transaction%20Call%2C%20Dialog%20Transaction%2C%20ABENCALL_TRANSACTION_DIALOG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

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
