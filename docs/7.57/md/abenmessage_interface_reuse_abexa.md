  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - IF_T100_MESSAGE for Exception with Message, ABENMESSAGE_INTERFACE_REUSE_AB
EXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - IF\_T100\_MESSAGE for Exception with Message

This example demonstrates the [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm) addition when an exception is raised using IF\_T100\_MESSAGE.

Source Code   

REPORT demo\_raise\_message\_reuse\_attr.
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
          RAISE EXCEPTION TYPE cx\_demo\_t100
            MESSAGE ID sy-msgid
                    NUMBER sy-msgno
            EXPORTING text1 = conv #( sy-msgv1 )
                      text2 = conv #( sy-msgv2 )
                      text3 = conv #( sy-msgv3 )
                      text4 = conv #( sy-msgv4 ).
        ENDIF.
      CATCH cx\_demo\_t100 INTO FINAL(oref).
        cl\_demo\_output=>display(
          |Caught exception:\\n\\n| &&
          |"{ oref->get\_text( ) }"| ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
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

This example demonstrates the transformation of a non-class-based exception raised in a method using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage_raising.htm) and, when the method is called, handled using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm) to a class-based exception. It uses the exception class CX\_DEMO\_T100 from the [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interface_global_abexa.htm) for the system interface IF\_T100\_MESSAGE in a global exception class, which includes only the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) and not [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm).

The properties of the message sent using MESSAGE RAISING are available in the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 after the exception has been caught.

-   sy-msgid and sy-msgno are used after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_class.htm) to associate the exception object with the message.
-   sy-msgv1 to sy-msgv4 are assigned to the input parameters of the instance constructor and these are automatically assigned to the identically named attributes.
-   sy-msgty cannot be passed in this case.

The [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_global_abexa.htm) for the system interface IF\_T100\_DYN\_MSG in a global exception demonstrates how all properties of the message can be specified after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception_message.htm).