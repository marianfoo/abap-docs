---
title: "Notes"
description: |
  -   The interface IF_T100_DYN_MSG is designed specifically for raising class-based exceptions with the addition MESSAGE(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_message.htm) of the statement RAISE EXCEPTION(https://help.sap.com/doc/abapdocu_753_index_htm/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenif_t100_dyn_msg.htm"
abapFile: "abenif_t100_dyn_msg.htm"
keywords: ["do", "if", "class", "data", "abenif", "t100", "dyn", "msg"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) →  [Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messages.htm) →  [System Interfaces for Messages](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_interfaces.htm) → 

System Interface IF\_T100\_DYN\_MSG for Messages

The interface IF\_T100\_DYN\_MSG contains the interface [IF\_T100\_MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenif_t100_message.htm) as a component interface and adds the following to it:

-   The attribute MSGTY for the message type

-   The attributes MSGV1 to MSGV4 for the placeholders of the message

Like IF\_T100\_MESSAGE, the interface IF\_T100\_DYN\_MSG associates classes with messages, with the attributes for the message type and placeholders of the message being predefined.

Notes

-   The interface IF\_T100\_DYN\_MSG is designed specifically for raising class-based exceptions with the addition [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_message.htm) of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_class.htm) or the addition [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) in [conditional expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expressions.htm). The properties of the message specified after MESSAGE are assigned automatically to the associated attributes in [exception classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexceptions_classes.htm) that include IF\_T100\_DYN\_MSG.

-   The addition [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapraise_exception_message.htm) to RAISE EXCEPTION and/or THROW has a short form USING MESSAGE. This can be used for exception classes with the interface IF\_T100\_DYN\_MSG and enables determining the message from the current content of system fields sy-msg.... The short form can be used for transforming classical exceptions in class-based exceptions.

-   If the object reference variable oref points to an object that includes the system interface IF\_T100\_DYN\_MSG in the variant [MESSAGE oref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) of the statement [MESSAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm), the addition TYPE can be omitted and the message type from the interface attribute MSGTY of the object is used implicitly.

Example

Uses [THROW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_result.htm) to raise an exception of the class CX\_DEMO\_DYN\_T100, which binds the interface IF\_T100\_DYN\_MSG.

DATA col TYPE c LENGTH 1.
...
DATA(color) = COND string(
                WHEN col = 'R' THEN 'red'
                WHEN col = 'B' THEN 'blue'
                WHEN col = 'G' THEN 'green'
                ELSE THROW cx\_demo\_dyn\_t100(
                     MESSAGE e888(sabapdemos)
                       WITH 'Illegal value:' col ) ).

Executable Examples

-   [System Interface IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenif_t100_dyn_msg_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_message_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_message_global_abexa.htm)

-   [System Interface IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_error_message_abexa.htm)

Continue
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Regular Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenif_t100_dyn_msg_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Local Exception Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_message_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG in a Global Exception Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_message_global_abexa.htm)
![Example](exa.gif "Example") [IF\_T100\_DYN\_MSG for Exception error\_message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenraise_error_message_abexa.htm)