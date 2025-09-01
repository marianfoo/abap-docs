  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) →  [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MESSAGE%2C%20msg%2C%20ABAPMESSAGE_MSG%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MESSAGE, msg

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_shortref.htm)

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

msg specifies a [message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_glosry.htm "Glossary Entry") from the database table [T100](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_storing.htm) either by specifying the message key consisting of id and n directly or by using the content of the data objects mid and num for the message class and the message number. Alternatively, an object reference variable oref is specified whose [dynamic type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_type_glosry.htm "Glossary Entry") implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm).

The [message type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_type_glosry.htm "Glossary Entry") that controls the [behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_types.htm) of the message must be specified directly in t or as content of the data object mtype. The following message types are possible: A, E, I, S, W, or X. An invalid type produces a syntax error or runtime error.

If the specified message is not found for the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current user, a search is made in the [secondary language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP and then in English. If it is still not found, the specified message type, message class, and message number are used as short text in uppercase letters and separated by a colon :.

The system fields of the statement MESSAGE are always supplied with the specified values.

Hints

-   The maximum length of a message is 269 and is determined from the short text of the message in the database table [T100](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages_storing.htm) with a maximum of 73 characters) including up to four single-character placeholders &. These placeholders can be replaced by strings with a maximum of 50 characters using the addition [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm).
-   The [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_glosry.htm "Glossary Entry") checks the existence of statically specified messages.

Alternative 1   

... tn ...

Effect

t and n are used to specify the single-character message type and the three-digit message number directly one after another (static short form). The message class must be specified with the addition MESSAGE-ID in the statement that introduces the program.

Example

Display of the short text of the message with the number 014 from the message class SABAPDOCU as an [information message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninformation_message_glosry.htm "Glossary Entry").

REPORT rep MESSAGE-ID sabapdemos.
...
MESSAGE i014.

Alternative 2   

... tn(id) ...

Effect

The same applies to t and n as to the static short form. In the static long form, the message class is specified directly in parentheses using id.

Hint

Specifying the message class explicitly overrides the addition MESSAGE-ID of the statement that introduces the program. Specifying the message class in parentheses does not mean here that the content of id is used. Instead, the message class is used that has the name that was specified directly with id.

Example

As in the example for alternative 1, with the message class specified explicitly.

REPORT ...
...
MESSAGE i014(sabapdemos).

Alternative 3   

... ID mid TYPE mtype NUMBER num ...

Effect

The message class, the message type, and the message number are specified as content of the data objects mid, mtype, and num (dynamic form). mid and mtype expect character-like data objects that must contain the message class or the message type in uppercase letters. Invalid message types raise an uncatchable exception. num expects a data object of the type n and length 3.

Hint

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

For oref, an object reference variable can be specified which, when the statement MESSAGE is executed, points to an object whose class implements the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm). This in turn contains the [component interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomponent_interface_glosry.htm "Glossary Entry") IF\_MESSAGE. oref is a [functional operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). If oref is specified, the addition [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) and the variant with [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_into.htm) are not allowed.

The statement MESSAGE evaluates the components of the structured attribute T100KEY of the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm) in the referenced object:

-   The message class is taken from the component MSGID and the message number from the component MSGNO. If the message is not found, a short text is generated that lists the message class and message number used plus the placeholder texts.
-   The names of attributes of the object are taken from the components ATTR1 to ATTR4. The placeholders &1 to &4 and & of the short text or &V1& to &V4& of the message long text are replaced with the content of these attributes in accordance with rules of the addition [WITH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm). If an attribute does not exist or an attribute cannot be converted to a placeholder text, the character & is added to the start and the end of the attribute name and used as a placeholder text. Initial components ATTR1 to ATTR4 produce initial placeholder texts.

The message type is either specified explicitly or determined implicitly.

-   The type is specified explicitly using TYPE mtype, where mtype expects a character-like data object containing a valid message type in uppercase letters.
-   If oref points to an object that implements the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm) and this is known statically, the addition TYPE can be omitted and the message type in MSGTY is used.

Hints

-   If field symbols or formal parameters of the generic type any or data are specified for oref, the variant [MESSAGE text](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage_text.htm) is used, which has identical syntax.
-   This variant is mainly intended to be used with [exception objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_object_glosry.htm "Glossary Entry"). If a global [exception class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_class_glosry.htm "Glossary Entry") implements the interface IF\_T100\_MESSAGE, the components of the structure T100KEY are filled in accordance with the definition of the associated exception text when a corresponding exception is raised in the interface method GET\_TEXT, which is itself implemented in the superclass CX\_ROOT. In local exception classes, the components must be filled manually. To do this, the interface method GET\_TEXT should not be redefined and the instance constructor should be used instead.
-   The system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm) includes IF\_T100\_MESSAGE and objects from classes that implement IF\_T100\_DYN\_MSG can be used accordingly. IF\_T100\_MESSAGE is intended to be used on its own for statically predefined [exception texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_texts.htm) of exception classes and IF\_T100\_DYN\_MSG enables exception objects to be linked with [messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_exceptions.htm).
-   If the TYPE addition is omitted for an object with the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm), the addition TYPE oref->if\_t100\_dyn\_msg~msgty is added implicitly.
-   For compatibility reasons, this variant can still be used for classes that only implement the interface IF\_MESSAGE. In this case, the interface methods GET\_TEXT and GET\_LONGTEXT are called automatically in the referenced object and their return value is used as the short text or long text of the message. In this case, the system fields sy-msgid and sy-msgno are not filled specifically. The root class of all [exception classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexception_class_glosry.htm "Glossary Entry") CX\_ROOT implements the interface IF\_MESSAGE. In exception classes that do not implement the interface IF\_T100\_MESSAGE, the interface methods GET\_TEXT and GET\_LONGTEXT get the exception texts of exception objects stored in OTR (Online Text Repository ), which then can be displayed as a message using the variant of the MESSAGE statement.

Example

Sending of a messages using an object of the class cls created using the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) that implements the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm). The message is specified completely by interface attributes of the object.

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
                   msgty = 'I' ) DISPLAY LIKE 'S'.

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message_abexa.htm)
-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_interface_abexa.htm)
-   [System Interface IF\_T100\_MESSAGE in a Global Exception Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_interface_global_abexa.htm)