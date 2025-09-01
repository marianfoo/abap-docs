  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Exception Classes](javascript:call_link\('abenexceptions_classes.htm'\)) →  [Exception Texts](javascript:call_link\('abenexception_texts.htm'\)) → 

Messages as Exception Texts

The exception texts of an exception class are usually defined by referencing [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") from the table [T100](javascript:call_link\('abenabap_messages_storing.htm'\)). The exception class must implement the interface [IF\_T100\_MESSAGE](javascript:call_link\('abenif_t100_message.htm'\)) before the messages can be used as exception texts. Exception texts are assigned to messages using constant structures in the public visibility section of the exception class. Each statically predefined exception text has an identically named constant with the structured data type SCX\_T100KEY from ABAP Dictionary. The individual components represent the message class, the message number, and the attributes assigned to the placeholders. The way the exception texts are edited depends on the tool in question:

-   Exception texts can be created on the Texts tab in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in ABAP Workbench and then assigned a [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry") and [message number](javascript:call_link\('abenmessage_number_glosry.htm'\) "Glossary Entry") by selecting a message text. Furthermore, the placeholders "&1" to "&4" or "&" of the message can be assigned to public attributes of the exception class. Class Builder creates the associated constant structure in the public visibility section with the name of the exception text and generates a matching instance constructor.

-   In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), exception texts can be edited in source code editors. An exception class is defined by the fact that it inherits from one of the superclasses CX\_STATIC\_CHECK, CX\_DYNAMIC\_CHECK, or CX\_NO\_CHECK. Classes of this type include the interface IF\_T100\_MESSAGE by default and the constructor is generated accordingly. The code template textIdExceptionClass can be used to create a constant structure in the visibility section for each exception text. The components of this structure define the properties of the message.

The input parameter TEXTID of the instance constructor of the exception class has the same data type as the attribute T100KEY of the interface IF\_T100\_MESSAGE, which references SCX\_T100KEY. When an exception with messages as exception texts is raised, the constructor can be passed a structure with information about the message to be used as the exception text. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed to TEXTID. This selects a predefined text for the exception. The attributes assigned to the placeholders "&1" to "&4" or "&" of a message can be assigned values using the input parameters of the same name of the instance constructor. The placeholders are replaced by the content of the assigned attributes when the exception is raised.

Notes

-   Exception texts associated with messages can be sent to the program user using the statement [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) when the exception is handled.

-   The system interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) (which includes IF\_T100\_MESSAGE) is available for associating a message with an exception class. See [Exception Classes for Messages](javascript:call_link\('abenmessage_exceptions.htm'\)).

-   When an exception class is created in Class Builder and the interface IF\_T100\_DYN\_MSG (and hence IF\_T100\_MESSAGE) is included in the class, it is advisable to specify this when creating the exception class by setting the appropriate flag. This ensures that the constructor is generated immediately and as required. Otherwise, the constructor for [internal exception texts](javascript:call_link\('abenexception_texts_internal.htm'\)) is generated and must be generated again once it is included in the interface by choosing Utilities → Clean Up → Constructor in the menu.

-   The method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER is used to return the last object in a chain of exception objects (created using the attribute PREVIOUS) that has an exception text defined by a message.

-   From a technical perspective, any structure of type SCX\_T100KEY whose components specify any message of table T100 can be passed to the input parameter TEXTID of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts when using the parameter TEXTID.

Executable Examples

-   See [system interface IF\_T100\_MESSAGE in a global exception class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\)).

-   See [system interface IF\_T100\_DYN\_MSG in a global exception class](javascript:call_link\('abenraise_message_global_abexa.htm'\)).

-   The exception classes of the package SABAP\_DEMOS\_CAR\_RENTAL\_EXCPTNS, which is part of an example application created in the superpackage SABAP\_DEMOS\_CAR\_RENTAL, use messages as exception texts. See CX\_DEMO\_CR\_CAR\_MODIFY, for example.