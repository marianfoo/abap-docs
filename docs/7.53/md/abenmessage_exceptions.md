  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Exception Classes](javascript:call_link\('abenexceptions_classes.htm'\)) → 

Exception Classes for Messages

The [exception texts](javascript:call_link\('abenexception_texts.htm'\)) described in the previous section are assigned to an exception class statically and express a predefined semantic meaning. This applies to both categories of exception texts, namely [messages as exception texts](javascript:call_link\('abenexception_texts_t100.htm'\)) and internal exception texts from [OTR](javascript:call_link\('abenexception_texts_t100.htm'\)).

Another frequent situation is when a message from the table T100 is passed to the exception object when an exception is raised. This is the case, for example, when a non-class-based exception raised using [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) is handled or a message of a function module is caught using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) and then passed as a class-based exception.

The predefined exception texts selected using the input parameter TEXTID of the instance constructor are unsuitable in these cases. Instead, the following are available:

-   The system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

-   The addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and of the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)).

Exception objects of exception classes that include the system interface IF\_T100\_DYN\_MSG can be associated with any message from the table T100 using the addition MESSAGE. Exception objects of exception classes that include only the system interface IF\_T100\_MESSAGE can also be associated with messages using the addition MESSAGE (but with restrictions). The latter option is intended only for exception classes that were designed for generic use with exception texts before IF\_T100\_DYN\_MSG was implemented. In other cases, the concept of exception texts is strictly divided from the association of a messages with special exception classes. More specifically, the addition MESSAGE cannot be combined with the input parameter TEXTID.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](javascript:call_link\('abenraise_message_abexa.htm'\))

-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](javascript:call_link\('abenraise_message_global_abexa.htm'\))

-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](javascript:call_link\('abenraise_error_message_abexa.htm'\))

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))