  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20IF_T100_MESSAGE%20for%20Exception%20with%20Message%2C%20ABENMESSAGE_INTERFACE_REUSE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

Messages - IF\_T100\_MESSAGE for Exception with Message

This example demonstrates the [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) addition when an exception is raised using IF\_T100\_MESSAGE.

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_msg\_reuse\_attr DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS meth EXCEPTIONS exception.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_msg\_reuse\_attr IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( EXCEPTIONS exception = 4 ).
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx\_demo\_t100
            MESSAGE ID sy-msgid
                    NUMBER sy-msgno
            EXPORTING text1 = CONV #( sy-msgv1 )
                      text2 = CONV #( sy-msgv2 )
                      text3 = CONV #( sy-msgv3 )
                      text4 = CONV #( sy-msgv4 ).
        ENDIF.
      CATCH cx\_demo\_t100 INTO FINAL(oref).
        out->write(
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

Description   

This example demonstrates the transformation of a non-class-based exception raised in a method using [MESSAGE RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm) and handled during a method call using the addition [EXCEPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_parameters.htm) to a class-based exception. It uses the exception class CX\_DEMO\_T100 from the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_interface_global_abexa.htm) for the system interface IF\_T100\_MESSAGE in a global exception class, which includes only the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm) and not [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenif_t100_message.htm).

The properties of the message sent using MESSAGE RAISING are available in the system fields sy-msgty, sy-msgid, sy-msgno, and sy-msgv1 to sy-msgv4 after the exception has been caught.

-   sy-msgid and sy-msgno are used after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm) to associate the exception object with the message.
-   sy-msgv1 to sy-msgv4 are assigned to the input parameters of the instance constructor and these are automatically assigned to the identically named attributes.
-   sy-msgty cannot be passed in this case.

The [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_message_global_abexa.htm) for the system interface IF\_T100\_DYN\_MSG in a global exception demonstrates how all properties of the message can be specified after the addition [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm).