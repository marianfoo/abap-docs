---
title: "This example demonstrates how a regular class is linked with a message"
description: |
  Source Code  Public class definition CLASS cl_demo_if_t100_dyn_msg DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  CCIMP CLASS msg DEFINITION. PUBLIC SECTION. INTERFACES if_t100_dyn_msg. ALIASES: msgty FOR if_t100
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg_abexa.htm"
abapFile: "abenif_t100_dyn_msg_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenif", "t100", "dyn", "msg", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20in%20a%20Regular%20Class%2C%20ABENIF_T100_DYN_MSG_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

Messages - IF\_T100\_DYN\_MSG in a Regular Class

This example demonstrates how a regular class is linked with a message

Source Code   

\* Public class definition
CLASS cl\_demo\_if\_t100\_dyn\_msg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
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
\* Public class implementation
CLASS cl\_demo\_if\_t100\_dyn\_msg IMPLEMENTATION.
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
      out->write(
        |Invalid message type: { ty }|  ).
      RETURN.
    ENDIF.
    FINAL(mref) = NEW msg( id = CONV #( id )
                           no = CONV #( no )
                           ty = CONV #( ty )
                           v1 = v1
                           v2 = v2
                           v3 = v3
                           v4 = v4 ).
    out->write(
      |{ mref->get\_text( ) }, Type: { mref->msgty }| ).
    "MESSAGE mref TYPE 'I' DISPLAY LIKE mref->msgty.
  ENDMETHOD.
ENDCLASS.

Description   

This example applies the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message_abexa.htm) for the interface IF\_T100\_MESSAGE to the interface IF\_T100\_DYN\_MSG directly. If IF\_T100\_DYN\_MSG is used, it is no longer necessary to create separate attributes for the placeholders of the message. The attributes of the interface are used instead. Furthermore, the message type can be stored and evaluated in the interface attribute msgty. If IF\_T100\_MESSAGE is used, a separate attribute must be declared here. The attribute can then be used in the MESSAGE statement in ABAP language versions where that syntax is allowed.