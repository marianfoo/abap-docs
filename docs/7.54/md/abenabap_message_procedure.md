---
title: "Messages in Procedures"
description: |
  In procedures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm 'Glossary Entry'), message handling complies with the context from which the procedure was called. Exceptions to this rule are arise when: -   the addition RAISING(https://help.sap.com/doc/abapdocu_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_procedure.htm"
abapFile: "abenabap_message_procedure.htm"
keywords: ["do", "if", "try", "types", "abenabap", "message", "procedure"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [Behavior of Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) → 

Messages in Procedures

In [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"), message handling complies with the context from which the procedure was called. Exceptions to this rule are arise when:

-   the addition [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) is used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm)

-   a message is handled when a function module is called using the predefined exception [error\_message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_parameter.htm)

-   a function module is called using the [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_message_rfc.htm)

Note

If a [procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry") is defined is not assigned to the associated actual parameters.