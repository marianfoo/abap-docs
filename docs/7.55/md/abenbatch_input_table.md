  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_call.htm) →  [Calling Transactions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_call_transaction.htm) →  [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) →  [CALL TRANSACTION, USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_using.htm) → 

CALL TRANSACTION, Batch Input Table

A [batch input table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") of the [line type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrow_type_glosry.htm "Glossary Entry") BDCDATA , which is specified after the addition USING of the statement [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) in [transaction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_glosry.htm "Glossary Entry") calls, must have the following content, which is achieved by appending lines to an initial table in this order:

-   For each new dynpro, a new line with

-   A program name in the column PROGRAM

-   A dynpro number in the column DYNPRO

-   A flag "X" in the column DYNBEGIN

-   For each input field to be filled, a line with

-   The name of the dynpro field in the column FNAM

-   The value to be passed in the column FVAL

If the field is part of a [table control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry") or [step loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstep_loop_glosry.htm "Glossary Entry"), the desired line number must be appended to the field name. If the dynpro contains [subscreens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubscreen_glosry.htm "Glossary Entry"), their fields are assigned to the including dynpro. This can produce multiple fields with the same name, which are then all filled.

-   If the cursor is to be positioned on a screen element

-   The value "BDC\_CURSOR" in the column FNAM

-   The name of the screen element in the column FVAL

If the cursor is to be positioned on a screen element in a table control or step loop, the desired line number must be appended to the name of the element.

-   For each dynpro, the function code

-   The value "BDC\_OKCODE" in the column FNAM

-   A function code in the column FVAL

Any columns in a line that are not listed remain initial.

Hints

-   Transaction Recorder (transaction SHDB) records executed transactions as batch input tables. The resulting batch input tables can be displayed and edited. Programs and function modules can be generated for their use.

-   In [batch input folders](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry"), multiple field names of subscreens can be distinguished by specifying the special value "BDC\_SUBSCR in a preceding line in the column FNAM and in the column FVAL of the subscreen.

Executable Example

[Transaction Call, BDC Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_transaction_bdc_abexa.htm)