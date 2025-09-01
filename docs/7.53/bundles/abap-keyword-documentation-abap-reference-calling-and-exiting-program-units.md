# ABAP Keyword Documentation / ABAP − Reference / Calling and Exiting Program Units

Included pages: 4


### abensubmit_selscreen_abexa.htm

---
title: "Program Calls, Filling the Selection Screen"
description: |
  The example demonstrates how to fill the standard selection screen when a program is called. Source Code REPORT demo_program_submit_sel_screen. SELECTION-SCREEN BEGIN OF SCREEN 1100. PARAMETERS: rsparams  RADIOBUTTON GROUP grp1, withexpr  RADIOBUTTON GROUP grp1. SELECTION-SCREEN END OF SCREEN 11
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubmit_selscreen_abexa.htm"
abapFile: "abensubmit_selscreen_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abensubmit", "selscreen", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) →  [SUBMIT - selscreen\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_interface.htm) → 

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


### abensubmit_list_abexa.htm

---
title: "Program Calls, Modifying the Basic List"
description: |
  The example shows how to modify the basic list of a called program. Source Code REPORT demo_program_submit_line. SELECTION-SCREEN BEGIN OF SCREEN 1100. PARAMETERS: name   TYPE sy-repid DEFAULT 'DEMO_PROGRAM_READ_TABLES' OBLIGATORY, width  TYPE i        DEFAULT 80, length TYPE i        DEFAULT
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubmit_list_abexa.htm"
abapFile: "abensubmit_list_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abensubmit", "list", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) →  [SUBMIT - list\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_list_options.htm) → 

Program Calls, Modifying the Basic List

The example shows how to modify the basic list of a called program.

Source Code

REPORT demo\_program\_submit\_line.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
PARAMETERS: name   TYPE sy-repid
                   DEFAULT 'DEMO\_PROGRAM\_READ\_TABLES' OBLIGATORY,
            width  TYPE i        DEFAULT 80,
            length TYPE i        DEFAULT 0.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS security\_check
      IMPORTING name TYPE sy-repid
      RETURNING value(checked\_name) TYPE sy-repid.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA prog\_type TYPE trdir-subc.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    SELECT SINGLE subc
           FROM trdir
           WHERE name = @name
           INTO @prog\_type.
    IF sy-subrc <> 0 OR prog\_type <> '1'.
      MESSAGE 'Program not found or wrong type' TYPE 'I'
                                                DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    name = security\_check( name ).
    IF  name IS INITIAL.
      MESSAGE 'Program execution not allowed' TYPE 'I'
                                              DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    SUBMIT (name) LINE-SIZE width LINE-COUNT length AND RETURN.  ENDMETHOD.
  METHOD security\_check.
    DATA whitelist TYPE HASHED TABLE OF string
                   WITH UNIQUE KEY table\_line.
    AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
      ID 'DEVCLASS' FIELD 'SABAPDEMOS'
      ID 'OBJTYPE'  FIELD 'PROG'
      ID 'OBJNAME'  DUMMY
      ID 'P\_GROUP'  DUMMY
      ID 'ACTVT'    FIELD '16'.
    IF sy-subrc <>  0.
      CLEAR checked\_name.
      RETURN.
    ENDIF.
    SELECT obj\_name
           FROM tadir
           WHERE pgmid = 'R3TR' AND
                object = 'PROG' AND
                devclass = 'SABAPDEMOS'
           INTO TABLE @whitelist.
    TRY.
        checked\_name = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
          val = name
          whitelist = whitelist ).
      CATCH cx\_abap\_not\_in\_whitelist.
        CLEAR checked\_name.
        RETURN.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If the called program does not specify LINE-SIZE or LINE-COUNT itself in the REPORT statement, the values width and length are used for its basic list.


### abentransactions_abexas.htm

---
title: "Transaction Call - Examples"
description: |
  !Example(exa.gif 'Example') Transaction Call, SPA/GPAParameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm) !Example(exa.gif 'Example') Transaction Call, BDC Table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_b
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm"
abapFile: "abentransactions_abexas.htm"
keywords: ["do", "if", "abentransactions", "abexas"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

Transaction Call - Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_repo_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_dialog_abexa.htm)


### abentransactions_abexas.htm

---
title: "Transaction Call - Examples"
description: |
  !Example(exa.gif 'Example') Transaction Call, SPA/GPAParameters(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm) !Example(exa.gif 'Example') Transaction Call, BDC Table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_b
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransactions_abexas.htm"
abapFile: "abentransactions_abexas.htm"
keywords: ["do", "if", "abentransactions", "abexas"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) → 

Transaction Call - Examples

Continue
![Example](exa.gif "Example") [Transaction Call, SPA/GPAParameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Report Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_repo_abexa.htm)
![Example](exa.gif "Example") [Transaction Call, Dialog Transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_dialog_abexa.htm)
