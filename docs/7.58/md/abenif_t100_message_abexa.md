  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_message.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_MESSAGE%20in%20a%20Regular%20Class%2C%20ABENIF_T100_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Messages - IF\_T100\_MESSAGE in a Regular Class

This example demonstrates how a regular class is linked with a message

Source Code   

\* Public class definition
CLASS cl\_demo\_if\_t100\_message DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
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
\* Public class implementation
CLASS cl\_demo\_if\_t100\_message IMPLEMENTATION.
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
    FINAL(mref) = NEW msg( id = CONV #( id )
                          no = CONV #( no )
                          v1 = v1
                          v2 = v2
                          v3 = v3
                          v4 = v4 ).
    out->write( mref->get\_text( ) ).
    "MESSAGE mref TYPE 'I'.
  ENDMETHOD.
ENDCLASS.

Description   

Objects in the example class msg shown here can represent any messages from the table T100 and can be used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm). There are four attributes ATTR1 to ATTR4 for the content of four placeholders. The constructor provides input parameters for all necessary values. In the constructor, the message class and the message number are written directly to the associated components of the interface structure T100KEY. The identically named attributes are assigned to the components ATTR1 to ATTR4 and filled with the passed values.

After the class is instantiated, the message text is obtained using the interface method GET\_TEXT, which is implemented appropriately in the class and for which an alias name is declared. The object of the class can be used directly as an operand of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmessage.htm) in ABAP language versions where that syntax is allowed. The message type is not stored as an attribute of the class but must be specified in the calling method.

Hint

See also the executable example [System Interface IF\_T100\_DYN\_MSG in Regular Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg_abexa.htm).