---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_raise_error_message DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_raise_error_message IMPLEMENTATION. METHOD main. TRY. CALL FUNCTI
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_error_message_abexa.htm"
abapFile: "abenraise_error_message_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "abenraise", "error", "message", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20for%20Exception%20error_message%2C%20ABENRAISE_ERROR_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

Messages - IF\_T100\_DYN\_MSG for Exception error\_message

This example demonstrates how a caught message of a function module is forwarded.

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_error\_message DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_error\_message IMPLEMENTATION.
  METHOD main.
    TRY.
        CALL FUNCTION 'DEMO\_FUNCTION\_MESSAGE'
          EXPORTING
            message\_type  = 'A'
            message\_place = 'in Function Module'
            message\_event = 'Method MAIN'
          EXCEPTIONS
            error\_message = 4.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100
            MESSAGE ID sy-msgid
            TYPE sy-msgty
            NUMBER sy-msgno
            WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example works in basically the same way as the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_message_global_abexa.htm) for transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function_parameter.htm) is transformed.

Hint

See also the executable [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_error_message_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm).