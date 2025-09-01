  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages.htm) →  [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm) → 

MESSAGE - text

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_shortref.htm)

Syntax

... text TYPE mtype ...

Effect

This variant sends a character string in text as a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") of the [message type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages_types.htm) specified in mtype. text is a [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") whose value is used as the short text of the message. Only the first 300 characters are used. No long text can be defined for a message of this type.

mtype expects a character-like data object containing the message type in uppercase letters. Invalid message types raise a non-handleable exception.

In this variant, the addition [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm) and the variant with [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_into.htm) are not allowed.

Notes

-   If field symbols or formal parameters of the type any or data are specified for text, these must be character-like when the statement is executed. The variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm), which has identical syntax, cannot be executed using generically typed field symbols or formal parameters.
    
-   The system fields sy-msgid and sy-msgno are filled in a non-specific way when a character string is specified. This means that this variant should only be used on rare occasions if the content of the system fields is not required for identifying the message. Otherwise, in all cases in which messages are passed using these system fields (for example, from [function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_parameter.htm)) or logged, language-independent access to the message text would be lost.
    

Example

Produces an exception text as an [information message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninformation_message_glosry.htm "Glossary Entry").

DATA oref TYPE REF TO cx\_sy\_arithmetic\_error.
TRY.
  ...
  CATCH cx\_sy\_arithmetic\_error INTO oref.
    MESSAGE oref->get\_text( ) TYPE 'I'.
ENDTRY.