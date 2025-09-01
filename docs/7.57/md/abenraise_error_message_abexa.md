  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - IF_T100_DYN_MSG for Exception error_message, ABENRAISE_ERROR_MESSAGE_ABEXA
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
      CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example works in basically the same way as the [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_global_abexa.htm) for transforming a classic exception raised using MESSAGE RAISING to a class-based exception. Here, however, a message of type A caught using [error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_parameter.htm) is transformed.

Hint

See also the executable [example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_shrt_abexa.htm) for using a short form of statement [RAISE EXCEPTION MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm).