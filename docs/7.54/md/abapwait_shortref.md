  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

WAIT - Quick reference

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
    
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](javascript:call_link\('abapwait_until.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry") is true.
    
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_amc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](javascript:call_link\('abenabap_messaging_channels_glosry.htm'\) "Glossary Entry") is true.
    
-   [FOR PUSH CHANNELS UNTIL log\_exp](javascript:call_link\('abapwait_apc.htm'\))
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](javascript:call_link\('abenabap_push_channels_glosry.htm'\) "Glossary Entry") is true.