  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - System Interfaces](javascript:call_link\('abenmessage_interfaces.htm'\)) →  [Messages - System Interface IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) → 

Messages - IF\_T100\_DYN\_MSG in a Global Exception Class

This example demonstrates how a global exception class is linked with a message

Source Code

REPORT demo\_raise\_message\_global.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth EXCEPTIONS exception.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
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
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'
                             RAISING exception.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example demonstrates the transformation of a non-class-based exception raised in a method using the statement [MESSAGE RAISING](javascript:call_link\('abapmessage_raising.htm'\)) and, when the method is called, handled using the addition [EXCEPTIONS](javascript:call_link\('abapcall_method_parameters.htm'\)), to a class-based exception. This example works in the same way as the [executable example](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\)) for the system interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)), but uses the class CX\_DEMO\_DYN\_T100, which implements the system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)).

-   In both cases, sy-msgid and sy-msgno can be used after the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) to associate the exception object with the message.
-   sy-msgv1 to sy-msgv4 can be specified after [WITH](javascript:call_link\('abapraise_exception_message.htm'\)) and are automatically assigned to the interface attributes MSGV1 to MSGV4 here.
-   sy-msgty can also be passed here using [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)).

Hint

See also the executable [example](javascript:call_link\('abenraise_message_glbl_shrt_abexa.htm'\)) for using a short form of statement [RAISE EXCEPTION MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)).