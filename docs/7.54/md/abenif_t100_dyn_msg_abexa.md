  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [System Interfaces for Messages](javascript:call_link\('abenmessage_interfaces.htm'\)) →  [System Interface IF\_T100\_DYN\_MSG for Messages](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) → 

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

This example applies the [executable example](javascript:call_link\('abenif_t100_message_abexa.htm'\)) for the interface IF\_T100\_MESSAGE to the interface IF\_T100\_DYN\_MSG directly. If IF\_T100\_DYN\_MSG is used, it is no longer necessary to create separate attributes for the placeholders of the message. The attributes of the interface are used instead. Furthermore, a message type can be saved and evaluated in the interface attribute msgty. If IF\_T100\_MESSAGE is used, a separate attribute must be declared here.