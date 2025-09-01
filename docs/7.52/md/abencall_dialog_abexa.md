  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_call_obsolete.htm) →  [CALL DIALOG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_dialog.htm) → 

Call Dialog Module

The example shows how to call a dialog module.

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

Calling a dialog module DEMO\_DIALOG\_MODULE linked with the program SAPMDEMO\_TRANSACTION.