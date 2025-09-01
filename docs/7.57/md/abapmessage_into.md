  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [MESSAGE](javascript:call_link\('abapmessage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MESSAGE, INTO, ABAPMESSAGE_INTO, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

MESSAGE, INTO

[Short Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

MESSAGE [msg](javascript:call_link\('abapmessage_msg.htm'\)) [*\[*WITH dobj1 ... dobj4*\]*](javascript:call_link\('abapmessage.htm'\))
        INTO text.

Effect

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) with the addition INTO assigns the short text of the message to the target field text. The [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") is irrelevant. The program flow is not interrupted and no [message processing](javascript:call_link\('abenabap_messages_types.htm'\)) takes place. The following can be specified for text:

-   An existing character-like variable.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), where a variable of type string is declared.

The addition INTO cannot be specified when a text [text](javascript:call_link\('abapmessage_text.htm'\)) is specified or when an object reference variable is specified in [msg](javascript:call_link\('abapmessage_text.htm'\)).

Example

The short text of a message sent in a function module is assigned to the data object mtext declared inline when handling the exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) using the corresponding system fields.

CALL FUNCTION... EXCEPTIONS error\_message = 4.
IF sy-subrc = 4.
  MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
          INTO DATA(mtext)
          WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
ENDIF.