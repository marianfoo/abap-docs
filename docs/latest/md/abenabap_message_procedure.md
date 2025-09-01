---
title: "Messages - Procedures"
description: |
  In procedures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm 'Glossary Entry'), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when: -   the addition RAISING(https://help.sap.c
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_message_procedure.htm"
abapFile: "abenabap_message_procedure.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "procedure"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20Procedures%2C%20ABENABAP_MESSAGE_PROCEDURE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Messages - Procedures

In [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when:

-   the addition [RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) is used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm)
-   a message is handled when a function module is called using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm)
-   a function module is called using the [RFC interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_message_rfc.htm)

Hint

If a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the respective actual parameters.