  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT itab, Basic Form, ABAPLOOP_AT_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

LOOP AT itab, Basic Form

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_shortref.htm)

Syntax

LOOP AT itab [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm) *\[*[cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm)*\]*.
  ...
  *\[*[AT ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm)
    [...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm)
  [ENDAT.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm)*\]*
  ...
ENDLOOP.

Effect

This variant of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) sequentially reads lines of the internal table itab and executes the statement block between LOOP and ENDLOOP once for each line. Either all lines are read or a subset specified by one or more conditions [cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm).

-   The output behavior [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm) determines how and to where the line content is read.
-   The conditions [cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) can consist of the following optional additions:
    -   The table key with which the loop is executed can be determined with an addition [USING KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm). The table key affects the order in which the lines are processed.
    -   Using the additions [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) and [TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) for index tables and [WHERE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) for all table categories, the loop processing can be restricted to a subset of lines.
    -   An addition [STEP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) allows a step size and the direction of the loop processing to be defined.
-   The control statements [AT ... ENDAT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm) can be used to define control structures for [group level processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_level_processing_glosry.htm "Glossary Entry").

The order in which the lines are read can depend on:

-   The [table category](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_category_glosry.htm "Glossary Entry")
-   The addition [USING KEY](abaploop_at_itab_cond.htm#!ABAP_ADDITION_1@1@)
-   The addition [STEP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@)

If none of the additions is specified, the standard order depends on the table category as follows:

-   Standard tables and sorted tables
    
    The lines are read by ascending line numbers in the [primary table index](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_index_glosry.htm "Glossary Entry"). In each loop pass, the system field sy-tabix contains the line number of the current line in the primary table index.
    
-   Hashed tables
    
    The lines are processed in the order in which they were inserted into the table, and after a sort using the statement SORT in the sort order. In each loop pass, the system field sy-tabix contains the value 0.
    

The loop is executed until all the table lines of the table or the subset as specified in the [cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) condition have been read or until it is exited with a [statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleave_program_units.htm). If no corresponding lines are found or if the internal table is empty, the loop is not executed at all.

If the internal table is specified as the return value or result of a [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), a [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), or a [table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), the value is persisted for the duration of the loop. Afterwards, the internal table can no longer be accessed.

Caution: [Special rules apply](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_loop_change.htm) when changing the internal table within a loop. In particular you should never perform write accesses on a complete table body.

System Fields

This variant of the statement LOOP AT sets the value of the system field sy-tabix:

-   In each loop pass for [index tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindex_table_glosry.htm "Glossary Entry") and when using a [sorted key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_key_glosry.htm "Glossary Entry") on the line number of the current table line in the associated table index.
-   In [hashed tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhashed_table_glosry.htm "Glossary Entry") and when using a [hash key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhash_key_glosry.htm "Glossary Entry") on the value 0.

LOOP AT does not modify sy-subrc. After exiting the loop using ENDLOOP, sy-tabix is set to the value that it had before entering the loop and that applies to sy-subrc:

sy-subrc

Meaning

0

At least one loop pass was executed.

4

No loop pass was executed.

The system fields sy-tfill and sy-tleng are also filled.

Hints

-   If the internal table itab is specified using a [reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_variable_glosry.htm "Glossary Entry"), the loop is executed completely using the table referenced at entry. Any changes to the reference variable do not have an effect on the loop. The associated object cannot be deleted by the [Garbage Collector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengarbage_collector_glosry.htm "Glossary Entry") until the loop has been completed. The same thing applies if the table is represented by a field symbol. After the implementation of the field symbol in the loop, iteration still takes place using the table linked to the field symbol when LOOP is entered.
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpragma_glosry.htm "Glossary Entry").
-   It is generally better to read multiple lines in a LOOP than making multiple individual line reads using the statement [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) or [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expressions.htm).
-   For compatibility reasons, when a table body is replaced in the loop, a runtime error only occurs when a directly specified table is read without a specified secondary key and when a work area wa is specified for the output behavior [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm).
-   Using a special variant [LOOP AT mesh\_path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_loop.htm), a loop can be executed across the last node of a [mesh path](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_glosry.htm "Glossary Entry").
-   Another form of [table iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_iteration_glosry.htm "Glossary Entry") is possible using [iteration expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expression_glosry.htm "Glossary Entry") and [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) in certain constructor expressions.

Example

Loop across an internal table constructed using the [value operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm), where each line is assigned to a field symbol declared inline using [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield-symbol_inline.htm).

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
  LOOP AT spfli\_tab INTO FINAL(spfli\_line)
                    WHERE carrid = <scarr\_line>-carrid.
    cl\_demo\_output=>write\_data( spfli\_line ).
  ENDLOOP.
ENDLOOP.
cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

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
-   Cause: Invalid access to table index when using a hash key.
    Runtime error: ITAB\_ILLEGAL\_INDEX\_OP

Continue
[LOOP AT itab, result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm)
[LOOP AT itab, cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm)
[AT, Group Level Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm)