---
title: "Exception Classes for Messages"
description: |
  The exception texts(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts.htm) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely messages as
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_exceptions.htm"
abapFile: "abenmessage_exceptions.htm"
keywords: ["select", "do", "if", "case", "class", "exception-handling", "abenmessage", "exceptions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_classes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exception Classes for Messages, ABENMESSAGE_EXCEPTIONS, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exception Classes for Messages

The [exception texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts.htm) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely [messages as exception texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts_t100.htm) and internal exception texts from [OTR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts_t100.htm).

Another frequent use case is passing a message from the table T100 to the exception object when an exception is raised. This is the case, for example, when a non-class-based exception raised using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) is handled or a message of a function module is caught using [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm) and then passed as a class-based exception.

The predefined exception texts that are selected using the input parameter TEXTID of the instance constructor are not suitable for this purpose. Instead, the following are available:

-   The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm).
-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm).

Exception objects of exception classes that include the system interface IF\_T100\_DYN\_MSG can be linked with any message from the table T100 using the addition MESSAGE. Exception objects of exception classes that include only the system interface IF\_T100\_MESSAGE can also be linked with messages using the addition MESSAGE with restrictions. The latter option is intended only for exception classes that previously had no specific exception texts for generic use before IF\_T100\_DYN\_MSG was introduced. In other cases, the concept of exception texts and the linking of any messages are strictly separated with special exception classes provided specifically for this purpose. In particular, the addition MESSAGE cannot be combined with the input parameter TEXTID.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_global_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_abexa.htm)
-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interface_reuse_abexa.htm)