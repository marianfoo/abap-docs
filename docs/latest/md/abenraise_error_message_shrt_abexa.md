  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) →  [RAISE EXCEPTION, message](javascript:call_link\('abapraise_exception_message.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Converting%20the%20Exception%20error_message%20to%20a%20Class-Based%20Exception%2C%20ABENRAISE_ERROR_MESSAGE_SHRT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Converting the Exception error\_message to a Class-Based Exception

The example demonstrates the short form of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) with the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_error\_msg\_shrt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_error\_msg\_shrt IMPLEMENTATION.
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
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        "MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The example has exactly the same functionality as the executable example [IF\_T100\_DYN\_MSG for the exception error\_message](javascript:call_link\('abenraise_error_message_abexa.htm'\)). Here, the addition [USING MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) is used, which explicitly passes the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 to the corresponding additions of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).