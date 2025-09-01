  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextern_obsolete.htm) →  [Obsolete Wait](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwait_obsolete.htm) → 

WAIT UNTIL, Short Form

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwait_shortref.htm)

Obsolete Syntax

WAIT UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) *\[*UP TO sec SECONDS*\]*.

Effect

This statement works in the same way as

[WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwait_arfc.htm) UNTIL logexp *\[*UP TO sec SECONDS*\]*.

Hint

The complete form using FOR ASYNCHRONOUS TASKS should always be used. This addition expresses that an [asynchronous RFC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is expected and distinguishes the statement from [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwait_amc.htm) or [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwait_apc.htm), which are waiting for messages from [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") or [ABAP Push Channels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_push_channels_glosry.htm "Glossary Entry").