---
title: "MESSAGE - INTO"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_shortref.htm) Syntax MESSAGE msg(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) WITH dobj1 ... dobj4(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapme
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_into.htm"
abapFile: "abapmessage_into.htm"
keywords: ["do", "if", "try", "data", "types", "abapmessage", "into"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) → 

MESSAGE - INTO

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_shortref.htm)

Syntax

MESSAGE [msg](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) [*\[*WITH dobj1 ... dobj4*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm)
        INTO text.

Effect

The statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) with the addition INTO assigns the short text of the message to the target field text. The [message type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_type_glosry.htm "Glossary Entry") does not matter. The program flow is not interrupted and no [message processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages_types.htm) takes place. The following can be specified for text:

-   An existing character-like variable.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type string is declared.
    

The addition INTO cannot be specified when a text [text](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_text.htm) is displayed and not when an object reference variable is specified in [msg](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_text.htm).

Example

The short text of a message sent in a function module is assigned to the data object mtext (declared inline) when handling the exception [error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_parameter.htm) using the relevant system fields.

CALL FUNCTION... EXCEPTIONS error\_message = 4.
IF sy-subrc = 4.
  MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
          INTO DATA(mtext)
          WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
ENDIF.