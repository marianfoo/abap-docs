  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_call_obsolete.htm) →  [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm) → 

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

Calls a dialog module DEMO\_DIALOG\_MODULE associated with the program SAPMDEMO\_TRANSACTION.