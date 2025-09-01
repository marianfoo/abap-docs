---
title: "CALL TRANSACTION, USING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_shortref.htm) Syntax CALL TRANSACTION ta WITHWITHOUT AUTHORITY-CHECK(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_authority.htm) USING bdc_tab  MODE mo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_using.htm"
abapFile: "abapcall_transaction_using.htm"
keywords: ["update", "do", "while", "if", "try", "catch", "data", "internal-table", "abapcall", "transaction", "using"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) → 

CALL TRANSACTION, USING

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_shortref.htm)

Syntax

CALL TRANSACTION ta [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_authority.htm)
                    USING bdc\_tab *{* *{**\[*MODE mode*\]* *\[*UPDATE upd*\]**}*
                                  *|*  *\[*OPTIONS FROM opt*\]* *}*
                                     *\[*MESSAGES INTO itab*\]*.

Additions:

[1\. ... MODE mode](#!ABAP_ADDITION_1@1@)
[2\. ... UPDATE upd](#!ABAP_ADDITION_2@2@)
[3\. ... OPTIONS FROM opt](#!ABAP_ADDITION_3@3@)
[4\. ... MESSAGES INTO itab](#!ABAP_ADDITION_4@4@)

Effect

In the variant with the addition USING, the transaction is executed using a [batch input table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_table_glosry.htm "Glossary Entry"). The transaction is called as described under [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm). The additions [WITH*|*WITHOUT AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_authority.htm) are used to control the authorization check.

bdc\_tab expects an internal table with the line type BDCDATA from the ABAP Dictionary. The additions control its processing.

When a transaction with the addition USING is called, the system field sy-binpt is set to the value "X" in the called program, and no other transaction can be called using this addition while this transaction is running.

In a program, a [batch input table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") bdc\_tab is the internal representation of a subset of a [batch input session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") and must be filled accordingly. The structure BDCDATA has the components shown in the table below.

Component

Meaning

PROGRAM

Name of the program of the called transaction

DYNPRO

Number of the dynpro to be processed

DYNBEGIN

Flag for the start of a new dynpro (possible values are "X" and " ")

FNAM

Name of a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") to be filled or batch input control statement, for example to position the cursor

FVAL

Value to be passed to the dynpro field or to the control statement

Using the [content](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_table.htm) of the internal table bdc\_tab, any number of screens of the called transaction can be provided with input and user actions.

System Fields

sy-subrc

Meaning

0

The called transaction was processed successfully.

< 1000

Error in the called transaction. If a [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") was sent within the transaction, it can be received using the addition MESSAGES.

1001

Processing error.

Hints

-   Calling a transaction using a batch input table is actually not the same as executing [batch input sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_glosry.htm "Glossary Entry"). However, there is no exact dividing line between the two, since batch input-based frameworks, such as [CATT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencatt_glosry.htm "Glossary Entry"), and batch input management sometimes also execute the statement CALL TRANSACTION USING internally. As a result, they can use certain options that are not available in genuine batch input.

-   The control options for a batch input table include the control options for [batch input sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in real [batch input](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_glosry.htm "Glossary Entry"), and sometimes exceed them.
    

Example

Call of transaction SE24 in the executable example program DEMO\_CALL\_TRANSACTION\_BDC.

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

The addition MODE determines the processing mode for processing. mode can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions MODE or OPTIONS FROM are used, the effect is the same as if mode had the content "A".

mode

Effect

"A"

Processing with display of the [screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry")

"E"

Display of screens only if an error occurs

"N"

Processing without display of the screens. If a breakpoint is reached in one of the called [transactions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_glosry.htm "Glossary Entry"), processing is terminated with sy-subrc equal to 1001. Then, the field sy-msgty contains "S", sy-msgid contains "00", sy-msgno contains "344", sy-msgv1 contains "SAPMSSY3", and sy-msgv2 contains "0131".

"P"

Processing without display of the screens. If a breakpoint is reached in one of the called transactions, the system branches to the ABAP Debugger.

Others

As for "A".

Addition 2

... UPDATE upd

Effect

The addition UPDATE determines the update mode for processing. upd can be specified as a character-like data object whose content and effect are shown in the following table. If neither of the additions UPDATE or OPTIONS FROM are used, the effect is the same as if upd had the content "A".

upd

Effect

"A"

Asynchronous update. [Updates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_glosry.htm "Glossary Entry") of the called programs are executed in the same way as if the addition AND WAIT were not specified in the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm).

"S"

Synchronous update. Updates of the called programs are executed in the same way as if the addition AND WAIT were specified in the statement COMMIT WORK.

"L"

Local updates. Updates of the called program are executed in the same way as if the statement [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_update_task_local.htm) had been executed in it.

Others

As for "A".

Hint

This option is not available for execution of [batch input sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") in [batch input](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_glosry.htm "Glossary Entry"). Updates are always synchronous here.

Addition 3

... OPTIONS FROM opt

Effect

The addition OPTIONS covers the functions of the additions MODE and UPDATE and provides further options for controlling the processing of the batch input table. The control parameters are specified in an opt structure of the type CTU\_PARAMS from the ABAP Dictionary. The CTU\_PARAMS structure has the components shown in the following table:

Component

Meaning

DISMODE

Processing mode. Values as for the addition MODE.

UPMODE

Update mode for processing. Values as for the addition UPDATE.

CATTMODE

[CATT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencatt_glosry.htm "Glossary Entry") mode for processing. While [batch input](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_glosry.htm "Glossary Entry") is used mostly for data transfer, CATT processes are designed to be reusable tests of more complex [transactions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_glosry.htm "Glossary Entry"). Values: " " (no CATT mode), "N" (CATT without single screen control), "A" (CATT with single screen control).

DEFSIZE

Flag to indicate whether the [screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry") of the called transaction are displayed in the standard screen size. Values: "X" (standard size), " " (current size).

RACOMMIT

Flag to indicate whether the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm) terminates processing or not. Values: " " ( COMMIT WORK terminates processing), "X" (COMMIT WORK does not terminate processing).

NOBINPT

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" in the called transaction), "X" (sy-binpt contains " " in the called transaction).

NOBIEND

Flag for the system field sy-binpt. Values: " " (sy-binpt contains "X" after the end of the data from the batch input table in the called transaction) "X" (sy-binpt contains " " after the end of the data in the called transaction).

Without the addition OPTIONS FROM, the values set by the additions MODE or UPDATE or the default values specified there ("A") apply to DISMODE and UPMODE. The other components are set to the value " ".

Addition 4

... MESSAGES INTO itab

Effect

Using this addition, all the [messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") sent during batch input processing are stored in an internal table itab of the line type BDCMSGCOLL from the ABAP Dictionary.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_transaction_bdc_abexa.htm)

Continue
[CALL TRANSACTION, Batch Input Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_table.htm)