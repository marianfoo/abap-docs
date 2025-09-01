  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC Dialog Interactions

In an [RFM](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry") called using RFC, both the variants [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") and [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry") can execute dialog interactions using SAP GUI or call screens. This is not possible with the variants [bgRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry"), [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry"), and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry"). It is technically possible for [pRFC](javascript:call_link\('abenprfc_glosry.htm'\) "Glossary Entry") but not recommended.

Dialog interactions executed by sRFC and aRFC require the RFC client to be executed in the foreground in a dialog work process and that the user defined in the destination has dialog authorization. RFM does not open a GUI window on the RFC server; instead it does the following:

-   sRFC uses the current GUI window of the caller, which means that the current screen is replaced temporarily by the screen of the remotely called function. Entering /ntcode commands in the command field of the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry") closes the remote connection and the calling program continues its processing after the RFC. The behavior on the server side is then no longer defined.

-   aRFC opens a new [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") in the RFC client and displays the remotely executed application in a new GUI window there. Entering /ntcode commands in the command field of the standard toolbar executes the transaction "tcode" in this session.

The screen data is passed back by the RFC interface to the calling system. Statements for classic list output, such as WRITE, which are executed when a function module is called remotely, write to the list buffer of the RFC server. The lists can be displayed using the statement LEAVE TO LIST-PROCESSING during a dynpro sequence displayed in a GUI window of the caller. List output made in programs called from RFM is also displayed in a GUI window of the caller.

In both cases, entering /otcode commands in the command field of the standard toolbar opens another ABAP session on the RFC server and an additional ABAP session for displaying a GUI window on the client side. This happens when the transaction "tcode" is executed.

Notes

-   If RFMs are called externally using dialog interactions, only dialog windows (that is, GUI windows without a standard toolbar) should be displayed, so that no commands can be entered in the command field.

-   Logon windows that appear in a different system when an RFM is called are also dialog interactions.