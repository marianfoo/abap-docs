  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WAIT, ABAPWAIT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

WAIT - Short Reference

[Reference](javascript:call_link\('abapwait_up_to.htm'\))

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\)) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions   

-   [UP TO t SECONDS](javascript:call_link\('abapwait_up_to.htm'\))
    Interrupts the execution of a program for (a maximum of) t seconds.
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](javascript:call_link\('abapwait_arfc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") is true.
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_amc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") is true.
-   [FOR PUSH CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_apc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry") is true.