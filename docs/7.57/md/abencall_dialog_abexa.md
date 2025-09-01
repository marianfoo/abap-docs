---
title: "Calling a Dialog Module"
description: |
  This example demonstrates how a dialog module can be called. Source Code REPORT demo_dialog_module. DATA spfli_wa TYPE spfli. spfli_wa-carrid = 'LH'. spfli_wa-connid = '0400'. START-OF-SELECTION. CALL DIALOG 'DEMO_DIALOG_MODULE' EXPORTING spfli-carrid FROM spfli_wa-carrid spfli-connid FROM s
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_dialog_abexa.htm"
abapFile: "abencall_dialog_abexa.htm"
keywords: ["select", "do", "if", "try", "data", "abencall", "dialog", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_call_obsolete.htm) →  [CALL DIALOG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_dialog.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Calling a Dialog Module, ABENCALL_DIALOG_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Calling a Dialog Module

This example demonstrates how a dialog module can be called.

Source Code   

REPORT demo\_dialog\_module.
DATA spfli\_wa TYPE spfli.
spfli\_wa-carrid = 'LH'.
spfli\_wa-connid = '0400'.
START-OF-SELECTION.
  CALL DIALOG 'DEMO\_DIALOG\_MODULE'
    EXPORTING
      spfli-carrid FROM spfli\_wa-carrid
      spfli-connid FROM spfli\_wa-connid
    IMPORTING
      spfli\_wa     TO spfli\_wa.
      WRITE: / spfli\_wa-carrid,
             / spfli\_wa-connid,
             / spfli\_wa-countryfr,
             / spfli\_wa-cityfrom,
             / spfli\_wa-airpfrom,
             / spfli\_wa-countryto,
             / spfli\_wa-cityto,
             / spfli\_wa-airpto,
             / spfli\_wa-fltime,
             / spfli\_wa-deptime,
             / spfli\_wa-arrtime,
             / spfli\_wa-distance,
             / spfli\_wa-distid,
             / spfli\_wa-fltype,
             / spfli\_wa-period.

Description   

Calls the [dialog module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendialog_module_object_glosry.htm "Glossary Entry") DEMO\_DIALOG\_MODULE that is linked with the program SAPMDEMO\_TRANSACTION.