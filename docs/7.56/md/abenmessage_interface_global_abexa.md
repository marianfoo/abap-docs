  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_messages.htm) →  [Messages - System Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_interfaces.htm) →  [Messages - System Interface IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenif_t100_message.htm) → 

Messages - IF\_T100\_MESSAGE in a Global Exception Class

This example demonstrates how a global exception class is linked with a message

Source Code

REPORT demo\_message\_oref\_global.
CLASS msg\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS meth
      RAISING cx\_demo\_t100.
ENDCLASS.
CLASS msg\_demo IMPLEMENTATION.
  METHOD main.
    TRY.
        meth( ).
      CATCH cx\_demo\_t100 INTO DATA(oref).
        cl\_demo\_output=>display( oref->get\_text( ) ).
        MESSAGE oref TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD meth.
    RAISE EXCEPTION TYPE cx\_demo\_t100
      EXPORTING
        textid = cx\_demo\_t100=>demo
        text1  = 'I'
        text2  = 'am'
        text3  = 'an'
        text4  = 'Exception!'.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  msg\_demo=>main( ).

Description

This example works in the same way as the executable example in [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_interface_abexa.htm). Here, however, the interface IF\_T100\_MESSAGE is included in the global [exception class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_class_glosry.htm "Glossary Entry") CX\_DEMO\_T100. The association with a message class was selected when the class was created. This specifies that the exception class is generated in such a way that it supports messages as [exception texts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexception_texts.htm), rather than merely including the interface IF\_T100\_MESSAGE.

On the tab Texts in the [Class Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_builder_glosry.htm "Glossary Entry"), the message 888 from the message class SABAPDEMOS is assigned to the exception text DEMO of the exception class under Message Text. The placeholders of the message are linked with the attributes TEXT1 to TEXT4. The source code of the public section of the class implements this assignment using the structured constant DEMO with the type SCX\_T100KEY. The constructor has an input parameter TEXTID that can be passed the constant DEMO and the input parameters TEXT1 to TEXT4 used to fill the identically named attributes.

A structure passed to the input parameter TEXTID when an exception from this class is raised is assigned to the structure T100KEY of the interface IF\_T100\_MESSAGE. This uses the corresponding message as an exception text. It is recommended that only the predefined constants of the class are passed, as shown here.

See also the executable examples listed below.

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_interface_reuse_abexa.htm)
-   [System Interface IF\_T100\_DYN\_MSG in Global Exception Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenraise_message_global_abexa.htm)