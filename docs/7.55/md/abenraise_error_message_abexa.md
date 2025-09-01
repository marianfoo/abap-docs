---
title: "Source Code"
description: |
  REPORT demo_raise_error_message. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TRY. CALL FUNCTION 'DEMO_FUNCTION_MESSAGE' EXPORTING message_type  = 'A' message_place = 'in Function Module' message_event = 'START-OF-SELECTION' EXC
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenraise_error_message_abexa.htm"
abapFile: "abenraise_error_message_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abenraise", "error", "message", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenif_t100_dyn_msg.htm) → 

Messages - IF\_T100\_DYN\_MSG for Exception error\_message

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

This example works in basically the same way as the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenraise_message_global_abexa.htm) when transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_parameter.htm) is transformed.

Hint

See also the executable [example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenraise_error_message_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_message.htm).