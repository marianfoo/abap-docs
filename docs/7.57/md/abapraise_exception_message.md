---
title: "RAISE EXCEPTION, message"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_shortref.htm) Syntax ...  MESSAGE tn(id)   ID mid TYPE mtype NUMBER num  WITH dobj1 ... dobj4    USING MESSAGE  ... Variants: 1. ... MESSAGE msg ...(#!ABAP_VARIANT_1@1@
version: "7.57"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm"
abapFile: "abapraise_exception_message.htm"
keywords: ["do", "if", "case", "try", "catch", "method", "class", "exception-handling", "abapraise", "exception", "message"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions.htm) →  [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE EXCEPTION, message, ABAPRAISE_EXCEPTION_MESSAGE, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

RAISE EXCEPTION, message

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_shortref.htm)

Syntax

... *{* MESSAGE tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* USING MESSAGE *}* ...

Variants:

[1\. ... MESSAGE msg ...](#!ABAP_VARIANT_1@1@)
[2\. ... USING MESSAGE ...](#!ABAP_VARIANT_2@2@)

Effect

The addition MESSAGE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) and of the addition [THROW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconditional_expressions.htm) passes the specification of a [message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry") to the exception object.

Variant 1   

... MESSAGE msg ...

Effect

The addition tn(id) or ID mid TYPE mtype NUMBER num is used to specify the [message type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_type_glosry.htm "Glossary Entry"), the [message class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_class_glosry.htm "Glossary Entry"), and the [message number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_number_glosry.htm "Glossary Entry") of a message [msg](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) for the table T100, statically or dynamically like in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm). Also like in [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm), the optional addition WITH can be used to provide the placeholders of a message with content. The exception class of the raised exception must implement one of the [system interfaces for messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interfaces.htm):

-   [Using IF\_T100\_DYN\_MSG](#abapraise-exception-message-1-------using-if--t100--message---@ITOC@@ABAPRAISE_EXCEPTION_MESSAGE_2)

The addition MESSAGE fills the attributes of these interfaces with values. This assignment takes place after the instance constructor is executed. This overwrites any values that were assigned to these attributes when the exception object was constructed.

The attributes of the system interfaces are used to link the exception object to the message specified after MESSAGE. Using an object reference, the object can be used directly in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_msg.htm) of the [MESSAGE statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm) and the message texts can be read using the interface methods.

If the addition MESSAGE is used, the input parameter TEXTID of the constructor of the exception class must not be filled. This parameter is only intended for specifying a predefined [exception text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts.htm).

Hints

-   The addition MESSAGE cannot be specified after the variant [RAISE EXCEPTION oref](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm).
-   The position behind MESSAGE is contained in the where-used list for the message specified.
-   See also [Exception Classes for Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_exceptions.htm).

Using IF\_T100\_DYN\_MSG   

The full functionality of the addition MESSAGE is available only if the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm) is implemented in the used exception class. This interface includes the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) requested by the syntax check. If an exception class is used with the system interface IF\_T100\_DYN\_MSG, the addition MESSAGE fills its attributes as follows after the instance constructor is executed:

-   The message type specified after MESSAGE is assigned to the attribute MSGTY of the interface IF\_T100\_DYN\_MSG.
-   The components of the structured attribute T100KEY of the component interface IF\_T100\_MESSAGE are filled as follows:
    -   MSGID is assigned the message class specified after MESSAGE.
    -   MSGNO is assigned the message number specified after MESSAGE.
    -   ATTR1 to ATTR4 are assigned the names IF\_T100\_DYN\_MSG~MSGV1 to IF\_T100\_DYN\_MSG~MSGV4 of the interface attributes for the placeholders of the message. If the addition WITH is not specified, ATTR1 to ATTR4 remain initial.
-   The attributes MSGV1 to MSGV4 of the interface IF\_T100\_DYN\_MSG are assigned the texts specified using WITH.

Hints

-   If IF\_T100\_DYN\_MSG is used, the addition MESSAGE assigns the correct values to all required attributes of the exception class to link them to the message. More specifically, the attributes for the placeholders of the message are mapped to the structure T100KEY of the interface IF\_T100\_MESSAGE automatically.
-   In exception classes with the interface IF\_T100\_DYN\_MSG, MESSAGE used together with the EXPORTING addition can produce unexpected results in the placeholder texts if the addition WITH is not specified. Implicit assignments of the input parameters specified after EXPORTING to the components ATTR1 to ATTR4 are intended for exception classes with the interface IF\_T100\_MESSAGE where WITH cannot be specified (see the [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interface_reuse_abexa.htm)). Implicit assignments of the names of the input parameters or of initial values can be prevented by specifying WITH with a dummy value space.

Example

Raising of the exception CX\_DEMO\_DYN\_T100 that implements the interface IF\_T100\_DYN\_MSG. The addition MESSAGE is used to pass the properties of a message that determines the exception text.

TRY.
    RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
      MESSAGE ID 'SABAPDEMOS'
      TYPE 'I'
      NUMBER '888'
      WITH 'Message'.
  CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
    cl\_demo\_output=>display( oref->get\_text( ) &&
                             \`, \` && oref->msgty ).
ENDTRY.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_global_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_abexa.htm)

Using IF\_T100\_MESSAGE   

If only the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) is implemented, the addition WITH must not be used and only a restricted set of functions is available. When an exception class is used that implements only the system interface IF\_T100\_MESSAGE, the addition MESSAGE fills its attributes as follows after the instance constructor is executed:

-   The specification of a message type has no effect.
-   The components of the structured attribute T100KEY of the component interface IF\_T100\_MESSAGE are filled as follows:
    -   MSGID is assigned the message class specified after MESSAGE.
    -   MSGNO is assigned the message number specified after MESSAGE.
    -   ATTR1 to ATTR4 are assigned the names of the first four input parameters of the instance constructors specified after EXPORTING that can be converted to a character-like target field, in the specified order. Components that cannot be assigned input parameters are initialized.

Hints

-   It is recommended that the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm) is used for exceptions raised using the addition MESSAGE.
-   The use of the addition MESSAGE for an exception class with [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) is intended for cases where existing exception classes that cannot be switched to [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm) must be used.
-   The addition MESSAGE is suitable for existing exception classes with [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) that already have a generic [exception text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_texts.htm) without semantic meaning. Previously, structures of the type SCX\_T100KEY, filled in the program, had to be passed to such exceptions.
-   The use of the addition MESSAGE is not recommended for an exception class with [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) whose exception texts all have a fixed semantic meaning.

Executable Example

[System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interface_reuse_abexa.htm)

Variant 2   

... USING MESSAGE ...

Effect

This variant is a short form of the preceding variant of the MESSAGE addition. It can be used if the exception class of the raised exception implements the [system interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interfaces.htm) [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm), and has the following effect:

... MESSAGE ID     sy-msgid
            TYPE   sy-msgty
            NUMBER sy-msgno
            WITH   sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4 ...

The addition USING MESSAGE implicitly passes the specification of the message that is stored during the execution of the statement in the system fields sy-msgid, sy-msgty sy-msgno, and sy-msgv1 to sy-msgv4 to the exception class.

Hint

The short form is particularly suitable for converting classic exceptions that were raised in function modules or methods with the statement [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm), or messages that were caught with [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm), into class-based exceptions.

Example

Raising of the exception CX\_DEMO\_DYN\_T100 that implements the interface IF\_T100\_DYN\_MSG. The addition USING MESSAGE implicitly passes the properties of a [status message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatus_message_glosry.htm "Glossary Entry") that was previously output with the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm).

MESSAGE ID 'SABAPDEMOS' TYPE 'S'
        NUMBER '888'
        WITH 'Message'.
TRY.
    RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE.
  CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
    cl\_demo\_output=>display( oref->get\_text( ) &&
                             \`, \` && oref->msgty ).
ENDTRY.

Executable Examples

-   [Converting a Classic Example to a Class-Based Exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_glbl_shrt_abexa.htm)
-   [Converting the Exception error\_message to a Class-Based Exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_shrt_abexa.htm)

Continue
![Example](exa.gif "Example") [Converting a Classic Exception to a Class-Based Exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_glbl_shrt_abexa.htm)
![Example](exa.gif "Example") [Converting the Exception error\_message to a Class-Based Exception](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_shrt_abexa.htm)