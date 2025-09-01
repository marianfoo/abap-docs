  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) → 

LOOP AT itab, Basic Form

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_shortref.htm)

Syntax

LOOP AT itab [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm) *\[*[cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm)*\]*.
  ...
  *\[*[AT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_itab.htm)
    [...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_itab.htm)
  [ENDAT.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_itab.htm)*\]*
  ...
ENDLOOP.

Effect

This variant of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) executes the statement block between LOOP and ENDLOOP once for each read line.

-   The output behavior [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm) determines how and to where the line content is read.
-   The table key with which the loop is executed can be determined in [cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm). Either all the lines are read or [cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm) conditions are specified to restrict which lines are read.
-   [AT ... ENDAT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_itab.htm) can be used to define control structures for [group level processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_level_processing_glosry.htm "Glossary Entry").

If the internal table is specified as the return value or result of a [functional method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry"), the value is persisted for the duration of the loop. Afterwards, the internal table can no longer be accessed.

If no explicit table key name is specified after [USING KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm), the order in which the lines are read depends on the table category as follows:

-   Standard tables and sorted tables
    
    The lines are read by ascending line numbers in the [primary table index](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). In each loop pass, the system field sy-tabix contains the line number of the current line in the primary table index.
    
-   Hashed tables
    
    The lines are processed in the order in which they were inserted into the table, and after a sort using the statement SORT in the sort order. In each loop pass, the system field sy-tabix contains the value 0.
    

The loop runs until all the table lines that meet the cond condition have been read or until it is exited with a statement. If no corresponding lines are found or if the internal table is empty, the loop is not run at all.

System Fields

This variant of the statement LOOP AT sets the value of the system field sy-tabix:

-   In each loop pass for [index tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenindex_table_glosry.htm "Glossary Entry") and when using a [sorted key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensorted_key_glosry.htm "Glossary Entry") on the line number of the current table line in the associated table index.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhashed_table_glosry.htm "Glossary Entry") and when using a [hash key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhash_key_glosry.htm "Glossary Entry") on the value 0.

LOOP AT does not modify sy-subrc. After exiting the loop using ENDLOOP, sy-tabix is set to the value that it had before entering the loop and that applies for sy-subrc:

sy-subrc

Meaning

0

The loop was run at least once.

4

The loop was not run.

The system fields sy-tfill and sy-tleng are also filled.

Changing internal tables in a loop

In the statement block of a LOOP, the structure of the current internal table can be changed by inserting or deleting lines. The position of inserted or deleted lines with regard to the current line is determined by the line numbers in the corresponding table index in the case of loops across index tables or when using a sorted key. In the case of loops on hashed tables and when using a hash key, the position depends on the order of insertion.

-   Inserting lines after the current line causes these new lines to be processed in the subsequent loop passes, which can produce an endless loop.
-   Deleting lines after the current line causes the deleted lines to no longer be processed in the subsequent loop passes.
-   Inserting lines in front of the current line causes the internal loop counter to be increased by one with each inserted line. This affects sy-tabix in the subsequent loop pass in the case of loops across index tables or when using a sorted key, and sy-tabix is increased accordingly.
-   Deleting the current line or lines in front of the current line causes the internal loop counter to be decreased by one with each deleted line. In the case of loops across index tables or when using a sorted key, this affects sy-tabix in the subsequent loop pass, and sy-tabix is decreased accordingly.

The replacement of the entire table body in a LOOP across the same table causes the loop to be exited at the next loop pass in accordance with the rules described above. This is particularly the case if new lines were inserted into the table afterwards. Since this usually leads to unexpected program behavior, the entire table body cannot be accessed in change mode in a loop. If this is known statically, a syntax error occurs in classes and for LOOP statements with a statically known secondary key. Otherwise, the syntax check simply returns a warning for compatibility reasons. However, at runtime, a runtime error occurs in most cases when replacing the entire table body with statements such as [CLEAR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclear.htm), [FREE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfree_dataobject.htm), [LOCAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplocal.htm), [REFRESH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprefresh_itab.htm), [SORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsort_itab.htm), [DELETE ... WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_itab_lines.htm), and with all types of assignments to itab.

Programming Guideline

[Loop Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_guidl.htm "Guideline")

Hints

-   If the internal table itab is specified using a [reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreference_variable_glosry.htm "Glossary Entry"), the loop is executed completely using the table referenced at entry. Any changes to the reference variable do not have an effect on the loop. The associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengarbage_collector_glosry.htm "Glossary Entry") until the loop has been completed. The same thing applies if the table is represented by a field symbol. After the implementation of the field symbol in the loop, iteration still takes place using the table linked to the field symbol when LOOP is entered.
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpragma_glosry.htm "Glossary Entry").
-   It is generally better to read multiple lines in a LOOP than making multiple individual line reads using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm) or [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm).
-   There is no addition that can reverse the order of the read lines. To achieve this, an iteration with [DO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm), [WHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm), or [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor.htm) must be executed, in which individual lines are read using [READ TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_table.htm) or using [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expressions.htm). The [loop conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm) must then be programmed accordingly in the loop (see the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninverse_itab_for_abexa.htm)).
-   For compatibility reasons, when a table body is replaced in the loop, a runtime error only occurs when a directly specified table is read without a specified secondary key and when a work area wa is specified for the output behavior [result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm).
-   Using a special variant [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_loop.htm), a loop can be executed across the last node of a [mesh path](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmesh_path_glosry.htm "Glossary Entry").
-   Another form of [table iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_iteration_glosry.htm "Glossary Entry") is possible using [iteration expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeniteration_expression_glosry.htm "Glossary Entry") and [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) in certain constructor expressions.

Example

Loop across an internal table constructed using the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm), where each line is assigned to a field symbol declared inline using [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield-symbol_inline.htm).

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ) ASSIGNING FIELD-SYMBOL(<fs>).
  cl\_demo\_output=>write( |{ <fs> }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

Nested LOOP loops without explicit key declaration. The content of the current line for the outer loop is evaluated in the WHERE condition for the inner loop.

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

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR

Uncatchable Exceptions

-   Cause: Illegal parsing of the LOOP field symbol in the body of the loop.
    Runtime error: ITAB\_ILLEGAL\_REG
-   Cause: Illegal assignment to the LOOP reference in the body of the loop.
    Runtime error: MOVE\_TO\_LOOP\_REF
-   Cause: Invalid change of entire table body in the loop
    Runtime error: TABLE\_FREE\_IN\_LOOP

Continue
[LOOP AT itab, result](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm)
[LOOP AT itab, cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_cond.htm)
[AT, Group Level Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_itab.htm)
![Example](exa.gif "Example") [itab - Loop with Key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_at_itab_key_abexa.htm)