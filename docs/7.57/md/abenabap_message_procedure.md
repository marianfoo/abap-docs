---
title: "Messages - Procedures"
description: |
  In procedures(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm 'Glossary Entry'), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when: -   the addition RAISING(https://help.sap.com/do
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_procedure.htm"
abapFile: "abenabap_message_procedure.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "procedure"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - Behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Procedures, ABENABAP_MESSAGE_PROCEDURE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Messages - Procedures

In [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry"), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when:

-   the addition [RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) is used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm)
-   a message is handled when a function module is called using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm)
-   a function module is called using the [RFC interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_message_rfc.htm)

Hint

If a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the respective actual parameters.