  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_DYN_MSG%20in%20a%20Local%20Exception%20Class%2C%20ABENRAISE_MESSAGE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

Messages - IF\_T100\_DYN\_MSG in a Local Exception Class

This example demonstrates how a local exception class is linked with a message

Source Code   

\* CCDEF
CLASS cx\_dyn\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_dyn\_msg.
    ALIASES msgty FOR if\_t100\_dyn\_msg~msgty.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_raise\_msg DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth
      RAISING cx\_dyn\_t100.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_msg IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_dyn\_t100 INTO FINAL(oref).
        out->write(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }", Type { oref->msgty } | ).
        "MESSAGE oref TYPE oref->msgty.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_dyn\_t100
          MESSAGE e888(sabapdemos) WITH 'I' 'am' 'an' 'Exception!'.
  ENDMETHOD.
ENDCLASS.

Description   

This example applies the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interface_abexa.htm) for the interface IF\_T100\_MESSAGE directly to the interface IF\_T100\_DYN\_MSG. The local class cx\_dyn\_t100 implements the interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_dyn_msg.htm) and the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) is used to raise the exception in the method meth.

Unlike when using [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm), no separate attributes for the placeholders of the message and no implementation of the instance constructor are required in cx\_dyn\_t100. Furthermore, the message type is passed in an attribute of the exception object when IF\_T100\_DYN\_MSG is used. An alias name is introduced for this attribute here.