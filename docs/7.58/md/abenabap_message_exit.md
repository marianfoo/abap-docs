---
title: "Messages - Conversion Exits"
description: |
  conversion exit(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm 'Glossary Entry') are implemented in conversion routines(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_routine_glosry.htm 'Glossary Entry') (function modules) ...
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_exit.htm"
abapFile: "abenabap_message_exit.htm"
keywords: ["do", "if", "try", "catch", "types", "abenabap", "message", "exit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Conversion%20Exits%2C%20ABENABAP_MESSAGE_EXIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Conversion Exits

[conversion exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry") are implemented in [conversion routines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_routine_glosry.htm "Glossary Entry") (function modules) ...\_INPUT and ...OUTPUT:

-   In an ...\_INPUT function module, all messages apart from those of type E, A, or S raise an uncatchable exception. Messages of types E, A, and S behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_dialog.htm).
-   In an ...\_OUTPUT function module, all messages apart from those of type A raise an uncatchable exception. Messages of type A behave as specified in [dialog processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_message_dialog.htm).