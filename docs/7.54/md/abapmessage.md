  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) → 

MESSAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_shortref.htm)

Syntax

MESSAGE *{* [msg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm)  *|* [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_text.htm)  *}*
        *{*  *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* *}*
        *|* *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* [RAISING exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) *}*
        *|*  *{*                      *\[*WITH dobj1 ... dobj4*\]* [INTO text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_into.htm) *}* *}*.

Extras:

[1\. ... DISPLAY LIKE dtype](#!ABAP_ADDITION_1@1@)
[2\. ... WITH dobj1 ... dobj4](#!ABAP_ADDITION_2@2@)

Effect

This statement MESSAGE either displays the short text of a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") specified in [msg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm) from the table [T100](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_storing.htm) in the [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current user , or any text from [text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_text.htm) as a message. The following variants are available:

-   If one of the additions RAISING or INTO is not specified, the statement MESSAGE interrupts the program flow and sends the message. The exact [behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages_types.htm) of this basic form of the statement MESSAGE (that is, how the text is displayed and how the program flow is continued after the MESSAGE statement) is context-dependent and is determined by a [message type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_type_glosry.htm "Glossary Entry") specified in msg or text.
    
-   The statement MESSAGE uses the addition [RAISING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_raising.htm) to trigger a [non-class-based exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_non_class.htm) in function modules or methods. If the exception is not handled, the message is sent in the same way as when the addition RAISING is not specified.
    
-   If the addition [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_into.htm) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.
    

System Fields

Name

Meaning

sy-msgid

Contains the message class after a message is sent, and the value "00" after any text is sent.

sy-msgno

Contains the message number after a message is sent, and the value "001" after any text is sent.

sy-msgty

Contains the identifier of the message type with which the message or the text was sent.

sy-msgv1 to sy-msgv4

Contain the content of the data objects specified after the addition WITH after sending a message (in order). After any text is sent, contain the first 200 characters of the data object text.

Notes

-   Messages sent without one of the additions RAISING or INTO are a way of interacting with a user. Except for messages of the type "X", the statement MESSAGE should be use exclusively in the presentation logic layer and never in the application logic layer.
    
-   The addition RAISING can also be specified together with INTO, but is ignored in this case.
    
-   Setting the [text environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_glosry.htm "Glossary Entry") using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm) is ignored by the language in which the message is displayed.
    

Example

Displays an [information message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninformation_message_glosry.htm "Glossary Entry").

MESSAGE 'Success!' TYPE 'I'.

Addition 1

... DISPLAY LIKE dtype

Effect

When this addition is used, the icon of the [message type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_type_glosry.htm "Glossary Entry") specified in dtype is displayed instead of the associated icon. dtype expects a character-like data objects containing one of the values "A", "E", "I", "S", or "W" in uppercase letters.

For messages displayed in a dialog box by default, the short text is still displayed as a dialog box. Messages with the type "E" or "W" (except those at PBO and LOAD-OF-PROGRAM) are displayed as a dialog window if dtype contains "A" or "I". Messages with the type "S" are always displayed in the status bar, regardless of the dtype. The latter also applies to messages of the type "I" for PBO and LOAD-OF-PROGRAM. Messages of the type "X" always cause a runtime error.

Notes

-   The usage of this addition does not influence the behavior determined by the message type, but only the type of display.
    
-   Specifying "X" for dtype is not recommended, since no icon is assigned to this message type.
    

Example

Displays an [information message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninformation_message_glosry.htm "Glossary Entry") with the icon of a [status message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatus_message_glosry.htm "Glossary Entry").

MESSAGE 'Success!' TYPE 'I' DISPLAY LIKE 'S'.

Addition 2

... WITH dobj1 ... dobj4

Effect

This addition replaces the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message with the formatted content of the operands dobj1, ..., dobj4. Up to four operands dobj1 through dobj4 can be specified. They can have the same data type as a source field of the statement [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm) and they are formatted in accordance with the associated [predefined formats](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwrite_formats.htm) with an output length of 50. If the data type is character-like, dobj1 through dobj4 are [character-like expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"); if it is not character-like, they are [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The position of an operand determines which placeholder is replaced. The formatted content of the first operand replaces the placeholders "&1", the first placeholder "&" and "&V1&", the second replaces "&2", the second "&" and "&V2&" etc. Furthermore, the formatted content of the operands dobj1, ..., dobj4 is assigned in sequence to the system fields sy-msgv1 to sy-msgv4.

If fewer operands than placeholders are specified, surplus placeholders are not displayed in the short text and the associated system fields sy-msgv1 to sy-msgv4 are initialized. If a specified operand cannot be assigned to a placeholder, it is ignored.

If the system fields sy-msgid, sy-msgno, and sy-msgv1 through sy-msgv4 are specified directly after WITH, the values set by the current MESSAGE statement are used. If they are specified as operands of character-like expressions, the preceding values are used.

The addition WITH cannot be specified when a text [txt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_text.htm) is displayed and not when an object reference variable is specified in [msg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm).

Notes

-   If a short text contains placeholders of both forms "&i" and "&", the content of a operands can replace both placeholders. The operand at the position i not only replaces "&i" but also the i-th placeholder at position "&". It is advisable to use only one of the two forms for placeholders in a single short text. If a short text is to be translated into other languages, only the numbered placeholder "&i" can be used, since the structure of the sentence may change.
    
-   Double characters "&&" are converted to "&" when output.
    

-   To output an "&" character, it must be specified in the short text as "&&".

-   To output several placeholders one after the other, the "&" characters must be separated by blanks in the short text.
    

-   For reasons of downward compatibility, the character "$" is handled in the same way as "&" in short texts. The same is true for "$i". Therefore, "$$" must be specified if "$" is to be displayed.
    
-   In long texts, the placeholders from "&V1&" to "&V4&" must be stored as such in the database. If theGraphical PC Editor is being used, they cannot be entered directly, but must be inserted using Insert → Symbols → Text Symbols.
    

Example

If the short text of the specified message in the table T100 contains the value "& & & &" , the text "This is not America" is displayed as an [information message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninformation_message_glosry.htm "Glossary Entry"). If the short text was defined as "&4 &1 &3 &2", the output is "America This not is".

MESSAGE i010 WITH 'This' 'is' 'not' 'America'.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Message type unknown
    Runtime error: MESSAGE\_TYPE\_UNKNOWN
    
-   Cause: Deliberate termination with short dump
    Runtime error: MESSAGE\_TYPE\_X
    Runtime error: MESSAGE\_TYPE\_X\_TEXT
    
-   Cause: It is not possible to catch messages of the type 'A' using the language element CALL FUNCTION ... EXCEPTIONS error\_message in ON COMMIT processing
    Runtime error: MESSAGE\_ROLLBACK\_ON\_COMMIT
    
-   Cause: It is not possible to catch messages of the type 'A' using the language element CALL FUNCTION ... EXCEPTIONS error\_message in updates
    Runtime error MESSAGE\_ROLLBACK\_IN\_POSTING
    

Continue
[MESSAGE - msg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm)
[MESSAGE - text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_text.htm)
[MESSAGE - INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_into.htm)