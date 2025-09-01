---
title: "Converting a Classic Example to a Class-Based Exception"
description: |
  The example demonstrates the short form of the statement RAISE EXCEPTION(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) with the addition MESSAGE(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm). Source Code RE
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenraise_message_glbl_shrt_abexa.htm"
abapFile: "abenraise_message_glbl_shrt_abexa.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "exception-handling", "abenraise", "message", "glbl", "shrt", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexceptions.htm) →  [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) →  [RAISE EXCEPTION, message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) → 

Converting a Classic Example to a Class-Based Exception

The example demonstrates the short form of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm) with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm).

Source Code

REPORT demo\_raise\_message\_global\_shrt.
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
          RAISE EXCEPTION TYPE cx\_demo\_dyn\_t100 USING MESSAGE.
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

The example has exactly the same functionality as the executable example [IF\_T100\_DYN\_MSG in a global exception](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenraise_message_global_abexa.htm). Here, the addition [USING MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_message.htm) is used, which explicitly passes the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 to the corresponding additions of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapraise_exception_class.htm).