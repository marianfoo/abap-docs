---
title: "LOOP AT itab - Basic Form"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_shortref.htm) Syntax LOOP AT itab result(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_result.htm) cond(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapl
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm"
abapFile: "abaploop_at_itab.htm"
keywords: ["select", "insert", "delete", "loop", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abaploop", "itab"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) → 

LOOP AT itab - Basic Form

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_shortref.htm)

Syntax

LOOP AT itab [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_result.htm) *\[*[cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm)*\]*.
  ...
  *\[*[AT ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm)
    [...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm)
  [ENDAT.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm)*\]*
  ...
ENDLOOP.

Effect

This variant of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm) executes the statement block between LOOP and ENDLOOP once for each read row.

-   The output response [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_result.htm) determines how and to where the row contents are read.
    
-   The table key with which the loop is executed can be determined in [cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm). Either all the rows are read or [cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm) conditions are specified to restrict which rows are read.
    
-   [AT ... ENDAT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm) can be used to define control structures for [group level processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry").
    

If the internal table is specified as the return value or result of a [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), the value is persisted for the duration of the loop. Afterwards, it is no longer possible to access the internal table.

If no explicit table key name is specified after [USING KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm), the order in which the rows are read depends on the table category as follows:

-   Standard tables and sorted tables
    The rows are read by ascending row numbers in the [primary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). In each loop pass, the system field sy-tabix contains the row number of the current row in the primary table index.
    
-   Hashed tables
    The rows are processed in the order in which they were inserted in the table, and by the sort order used after the statement SORT. In each loop pass, the system field sy-tabix contains the value 0.
    

The loop continues to run until all the table rows that meet the cond condition have been read or until it is exited with a statement. If no appropriate rows are found or if the internal table is blank, the loop is not run at all.

System Fields

This variant of the statement LOOP AT sets the value of the system field sy-tabix:

-   In each loop pass for [index tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenindex_table_glosry.htm "Glossary Entry") and when using a [sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") on the row number of the current table row in the associated table index.
    
-   In [hashed tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") and when using a [hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") on the value 0.
    

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
    

The replacement of the entire table body in a LOOP using this table causes the loop to be exited at the next loop pass in accordance with the rules described above. This is particularly the case if new rows were added to the table afterwards. Since this usually produces unpredictable program behavior, the entire table body cannot be accessed in change mode in a loop. If this is known statically, a syntax error occurs in classes and for LOOPS with secondary keys known statically. Otherwise, the syntax check simply returns a warning for compatibility reasons. However, at runtime, a runtime error occurs in most cases when replacing the entire table body with statements such as [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm), [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm), [LOCAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplocal.htm), [REFRESH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprefresh_itab.htm), [SORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm), [DELETE ... WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm), and with all types of assignments to itab.

Programming Guideline

[Loop Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_guidl.htm "Guideline")

Notes

-   If the internal table itab is specified using a [reference variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_variable_glosry.htm "Glossary Entry"), the loop is executed completely using the table referenced at entry. Any changes to the reference variable do not have an effect on the loop. The associated object cannot be deleted from the [Garbage Collector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengarbage_collector_glosry.htm "Glossary Entry") until the loop has been completed. The same thing is true if the table is represented by a field symbol. After the implementation of the field symbol in the loop, iteration still takes place using the table linked to the field symbol when LOOP is entered.
    
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpragma_glosry.htm "Glossary Entry").
    
-   It is generally better to read multiple rows in a LOOP than making multiple individual row reads using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) or [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm).
    
-   There is no addition that can reverse the order of the read rows. This must done using an iteration with [DO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdo.htm), [WHILE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhile.htm), or [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm) in which individual rows are read using [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) or using [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm). The [loop conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm) must then be programmed accordingly in the loop (see the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninverse_itab_for_abexa.htm)).
    
-   Due to compatibility reasons, when a table body is replaced, the only situation where a runtime does not occur in the loop is when a directly specified table is read without a specified secondary key and when a work area wa is specified for output response [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_result.htm).
    
-   Using a special variant [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_loop.htm), a loop can be executed across the last node of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry").
    
-   A further form of [table iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_iteration_glosry.htm "Glossary Entry") are possible using [iteration expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expression_glosry.htm "Glossary Entry") and [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) in certain constructor expressions.
    

Example

Loop across an internal table constructed using the [value operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm), where each row is assigned to a field symbol declared inline using [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield-symbol_inline.htm).

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

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Non-Handleable Exceptions

-   Cause: Illegal conversion of the LOOP field symbol in the core of the loop.
    Runtime error: ITAB\_ILLEGAL\_REG
    
-   Cause: Illegal assignment to the LOOP reference in the core of the loop.
    Runtime error: MOVE\_TO\_LOOP\_REF
    
-   Cause: Invalid change of entire table body in the loop
    Runtime error: TABLE\_FREE\_IN\_LOOP
    

Continue
[LOOP AT itab - result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_result.htm)
[LOOP AT itab - cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_cond.htm)
[AT - Group Level Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_itab.htm)
![Example](exa.gif "Example") [Internal Tables, Loop with Key Specified](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenloop_at_itab_key_abexa.htm)