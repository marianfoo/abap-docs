  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

Messages in Release 7.52

[1\. Implicit message specification in RAISE EXCEPTION MESSAGE](#!ABAP_MODIFICATION_1@1@)

Modification 1

Implicit Message Specification in RAISE EXCEPTION MESSAGE

A new short form [USING MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of statement [RAISE\_EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) with the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) makes it possible to pass the content of system fields sy-msg... implicitly to the exceptions of exception classes that include the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).