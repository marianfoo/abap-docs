  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) →  [RAISE EXCEPTION - message](javascript:call_link\('abapraise_exception_message.htm'\)) → 

Converting the Exception error\_message to a Class-Based Exception

The example demonstrates the short form of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) with the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)).

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

The example has exactly the same functionality as the executable example [IF\_T100\_DYN\_MSG for the exception error\_message](javascript:call_link\('abenraise_error_message_abexa.htm'\)). Here, the addition [USING MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) is used, which explicitly passes the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 to the corresponding additions of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)).