---
title: "Notes"
description: |
  -   The interface IF_T100_MESSAGE is mainly designed for use with exception texts(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts.htm) in exception classes(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_class_glosry.htm 'Glossary Entry')
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenif_t100_message.htm"
abapFile: "abenif_t100_message.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenif", "t100", "message"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_MESSAGE for Messages

The interface IF\_T100\_MESSAGE associates classes with [messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry"). To do this, IF\_T100\_MESSAGE contains a structured attribute T100KEY of the type SCX\_T100KEY, which specifies a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") in the table T100:

-   The component MSGID contains the [message class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_class_glosry.htm "Glossary Entry").

-   The component MSGNO contains the [message number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_number_glosry.htm "Glossary Entry").

-   The components ATTR1 to ATTR4 contain the names of class attributes whose content is used as placeholder texts for any placeholders in the texts of the message.

The message text can be accessed as follows:

-   The interface IF\_T100\_MESSAGE includes the interface IF\_MESSAGE (which should not be used as a standalone interface). This interface contains the methods GET\_TEXT and GET\_LONGTEXT, which can be implemented by a class with the interface IF\_T100\_MESSAGE in such a way that they return the short text and long text of the current message. This can be done using the corresponding methods of the class CL\_MESSAGE\_HELPER.

-   In the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm), an [interface reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") of the type IF\_T100\_MESSAGE or a [class reference variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_reference_variabl_glosry.htm "Glossary Entry") of a class that implements this interface can be specified to display the message in question.

The statement MESSAGE or the class CL\_MESSAGE\_HELPER evaluate the content of the structure T100KEY here:

-   The components MSGID and MSGNO are scanned by message class and message class for a message. If a message is found, its texts are used. If not, a short text is generated that counts the message class and message number plus the placeholder texts from the assigned class attributes.

-   If they exist, the placeholders "&1" to "&4" and "&" of the short text or "&V1&" to "&V4&" of the long text of the message are replaced by the content of the class attributes specified in the components ATTR1 to ATTR4 in accordance with the rules of the addition [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmessage.htm). If an attribute specified in the components ATTR1 to ATTR4 does not exist or if an attribute cannot be converted to a placeholder text, the character "&" is added to the start and the end of the attribute name and used as a placeholder text. If one of the components ATTR1 to ATTR4 is initial, the corresponding placeholder text is initialized‎.

Notes

-   The interface IF\_T100\_MESSAGE is mainly designed for use with [exception texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts.htm) in [exception classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_class_glosry.htm "Glossary Entry"). If the interface is included in regular classes and in local exception classes, the filling of the interface structure T100KEY must be programmed here separately. The implementation of the interface methods GET\_TEXT and GET\_LONGTEXT, however, is already contained in the superclass CX\_ROOT and alias names are declared for these methods here. When creating global exception classes, tool support is provided for filling the structure T100KEY and for mapping attributes to placeholders. This is done using structured constants that can be specified when an exception is raised.

-   The method GET\_LATEST\_T100\_EXCEPTION in the class CL\_MESSAGE\_HELPER is used to return the last object in a chain of exception objects that has an [exception text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts.htm) defined by a message. Here, the chain is created using the attribute PREVIOUS.

-   The interface IF\_T100\_MESSAGE does not have any attributes for the message type.

-   The interface [IF\_T100\_DYN\_MSG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenif_t100_dyn_msg.htm) adds predefined attributes for the message type and the placeholders of the message to the interface IF\_T100\_MESSAGE. IF\_T100\_MESSAGE is designed for static [exception texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts.htm) of exception classes, but IF\_T100\_DYN\_MSG can [associate](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_exceptions.htm) any messages with exception classes.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_T100, which binds the interface IF\_T100\_MESSAGE.

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

-   [System Interface IF\_T100\_MESSAGE in a Regular Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenif_t100_message_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in a Local Exception Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_global_abexa.htm)

-   [System Interface IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_reuse_abexa.htm)

This translation does not reflect the current version of the documentation.
Continue
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Regular Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenif_t100_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Local Exception Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE in Global Exception Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_MESSAGE for Exception with Message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_interface_reuse_abexa.htm)