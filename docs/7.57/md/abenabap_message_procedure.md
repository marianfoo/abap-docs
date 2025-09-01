  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - Behavior](javascript:call_link\('abenabap_messages_types.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - Procedures, ABENABAP_MESSAGE_PROCEDURE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Messages - Procedures

In [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"), message handling complies with the context from which the procedure was called by default. Exceptions to this rule are arise when:

-   the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) is used in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\))
-   a message is handled when a function module is called using the predefined exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\))
-   a function module is called using the [RFC interface](javascript:call_link\('abenabap_message_rfc.htm'\))

Hint

If a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") is exited when a message is sent, the content of the formal parameters for which [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") is defined is not assigned to the respective actual parameters.