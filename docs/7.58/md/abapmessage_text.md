  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [MESSAGE](javascript:call_link\('abapmessage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MESSAGE%2C%20text%2C%20ABAPMESSAGE_TEXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MESSAGE, text

[Short Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

... text TYPE mtype ...

Effect

This variant sends a character string in text as a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the [message type](javascript:call_link\('abenabap_messages_types.htm'\)) specified in mtype. text is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") whose value is used as the short text of the message. Only the first 300 characters are used. No long text can be defined for a message of this type.

mtype expects a character-like data object containing the message type in uppercase letters. Invalid message types raise an uncatchable exception.

In this variant, the addition [WITH](javascript:call_link\('abapmessage.htm'\)) and the variant with [INTO](javascript:call_link\('abapmessage_into.htm'\)) are not allowed.

Hints

-   If field symbols or formal parameters of the type any or data are specified for text, these must be character-like when the statement is executed. The variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)), which has identical syntax, cannot be executed using generically typed field symbols or formal parameters.
-   The system fields sy-msgid and sy-msgno are filled in a non-specific way when a character string is specified, which means that this variant should only be used on rare occasions if the content of the system fields is not required for identifying the message. Otherwise, in all cases in which messages are passed using these system fields, for example, from [function modules](javascript:call_link\('abapcall_function_parameter.htm'\)), or logged, language-independent access to the message text would be lost.

Example

Output of an exception text as an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry").

DATA oref TYPE REF TO cx\_sy\_arithmetic\_error.
TRY.
  ...
  CATCH cx\_sy\_arithmetic\_error INTO oref.
    MESSAGE oref->get\_text( ) TYPE 'I'.
ENDTRY.