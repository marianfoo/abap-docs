  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [System Interfaces for Messages](javascript:call_link\('abenmessage_interfaces.htm'\)) →  [System Interface IF\_T100\_MESSAGE for Messages](javascript:call_link\('abenif_t100_message.htm'\)) → 

IF\_T100\_MESSAGE in Global Exception Class

This example demonstrates how a global exception class is associated with a message

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

This executable example works in the same way as the example in [System Interface IF\_T100\_MESSAGE in a Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\)). Here, however, the interface IF\_T100\_MESSAGE is included in the global [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") CX\_DEMO\_T100. The association with a message class was made at the same time as the class was created. This dictates that the exception class is generated in such a way that it supports messages as [exception texts](javascript:call_link\('abenexception_texts.htm'\)), rather than merely including the interface IF\_T100\_MESSAGE.

On the tab Texts in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"), the message 888 from the message class SABAPDEMOS is assigned to the exception text DEMO of the exception class under Message Text. The placeholders of the message are associated with the attributes TEXT1 to TEXT4. The source text of the public section of the class implements this assignment using the structured constant DEMO with the type SCX\_T100KEY. The constructor has an input parameter TEXTID that can be passed the constant DEMO and the input parameters TEXT1 to TEXT4 used to fill the attributes with the same names.

A structure passed to the input parameter TEXTID when an exception from this class is raised is assigned to the structure T100KEY of the interface IF\_T100\_MESSAGE. This uses the corresponding message as an exception text. It is recommended that only the predefined constants of the class are passed, as shown here.

See also the executable examples listed below.

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))

-   [System Interface IF\_T100\_DYN\_MSG in Global Exception Class](javascript:call_link\('abenraise_message_global_abexa.htm'\))