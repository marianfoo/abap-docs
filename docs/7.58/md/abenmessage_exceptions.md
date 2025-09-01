  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Classes%20for%20Messages%2C%20ABENMESSAGE_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Classes for Messages

The [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts.htm) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely [messages as exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm) and internal exception texts from [OTR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts_t100.htm).

Another frequent use case is passing a message from the table T100 to the exception object when an exception is raised. This is the case, for example, when a non-class-based exception raised using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_raising.htm) is handled or a message of a function module is caught using [error\_message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_parameter.htm) and then passed as a class-based exception.

The predefined exception texts that are selected using the input parameter TEXTID of the instance constructor are not suitable for this purpose. Instead, the following are available:

-   The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm).
-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm).

Exception objects of exception classes that include the system interface IF\_T100\_DYN\_MSG can be linked with any message from the table T100 using the addition MESSAGE. Exception objects of exception classes that include only the system interface IF\_T100\_MESSAGE can also be linked with messages using the addition MESSAGE with restrictions. The latter option is intended only for exception classes that previously had no specific exception texts for generic use before IF\_T100\_DYN\_MSG was introduced. In other cases, the concept of exception texts and the linking of any messages are strictly separated with special exception classes provided specifically for this purpose. In particular, the addition MESSAGE cannot be combined with the input parameter TEXTID.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_message_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_message_global_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_error_message_abexa.htm)
-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_interface_reuse_abexa.htm)