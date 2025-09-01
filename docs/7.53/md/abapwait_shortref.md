  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  W

WAIT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm)

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions

-   [UP TO t SECONDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm)
    Interrupts the execution of a program for (a maximum of) t seconds.
    
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is true.
    
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_amc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") is true.
    
-   [FOR PUSH CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_apc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_push_channels_glosry.htm "Glossary Entry") is true.