  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [ABAP Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_statements.htm) →  [Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands.htm) →  [Functions and Expressions in Operand Positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_expressions.htm) →  [Operand Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions.htm) →  [Read Positions for Functions and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_positions_read.htm) → 

Numeric Expression Positions

Numeric expression positions are [read positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreading_position_glosry.htm "Glossary Entry") where [numeric data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_object_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), or [functional method calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") and [method chainings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") whose return value has a [numeric data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), can be specified. The following numeric expression positions exist:

-   Arguments of functions

-   Numeric arguments of [string functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm)

-   Numeric arguments of [extremum functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm)

-   Counters and positions:

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_dynamic_dobj.htm)

-   Operand n of the statement
    [DO n TIMES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo.htm)

-   Operand sec of the statement
    [WAIT UP TO sec SECONDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwait_up_to.htm)

-   Operand num of the statement
    [SHIFT ... BY num PLACES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapshift_places.htm)

-   Operands bitpos and val of the statement
    [SET BIT bitpos ... TO val](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_bit.htm).

-   Operand bitpos of the statement
    [GET BIT bitpos ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_bit.htm).

-   Positions specifications in the statements FIND and REPLACE:

-   Operands off and len of the statements
    [FIND ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_section_of.htm)
    [REPLACE ... IN SECTION ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_section_of.htm)

-   Operands lin1, off1, lin2, and off2 of the statements
    [FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind_table_range.htm)
    [REPLACE  ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace_table_range.htm)

-   Operands off and len of the statement
    [REPLACE SECTION OFFSET off LENGTH len OF ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreplace_in_position.htm)

-   Specification of the line number idx with respect to a table index when accessing internal tables in the following:

-   [READ TABLE itab INDEX idx ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_index.htm)

-   [LOOP AT itab ...FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm)

-   [INSERT itab ... INDEX idx ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_position.htm)

-   [INSERT LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_linespec.htm)

-   [APPEND LINES OF jtab FROM idx1 TO idx2  ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm)

-   [MODIFY itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmodify_itab_index.htm)

-   [DELETE itab INDEX idx  ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_line.htm)

-   [DELETE itab FROM idx1 TO idx2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_lines.htm)

Example

Specifies a built-in function lines( itab ) for specifying the loop passes of a [DO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo.htm) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DO lines( itab ) TIMES.
  ...
ENDDO.