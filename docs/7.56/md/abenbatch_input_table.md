  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and exiting program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Programs](javascript:call_link\('abenabap_program_call.htm'\)) →  [Calling Transactions](javascript:call_link\('abenabap_call_transaction.htm'\)) →  [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) →  [CALL TRANSACTION, USING](javascript:call_link\('abapcall_transaction_using.htm'\)) → 

CALL TRANSACTION, Batch Input Table

A [batch input table](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") of the [line type](javascript:call_link\('abenrow_type_glosry.htm'\) "Glossary Entry") BDCDATA , which is specified after the addition USING of the statement [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) in [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") calls, must have the following content, which is achieved by appending lines to an initial table in this order:

-   For each new dynpro, a new line with
    -   A program name in the column PROGRAM
    -   A dynpro number in the column DYNPRO
    -   A flag "X" in the column DYNBEGIN
-   For each input field to be filled, a line with
    
    -   The name of the dynpro field in the column FNAM
    -   The value to be passed in the column FVAL
    
    If the field is part of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or [step loop](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry"), the desired line number must be appended to the field name. If the dynpro contains [subscreens](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry"), their fields are assigned to the including dynpro. This can produce multiple fields with the same name, which are then all filled.
    
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
-   In [batch input folders](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry"), multiple field names of subscreens can be distinguished by specifying the special value "BDC\_SUBSCR in a preceding line in the column FNAM and in the column FVAL of the subscreen.

Executable Example

[Transaction Call, BDC Table](javascript:call_link\('abencall_transaction_bdc_abexa.htm'\))