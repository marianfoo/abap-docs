  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [Obsolete Wait](javascript:call_link\('abenwait_obsolete.htm'\)) → 

WAIT UNTIL - Short Form

[Quick Reference](javascript:call_link\('abapwait_shortref.htm'\))

Obsolete Syntax

WAIT UNTIL [log\_exp](javascript:call_link\('abenlogexp.htm'\)) *\[*UP TO sec SECONDS*\]*.

Effect

This statement works in the same way as

[WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_until.htm'\)) UNTIL logexp *\[*UP TO sec SECONDS*\]*.

Note

The complete form using FOR ASYNCHRONOUS TASKS should always be used. This addition indicates that an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") is expected and distinguishes the statement from [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)) or [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)), which are waiting for messages from [ABAP Messaging Channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") or [ABAP Push Channels](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry").