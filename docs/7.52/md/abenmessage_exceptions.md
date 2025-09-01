  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_classes.htm) → 

Exception Classes for Messages

The [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely [messages as exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts_t100.htm) and [internal exception texts from OTR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts_t100.htm).

Another frequent situation is when a message from the table T100 is passed to the exception object when an exception is raised. This is the case, for example, when a non-class-based exception raised using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) is handled or a message of a function module is caught using [error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_parameter.htm) and then passed as a class-based exception.

The predefined exception texts selected using the input parameter TEXTID of the instance constructor are unsuitable in these cases. Instead, the following are available:

-   The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm).

-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm).

Exception objects of exception classes that include the system interface IF\_T100\_DYN\_MSG can be associated with any message from the table T100 using the addition MESSAGE. Exception objects of exception classes that include only the system interface IF\_T100\_MESSAGE can also be associated with messages using the addition MESSAGE (but with restrictions). The latter option is intended only for exception classes that were designed for generic use with exception texts before IF\_T100\_DYN\_MSG was implemented. In other cases, the concept of exception texts is strictly divided from the association of messages with special exception classes. More specifically, the addition MESSAGE cannot be combined with the input parameter TEXTID.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)