  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MESSAGE%2C%20ABAPMESSAGE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MESSAGE - Short Reference

[Reference](javascript:call_link\('abapmessage.htm'\))

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

Sends a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry").

Additions   

Specifies the message and message type:

-   [tn](javascript:call_link\('abapmessage_msg.htm'\)) (message type t, message number n, message class from the addition MESSAGE-ID of the program introduction)
-   [tn(id)](javascript:call_link\('abapmessage_msg.htm'\)) (message type t, message number n, message class id)
-   [ID mid TYPE mtype NUMBER num](javascript:call_link\('abapmessage_msg.htm'\)) (message type from mtype, message number from num, message class from mid)
-   [oref TYPE mtype](javascript:call_link\('abapmessage_msg.htm'\)) (message type from mtype, message number and message class from the interface IF\_T100\_MESSAGE implemented in the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of the object reference variable oref)
-   [text TYPE mtype](javascript:call_link\('abapmessage_text.htm'\)) (message type from mtype, message text from text)
    

Specifies the display type:

-   [DISPLAY LIKE dtype](javascript:call_link\('abapmessage.htm'\))
    Displays the message in a dialog box and uses the icon of the message type specified in dtype.
-   [INTO text](javascript:call_link\('abapmessage.htm'\))
    Returns the message text in text; the message is not sent.
-   [WITH dobj1 ... dobj4](javascript:call_link\('abapmessage.htm'\))
    Replaces the placeholders &1 to &4 and & of the message text with the content of dobj1, ... dobj4.
    

Raises a non-class-based exception

-   [RAISING exception](javascript:call_link\('abapmessage_raising.htm'\))
    Either sends the message or raises a non-class-based exception exception in a [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") or in a method. An exception is raised to which return codes were assigned in the call; another exception sends the message.