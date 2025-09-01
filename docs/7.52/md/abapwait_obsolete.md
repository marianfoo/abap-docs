  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextern_obsolete.htm) →  [Obsolete Wait](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwait_obsolete.htm) → 

WAIT UNTIL - Short Form

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_shortref.htm)

Obsolete Syntax

WAIT UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) *\[*UP TO sec SECONDS*\]*.

Effect

This statement works in the same way as

[WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_until.htm) UNTIL logexp *\[*UP TO sec SECONDS*\]*.

Note

The complete form using FOR ASYNCHRONOUS TASKS should always be used. This addition indicates that an [asynchronous RFC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is expected and distinguishes the statement from [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_amc.htm) or [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_apc.htm), which are waiting for messages from [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") or [ABAP Push Channels](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_push_channels_glosry.htm "Glossary Entry").