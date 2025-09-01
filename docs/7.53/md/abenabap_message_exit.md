---
title: "Messages in Conversion Routines"
description: |
  Conversion routines(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm 'Glossary Entry') distinguish between the function modules ..._INPUT and ...OUTPUT: -   In an ..._INPUT function module, all messages apart from those of type 'E', 'A', or 'S' raise a
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_exit.htm"
abapFile: "abenabap_message_exit.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "exit"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages_types.htm) → 

Messages in Conversion Routines

[Conversion routines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry") distinguish between the function modules ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type "E", "A", or "S" raise a non-handleable exception. Messages of types "E", "A", and "S" behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_dialog.htm).

-   In an ...\_OUTPUT function module, all messages apart from those of type "A" raise a non-handleable exception. Messages of type "A" behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_message_dialog.htm).