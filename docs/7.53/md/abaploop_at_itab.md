  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) → 

LOOP AT itab - Basic Form

[Quick Reference](javascript:call_link\('abaploop_at_itab_shortref.htm'\))

Syntax

LOOP AT itab [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[*[cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]*.
  ...
  *\[*[AT ...](javascript:call_link\('abapat_itab.htm'\))
    [...](javascript:call_link\('abapat_itab.htm'\))
  [ENDAT.](javascript:call_link\('abapat_itab.htm'\))*\]*
  ...
ENDLOOP.

Effect

This variant of the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) executes the statement block between LOOP and ENDLOOP once for each read row.

-   The output response [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) determines how and to where the row contents are read.
    
-   The table key with which the loop is executed can be determined in [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)). Either all the rows are read or [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)) conditions are specified to restrict which rows are read.
    
-   [AT ... ENDAT](javascript:call_link\('abapat_itab.htm'\)) can be used to define control structures for [control level processing](javascript:call_link\('abencontrol_level_processin_glosry.htm'\) "Glossary Entry").
    

If the internal table is specified as the return value or result of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the value is persisted for the duration of the loop. Afterwards, it is no longer possible to access the internal table.

If no explicit table key name is specified after [USING KEY](javascript:call_link\('abaploop_at_itab_cond.htm'\)), the order in which the rows are read depends on the table category as follows:

-   Standard tables and sorted tables
    The rows are read by ascending row numbers in the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry"). In each loop pass, the system field sy-tabix contains the row number of the current row in the primary table index.
    
-   Hashed tables
    The rows are processed in the order in which they were inserted in the table, and by the sort order used after the statement SORT. In each loop pass, the system field sy-tabix contains the value 0.
    

The loop continues to run until all the table rows that meet the cond condition have been read or until it is exited with a statement. If no appropriate rows are found or if the internal table is blank, the loop is not run at all.

System Fields

This variant of the statement LOOP AT sets the value of the system field sy-tabix:

-   In each loop pass for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and when using a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") on the row number of the current table row in the associated table index.
    
-   In [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") and when using a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") on the value 0.
    

LOOP AT does not modify sy-subrc. After leaving the loop using ENDLOOP, sy-tabix is set to the value that it had before entering the loop and that applies for sy-subrc:

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run at all.

The system fields sy-tfill and sy-tleng are also filled.

Changing Internal Tables in a Loop

If rows are inserted or deleted in the statement block of a LOOP, this has the following effects: The position of inserted or deleted rows with respect to the current row is determined by the row numbers in the corresponding table index in the case of loops on index tables or if using a sorted key. In the case of loops on hashed tables and if using a hash key, the position depends on the insert order.

-   If rows are inserted after the current row, these new rows are processed in the subsequent loop passes. An endless loop can result.
    
-   If rows are deleted after the current row, the deleted rows are no longer processed in the subsequent loop passes.
    
-   If rows are inserted before the current row, the internal loop counter is increased by one with each inserted row. This affects sy-tabix, which is also increased (in the subsequent loop pass in the case of loops on index tables or when using a sorted key).
    
-   If the current row or rows before the current row are deleted, the internal loop counter is decreased by one with each deleted row. In the case of loops on index tables or if using a sorted key, this affects sy-tabix in the subsequent loop pass, and sy-tabix is decreased accordingly.
    

The replacement of the entire table body in a LOOP using this table causes the loop to be exited at the next loop pass in accordance with the rules described above. This is particularly the case if new rows were added to the table afterwards. Since this usually produces unpredictable program behavior, the entire table body cannot be accessed in change mode in a loop. If this is known statically, a syntax error occurs in classes and for LOOPS with secondary keys known statically. Otherwise, the syntax check simply returns a warning for compatibility reasons. However, at runtime, a runtime error occurs in most cases when replacing the entire table body with statements such as [CLEAR](javascript:call_link\('abapclear.htm'\)), [FREE](javascript:call_link\('abapfree_dataobject.htm'\)), [LOCAL](javascript:call_link\('abaplocal.htm'\)), [REFRESH](javascript:call_link\('abaprefresh_itab.htm'\)), [SORT](javascript:call_link\('abapsort_itab.htm'\)), [DELETE ... WHERE](javascript:call_link\('abapdelete_itab_lines.htm'\)), and with all types of assignments to itab.

Programming Guideline

[Loop Processing](javascript:call_link\('abenloop_guidl.htm'\) "Guideline")

Notes

-   If the internal table itab is specified using a [reference variable](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"), the loop is executed completely using the table referenced at entry. Any changes to the reference variable do not have an effect on the loop. The associated object cannot be deleted from the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") until the loop has been completed. The same thing is true if the table is represented by a field symbol. After the implementation of the field symbol in the loop, iteration still takes place using the table linked to the field symbol when LOOP is entered.
    
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
    
-   It is generally better to read multiple rows in a LOOP than making multiple individual row reads using the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or [table expressions](javascript:call_link\('abentable_expressions.htm'\)).
    
-   There is no addition that can reverse the order of the read rows. This must done using an iteration with [DO](javascript:call_link\('abapdo.htm'\)), [WHILE](javascript:call_link\('abapwhile.htm'\)), or [FOR](javascript:call_link\('abenfor.htm'\)) in which individual rows are read using [READ TABLE](javascript:call_link\('abapread_table.htm'\)) or using [table expressions](javascript:call_link\('abentable_expressions.htm'\)). The [loop conditions](javascript:call_link\('abaploop_at_itab_cond.htm'\)) must then be programmed accordingly in the loop (see the [executable example](javascript:call_link\('abeninverse_itab_for_abexa.htm'\))).
    
-   Due to compatibility reasons, when a table body is replaced, the only situation where a runtime does not occur in the loop is when a directly specified table is read without a specified secondary key and when a work area wa is specified for output response [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
    
-   Using a special variant [LOOP AT mesh\_path](javascript:call_link\('abenmesh_loop.htm'\)), a loop can be executed across the last node of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
    
-   A further form of [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") are possible using [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") and [FOR](javascript:call_link\('abenfor_itab.htm'\)) in certain constructor expressions.
    

Example

Loop across an internal table constructed using the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)), where each row is assigned to a field symbol declared inline using [FIELD-SYMBOL](javascript:call_link\('abenfield-symbol_inline.htm'\)).

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ) ASSIGNING FIELD-SYMBOL(<fs>).
  cl\_demo\_output=>write( |{ <fs> }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

Nested LOOPs without an explicitly specified key. The contents of the current row for the outer loop are analyzed in the WHERE condition for the inner loop.

DATA name TYPE scarr-carrname VALUE '\*'.
cl\_demo\_input=>request( CHANGING field = name ).
DATA: scarr\_tab TYPE SORTED TABLE OF scarr
                WITH UNIQUE KEY carrname,
      spfli\_tab TYPE SORTED TABLE OF spfli
                WITH NON-UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @scarr\_tab.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
LOOP AT scarr\_tab ASSIGNING FIELD-SYMBOL(<scarr\_line>)
                  WHERE carrname CP name.
  LOOP AT spfli\_tab INTO DATA(spfli\_line)
                    WHERE carrid = <scarr\_line>-carrid.
    cl\_demo\_output=>write\_data( spfli\_line ).
  ENDLOOP.
ENDLOOP.
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Non-Handleable Exceptions

-   Cause: Illegal parsing of the LOOP field symbol in the body of the loop.
    Runtime error: ITAB\_ILLEGAL\_REG
    
-   Cause: Illegal assignment to the LOOP reference in the body of the loop.
    Runtime error: MOVE\_TO\_LOOP\_REF
    
-   Cause: Invalid change of entire table body in the loop
    Runtime error: TABLE\_FREE\_IN\_LOOP
    

Continue
[LOOP AT itab - result](javascript:call_link\('abaploop_at_itab_result.htm'\))
[LOOP AT itab - cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))
[AT - Group Level Processing](javascript:call_link\('abapat_itab.htm'\))
![Example](exa.gif "Example") [Internal Tables, Loop with Key Specified](javascript:call_link\('abenloop_at_itab_key_abexa.htm'\))