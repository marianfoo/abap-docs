  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) → 

RAISE EXCEPTION - message

[Quick Reference](javascript:call_link\('abapraise_exception_shortref.htm'\))

Syntax

... *{* MESSAGE tn(id)
            *|* *{* ID mid TYPE mtype NUMBER num *}*
              *\[*WITH dobj1 ... dobj4*\]* *}*
  *|* *{* USING MESSAGE *}* ...

Variants:

[1\. ... MESSAGE msg ...](#!ABAP_VARIANT_1@1@)
[2\. ... USING MESSAGE ...](#!ABAP_VARIANT_2@2@)

Effect

The addition MESSAGE of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) and of the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)) passes a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry"), if specified, to the exception object.

Variant 1

... MESSAGE msg ...

Effect

The addition tn(id) or ID mid TYPE mtype NUMBER num is used to specify the [message type](javascript:call_link\('abenmessage_type_glosry.htm'\) "Glossary Entry"), the [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry"), and the [message number](javascript:call_link\('abenmessage_number_glosry.htm'\) "Glossary Entry") of a message [msg](javascript:call_link\('abapmessage_msg.htm'\)) for the table T100, statically or dynamically. This is done in the same way as in the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). Also like in [MESSAGE](javascript:call_link\('abapmessage.htm'\)), the optional addition WITH can be used to fill the placeholders of a message. The exception class of the raised exception must include one of the [system interfaces for messages](javascript:call_link\('abenmessage_interfaces.htm'\)):

-   [Using IF\_T100\_DYN\_MSG](#@@ITOC@@ABAPRAISE_EXCEPTION_MESSAGE_1)

-   [Using IF\_T100\_MESSAGE](#@@ITOC@@ABAPRAISE_EXCEPTION_MESSAGE_2)

The addition MESSAGE fills the attributes of these interfaces with values. This assignment is made after the instance constructor is executed. This overwrites any values assigned to these attributes when the exception object was constructed.

The attributes of the system interfaces are used to associate the exception object with the message specified after MESSAGE. Using an object reference, the object can be used directly in the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the [MESSAGE statement](javascript:call_link\('abapmessage.htm'\)) and the message texts can be read using the interface methods.

If the addition MESSAGE is used, the input parameter TEXTID of the constructor of the exception class must not be filled. This parameter is only designed for specifying a predefined [exception text](javascript:call_link\('abenexception_texts.htm'\)).

Notes

-   The addition MESSAGE cannot be specified after the variant [RAISE EXCEPTION oref](javascript:call_link\('abapraise_exception_class.htm'\)).
    
-   See also [Exception Classes for Messages](javascript:call_link\('abenmessage_exceptions.htm'\)).
    

Using IF\_T100\_DYN\_MSG

The full functions of the addition MESSAGE are available only if the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) is included in the exception class in question. This interface covers the system interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) requested by the syntax check. When an exception class is used with the system interface IF\_T100\_DYN\_MSG, the addition MESSAGE fills its attributes as follows after the instance constructor is executed:

-   The message type specified after MESSAGE is assigned to the attribute MSGTY of the interface IF\_T100\_DYN\_MSG.
    
-   The components of the structured attribute T100KEY of the component interface IF\_T100\_MESSAGE are filled as follows:
    

-   MSGID is assigned the message class specified after MESSAGE.

-   MSGNO is assigned the message number specified after MESSAGE.

-   ATTR1 to ATTR4 are assigned the names IF\_T100\_DYN\_MSG~MSGV1 to IF\_T100\_DYN\_MSG~MSGV4 of the interface attributes for the placeholders of the message. If the addition WITH is not specified, ATTR1 to ATTR4 are kept initial.

-   The attributes MSGV1 to MSGV4 of the interface IF\_T100\_DYN\_MSG are assigned the texts specified using WITH.
    

Notes

-   If IF\_T100\_DYN\_MSG is used, the addition MESSAGE assigns the correct values to all required attributes of the exception class to associate them with the message. More specifically, the attributes for the placeholders of the message are mapped to the structure T100KEY of the interface IF\_T100\_MESSAGE automatically.
    
-   In exception classes with the interface IF\_T100\_DYN\_MSG, MESSAGE used together with the EXPORTING addition can produce unexpected results in the placeholder texts if the addition WITH is not specified. Implicit assignments of the input parameters specified after EXPORTING to the components ATTR1 to ATTR4 are intended for exception classes with the interface IF\_T100\_MESSAGE where WITH cannot be specified (see the [executable example](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))). Implicit assignments of the names of the input parameters or of initial values can be prevented by specifying WITH with a dummy value space.
    

Example

Raises the exception CX\_DEMO\_DYN\_T100 that includes the interface IF\_T100\_DYN\_MSG. The addition MESSAGE is used to pass the attributes of a message that determines the exception text.

TRY.
    RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
      MESSAGE ID 'SABAPDEMOS'
      TYPE 'I'
      NUMBER '888'
      WITH 'Message'.
  CATCH cx\_demo\_dyn\_t100 INTO DATA(oref).
    cl\_demo\_output=>display( oref->get\_text( ) &&
                             \`, \` && oref->msgty ).
ENDTRY.

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](javascript:call_link\('abenraise_message_abexa.htm'\))
    
-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](javascript:call_link\('abenraise_message_global_abexa.htm'\))
    
-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](javascript:call_link\('abenraise_error_message_abexa.htm'\))
    

Using IF\_T100\_MESSAGE

If only the system interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) is included, the addition WITH must not be used and only a restricted set of functions is available. When an exception class is used that includes only the system interface IF\_T100\_MESSAGE, the addition MESSAGE fills its attributes as follows after the instance constructor is executed:

-   If specified, message types are ignored.
    
-   The components of the structured attribute T100KEY of the component interface IF\_T100\_MESSAGE are filled as follows:
    

-   MSGID is assigned the message class specified after MESSAGE.

-   MSGNO is assigned the message number specified after MESSAGE.

-   ATTR1 to ATTR4 are assigned the names of the first four input parameters of the instance constructors specified after EXPORTING that can be converted to a character-like target field, in the order given. Components that cannot be assigned input parameters are initialized.

Notes

-   It is recommended that the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) is used for exceptions raised using the addition MESSAGE.
    
-   The use of the addition MESSAGE for an exception class with [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) is designed for cases where existing exception classes that cannot be switched to [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) need to be used.
    
-   The addition MESSAGE is suitable for existing exception classes with [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) that already have a generic [exception text](javascript:call_link\('abenexception_texts.htm'\)) without semantic meaning. Until now, structures of the type SCX\_T100KEY, filled in the program, had to be passed to exceptions of this type.
    
-   The use of the addition MESSAGE is not recommended for an exception class with [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) whose exception texts all have a fixed semantic meaning.
    

Executable Example

[System Interface IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))

Variant 2

... USING MESSAGE ...

Effect

This variant is a short form of the preceding variant of the MESSAGE addition. It can be used if the exception class of the raised exception includes the [system interface](javascript:call_link\('abenmessage_interfaces.htm'\)) [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)), and has the following effect:

... MESSAGE ID     sy-msgid
            TYPE   sy-msgty
            NUMBER sy-msgno
            WITH   sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4 ...

The addition USING MESSAGE implicitly passes the specification of the message that is saved during the execution of the statement in the system fields sy-msgid, sy-msgty sy-msgno, and sy-msgv1 to sy-msgv4 to the exception class.

Note

The short form is particularly well suited to converting classic exceptions that are raised in function modules or methods with the statement [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)), or messages that are caught with [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)), into class-based exceptions.

Example

Raises the exception CX\_DEMO\_DYN\_T100 that includes the interface IF\_T100\_DYN\_MSG. The addition USING MESSAGE implicitly passes the attributes of a [status message](javascript:call_link\('abenstatus_message_glosry.htm'\) "Glossary Entry") that was output with the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)).

MESSAGE ID 'SABAPDEMOS' TYPE 'S'
        NUMBER '888'
        WITH 'Message'.
TRY.
    RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE.
  CATCH cx\_demo\_dyn\_t100 INTO DATA(oref).
    cl\_demo\_output=>display( oref->get\_text( ) &&
                             \`, \` && oref->msgty ).
ENDTRY.

Executable Examples

-   [Converting a Classic Example to a Class-Based Exception](javascript:call_link\('abenraise_message_glbl_shrt_abexa.htm'\))
    
-   [Converting the Exception error\_message to a Class-Based Exception](javascript:call_link\('abenraise_error_message_shrt_abexa.htm'\))
    

Continue
![Example](exa.gif "Example") [Converting a Classic Example to a Class-Based Exception](javascript:call_link\('abenraise_message_glbl_shrt_abexa.htm'\))
![Example](exa.gif "Example") [Converting the Exception error\_message to a Class-Based Exception](javascript:call_link\('abenraise_error_message_shrt_abexa.htm'\))