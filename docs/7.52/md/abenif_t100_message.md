  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) →  [System Interfaces for Messages](javascript:call_link\('abenmessage_interfaces.htm'\)) → 

System Interface IF\_T100\_MESSAGE for Messages

The interface IF\_T100\_MESSAGE associates classes with [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry"). To do this, IF\_T100\_MESSAGE contains a structured attribute T100KEY of the type SCX\_T100KEY, which specifies a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in the table T100:

-   The component MSGID contains the [message class](javascript:call_link\('abenmessage_class_glosry.htm'\) "Glossary Entry").

-   The component MSGNO contains the [message number](javascript:call_link\('abenmessage_number_glosry.htm'\) "Glossary Entry").

-   The components ATTR1 to ATTR4 contain the names of class attributes whose content is used as placeholder texts for any placeholders in the texts of the message.

The message text can be accessed as follows:

-   The interface IF\_T100\_MESSAGE includes the interface IF\_MESSAGE (which should not be used as a standalone interface). This interface contains the methods GET\_TEXT and GET\_LONGTEXT, which can be implemented by a class with the interface IF\_T100\_MESSAGE in such a way that they return the short text and long text of the current message. This can be done using the corresponding methods of the class CL\_MESSAGE\_HELPER.

-   In the variant [MESSAGE oref](javascript:call_link\('abapmessage_msg.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)), an [interface reference variable](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") of the type IF\_T100\_MESSAGE or a [class reference variable](javascript:call_link\('abenclass_reference_variabl_glosry.htm'\) "Glossary Entry") of a class that implements this interface can be specified to display the message in question.

The statement MESSAGE or the class CL\_MESSAGE\_HELPER evaluate the content of the structure T100KEY here:

-   The components MSGID and MSGNO are scanned by message class and message class for a message. If a message is found, its texts are used. If not, a short text is generated that counts the message class and message number plus the placeholder texts from the assigned class attributes.

-   If they exist, the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message are replaced by the content of the class attributes specified in the components ATTR1 to ATTR4 in accordance with the rules of the addition [WITH](javascript:call_link\('abapmessage.htm'\)) of the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)). If an attribute specified in the components ATTR1 to ATTR4 does not exist or if an attribute cannot be converted to a placeholder text, the character "&" is added to the start and the end of the attribute name and used as a placeholder text. If one of the components ATTR1 to ATTR4 is initial, the corresponding placeholder text is initialized‎.

Notes

-   The interface IF\_T100\_MESSAGE is mainly designed for use with [exception texts](javascript:call_link\('abenexception_texts.htm'\)) in [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry"). If the interface is included in regular classes and in local exception classes, the filling of the interface structure T100KEY must be programmed here separately. The implementation of the interface methods GET\_TEXT and GET\_LONGTEXT, however, is already contained in the superclass CX\_ROOT and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure T100KEY and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.

-   The interface IF\_T100\_MESSAGE does not have any attributes for the message type.

-   The interface [IF\_T100\_DYN\_MSG](javascript:call_link\('abenif_t100_dyn_msg.htm'\)) adds predefined attributes for the message type and the placeholders of the message to the interface IF\_T100\_MESSAGE. IF\_T100\_MESSAGE is designed for static [exception texts](javascript:call_link\('abenexception_texts.htm'\)) of exception classes, but IF\_T100\_DYN\_MSG can [associate](javascript:call_link\('abenmessage_exceptions.htm'\)) any messages with exception classes.

Example

Uses [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) to raise an exception of the class CX\_DEMO\_T100, which binds the interface IF\_T100\_MESSAGE.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_t100(
                     textid = cx\_demo\_t100=>demo
                     text1  = 'Illegal value:'
                     text2  = CONV #( col ) ) ).

Executable Examples

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](javascript:call_link\('abenif_t100_message_abexa.htm'\))

-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\))

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\))

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))

Continue
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Regular Class](javascript:call_link\('abenif_t100_message_abexa.htm'\))
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Local Exception Class](javascript:call_link\('abenmessage_interface_abexa.htm'\))
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Global Exception Class](javascript:call_link\('abenmessage_interface_global_abexa.htm'\))
![Example](exa.gif "Example") [IF\_T100\_MESSAGE for Exception with Message](javascript:call_link\('abenmessage_interface_reuse_abexa.htm'\))