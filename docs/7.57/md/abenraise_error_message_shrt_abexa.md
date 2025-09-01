  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions.htm) →  [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) →  [RAISE EXCEPTION, message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Converting the Exception error_message to a Class-Based Exception, ABENRAISE_ERROR_ME
SSAGE_SHRT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Converting the Exception error\_message to a Class-Based Exception

The example demonstrates the short form of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm).

Source Code   

REPORT demo\_raise\_error\_message\_shrt.
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
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE.
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

The example has exactly the same functionality as the executable example [IF\_T100\_DYN\_MSG for the exception error\_message](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_error_message_abexa.htm). Here, the addition [USING MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm) is used, which explicitly passes the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 to the corresponding additions of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm).