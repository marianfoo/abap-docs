  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  W

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WAIT, ABAPWAIT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

WAIT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm)

Syntax

WAIT *{*UP TO t SECONDS*}*
   *|* *{*FOR *\[*ASYNCHRONOUS TASKS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*MESSAGING CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]*
          *\[*PUSH CHANNELS UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlog_exp_shortref.htm) *\[*UP TO t SECONDS*\]**\]**}*.

Effect

Interrupts the execution of a program.

Additions   

-   [UP TO t SECONDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm)
    Interrupts the execution of a program for (a maximum of) t seconds.
-   [FOR ASYNCHRONOUS TASKS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_arfc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a callback routine of an [asynchronous RFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") is true.
-   [FOR MESSAGING CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_amc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP messaging channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messaging_channels_glosry.htm "Glossary Entry") is true.
-   [FOR PUSH CHANNELS UNTIL log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_apc.htm)
    Interrupts the execution of a program until the logical expression log\_exp after a receiving a message from [ABAP Push Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_push_channels_glosry.htm "Glossary Entry") is true.