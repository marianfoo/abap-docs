  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - System Interfaces](javascript:call_link\('abenmessage_interfaces.htm'\)) →  [Messages - System Interface IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) → 

Messages - IF\_T100\_DYN\_MSG in a Local Exception Class

This example demonstrates how a local exception class is linked with a message

Source Code

REPORT demo\_raise\_message.
CLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES msgty FOR if\_t100\_dyn\_msg~msgty.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_dyn\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_dyn\_t100 INTO DATA(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_dyn\_t100
          MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example applies the [executable example](javascript:call_link\('abenmessage_interface_abexa.htm'\)) for the interface IF\_T100\_MESSAGE directly to the interface IF\_T100\_DYN\_MSG. The local class cx\_dyn\_t100 implements the interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) and the addition [MESSAGE](javascript:call_link\('abapraise_exception_message.htm'\)) of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) is used to raise the exception in the method meth.

Unlike when using [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)), no separate attributes for the placeholders of the message and no implementation of the instance constructor are required in cx\_dyn\_t100. Furthermore, the message type is passed in an attribute of the exception object when IF\_T100\_DYN\_MSG is used. An alias name is introduced for this attribute here.