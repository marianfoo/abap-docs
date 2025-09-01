---
title: "Messages - Conversion Routines"
description: |
  Conversion routines(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm 'Glossary Entry') distinguish between the function modules ..._INPUT and ...OUTPUT: -   In an ..._INPUT function module, all messages apart from those of type 'E', 'A', or 'S' raise a
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_exit.htm"
abapFile: "abenabap_message_exit.htm"
keywords: ["do", "if", "try", "catch", "types", "abenabap", "message", "exit"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages_types.htm) → 

Messages - Conversion Routines

[Conversion routines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry") distinguish between the function modules ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type "E", "A", or "S" raise an uncatchable exception. Messages of types "E", "A", and "S" behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_dialog.htm).

-   In an ...\_OUTPUT function module, all messages apart from those of type "A" raise an uncatchable exception. Messages of type "A" behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_message_dialog.htm).