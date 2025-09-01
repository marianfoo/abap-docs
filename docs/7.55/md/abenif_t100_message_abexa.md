---
title: "This example demonstrates how a regular class is associated with a message"
description: |
  Source Code REPORT demo_if_t100_message. CLASS msg DEFINITION. PUBLIC SECTION. INTERFACES if_t100_message. ALIASES: get_text FOR if_message~get_text, get_longtext FOR if_message~get_longtext. METHODS constructor IMPORTING id TYPE symsgid no TYPE symsgno v1 TYPE string OPTIONAL v2 TYPE str
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_message_abexa.htm"
abapFile: "abenif_t100_message_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenif", "t100", "message", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_message.htm) → 

Messages - IF\_T100\_MESSAGE in a Regular Class

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

Objects in the example class msg can represent any messages from the table T100 and be used in the statement [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm). The four attributes ATTR1 to ATTR4 stand for the content of four placeholders. The constructor provides input parameters for all necessary values. In the constructor, the message class and the message number are written directly to the associated components of the interface structure T100KEY. The identically named attributes are assigned to the components ATTR1 to ATTR4 and filled with the passed values.

Once the class is instantiated, the message text is filled using the interface method GET\_TEXT, which is implemented in an appropriate way in the class and which has an alias name declared. The object of the class is used directly as an operand of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmessage.htm). A message type must be specified here.

Hint

See also the executable example [System Interface IF\_T100\_DYN\_MSG in Regular Class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_dyn_msg_abexa.htm).