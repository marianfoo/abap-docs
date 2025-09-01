  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_channels.htm) →  [AMC - ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm) → 

WAIT FOR MESSAGING CHANNELS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_shortref.htm)

Syntax

WAIT FOR MESSAGING CHANNELS
         *\[*[PUSH CHANNELS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_apc.htm)*\]*
         *\[*[ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_until.htm)*\]*
         UNTIL [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) *\[*UP TO sec SECONDS*\]*.

Extras:

[1\. ... PUSH CHANNELS](#!ABAP_ADDITION_1@1@)
[2\. ... ASYNCHRONOUS TASKS](#!ABAP_ADDITION_2@2@)
[3\. ... UP TO sec SECONDS](#!ABAP_ADDITION_3@3@)

Effect

This variant of the statement WAIT can be used only in receiver programs of [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc.htm). Any [logical expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) after UNTIL.

-   If the result of log\_exp is false and a receiver is registered for APC messages, the program waits until an ON\_MESSAGE method is executed for a message sent by a sender program and checks the logical expression again:
    

-   If the new check on the result of the logical expression is true, sy-subrc is set to 0 and the execution of the program is resumed with the statement that follows WAIT.

-   If the new check on the result of the logical expression is false and the RECEIVE methods of the previously sent messages were not all executed, one of the remaining RECEIVE methods must be executed before the program resumes.

-   If the new check on the result of the logical expression is false and the RECEIVE methods of the previously sent messages were all executed, sy-subrc is set to 4 and the execution of the program is resumed with the statement that follows WAIT.

-   If the result of log\_exp is false and there is no receiver registered for AMC messages, the execution of the program is not interrupted (regardless of the result of log\_exp) and sy-subrc is set to the value 4.
    
-   If the logical expression is true, the execution of the program is not interrupted (regardless of whether a receiver is registered for AMC messages) and sy-subrc is set to the value 0.
    

If the statement WAIT interrupts the program, the [work process](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry") is changed and a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is executed (except in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry"). For this reason, WAIT must not be used between ABAP SQL statements that open or close a [database cursor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_cursor_glosry.htm "Glossary Entry").

System Fields

sy-subrc

Meaning

0

The logical expression log\_exp is true.

4

The logical expression log\_exp is false. Also, no receiver is registered for AMC messages in the current program and no registrations for APC messages or [asynchronous function calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry") exist when the additions PUSH CHANNELS or ASYNCHRONOUS TASKS are used.

8

The logical expression log\_exp is false and when the addition UP TO was specified, the maximum time was exceeded.

Note

If the logical expression is incorrect, the running program is stopped in its current state. After a RECEIVE method, all data objects that were not changed in the RECEIVE method have the same value as when the logical expression was last evaluated. Any methods called by functions within the logical expression are executed again during the next check.

Executable Example

[Receiving AMC Messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamc_receive_abexa.htm)

Addition 1

... PUSH CHANNELS

Addition 2

... ASYNCHRONOUS TASKS

Effect

If these additions are specified, this variant of the statement WAIT is combined with the variants [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_apc.htm) or [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwait_until.htm). The program flow described in the variants is added to the program flow described above. The WAIT statement then also waits for APC messages or for asynchronously called functions to be called and does not just wait for AMC messages.

Addition 3

... UP TO sec SECONDS

Effect

If UP TO is specified, a maximum time sec can be specified in seconds and the statement waits for AMC for this time. sec expects a data object of the type f that must contain a positive number. The unit of the number in sec is seconds and the time resolution is one millisecond.

If no AMC message is received within the specified time, its RECEIVE method dictates that the result of the logical expression log\_exp is true, sy-subrc is set to 8, and the execution of the program is resumed with the statement that follows WAIT.

Notes

-   If no receiver is registered for AMC messages, the addition UP TO sec SECONDS is ignored.
    
-   The addition UP TO sec SECONDS is ignored with respect to the execution of the RECEIVE methods. The time needed for these routines to execute can be longer than the time specified.
    

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Negative time specified for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT