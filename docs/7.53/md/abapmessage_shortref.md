---
title: "MESSAGE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm) Syntax MESSAGE  tn  tn(id)   ID mid TYPE mtype NUMBER num   oref TYPE mtype  text TYPE mtype    DISPLAY LIKE dtype RAISING exception   INTO text
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_shortref.htm"
abapFile: "abapmessage_shortref.htm"
keywords: ["do", "if", "try", "method", "class", "abapmessage", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  M

MESSAGE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)

Syntax

MESSAGE *{* tn
        *|* tn(id)
        *|* *{* ID mid TYPE mtype NUMBER num *}*
        *|* *{*oref TYPE mtype*}*
        *|* *{*text TYPE mtype*}* *}*
        *{* *{* *\[*DISPLAY LIKE dtype*\]*
            *\[*RAISING exception*\]* *}*
        *|* *\[*INTO text*\]* *}*
        *\[*WITH dobj1 ... dobj4*\]*.

Effect

Sends a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry").

Additions

Specifies the message and message type:

-   [tn](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) - Message type t, message number n, message class from addition MESSAGE-ID of the program introduction.
    
-   [tn(id)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) - Message type t, message number n, message class id.
    
-   [ID mid TYPE mtype NUMBER num](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) - Message type from mtype, message number from num, message class from mid.
    
-   [oref TYPE mtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_msg.htm) - Message type from mtype, message number and message class from the interface IF\_T100\_MESSAGE implemented in the [dynamic type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_type_glosry.htm "Glossary Entry") of the object reference variable oref.
    
-   [text TYPE mtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_text.htm) - Message type from mtype, message text from text.
    

Specifies the display type:

-   [DISPLAY LIKE dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)
    Displays the message in a dialog box and uses the icon of the message type specified in dtype.
    
-   [INTO text](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)
    Returns the message text in text; the message is not sent.
    
-   [WITH dobj1 ... dobj4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage.htm)
    Replaces the placeholders "&1" to "&4" and "&" of the message text with the contents of dobj1, ... dobj4.
    

Raises a non-class-based exception

-   [RAISING exception](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmessage_raising.htm)
    Either displays the message or raises a non-class-based exception exception in a [function module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry") or in a method. An exception is raised to which return values were assigned in the call; another exception sends the message.