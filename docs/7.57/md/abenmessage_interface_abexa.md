  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Messages - IF_T100_MESSAGE in a Local Exception Class, ABENMESSAGE_INTERFACE_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Messages - IF\_T100\_MESSAGE in a Local Exception Class

This example demonstrates how a local exception class is linked with a message

Source Code   

REPORT demo\_message\_oref.
CLASS cx\_t100 DEFINITION INHERITING FROM cx\_dynamic\_check.
  PUBLIC SECTION.
    INTERFACES if\_t100\_message.
    METHODS constructor IMPORTING id    TYPE symsgid
                                  no    TYPE symsgno
                                  text1 TYPE csequence OPTIONAL
                                  text2 TYPE csequence OPTIONAL
                                  text3 TYPE csequence OPTIONAL
                                  text4 TYPE csequence OPTIONAL.
    DATA text1 TYPE c LENGTH 50.
    DATA text2 TYPE c LENGTH 50.
    DATA text3 TYPE c LENGTH 50.
    DATA text4 TYPE c LENGTH 50.
ENDCLASS.
CLASS cx\_t100 IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    me->text1 = text1.
    me->text2 = text2.
    me->text3 = text3.
    me->text4 = text4.
    if\_t100\_message~t100key-msgid = id.
    if\_t100\_message~t100key-msgno = no.
    if\_t100\_message~t100key-attr1 = 'TEXT1'.
    if\_t100\_message~t100key-attr2 = 'TEXT2'.
    if\_t100\_message~t100key-attr3 = 'TEXT3'.
    if\_t100\_message~t100key-attr4 = 'TEXT4'.
  ENDMETHOD.
ENDCLASS.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_t100 INTO FINAL(oref).
        cl\_demo\_output=>display( oref->get\_text( ) ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_t100
      EXPORTING
        id    = 'SABAPDEMOS'
        no    = '888'
        text1 = 'I'
        text2 = 'am'
        text3 = 'an'
        text4 = 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description   

The functional method meth raises an exception from the local exception class cx\_t100 that implements the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenif_t100_message.htm). When the exception is raised, the constructor is given a message class, a message number, and values for the placeholders of the message.

The constructor of the local exception class cx\_t100 fills the attribute T100KEY of the interface IF\_T100\_MESSAGE with the values passed. In this way, the exception class represents the passed message from the table T100 in which the placeholders "&" are replaced with the content of the attributes text1 to text4.

The method main catches the exception in the reference variable oref and indicates the following:

-   The exception text can be obtained using the method GET\_TEXT of the component interface IF\_MESSAGE in the interface IF\_T100\_MESSAGE. The implementation of the method GET\_TEXT is in the superclass CX\_ROOT, which already includes the interface IF\_MESSAGE.
-   The reference variable can be used directly as an operand of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmessage.htm).

See also the executable examples listed below.

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_interface_global_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in Local Exception Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenraise_message_abexa.htm)