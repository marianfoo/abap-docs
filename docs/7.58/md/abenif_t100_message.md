  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [Messages - System Interfaces](javascript:call_link\('abenmessage_interfaces.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Messages%20-%20System%20Interface%20IF_T100_MESSAGE%2C%20ABENIF_T100_MESSAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Messages - System Interface IF\_T100\_MESSAGE

The interface IF\_T100\_MESSAGE associates classes with [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry"). Classes that implement this interface can be used to access and send messages. To do this, IF\_T100\_MESSAGE contains a structured attribute T100KEY of the type SCX\_T100KEY. In a class that implements the interface, the content of this structure specifies a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in the database table T100:

-   The content of component MSGID is the [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry").
-   The content of component MSGNO is the [message number](javascript:call_link\('abenmessage_number_glosry.htm'\) "Glossary Entry").
-   The content of components ATTR1 to ATTR4 is the names of attributes of the implementing class whose content is used as placeholder texts for the possible placeholders in the texts of the message.

Using an implementing class, the message text can be accessed as follows:

-   The interface IF\_T100\_MESSAGE includes the interface IF\_MESSAGE, which should not be used as a standalone interface. This interface contains the methods GET\_TEXT and GET\_LONGTEXT, which can be implemented by a class with the interface IF\_T100\_MESSAGE so that they return the short text and long text of the current message. To do this, the corresponding methods of the class CL\_MESSAGE\_HELPER can be used.
-   In the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), an [interface reference variable](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") of the type IF\_T100\_MESSAGE or a [class reference variable](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") of a class that implements this interface can be specified to output the message that is specified by the content of the structure T100KEY.

To do this, the statement MESSAGE or the class CL\_MESSAGE\_HELPER evaluates the content of the structure T100KEY as follows:

-   In database table T100, a message is searched for whose message class and message number correspond to the components MSGID and MSGNO of the structure T100KEY. If a message is found, its texts are used. If not, a short text is generated that lists the message class and message number as well as the placeholder texts from the class attributes that are specified in the structure.
-   The possible placeholders &1 to &4 and & of the short text or &V1& to &V4& of the long text of the message are replaced by the content of the class attributes specified in the components ATTR1 to ATTR4 of structure T100KEY in accordance with the rules of the addition [WITH](javascript:call_link\('abapmessage.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). If an attribute specified in the components ATTR1 to ATTR4 does not exist or if the content of an attribute cannot be converted to a placeholder text, the character & is added to the start and the end of the attribute name and the resulting string is used as the placeholder text. If one of the components ATTR1 to ATTR4 is initial, the corresponding placeholder text is initialized.

Hints

-   The interface IF\_T100\_MESSAGE is mainly intended for use with [exception texts](javascript:call_link\('abenexception_texts.htm'\)) in [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry"). If the interface is implemented in regular classes and in local exception classes, the filling of the interface structure T100KEY must be programmed here explicitly. For global exception classes, however, the implementation of the interface methods GET\_TEXT and GET\_LONGTEXT is already contained in the superclass CX\_ROOT and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure T100KEY and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.
-   It should be noted that with interface IF\_T100\_MESSAGE there is a double indirection for the possible placeholders of a message. The text for a placeholder is taken from an attribute of the implementing class whose name is itself contained in a component of structure T100KEY.
-   The method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER can be used to return the last object in a chain of exception objects that are chained by the attribute PREVIOUS that has an [exception text](javascript:call_link\('abenexception_texts.htm'\)) defined by a message.
-   The interface IF\_T100\_MESSAGE does not have any attributes for the message type.
-   The interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) adds predefined attributes for the message type and the placeholders of the message to the interface IF\_T100\_MESSAGE. While IF\_T100\_MESSAGE is intended for static [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes, IF\_T100\_DYN\_MSG can [associate](javascript:call_link\('abenmessage_exceptions.htm'\)) any messages with exception classes.

Example

Raising of an exception of the class CX\_DEMO\_T100, which implements the interface IF\_T100\_MESSAGE by using [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)).

DATA col TYPE c LENGTH 1.
...
TRY.
    FINAL(color) = COND string(
                    WHEN col = 'R' THEN 'red'
                    WHEN col = 'B' THEN 'blue'
                    WHEN col = 'G' THEN 'green'
                    ELSE THROW cx\_demo\_t100(
                         textid = cx\_demo\_t100=>demo
                         text1  = 'Illegal value:'
                         text2  = CONV #( col ) ) ).
  CATCH cx\_demo\_t100.
    ...
ENDTRY.

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](javascript:call_link\('abenif_t100_message_abexa.htm'\))
-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\))
-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\))
-   [System Interface IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Messages - IF\_T100\_MESSAGE in a Regular Class](javascript:call_link\('abenif_t100_message_abexa.htm'\))
![Example](exa.gif "Example") [Messages - IF\_T100\_MESSAGE in a Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\))
![Example](exa.gif "Example") [Messages - IF\_T100\_MESSAGE in a Global Exception Class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\))
![Example](exa.gif "Example") [Messages - IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))