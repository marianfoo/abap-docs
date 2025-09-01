  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions.htm) →  [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) →  [RAISE EXCEPTION, message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Converting%20a%20Classic%20Exception%20to%20a%20Class-Based%20Exception%2C%20ABENRAISE_MESSAGE_GLBL_SHRT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion%20for%20improvement:)

Converting a Classic Exception to a Class-Based Exception

The example demonstrates the short form of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_msg\_global\_shrt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth EXCEPTIONS exception.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_msg\_global\_shrt IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE.
        ENDIF.
      CATCH cx\_demo\_dyn\_t100 INTO FINAL(oref).
        out->write(
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

Description   

The example has exactly the same functionality as the executable example [IF\_T100\_DYN\_MSG in a global exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenraise_message_global_abexa.htm). Here, the addition [USING MESSAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_message.htm) is used, which explicitly passes the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 to the corresponding additions of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm).