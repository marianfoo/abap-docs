  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) → 

CALL TRANSACTION - USING

[Quick Reference](javascript:call_link\('abapcall_transaction_shortref.htm'\))

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\))
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Extras:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](javascript:call_link\('abapcall_transaction_authority.htm'\)) are used to control the authorization check.

bdc\_tab expects an internal table with the row type BDCDATA from ABAP Dictionary. The additions control how it is processed.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program. No other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro processed

DYNBEGIN

Flags the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](javascript:call_link\('abenbatch_input_table.htm'\)) of the internal table bdc\_tab, any number of screens of the called transaction can be filled with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Notes

-   Calling a transaction using a batch input table is not the same as executing [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). There is no exact dividing line between the two, however, since batch input-based frameworks such as [CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry") and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. In this way, they can use certain options not available in genuine batch input.
    
-   The control options for a batch input table cover the control options for [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in real [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"), plus some extra options.
    

Example

Calling transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

DATA: bdcdata\_tab TYPE TABLE OF bdcdata,
      opt         TYPE ctu\_params.
...
TRY.
    CALL TRANSACTION 'SE24' WITH AUTHORITY-CHECK
                            USING bdcdata\_tab OPTIONS FROM opt.
  CATCH cx\_sy\_authorization\_error.
    ...
ENDTRY.

Addition 1

... MODE mode

Effect

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions MODE or OPTIONS FROM is not used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processed with displayed [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry")

"E"

Screens displayed only if an error occurs

"N"

Processed without displayed screens. If a breakpoint is reached in one of the called [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. The field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processed without displayed screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and purpose are shown in the following table. If one of the additions UPDATE or OPTIONS FROM is not used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") of called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\)) were executed in the program.

Others

As for "A".

Note

This option is not available for execution of [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry"). Updates are always synchronous.

Addition 3

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from ABAP Dictionary. The CTU\_PARAMS structure has the components displayed in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](javascript:call_link\('abencatt_glosry.htm'\) "Glossary Entry") mode for processing. While [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry") is used mostly for data transfer, CATT processes are more complex [transactions](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry"), since they are reusable tests. Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Specifies whether the [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Specifies whether the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) terminates processing or not. Values: " " (COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Specifies the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

If the addition OPTIONS FROM is not used, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") sent during batch input processing are saved to an internal table itab of the type BDCMSGCOLL from ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))

Continue
[CALL TRANSACTION - Batch Input Table](javascript:call_link\('abenbatch_input_table.htm'\))