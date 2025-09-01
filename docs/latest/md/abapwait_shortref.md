  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  W

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WAIT%2C%20ABAPWAIT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WAIT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_up_to.htm)

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions   

-   [UP TO t SECONDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_up_to.htm)
    Interrupts the execution of a program for (a maximum of) t seconds.
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_arfc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is true.
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_amc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") is true.
-   [FOR PUSH CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_apc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_push_channels_glosry.htm "Glossary Entry") is true.