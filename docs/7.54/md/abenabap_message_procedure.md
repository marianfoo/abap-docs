  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Behavior of Messages](javascript:call_link\('abenabap_messages_types.htm'\)) → 

Messages in Procedures

In [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), message handling complies with the context from which the procedure was called. Exceptions to this rule are arise when:

-   the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) is used in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\))

-   a message is handled when a function module is called using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\))

-   a function module is called using the [RFC interface](javascript:call_link\('abenabap_message_rfc.htm'\))

Note

If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the associated actual parameters.