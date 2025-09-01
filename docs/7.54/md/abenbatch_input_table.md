  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [CALL TRANSACTION - USING](javascript:call_link\('abapcall_transaction_using.htm'\)) → 

CALL TRANSACTION - Batch Input Table

A [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") of the [row type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") BDCDATA specified after the addition USING of the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) in [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") calls must have the following content. This content is achieved by appending rows to an initial table in this order:

-   For each new dynpro, a new row with

-   a program name in the column PROGRAM

-   a dynpro number in the column DYNPRO

-   an "X" in the column DYNBEGIN

-   For each filled input field, a row with

-   the name of the dynpro field in the column FNAM

-   the passed value in the column FVAL

If the field is part of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), the required row number must be appended to the field name.

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

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))