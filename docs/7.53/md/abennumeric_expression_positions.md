  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Functions and Expressions in Operand Positions](javascript:call_link\('abenoperands_expressions.htm'\)) →  [Operand Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions.htm'\)) →  [Reading Positions for Functions and Expressions](javascript:call_link\('abenexpression_positions_read.htm'\)) → 

Numeric Expression Positions

Numeric expression positions are [reading positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") in which [numeric data objects](javascript:call_link\('abennumeric_data_object_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), and [built-in functions](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry"), or [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") and [method chainings](javascript:call_link\('abenmethod_chaining_glosry.htm'\) "Glossary Entry") whose return value has a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), can be specified. The following numeric expression positions exist:

-   Arguments of functions

-   Numeric arguments of [string functions](javascript:call_link\('abenstring_functions.htm'\))

-   Numeric arguments of [extremum functions](javascript:call_link\('abennmax_nmin_functions.htm'\))

-   Counters and positions:

-   Operand comp of the statement
    [ASSIGN COMPONENT comp OF STRUCTURE](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\))

-   Operand n of the statement
    [DO n TIMES](javascript:call_link\('abapdo.htm'\))

-   Operand sec of the statement
    [WAIT UP TO sec SECONDS](javascript:call_link\('abapwait_up_to.htm'\))

-   Operand num of the statement
    [SHIFT ... BY num PLACES](javascript:call_link\('abapshift_places.htm'\))

-   Operands bitpos and val of the statement
    [SET BIT bitpos ... TO val](javascript:call_link\('abapset_bit.htm'\)).

-   Operand bitpos of the statement
    [GET BIT bitpos ...](javascript:call_link\('abapget_bit.htm'\)).

-   Positions specified in the statements FIND and REPLACE:

-   Operands off and len of the statements
    [FIND ... IN SECTION ... OF](javascript:call_link\('abapfind_section_of.htm'\))
    [REPLACE ... IN SECTION ... OF](javascript:call_link\('abapfind_section_of.htm'\))

-   Operands lin1, off1, lin2, and off2 of the statements
    [FIND ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](javascript:call_link\('abapfind_table_range.htm'\))
    [REPLACE  ... IN TABLE ... FROM lin1 OFFSET off1 TO lin2 OFFSET off2 ...](javascript:call_link\('abapreplace_table_range.htm'\))

-   Operands off and len of the statement
    [REPLACE SECTION OFFSET off LENGTH len OF ...](javascript:call_link\('abapreplace_in_position.htm'\))

-   The row number idx specified with respect to a table index when accessing an internal table in the following:

-   [READ TABLE itab INDEX idx ...](javascript:call_link\('abapread_table_index.htm'\))

-   [LOOP AT itab ...FROM idx1 TO idx2 ...](javascript:call_link\('abaploop_at_itab_cond.htm'\))

-   [INSERT itab ... INDEX idx ...](javascript:call_link\('abapinsert_itab_position.htm'\))

-   [INSERT LINES OF jtab FROM idx1 TO idx2  ...](javascript:call_link\('abapinsert_itab_linespec.htm'\))

-   [APPEND LINES OF jtab FROM idx1 TO idx2  ...](javascript:call_link\('abapappend_linespec.htm'\))

-   [MODIFY itab INDEX idx  ...](javascript:call_link\('abapmodify_itab_index.htm'\))

-   [DELETE itab INDEX idx  ...](javascript:call_link\('abapdelete_itab_line.htm'\))

-   [DELETE itab FROM idx1 TO idx2 ...](javascript:call_link\('abapdelete_itab_lines.htm'\))

Example

Specifies a built-in function lines( itab ) for specifying the loop passes of a [DO](javascript:call_link\('abapdo.htm'\)) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DO lines( itab ) TIMES.
  ...
ENDDO.