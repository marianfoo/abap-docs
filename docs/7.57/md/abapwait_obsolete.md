  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [Obsolete Wait](javascript:call_link\('abenwait_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WAIT UNTIL, Short Form, ABAPWAIT_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

WAIT UNTIL, Short Form

[Short Reference](javascript:call_link\('abapwait_shortref.htm'\))

Obsolete Syntax

WAIT UNTIL [log\_exp](javascript:call_link\('abenlogexp.htm'\)) *\[*UP TO sec SECONDS*\]*.

Effect

This statement works in the same way as

[WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)) UNTIL logexp *\[*UP TO sec SECONDS*\]*.

Hint

The complete form using FOR ASYNCHRONOUS TASKS should always be used. This addition expresses that an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") is expected and distinguishes the statement from [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) or [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)), which are waiting for messages from [ABAP Messaging Channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") or [ABAP Push Channels](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry").