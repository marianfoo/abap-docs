  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION - USING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction_using.htm) → 

CALL TRANSACTION - Batch Input Table

A [batch input table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") of the [row type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrow_type_glosry.htm "Glossary Entry") BDCDATA specified after the addition USING of the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm) in [transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentransaction_glosry.htm "Glossary Entry") calls must have the following content. This content is achieved by appending rows to an initial table in this order:

-   For each new dynpro, a new row with

-   a program name in the column PROGRAM

-   a dynpro number in the column DYNPRO

-   an "X" in the column DYNBEGIN

-   For each filled input field, a row with

-   the name of the dynpro field in the column FNAM

-   the passed value in the column FVAL

If the field is part of a [table control](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_control_glosry.htm "Glossary Entry") or [step loop](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the required row number must be appended to the field name.

-   If the cursor is to be positioned on a screen element

-   The value "BDC\_CURSOR" in the column FNAM

-   the name of the screen element in the column FVAL

If the cursor is to be positioned on a screen element in a table control or step loop, the required row number must be appended to the name of the element.

-   For each dynpro, the function code

-   The value "BDC\_OKCODE" in the column FNAM

-   a function code in the column FVAL

Any columns not used in a row remain initial.

Note

Transaction Recorder (transaction SHDB) records executed transactions as batch input tables. The resulting batch input tables can be displayed and edited. Programs and function modules can be generated to use these tables.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_transaction_bdc_abexa.htm)