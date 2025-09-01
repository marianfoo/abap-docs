---
title: "Messages - RFC Processing"
description: |
  If list processing and dialog processing do not take place in RFC processing(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_processing_glosry.htm 'Glossary Entry'), messages behave as follows: -   Messages of types 'I', 'S', and 'W' are ignored. -   Messages of types 'A', 'E',
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_rfc.htm"
abapFile: "abenabap_message_rfc.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenabap", "message", "rfc"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages_types.htm) → 

Messages - RFC Processing

If list processing and dialog processing do not take place in [RFC processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_processing_glosry.htm "Glossary Entry"), messages behave as follows:

-   Messages of types "I", "S", and "W" are ignored.

-   Messages of types "A", "E", and "X" cause processing to terminated, followed by a [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). In the calling program, the classic exception SYSTEM\_FAILURE is raised.

If [dialog processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_dialog.htm) or [list processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_list_processing.htm) takes place during RFC processing, any messages sent behave as described there.

Hint

If a message of type "E" is sent in a remote-enabled function module, note that it depends on the type of call whether a database rollback will occur or not. If the call does not take place using the RFC interface, a database rollback usually does not occur.