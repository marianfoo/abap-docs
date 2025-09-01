---
title: "MESSAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_shortref.htm) Syntax MESSAGE  msg(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm)   text(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapme
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage.htm"
abapFile: "abapmessage.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abapmessage"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MESSAGE%2C%20ABAPMESSAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MESSAGE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_shortref.htm)

Syntax

MESSAGE *{* [msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm)  *|* [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm)  *}*
        *{*  *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* *}*
        *|*  *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* [RAISING exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) *}*
        *|*  *{*                      *\[*WITH dobj1 ... dobj4*\]* [INTO text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_into.htm) *}* *}*.

Additions:

[1\. ... DISPLAY LIKE dtype](#!ABAP_ADDITION_1@1@)
[2\. ... WITH dobj1 ... dobj4](#!ABAP_ADDITION_2@2@)

Effect

The statement MESSAGE sends either the short text of a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") specified in [msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm) from the table [T100](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_storing.htm) in the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current user or any text specified in [text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm). The following variants are available:

-   If one of the additions RAISING or INTO is not specified, the statement MESSAGE interrupts the program flow and sends the message. The exact [behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages_types.htm) of this basic form of the statement MESSAGE, that is, how the message text is displayed and how the program flow is continued after the MESSAGE statement, is context-dependent and is determined by a [message type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_type_glosry.htm "Glossary Entry") specified in msg or text.
-   If the addition [RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) is specified, the statement MESSAGE raises a [non-class-based exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) in function modules or methods. If the exception is not handled, the message is sent in the same way as when the addition RAISING is not specified.
-   If the addition [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_into.htm) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.

System Fields

Name

Meaning

sy-msgid

Contains the message class after a message is sent, and the value 00 after any text is sent.

sy-msgno

Contains the message number after a message is sent, and the value 001 after any text is sent.

sy-msgty

Contains the identifier of the message type with which the message or the text was sent.

sy-msgv1 to sy-msgv4

Contain the content of the data objects specified after the addition WITH in the order of the objects after a message is sent, and the first 200 characters of the data object text after any text is sent.

The DDIC structure SYMSG contains components MSGTY, MSGID, MSGNO, MSGV1, MSGV2, MSGV3, MSGV4 of the same types as the above system fields and can be used to handle the properties of a message in one structured data object.

Hints

-   Messages sent without one of the additions RAISING or INTO are a way of interacting with a user. Except for messages of the type X, the statement MESSAGE should be used exclusively in the presentation logic layer and never in the actual application logic layer.
-   The addition RAISING can also be specified together with INTO, but it is ignored in this case.
-   Setting the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm) does not affect the language in which the message is displayed.

Example

Display of an [information message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninformation_message_glosry.htm "Glossary Entry").

MESSAGE 'Success!' TYPE 'I'.

Addition 1   

... DISPLAY LIKE dtype

Effect

When this addition is used, the icon of the [message type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_type_glosry.htm "Glossary Entry") specified in dtype is displayed instead of the associated icon. dtype expects a character-like data objects containing one of the values A, E, W, S, or I in uppercase letters.

For messages displayed in a dialog box by default, the short text is still displayed as a dialog box. Messages with the type E or W, except those at PBO and LOAD-OF-PROGRAM, are displayed as a dialog box if dtype contains A or I. Messages with the type S are always displayed in the status bar, regardless of the dtype. The latter also applies to messages of the type I for PBO and LOAD-OF-PROGRAM. Messages of the type X always cause a runtime error.

Hints

-   The use of this addition does not affect the behavior determined by the message type, but only the type of display.
-   Specifying X for dtype is not recommended, since no icon is assigned to this message type.

Example

Display of an [information message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninformation_message_glosry.htm "Glossary Entry") with the icon of a [status message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatus_message_glosry.htm "Glossary Entry").

MESSAGE 'Success!' TYPE 'I' DISPLAY LIKE 'S'.

Addition 2   

... WITH dobj1 ... dobj4

Effect

This addition replaces the placeholders &1 to &4 and & of the short text or &V1& to &V4& of the long text of the message with the formatted content of the operands dobj1, ..., dobj4. Up to four operands dobj1 through dobj4 can be specified. They can have the same data type as a source field of the statement [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) and they are formatted in accordance with the associated [predefined formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_formats.htm) with an output length of 50. If the data type is character-like, dobj1 through dobj4 are [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If it is not character-like, they are [functional operand positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The position of an operand determines which placeholder is replaced. The formatted content of the first operand replaces the placeholders &1, the first placeholder & and &V1&, the second replaces &2, the second & and &V2& etc. Furthermore, the formatted content of the operands dobj1, ..., dobj4 is assigned in sequence to the system fields sy-msgv1 to sy-msgv4.

If fewer operands than placeholders are specified, surplus placeholders are not displayed in the short text and the associated system fields sy-msgv1 to sy-msgv4 are initialized. If a specified operand cannot be assigned to a placeholder, it is ignored.

If the system fields sy-msgid, sy-msgno, and sy-msgv1 through sy-msgv4 are specified directly after WITH, the values set by the current MESSAGE statement are used. If they are specified as operands of character-like expressions, the preceding values are used.

The addition WITH cannot be used with the output of a text [txt](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm) or when an object reference variable is specified in [msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm).

Hints

-   If a short text contains placeholders of both forms &i and &, the content of an operand can replace two placeholders. The operand at the position i not only replaces &i but also the i-th placeholder at position &. It is advisable to use only one of the two forms for placeholders in a single short text. If a short text is to be translated into other languages, only the numbered placeholder &i can be used, since the structure of the sentence may change.
-   Duplicate characters && are converted to & in the output.
    -   To enable the output of an & character, it must be specified in the short text as &&.
    -   To output multiple placeholders one after the other, the & characters must be separated by blanks in the short text.
-   For reasons of downward compatibility, the character $ is handled in the same way as & in short texts. The same is true for $i. Therefore, $$ must be specified if $ is to be the output.
-   In long texts, the placeholders from &V1& to &V4& must be stored as such in the database. If the Graphical PC Editor is used, they cannot be entered directly, but must be inserted using Insert → Symbols → Text Symbols.

Example

The short text of the specified message in the table T100 contains the value & & & & and the message text This is not America is displayed as an [information message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninformation_message_glosry.htm "Glossary Entry"). If the short text were defined as &4 &1 &3 &2, the output would be America This not is.

MESSAGE ID 'SABAPDEMOS'  TYPE 'I' NUMBER '888'
        WITH 'This' 'is' 'not' 'America'.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Message type unknown
    Runtime error: MESSAGE\_TYPE\_UNKNOWN
-   Cause: Deliberate termination with short dump
    Runtime error: MESSAGE\_TYPE\_X
    Runtime error: MESSAGE\_TYPE\_X\_TEXT
-   Cause: It is not possible to catch messages of the type 'A' using the language element CALL FUNCTION ... EXCEPTIONS error\_message in ON COMMIT processing
    Runtime error: MESSAGE\_ROLLBACK\_ON\_COMMIT
-   Cause: It is not possible to catch messages of the type 'A' using the language element CALL FUNCTION ... EXCEPTIONS error\_message in updates
    Runtime error: MESSAGE\_ROLLBACK\_IN\_POSTING

Continue
[MESSAGE, msg](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_msg.htm)
[MESSAGE, text](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_text.htm)
[MESSAGE, INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_into.htm)