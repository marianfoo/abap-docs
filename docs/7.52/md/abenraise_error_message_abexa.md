  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [System Interfaces for Messages](javascript:call_link\('abenmessage_interfaces.htm'\)) →  [System Interface IF\_T100\_DYN\_MSG for Messages](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) → 

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

This example works in basically the same way as the [executable example](javascript:call_link\('abenraise_message_global_abexa.htm'\)) when transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](javascript:call_link\('abapcall_function_parameter.htm'\)) is transformed.

Note

See also the executable [example](javascript:call_link\('abenraise_error_message_shrt_abexa.htm'\)) for using a short form of statement [RAISE EXCEPTION MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)).