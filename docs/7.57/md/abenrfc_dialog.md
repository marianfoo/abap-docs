  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Dialog Interactions, ABENRFC_DIALOG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

RFC - Dialog Interactions

In an [RFM](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry") called using RFC, both variants [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") and [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry") can execute dialog interactions using the SAP GUI or call dynpros. This is not possible with the variants [bgRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry"), [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry"), and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry"). It is technically possible for [pRFC](javascript:call_link\('abenprfc_glosry.htm'\) "Glossary Entry") but not recommended.

Dialog interactions executed by sRFC and aRFC require the RFC client to be executed in the foreground in a dialog work process and that the user defined in the destination has dialog authorization. RFM does not open a GUI window on the RFC server, but instead:

-   sRFC uses the current GUI window of the caller, which means that the current screen is replaced temporarily by the screen of the remotely called function. Entering /ntcode commands in the command field of the [standard toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry") ends the remote connection and the calling program continues its processing after the RFC. The behavior on the server side is then no longer defined.
-   aRFC opens a new [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") in the RFC client and displays the remotely executed application in a new GUI window there. Entering /ntcode commands in the command field of the standard toolbar executes the transaction tcode in this session.

The screen data is passed back by the RFC interface to the calling system. Statements for classic list output, such as WRITE, which are executed when a function module is called remotely, write to the list buffer of the RFC server. The lists can be displayed using the statement LEAVE TO LIST-PROCESSING during a dynpro sequence displayed in a GUI window of the caller. List output in programs called from RFM is also displayed in a GUI window of the caller.

In both cases, entering /otcode commands in the command field of the standard toolbar opens another ABAP session on the RFC server and an additional ABAP session for displaying a GUI window on the client side, in which the transaction specified by tcode is executed.

Hints

-   If RFMs are called externally using dialog interactions, only dialog box, that is, GUI windows without a standard toolbar, should be displayed, so that no commands can be entered in the command field.
-   Logon windows that appear in a different system when an RFM is called are already dialog interactions.