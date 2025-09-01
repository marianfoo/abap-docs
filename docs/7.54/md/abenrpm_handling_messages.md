---
title: "Example - Handling of Messages"
description: |
  Example For the sake of readability, the methods for handling the messages are implemented in the separate class zcl_messages. These methods are used to handle the messages in the methods of the handler class. Messages that come from the legacy business logic must be assigned to the messages of the
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handling_messages.htm"
abapFile: "abenrpm_handling_messages.htm"
keywords: ["insert", "update", "loop", "do", "if", "method", "class", "data", "types", "abenrpm", "handling", "messages"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Handler Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm) → 

Example - Handling of Messages

Example

For the sake of readability, the methods for handling the messages are implemented in the separate class zcl\_messages. These methods are used to handle the messages in the methods of the handler class.

Messages that come from the legacy business logic must be assigned to the messages of the business object Travel. This is implemented in the method map\_travel\_message.

CLASS zcl\_messages DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES:
      ts\_travel\_control\_map TYPE STRUCTURE FOR UPDATE /DMO/I\_Travel,
      tt\_travel\_reported    TYPE TABLE FOR REPORTED   /DMO/I\_Travel,
      tt\_travel\_failed      TYPE TABLE FOR FAILED     /DMO/I\_Travel.
    CLASS-METHODS:
      handle\_messages
        IMPORTING
          iv\_cid       TYPE abp\_behv\_cid   OPTIONAL
          iv\_travel\_id TYPE /dmo/travel\_id OPTIONAL
          it\_messages  TYPE /dmo/if\_flight\_legacy=>tt\_message
        CHANGING
          failed       TYPE tt\_travel\_failed
          reported     TYPE tt\_travel\_reported,
      map\_travel\_message
        IMPORTING
          iv\_cid           TYPE string OPTIONAL
          iv\_travel\_id     TYPE /dmo/travel\_id OPTIONAL
          is\_message       TYPE LINE OF
            /dmo/if\_flight\_legacy=>tt\_message
        RETURNING VALUE(rs\_report) TYPE LINE OF tt\_travel\_reported,
      map\_travel\_control
        IMPORTING
          is\_travel         TYPE ts\_travel\_control\_map
        RETURNING VALUE(rs\_travelx) TYPE
           /dmo/if\_flight\_legacy=>ts\_travel\_inx.
  PROTECTED SECTION.
  PRIVATE SECTION.
    CLASS-METHODS:
      new\_message
        IMPORTING
          id         TYPE symsgid
          number     TYPE symsgno
          severity   TYPE if\_abap\_behv\_message=>t\_severity
          v1         TYPE simple OPTIONAL
          v2         TYPE simple OPTIONAL
          v3         TYPE simple OPTIONAL
          v4         TYPE simple OPTIONAL
        RETURNING VALUE(obj) TYPE REF TO if\_abap\_behv\_message.
ENDCLASS.

CLASS zcl\_messages IMPLEMENTATION.
  METHOD handle\_messages.
    LOOP AT it\_messages INTO DATA(ls\_message)
         WHERE msgty = 'E' OR msgty = 'A'.
      INSERT VALUE #(
             %cid         = iv\_cid
             travel\_id    = iv\_travel\_id )
         INTO TABLE failed.
      INSERT map\_travel\_message(
             iv\_travel\_id = iv\_travel\_id
             is\_message   = ls\_message )
         INTO TABLE reported.
    ENDLOOP.
  ENDMETHOD.
  METHOD map\_travel\_control.
    rs\_travelx-travel\_id     = is\_travel-travel\_id.
    rs\_travelx-agency\_id     = xsdbool(
      is\_travel-%control-agency\_id     = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-customer\_id   = xsdbool(
      is\_travel-%control-customer\_id   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-begin\_date    = xsdbool(
      is\_travel-%control-begin\_date    = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-end\_date      = xsdbool(
      is\_travel-%control-end\_date      = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-booking\_fee   = xsdbool(
      is\_travel-%control-booking\_fee   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-total\_price   = xsdbool(
      is\_travel-%control-total\_price   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-currency\_code = xsdbool(
      is\_travel-%control-currency\_code = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-description   = xsdbool(
      is\_travel-%control-description   = cl\_abap\_behv=>flag\_changed ).
    rs\_travelx-status        = xsdbool(
      is\_travel-%control-status        = cl\_abap\_behv=>flag\_changed ).
ENDMETHOD.
  METHOD map\_travel\_message.
    DATA(lo) = new\_message(
      id       = is\_message-msgid
      number   = is\_message-msgno
      severity = if\_abap\_behv\_message=>severity-error
      v1       = is\_message-msgv1
      v2       = is\_message-msgv2
      v3       = is\_message-msgv3
      v4       = is\_message-msgv4 ).
    rs\_report-%cid      = iv\_cid.
    rs\_report-travel\_id = iv\_travel\_id.
    rs\_report-%msg      = lo.
  ENDMETHOD.
  METHOD new\_message.
    obj = NEW lcl\_abap\_behv\_msg(
      textid = VALUE #(
        msgid = id
        msgno = number
        attr1 = COND #( WHEN v1 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV1' )
        attr2 = COND #( WHEN v2 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV2' )
        attr3 = COND #( WHEN v3 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV3' )
        attr4 = COND #( WHEN v4 IS NOT INITIAL
                        THEN 'IF\_T100\_DYN\_MSG~MSGV4' ))
      msgty = SWITCH #( severity
        WHEN if\_abap\_behv\_message=>severity-error       THEN 'E'
        WHEN if\_abap\_behv\_message=>severity-warning     THEN 'W'
        WHEN if\_abap\_behv\_message=>severity-information THEN 'I'
        WHEN if\_abap\_behv\_message=>severity-success     THEN 'S' )
      msgv1 = |{ v1 }|
      msgv2 = |{ v2 }|
      msgv3 = |{ v3 }|
      msgv4 = |{ v4 }| ).
    obj->m\_severity = severity.
  ENDMETHOD.
ENDCLASS.