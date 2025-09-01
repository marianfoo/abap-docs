# ABAP - Keyword Documentation / ABAP - Reference / Text Repositories / Messages / System Interfaces for Messages

Included pages: 13


### abenmessage_interfaces.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) → 

System Interfaces for Messages

-   [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm)

-   [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm)

Note

The system interfaces for messages are designed mainly for [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) and [exception classes for messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_exceptions.htm).

Continue
[System Interface IF\_T100\_MESSAGE for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm)
[System Interface IF\_T100\_DYN\_MSG for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm)


### abenif_t100_message.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_MESSAGE for Messages

The interface IF\_T100\_MESSAGE associates classes with [messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry"). To do this, IF\_T100\_MESSAGE contains a structured attribute T100KEY of the type SCX\_T100KEY, which specifies a [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") in the table T100:

-   The component MSGID contains the [message class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_class_glosry.htm "Glossary Entry").

-   The component MSGNO contains the [message number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_number_glosry.htm "Glossary Entry").

-   The components ATTR1 to ATTR4 contain the names of class attributes whose content is used as placeholder texts for any placeholders in the texts of the message.

The message text can be accessed as follows:

-   The interface IF\_T100\_MESSAGE includes the interface IF\_MESSAGE (which should not be used as a standalone interface). This interface contains the methods GET\_TEXT and GET\_LONGTEXT, which can be implemented by a class with the interface IF\_T100\_MESSAGE in such a way that they return the short text and long text of the current message. This can be done using the corresponding methods of the class CL\_MESSAGE\_HELPER.

-   In the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), an [interface reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") of the type IF\_T100\_MESSAGE or a [class reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of a class that implements this interface can be specified to display the message in question.

The statement MESSAGE or the class CL\_MESSAGE\_HELPER evaluate the content of the structure T100KEY here:

-   The components MSGID and MSGNO are scanned by message class and message class for a message. If a message is found, its texts are used. If not, a short text is generated that counts the message class and message number plus the placeholder texts from the assigned class attributes.

-   If they exist, the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message are replaced by the content of the class attributes specified in the components ATTR1 to ATTR4 in accordance with the rules of the addition [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm). If an attribute specified in the components ATTR1 to ATTR4 does not exist or if an attribute cannot be converted to a placeholder text, the character "&" is added to the start and the end of the attribute name and used as a placeholder text. If one of the components ATTR1 to ATTR4 is initial, the corresponding placeholder text is initialized‎.

Notes

-   The interface IF\_T100\_MESSAGE is mainly designed for use with [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) in [exception classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_class_glosry.htm "Glossary Entry"). If the interface is included in regular classes and in local exception classes, the filling of the interface structure T100KEY must be programmed here separately. The implementation of the interface methods GET\_TEXT and GET\_LONGTEXT, however, is already contained in the superclass CX\_ROOT and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure T100KEY and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.

-   The interface IF\_T100\_MESSAGE does not have any attributes for the message type.

-   The interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) adds predefined attributes for the message type and the placeholders of the message to the interface IF\_T100\_MESSAGE. IF\_T100\_MESSAGE is designed for static [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) of exception classes, but IF\_T100\_DYN\_MSG can [associate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_exceptions.htm) any messages with exception classes.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_T100, which binds the interface IF\_T100\_MESSAGE.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_t100(
                     textid = cx\_demo\_t100=>demo
                     text1  = 'Illegal value:'
                     text2  = CONV #( col ) ) ).

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)

Continue
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)


### abenif_t100_message_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_MESSAGE for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) → 

IF\_T100\_MESSAGE in Regular Class

This example demonstrates how a regular class is associated with a message

Source Code

REPORT demo\_if\_t100\_message.
CLASS msg DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_t100\_message.
    ALIASES: get\_text FOR if\_message~get\_text,
             get\_longtext FOR if\_message~get\_longtext.
    METHODS constructor IMPORTING id TYPE symsgid
                                  no TYPE symsgno
                                  v1 TYPE string OPTIONAL
                                  v2 TYPE string OPTIONAL
                                  v3 TYPE string OPTIONAL
                                  v4 TYPE string OPTIONAL.
    DATA: attr1 TYPE c LENGTH 50,
          attr2 TYPE c LENGTH 50,
          attr3 TYPE c LENGTH 50,
          attr4 TYPE c LENGTH 50.
ENDCLASS.
CLASS msg IMPLEMENTATION.
  METHOD constructor.
    if\_t100\_message~t100key-msgid = id.
    if\_t100\_message~t100key-msgno = no.
    if\_t100\_message~t100key-attr1 = 'ATTR1'.
    if\_t100\_message~t100key-attr2 = 'ATTR2'.
    if\_t100\_message~t100key-attr3 = 'ATTR3'.
    if\_t100\_message~t100key-attr4 = 'ATTR4'.
    attr1 = v1.
    attr2 = v2.
    attr3 = v3.
    attr4 = v4.
  ENDMETHOD.
  METHOD if\_message~get\_text.
    result = cl\_message\_helper=>get\_text\_for\_message( me ).
  ENDMETHOD.
  METHOD if\_message~get\_longtext.
    result = cl\_message\_helper=>get\_longtext\_for\_message( me ).
  ENDMETHOD.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    DATA(id) = \`SABAPDEMOS\`.
    DATA(no) = \`888\`.
    DATA(v1) = \`Hello,\`.
    DATA(v2) = \`I am\`.
    DATA(v3) = \`a\`.
    DATA(v4) = \`Message!\`.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = id
      )->add\_field( CHANGING field = no
      )->add\_field( CHANGING field = v1
      )->add\_field( CHANGING field = v2
      )->add\_field( CHANGING field = v3
      )->add\_field( CHANGING field = v4
      )->request( ).
    DATA(mref) = NEW msg( id = CONV #( id )
                          no = CONV #( no )
                          v1 = v1
                          v2 = v2
                          v3 = v3
                          v4 = v4 ).
    cl\_demo\_output=>display( mref->get\_text( ) ).
    MESSAGE mref TYPE 'I'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

Objects in the example class msg can represent any messages from the table T100 and be used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm). The four attributes ATTR1 to ATTR4 stand for the content of four placeholders. The constructor provides input parameters for all necessary values. In the constructor, the message class and the message number are written directly to the associated components of the interface structure T100KEY. The identically named attributes are assigned to the components ATTR1 to ATTR4 and filled with the passed values.

Once the class is instantiated, the message text is filled using the interface method GET\_TEXT, which is implemented in an appropriate way in the class and which has an alias name declared. The object of the class is used directly as an operand of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm). A message type must be specified here.

Note

See also the executable example [System Interface IF\_T100\_DYN\_MSG in Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg_abexa.htm).


### abenmessage_interface_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_MESSAGE for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) → 

IF\_T100\_MESSAGE in Local Exception Class

This example demonstrates how a local exception class is associated with a message

Source Code

REPORT demo\_message\_oref.
CLASS cx\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_message.
    METHODS constructor IMPORTING id    TYPE symsgid
                                  no    TYPE symsgno
                                  text1 TYPE csequence OPTIONAL
                                  text2 TYPE csequence OPTIONAL
                                  text3 TYPE csequence OPTIONAL
                                  text4 TYPE csequence OPTIONAL.
    DATA text1 TYPE c LENGTH 50.
    DATA text2 TYPE c LENGTH 50.
    DATA text3 TYPE c LENGTH 50.
    DATA text4 TYPE c LENGTH 50.
ENDCLASS.
CLASS cx\_t100 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    me->text1 = text1.
    me->text2 = text2.
    me->text3 = text3.
    me->text4 = text4.
    if\_t100\_message~t100key-msgid = id.
    if\_t100\_message~t100key-msgno = no.
    if\_t100\_message~t100key-attr1 = 'TEXT1'.
    if\_t100\_message~t100key-attr2 = 'TEXT2'.
    if\_t100\_message~t100key-attr3 = 'TEXT3'.
    if\_t100\_message~t100key-attr4 = 'TEXT4'.
  ENDMETHOD.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_t100 INTO DATA(oref).
        cl\_demo\_output=>display( oref->get\_text( ) ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_t100
      EXPORTING
        id    = 'SABAPDEMOS'
        no    = '888'
        text1 = 'I'
        text2 = 'am'
        text3 = 'an'
        text4 = 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

The functional method meth raises an exception from the local exception class cx\_t100 that implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm). When the exception is raised, the constructor is given a message class, a message number, and values for the placeholders of the message.

The constructor of the local exception class cx\_t100 fills the attribute T100KEY of the interface IF\_T100\_MESSAGE with the values passed. In this way, the exception class represents the passed message from the table T100 in which the placeholders "&" are replaced with the content of the attributes text1 to text4.

The method main catches the exception in the reference variable oref and indicates the following:

-   The exception text can be filled using the method GET\_TEXT of the component interface IF\_MESSAGE in the interface IF\_T100\_MESSAGE. The implementation of the method GET\_TEXT is in the superclass CX\_ROOT, which includes the interface IF\_MESSAGE.

-   The reference variable can be used directly as an operand of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm).

See also the executable examples listed below.

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)


### abenmessage_interface_global_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_MESSAGE for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) → 

IF\_T100\_MESSAGE in Global Exception Class

This example demonstrates how a global exception class is associated with a message

Source Code

REPORT demo\_message\_oref\_global.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_demo\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_demo\_t100 INTO DATA(oref).
        cl\_demo\_output=>display( oref->get\_text( ) ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_demo\_t100
      EXPORTING
        textid = cx\_demo\_t100=>demo
        text1  = 'I'
        text2  = 'am'
        text3  = 'an'
        text4  = 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This executable example works in the same way as the example in [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm). Here, however, the interface IF\_T100\_MESSAGE is included in the global [exception class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_class_glosry.htm "Glossary Entry") CX\_DEMO\_T100. The association with a message class was made at the same time as the class was created. This dictates that the exception class is generated in such a way that it supports messages as [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm), rather than merely including the interface IF\_T100\_MESSAGE.

On the tab Texts in [Class Builder](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_builder_glosry.htm "Glossary Entry"), the message 888 from the message class SABAPDEMOS is assigned to the exception text DEMO of the exception class under Message Text. The placeholders of the message are associated with the attributes TEXT1 to TEXT4. The source text of the public section of the class implements this assignment using the structured constant DEMO with the type SCX\_T100KEY. The constructor has an input parameter TEXTID that can be passed the constant DEMO and the input parameters TEXT1 to TEXT4 used to fill the attributes with the same names.

A structure passed to the input parameter TEXTID when an exception from this class is raised is assigned to the structure T100KEY of the interface IF\_T100\_MESSAGE. This uses the corresponding message as an exception text. It is recommended that only the predefined constants of the class are passed, as shown here.

See also the executable examples listed below.

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)


### abenmessage_interface_reuse_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_MESSAGE for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) → 

IF\_T100\_MESSAGE for Exception with Message

This example demonstrates the [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) addition when an exception is raised using IF\_T100\_MESSAGE.

Source Code

REPORT demo\_raise\_message\_reuse\_attr.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth EXCEPTIONS exception.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_t100
            MESSAGE ID sy-msgid
                    NUMBER sy-msgno
            EXPORTING text1 = conv #( sy-msgv1 )
                      text2 = conv #( sy-msgv2 )
                      text3 = conv #( sy-msgv3 )
                      text4 = conv #( sy-msgv4 ).
        ENDIF.
      CATCH cx\_demo\_t100 INTO DATA(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }"| ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'
                             RAISING exception.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example demonstrates the transformation of a non-class-based exception raised in a method using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) and, when the method is called, handled using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm) to a class-based exception. It uses the exception CX\_DEMO\_T100 from the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm) for the system interface IF\_T100\_MESSAGE in a global exception class, which includes only the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) and not [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm).

The properties of the message sent using MESSAGE RAISING are available in the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 after the exception is caught.

-   sy-msgid and sy-msgno are used after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) to associate the exception object with the message.

-   sy-msgv1 to sy-msgv4 are assigned to the input parameters of the instance constructor, which themselves are assigned to the identically named attributes.

-   sy-msgty cannot be passed further in this case.

The [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm) for the system interface IF\_T100\_DYN\_MSG in a global exception demonstrates how all properties of the message can be specified after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm).


### abenif_t100_message.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_MESSAGE for Messages

The interface IF\_T100\_MESSAGE associates classes with [messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry"). To do this, IF\_T100\_MESSAGE contains a structured attribute T100KEY of the type SCX\_T100KEY, which specifies a [message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_glosry.htm "Glossary Entry") in the table T100:

-   The component MSGID contains the [message class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_class_glosry.htm "Glossary Entry").

-   The component MSGNO contains the [message number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_number_glosry.htm "Glossary Entry").

-   The components ATTR1 to ATTR4 contain the names of class attributes whose content is used as placeholder texts for any placeholders in the texts of the message.

The message text can be accessed as follows:

-   The interface IF\_T100\_MESSAGE includes the interface IF\_MESSAGE (which should not be used as a standalone interface). This interface contains the methods GET\_TEXT and GET\_LONGTEXT, which can be implemented by a class with the interface IF\_T100\_MESSAGE in such a way that they return the short text and long text of the current message. This can be done using the corresponding methods of the class CL\_MESSAGE\_HELPER.

-   In the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), an [interface reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") of the type IF\_T100\_MESSAGE or a [class reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of a class that implements this interface can be specified to display the message in question.

The statement MESSAGE or the class CL\_MESSAGE\_HELPER evaluate the content of the structure T100KEY here:

-   The components MSGID and MSGNO are scanned by message class and message class for a message. If a message is found, its texts are used. If not, a short text is generated that counts the message class and message number plus the placeholder texts from the assigned class attributes.

-   If they exist, the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message are replaced by the content of the class attributes specified in the components ATTR1 to ATTR4 in accordance with the rules of the addition [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm). If an attribute specified in the components ATTR1 to ATTR4 does not exist or if an attribute cannot be converted to a placeholder text, the character "&" is added to the start and the end of the attribute name and used as a placeholder text. If one of the components ATTR1 to ATTR4 is initial, the corresponding placeholder text is initialized‎.

Notes

-   The interface IF\_T100\_MESSAGE is mainly designed for use with [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) in [exception classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_class_glosry.htm "Glossary Entry"). If the interface is included in regular classes and in local exception classes, the filling of the interface structure T100KEY must be programmed here separately. The implementation of the interface methods GET\_TEXT and GET\_LONGTEXT, however, is already contained in the superclass CX\_ROOT and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure T100KEY and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.

-   The interface IF\_T100\_MESSAGE does not have any attributes for the message type.

-   The interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) adds predefined attributes for the message type and the placeholders of the message to the interface IF\_T100\_MESSAGE. IF\_T100\_MESSAGE is designed for static [exception texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_texts.htm) of exception classes, but IF\_T100\_DYN\_MSG can [associate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_exceptions.htm) any messages with exception classes.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_T100, which binds the interface IF\_T100\_MESSAGE.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_t100(
                     textid = cx\_demo\_t100=>demo
                     text1  = 'Illegal value:'
                     text2  = CONV #( col ) ) ).

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)

Continue
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm)


### abenif_t100_dyn_msg.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_DYN\_MSG for Messages

The interface IF\_T100\_DYN\_MSG contains the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) as a component interface and adds the following to it:

-   The attribute MSGTY for the message type

-   The attributes MSGV1 to MSGV4 for the placeholders of the message

Like IF\_T100\_MESSAGE, the interface IF\_T100\_DYN\_MSG associates classes with messages, with the attributes for the message type and placeholders of the message being predefined.

Notes

-   The interface IF\_T100\_DYN\_MSG is designed specifically for raising class-based exceptions with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in [conditional expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm). The properties of the message specified after MESSAGE are assigned automatically to the associated attributes in [exception classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_classes.htm) that include IF\_T100\_DYN\_MSG.

-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) to RAISE EXCEPTION and/or THROW has a short form USING MESSAGE. This can be used for exception classes with the interface IF\_T100\_DYN\_MSG and enables determining the message from the current content of system fields sy-msg.... The short form can be used for transforming classical exceptions in class-based exceptions.

-   If the object reference variable oref points to an object that includes the system interface IF\_T100\_DYN\_MSG in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_DYN\_T100, which binds the interface IF\_T100\_DYN\_MSG.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_dyn\_t100(
                     MESSAGE e888(sabapdemos)
                       WITH 'Illegal value:' col ) ).

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_abexa.htm)

Continue
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_abexa.htm)


### abenif_t100_dyn_msg_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_DYN\_MSG for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) → 

IF\_T100\_DYN\_MSG in a Regular Class

This example demonstrates how a regular class is associated with a message

Source Code

REPORT demo\_if\_t100\_dyn\_msg.
CLASS msg DEFINITION.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES: msgty FOR if\_t100\_dyn\_msg~msgty,
             get\_text FOR if\_message~get\_text,
             get\_longtext FOR if\_message~get\_longtext.
    METHODS constructor IMPORTING id TYPE symsgid
                                  no TYPE symsgno
                                  ty TYPE symsgty
                                  v1 TYPE string OPTIONAL
                                  v2 TYPE string OPTIONAL
                                  v3 TYPE string OPTIONAL
                                  v4 TYPE string OPTIONAL.
ENDCLASS.
CLASS msg IMPLEMENTATION.
  METHOD constructor.
    if\_t100\_message~t100key-msgid = id.
    if\_t100\_message~t100key-msgno = no.
    if\_t100\_dyn\_msg~msgty = ty.
    if\_t100\_message~t100key-attr1 = 'IF\_T100\_DYN\_MSG~MSGV1'.
    if\_t100\_message~t100key-attr2 = 'IF\_T100\_DYN\_MSG~MSGV2'.
    if\_t100\_message~t100key-attr3 = 'IF\_T100\_DYN\_MSG~MSGV3'.
    if\_t100\_message~t100key-attr4 = 'IF\_T100\_DYN\_MSG~MSGV4'.
    if\_t100\_dyn\_msg~msgv1 = v1.
    if\_t100\_dyn\_msg~msgv2 = v2.
    if\_t100\_dyn\_msg~msgv3 = v3.
    if\_t100\_dyn\_msg~msgv4 = v4.
  ENDMETHOD.
  METHOD if\_message~get\_text.
    result = cl\_message\_helper=>get\_text\_for\_message( me ).
  ENDMETHOD.
  METHOD if\_message~get\_longtext.
    result = cl\_message\_helper=>get\_longtext\_for\_message( me ).
  ENDMETHOD.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    DATA(id) = \`SABAPDEMOS\`.
    DATA(no) = \`888\`.
    DATA(ty) = \`I\`.
    DATA(v1) = \`Hello,\`.
    DATA(v2) = \`I am\`.
    DATA(v3) = \`a\`.
    DATA(v4) = \`Message!\`.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = id
      )->add\_field( CHANGING field = no
      )->add\_field( CHANGING field = ty
      )->add\_field( CHANGING field = v1
      )->add\_field( CHANGING field = v2
      )->add\_field( CHANGING field = v3
      )->add\_field( CHANGING field = v4
      )->request( ).
    IF strlen( ty ) > 1 OR 'AEISX' NS ty.
      cl\_demo\_output=>display(
        |Invalid message type: { ty }|  ).
      RETURN.
    ENDIF.
    DATA(mref) = NEW msg( id = CONV #( id )
                          no = CONV #( no )
                          ty = CONV #( ty )
                          v1 = v1
                          v2 = v2
                          v3 = v3
                          v4 = v4 ).
    cl\_demo\_output=>display(
      |{ mref->get\_text( ) }, Type: { mref->msgty }| ).
    MESSAGE mref TYPE 'I' DISPLAY LIKE mref->msgty.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example applies the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message_abexa.htm) for the interface IF\_T100\_MESSAGE to the interface IF\_T100\_DYN\_MSG directly. If IF\_T100\_DYN\_MSG is used, it is no longer necessary to create separate attributes for the placeholders of the message. The attributes of the interface are used instead. Furthermore, a message type can be saved and evaluated in the interface attribute msgty. If IF\_T100\_MESSAGE is used, a separate attribute must be declared here.


### abenraise_message_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_DYN\_MSG for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) → 

IF\_T100\_DYN\_MSG in a Local Exception Class

This example demonstrates how a local exception class is associated with a message

Source Code

REPORT demo\_raise\_message.
CLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES msgty FOR if\_t100\_dyn\_msg~msgty.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_dyn\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_dyn\_t100 INTO DATA(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_dyn\_t100
          MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example applies the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_abexa.htm) for the interface IF\_T100\_MESSAGE to the interface IF\_T100\_DYN\_MSG directly. The local class cx\_dyn\_t100 includes the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) is used to raise the exception in the method meth.

Unlike when using [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm), no separate attributes for the placeholders of the message and no implementation of the instance constructor are required in cx\_dyn\_t100. Furthermore, the message type is passed in an attribute of the exception object when IF\_T100\_DYN\_MSG is used. An alias name is used here.


### abenraise_message_global_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_DYN\_MSG for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) → 

IF\_T100\_DYN\_MSG in a Global Exception Class

This example demonstrates how a global exception class is associated with a message

Source Code

REPORT demo\_raise\_message\_global.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth EXCEPTIONS exception.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
            MESSAGE ID sy-msgid
                    TYPE sy-msgty
                    NUMBER sy-msgno
                    WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO DATA(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'
                             RAISING exception.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example demonstrates the transformation of a non-class-based exception raised in a method using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_raising.htm) and, when the method is called, handled using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm) to a class-based exception. This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interface_reuse_abexa.htm) for the system interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm), but uses the class CX\_DEMO\_DYN\_T100, which includes the system interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm).

-   In both cases, sy-msgid and sy-msgno can be used after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) to associate the exception object with the message.

-   sy-msgv1 to sy-msgv4 can be specified after [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) and are assigned here to the interface attributes MSGV1 to MSGV4 automatically.

-   sy-msgty can also be passed further here using [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm).

Note

See also the executable [example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_glbl_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm).


### abenraise_error_message_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) →  [System Interface IF\_T100\_DYN\_MSG for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg.htm) → 

IF\_T100\_DYN\_MSG for Exception error\_message

This example demonstrates how a caught message of a function module is forwarded.

Source Code

REPORT demo\_raise\_error\_message.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE'
          EXPORTING
            message\_type  = 'A'
            message\_place = 'in Function Module'
            message\_event = 'START-OF-SELECTION'
          EXCEPTIONS
            error\_message = 4.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
            MESSAGE ID sy-msgid
            TYPE sy-msgty
            NUMBER sy-msgno
            WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO DATA(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in basically the same way as the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm) when transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function_parameter.htm) is transformed.

Note

See also the executable [example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm).


### abenif_t100_dyn_msg.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_DYN\_MSG for Messages

The interface IF\_T100\_DYN\_MSG contains the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_message.htm) as a component interface and adds the following to it:

-   The attribute MSGTY for the message type

-   The attributes MSGV1 to MSGV4 for the placeholders of the message

Like IF\_T100\_MESSAGE, the interface IF\_T100\_DYN\_MSG associates classes with messages, with the attributes for the message type and placeholders of the message being predefined.

Notes

-   The interface IF\_T100\_DYN\_MSG is designed specifically for raising class-based exceptions with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) in [conditional expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expressions.htm). The properties of the message specified after MESSAGE are assigned automatically to the associated attributes in [exception classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_classes.htm) that include IF\_T100\_DYN\_MSG.

-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_exception_message.htm) to RAISE EXCEPTION and/or THROW has a short form USING MESSAGE. This can be used for exception classes with the interface IF\_T100\_DYN\_MSG and enables determining the message from the current content of system fields sy-msg.... The short form can be used for transforming classical exceptions in class-based exceptions.

-   If the object reference variable oref points to an object that includes the system interface IF\_T100\_DYN\_MSG in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmessage.htm), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_DYN\_T100, which binds the interface IF\_T100\_DYN\_MSG.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_dyn\_t100(
                     MESSAGE e888(sabapdemos)
                       WITH 'Illegal value:' col ) ).

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_abexa.htm)

Continue
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenif_t100_dyn_msg_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_message_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_error_message_abexa.htm)
