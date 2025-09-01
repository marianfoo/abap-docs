  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Calls](javascript:call_link\('abenprogram_call_obsolete.htm'\)) →  [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calling%20a%20Dialog%20Module%2C%20ABENCALL_DIALOG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

Calls the [dialog module](javascript:call_link\('abendialog_module_object_glosry.htm'\) "Glossary Entry") DEMO\_DIALOG\_MODULE that is linked with the program SAPMDEMO\_TRANSACTION.