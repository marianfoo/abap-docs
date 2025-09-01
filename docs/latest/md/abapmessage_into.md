  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MESSAGE%2C%20INTO%2C%20ABAPMESSAGE_INTO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MESSAGE, INTO

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_shortref.htm)

Syntax

MESSAGE [msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm) [*\[*WITH dobj1 ... dobj4*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm)
        INTO text.

Effect

The statement [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm) with the addition INTO assigns the short text of the message to the target field text. The [message type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_type_glosry.htm "Glossary Entry") is irrelevant. The program flow is not interrupted and no [message processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm) takes place. The following can be specified for text:

-   An existing character-like variable.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm), where a variable of type string is declared.

The addition INTO cannot be specified when a text [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm) is specified or when an object reference variable is specified in [msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm).

Example

The short text of a message sent in a function module is assigned to the data object mtext declared inline when handling the exception [error\_message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm) using the corresponding system fields.

CALL FUNCTION 'DEMO\_FUNCTION\_ERROR\_MESSAGE'
  EXCEPTIONS
    error\_message = 4.
IF sy-subrc = 4.
  MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
          INTO FINAL(mtext)
          WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
  cl\_demo\_output=>display( mtext ).
ENDIF.