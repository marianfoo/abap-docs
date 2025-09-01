# ABAP - Keyword Documentation / ABAP - Reference / Text Repositories / Messages / MESSAGE

Included pages: 4


### abapmessage.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) → 

MESSAGE

[Quick Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

MESSAGE *{* [msg](javascript:call_link\('abapmessage_msg.htm'\)) *|* [text](javascript:call_link\('abapmessage_text.htm'\)) *}*
        *{* *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* *}*
        *|* *{* *\[*DISPLAY LIKE dtype*\]* *\[*WITH dobj1 ... dobj4*\]* [RAISING exception](javascript:call_link\('abapmessage_raising.htm'\)) *}*
        *|* *{*                      *\[*WITH dobj1 ... dobj4*\]* [INTO text](javascript:call_link\('abapmessage_into.htm'\)) *}* *}*.

Extras:

[1\. ... DISPLAY LIKE dtype](#!ABAP_ADDITION_1@1@)
[2\. ... WITH dobj1 ... dobj4](#!ABAP_ADDITION_2@2@)

Effect

This statement MESSAGE either displays the short text of a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") specified in [msg](javascript:call_link\('abapmessage_msg.htm'\)) from the table [T100](javascript:call_link\('abenabap_messages_storing.htm'\)) in the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current user, or any text from [text](javascript:call_link\('abapmessage_text.htm'\)) as a message. The following variants are available:

-   If one of the additions RAISING or INTO is not specified, the statement MESSAGE interrupts the program flow and sends the message. The exact [behavior](javascript:call_link\('abenabap_messages_types.htm'\)) of this basic form of the statement MESSAGE (that is, how the text is displayed and how the program flow is continued after the MESSAGE statement) is context-dependent and is determined by a [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") specified in msg or text.
    
-   The statement MESSAGE uses the addition [RAISING](javascript:call_link\('abapmessage_raising.htm'\)) to trigger a [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) in function modules or methods. If the exception is not handled, the message is sent in the same way as when the addition RAISING is not specified.
    
-   If the addition [INTO](javascript:call_link\('abapmessage_into.htm'\)) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.
    

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

Contain the content of the data objects specified after the addition WITH after sending a message (in order). After any text is sent, they contain the first 200 characters of the data object text.

Notes

-   Messages sent without one of the additions RAISING or INTO are a way of interacting with a user. Except for messages of the type "X", the statement MESSAGE should be use exclusively in the presentation logic layer and never in the application logic layer.
    
-   The addition RAISING can also be specified together with INTO, but is ignored in this case.
    
-   If the addition [INTO](javascript:call_link\('abapmessage_into.htm'\)) is specified, the program flow is not interrupted and the short text of the message is assigned to a field instead.
    

Example

Displays an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry").

MESSAGE 'Success!' TYPE 'I'.

Addition 1

... DISPLAY LIKE dtype

Effect

When this addition is used, the icon of the [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") specified in dtype is displayed instead of the associated icon. dtype expects a character-like data objects containing one of the values "A", "E", "I", "S", or "W" in uppercase letters.

For messages displayed in a dialog box by default, the short text is still displayed as a dialog box. Messages with the type "E" or "W" (except those for PBO and LOAD-OF-PROGRAM) are displayed as a dialog window if dtype contains "A" or "I". Messages with the type "S" are always displayed in the status bar, regardless of the dtype. The latter also applies to messages of the type "I" for PBO and LOAD-OF-PROGRAM. Messages of the type "X" always cause a runtime error.

Notes

-   The usage of this addition does not influence the behavior determined by the message type, but only the type of display.
    
-   Specifying "X" for dtype is not recommended, since no icon is assigned to this message type.
    

Example

Displays an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry") with the icon of a [status message](javascript:call_link\('abenstatus_message_glosry.htm'\) "Glossary Entry").

MESSAGE 'Success!' TYPE 'I' DISPLAY LIKE 'S'.

Addition 2

... WITH dobj1 ... dobj4

Effect

This addition replaces the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message with the formatted content of the operands dobj1, ..., dobj4. Up to four operands dobj1 through dobj4 can be specified. They can have the same data type as a source field of the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and they are formatted in accordance with the associated [predefined formats](javascript:call_link\('abenwrite_formats.htm'\)) with an output length of 50. If the data type is character-like, dobj1 through dobj4 are [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"); if it is not character-like, they are [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The position of an operand determines which placeholder is replaced. The formatted content of the first operand replaces the placeholders "&1", the first placeholder "&" and "&V1&", the second replaces "&2", the second "&" and "&V2&" etc. Furthermore, the formatted content of the operands dobj1, ..., dobj4 is assigned in sequence to the system fields sy-msgv1 to sy-msgv4.

If fewer operands than placeholders are specified, surplus placeholders are not displayed in the short text and the associated system fields sy-msgv1 to sy-msgv4 are initialized. If a specified operand cannot be assigned to a placeholder, it is ignored.

If the system fields sy-msgid, sy-msgno, and sy-msgv1 through sy-msgv4 are specified directly after WITH, the values set by the current MESSAGE statement are used. If they are specified as operands of character-like expressions, the preceding values are used.

The addition WITH cannot be specified when a text [txt](javascript:call_link\('abapmessage_text.htm'\)) is displayed and not when an object reference variable is specified in [msg](javascript:call_link\('abapmessage_msg.htm'\)).

Notes

-   If a short text contains placeholders of both forms "&i" and "&", the content of a operands can replace both placeholders. The operand at the position i not only replaces "&i" but also the i-th placeholder at position "&". It is advisable to use only one of the two forms for placeholders in a single short text. If a short text is to be translated into other languages, only the numbered placeholder "&i" can be used, since the structure of the sentence may change.
    
-   Double characters "&&" are converted to "&" when output.
    

-   To output an "&" character, it must be specified in the short text as "&&".

-   To output several placeholders one after the other, the "&" characters must be separated by blanks in the short text.
    

-   For reasons of downward compatibility, the character "$" is handled in the same way as "&" in short texts. The same is true for "$i". Therefore, "$$" must be specified if "$" is to be displayed.
    
-   In long texts, the placeholders from "&V1&" to "&V4&" must be stored as such in the database. If theGraphical PC Editor is being used, they cannot be entered directly, but must be inserted using Insert → Symbols → Text Symbols.
    

Example

If the short text of the specified message in the table T100 contains the value "& & & &" , the text "This is not America" is displayed as an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry"). If the short text was defined as "&4 &1 &3 &2", the output is "America This not is".

MESSAGE i010 WITH 'This' 'is' 'not' 'America'.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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
[MESSAGE - msg](javascript:call_link\('abapmessage_msg.htm'\))
[MESSAGE - text](javascript:call_link\('abapmessage_text.htm'\))
[MESSAGE - INTO](javascript:call_link\('abapmessage_into.htm'\))


### abapmessage_msg.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [MESSAGE](javascript:call_link\('abapmessage.htm'\)) → 

MESSAGE - msg

[Quick Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

... *{* tn *}*
  *|* *{* tn(id) *}*
  *|* *{* ID mid TYPE mtype NUMBER num *}*
  *|* *{* oref *\[*TYPE mtype*\]* *}* ...

Alternatives:

[1\. ... tn ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... tn(id) ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ID mid TYPE mtype NUMBER num ...](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... oref *\[*TYPE mtype*\]* ...](#!ABAP_ALTERNATIVE_4@4@)

Effect

msg specifies a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") from the database table [T100](javascript:call_link\('abenabap_messages_storing.htm'\)) either by specifying id and n directly or by using the content of the data objects mid and num for the message class and the message number. Alternatively, an object reference variable oref is specified whose [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") implements the interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)). One of the possible message types "A", "E", "I", "S", "W", or "X" must be specified, either by specifying t directly or as content of the data object mtype. This controls the [behavior](javascript:call_link\('abenabap_messages_types.htm'\)) of the message. An invalid type produces a syntax error or runtime error.

If the specified message is not found for the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current user, a search is made in the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP and then in English. If it is still not found, the specified message type, message class, and message number are used as short text in uppercase letters and separated by a colon ":".

The system fields of the statement MESSAGE are always supplied with the specified values.

Notes

-   The maximum length of a message is 269 and is determined from the short text of the message in the database table [T100](javascript:call_link\('abenabap_messages_storing.htm'\)) (with a maximum of 73 characters) including up to four single-character placeholders &. These placeholders can be replaced by strings with a maximum of 50 characters using the addition [WITH](javascript:call_link\('abapmessage.htm'\))).
    
-   The [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") checks the existence of statically specified messages.
    

Alternative 1

... tn ...

Effect

t and n are used to specify the single-character message type and the three-digit message number directly in a row (static short form). The message class must be specified with the addition MESSAGE-ID in the statement that introduces the program.

Example

Displays the short text of the message with the number 014 from the message class SABAPDOCU as an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry").

REPORT rep MESSAGE-ID sabapdemos.
...
MESSAGE i014.

Alternative 2

... tn(id) ...

Effect

The same applies to t and n as to the static short form. In the static long form, the message class is specified directly in parentheses using id.

Notes

-   Specifying the message class explicitly overrides the addition MESSAGE-ID of the statement that introduces the program.
    
-   Specifying the message class in parentheses does not signify here that the content of id is used. In fact, the message class is used that has the name that was specified directly with id.
    

Example

As in the example for alternative 1, with the message class specified explicity.

REPORT ...
...
MESSAGE i014(sabapdemos).

Alternative 3

... ID mid TYPE mtype NUMBER num ...

Effect

The message class, the message type, and the message number are specified as content of the data objects mid, mtype, and num (dynamic form). mid and mtype expect character-like data objects that must contain the message class or the message type in uppercase letters. Invalid message types raise a non-handleable exception. num expects a data object of the type n and length 3.

Note

Specifying the message class explicitly overrides the addition MESSAGE-ID of the statement that introduces the program.

Example

As in the example for alternative 2, with the message and the message type specified dynamically.

DATA: mid   TYPE sy-msgid VALUE 'SABAPDEMOS',
      mtype TYPE sy-msgty VALUE 'I',
      num   TYPE sy-msgno VALUE '014'.
MESSAGE ID mid TYPE mtype NUMBER num.

Alternative 4

... oref *\[*TYPE mtype*\]* ...

Effect

For oref, an object reference variable can be specified which, when the statement MESSAGE is executed, points to an object whose class implements the system interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)). This in turn contains the [component interface](javascript:call_link\('abencomponent_interface_glosry.htm'\) "Glossary Entry") IF\_MESSAGE. oref is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). If oref is specified, the addition [WITH](javascript:call_link\('abapmessage.htm'\)) and the variant with [INTO](javascript:call_link\('abapmessage_into.htm'\)) are not allowed.

The statement MESSAGE analyzes the components of the structured attribute T100KEY of the interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) in the referenced object:

-   The message class is taken from the component MSGID and the message number from the component MSGNO. If the messages is not found, a short text is generated that counts the message class and messages number used plus the placeholder texts.
    
-   The names of attributes of the object are taken from the components ATTR1 to ATTR4. The placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the message long text are replaced with the content of these attributes in accordance with rules of the addition [WITH](javascript:call_link\('abapmessage.htm'\)). If an attribute does not exist or an attribute cannot be converted to a placeholder text, the character "&" is added to the start and the end of the attribute name and used as a placeholder text. Initial components ATTR1 to ATTR4 produce initial placeholder texts.
    

The message type is either specified explicitly or determined implicitly.

-   The type is specified explicitly using TYPE mtype, where mtype expects a character-like data object containing a valid message type in uppercase letters.
    
-   If oref points to an object that implements the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) and this is known statically, the addition TYPE can be omitted and the message type in MSGTY is used. In this case, no further additions are allowed in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)).
    

Notes

-   If field symbols or formal parameters of the generic type any or data are specified for oref, the variant [MESSAGE text](javascript:call_link\('abapmessage_text.htm'\)) is used, which has identical syntax.
    
-   This variant is mainly intended to be used with [exception objects](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry"). If a global [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") implements the interface IF\_T100\_MESSAGE, the components of the structure T100KEY are filled in accordance with the definition of the associated exception text when such an exception is raised in the interface method GET\_TEXT (which is implemented in the superclass CX\_ROOT). In local exception classes, you must fill the components yourself. To do this, do not redefine the interface method GET\_TEXT, but use the instance contructor instead.
    
-   The system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) includes IF\_T100\_MESSAGE and objects from classes that implement IF\_T100\_DYN\_MSG can be used accordingly. IF\_T100\_MESSAGE is intended to be used on its own for statically predefined [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes and IF\_T100\_DYN\_MSG enables exception objects to be associated with [messages](javascript:call_link\('abenmessage_exceptions.htm'\)).
    
-   If the TYPE addition is omitted for an object with the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)), the statement must have the form MESSAGE oref. with no further additions. It works like the statement MESSAGE oref TYPE oref->if\_t100\_dyn\_msg~msgty.
    
-   For compatibility reasons, this variant can still be used for classes that only implement the interface IF\_MESSAGE. In this case, the interface methods GET\_TEXT and GET\_LONGTEXT are called automatically in the referenced object and their return value is used as the short text or long text of the message. In this case, the system fields sy-msgid and sy-msgno are not filled specifically. The root class of all [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry"), CX\_ROOT, implements the interface IF\_MESSAGE. In exception classes that do not implement the interface IF\_T100\_MESSAGE, the interface methods GET\_TEXT and GET\_LONGTEXT get the exception texts of exception objects stored in OTR (Online Text Repository), which then can be issued by using the variant of the MESSAGE statement as a message.
    

Example

Sends a messages using an object of the class cls created using the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) that includes the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)). The message is specified in full by interface attributes of the object.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES:
     t100\_key FOR if\_t100\_message~t100key,
     msgty    FOR if\_t100\_dyn\_msg~msgty.
    METHODS constructor
              IMPORTING msgid TYPE symsgid
                        msgno TYPE symsgno
                        msgty TYPE symsgty.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD constructor.
    me->t100\_key-msgid = msgid.
    me->t100\_key-msgno = msgno.
    me->msgty          = msgty.
  ENDMETHOD.
  METHOD if\_message~get\_text.
    result = cl\_message\_helper=>get\_text\_for\_message( me ).
  ENDMETHOD.
  METHOD if\_message~get\_longtext.
    result = cl\_message\_helper=>get\_longtext\_for\_message( me ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  MESSAGE NEW cls( msgid = 'SABAPDEMOS'
                   msgno = '001'
                   msgty = 'I' ).

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](javascript:call_link\('abenif_t100_message_abexa.htm'\))
    
-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\))
    
-   [System Interface IF\_T100\_MESSAGE in a Global Exception Class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\))


### abapmessage_text.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [MESSAGE](javascript:call_link\('abapmessage.htm'\)) → 

MESSAGE - text

[Quick Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

... text TYPE mtype ...

Effect

This variant sends a character string in text as a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") of the [message type](javascript:call_link\('abenabap_messages_types.htm'\)) specified in mtype. text is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") whose value is used as the short text of the message. Only the first 300 characters are used. No long text can be defined for a message of this type.

mtype expects a character-like data object containing the message type in uppercase letters. Invalid message types raise a non-handleable exception.

In this variant, the addition [WITH](javascript:call_link\('abapmessage.htm'\)) and the variant with [INTO](javascript:call_link\('abapmessage_into.htm'\)) are not allowed.

Notes

-   If field symbols or formal parameters of the type any or data are specified for text, these must be character-like when the statement is executed. The variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)), which has identical syntax, cannot be executed using generically typed field symbols or formal parameters.
    
-   The system fields sy-msgid and sy-msgno are filled in a non-specific way when a character string is specified. This means that this variant should only be used on rare occasions if the content of the system fields is not required for identifying the message. Otherwise, in all cases in which messages are passed using these system fields (for example, from [function modules](javascript:call_link\('abapcall_function_parameter.htm'\))) or logged, language-independent access to the message text would be lost.
    

Example

Produces an exception text as an [information message](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry").

DATA oref TYPE REF TO cx\_sy\_arithmetic\_error.
TRY.
  ...
  CATCH cx\_sy\_arithmetic\_error INTO oref.
    MESSAGE oref->get\_text( ) TYPE 'I'.
ENDTRY.


### abapmessage_into.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [MESSAGE](javascript:call_link\('abapmessage.htm'\)) → 

MESSAGE - INTO

[Quick Reference](javascript:call_link\('abapmessage_shortref.htm'\))

Syntax

MESSAGE [msg](javascript:call_link\('abapmessage_msg.htm'\)) [*\[*WITH dobj1 ... dobj4*\]*](javascript:call_link\('abapmessage.htm'\))
        INTO text.

Effect

The statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) with the addition INTO assigns the short text of the message to the target field text. The [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry") does not matter. The program flow is not interrupted and no [message processing](javascript:call_link\('abenabap_messages_types.htm'\)) takes place. The following can be specified for text:

-   An existing character-like variable.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type string is declared.
    

The addition INTO cannot be specified when a text [text](javascript:call_link\('abapmessage_text.htm'\)) is displayed and not when an object reference variable is specified in [msg](javascript:call_link\('abapmessage_text.htm'\)).

Example

The short text of a message sent in a function module is assigned to the data object mtext (declared inline) when handling the exception [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) using the relevant system fields.

CALL FUNCTION... EXCEPTIONS error\_message = 4.
IF sy-subrc = 4.
  MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
          INTO DATA(mtext)
          WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
ENDIF.
