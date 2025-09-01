  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) → 

itab - Table Expressions (table\_exp)

Syntax

... itab\[ [itab\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) \][*\[*\-comp*|*\[ ... \]*|*\->comp*\]*](javascript:call_link\('abentable_exp_chaining.htm'\)) ...

Effect

A table expression consists of an internal table itab directly followed by a line specification [itab\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) in square brackets \[ \]. A chaining [\-comp*|*\[ ... \]*|*\->comp](javascript:call_link\('abentable_exp_chaining.htm'\)) can be appended to this line. The expression searches for the specified line in the internal table.

-   If no chaining is specified, the entire line is returned as the result of the corresponding line type.
-   If a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) is specified, the following is possible:
    -   The structure component selector \- can be used to access the component comp in the read line.
    -   Square brackets \[ ... \] can be used to chain multiple table expressions.
    -   The object component selector \-> can be used to access a component comp of the object referenced by the preceding expression.

The result of a table expression can be used as follows:

-   Read positions
    -   A table expression can be specified in [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) and [functional operand positions](javascript:call_link\('abenfunctional_positions.htm'\)) with a suitable [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). The result is used here as an operand. The [type of the result](javascript:call_link\('abentable_exp_result.htm'\)) cannot be controlled in these operand positions using [constructor operators](javascript:call_link\('abenconstructor_operator_glosry.htm'\) "Glossary Entry"). A [default value](javascript:call_link\('abentable_exp_optional_default.htm'\)) can be specified for lines that are not found.
    -   A table expression can be specified as a special [expression variant](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) for the memory area in the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)).
    -   A table expression can be specified as an argument of the [table function](javascript:call_link\('abentable_function_glosry.htm'\) "Glossary Entry") [line\_index](javascript:call_link\('abenline_index_function.htm'\)) and the [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)).
-   Write positions
    -   A table expression can be specified as a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"). The line found can be modified directly here.

The internal table itab must be specified directly using its name, a field symbol, or a dereferenced data reference as described under [Read Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\)). In a table with [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the table body is addressed and not the header line.

If the specified line is not found, a catchable exception of the class CX\_SY\_ITAB\_LINE\_NOT\_FOUND is raised in all operand positions, except when

-   a [default value](javascript:call_link\('abentable_exp_optional_default.htm'\)) is specified in the definition of the [type of the result](javascript:call_link\('abentable_exp_result.htm'\)),
-   a table expression is used in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), where sy-subrc is set to the value 4,
-   used in the predicate function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)), where the truth value "false" is returned,
-   used in the table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)), where the value 0 is returned.

Hints

-   In table expressions, the empty square brackets \[\] cannot be specified after itab. In other operand positions, these empty brackets distinguish the table body from [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry").
-   Functions and constructor expressions cannot currently be specified for itab, but the table expressions shown under [Chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) are possible.
-   A table expression cannot be followed directly by a [specified offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") [+off(len)](javascript:call_link\('abenoffset_length.htm'\)), but after a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose final place is a suitable structure component after a structure component selector.
-   Duplicate selections, that is, multiple reads performed on the same line of an internal table in different expressions, must be avoided in a statement with multiple table expressions. In these cases, a selection should be made before the statement and the result referenced by a field symbol or reference variable.
-   The exception class CX\_SY\_ITAB\_LINE\_NOT\_FOUND contains attributes for displaying the line number in the index or key used if an access fails. If only index accesses are used in statements with multiple table expressions, it is not possible to distinguish which expression was unsuccessful.
-   Each table expression can be viewed as a short form for a variant of the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) that enables reads to be performed on lines of internal tables in operand positions.
-   In write positions, the same [restrictions](javascript:call_link\('abapread_table_outdesc.htm'\)) apply with respect to modifying key fields to table expressions whose [result](javascript:call_link\('abentable_exp_result.htm'\)) is a field symbol or temporary reference variable as to other field symbols or data reference variables that point to lines of internal tables. In particular, table expressions that return a line of a sorted table or hashed table to write positions like the left side of an assignment or as actual parameters for output parameters always raise an exception.
-   A table expression cannot be specified in a write position if it is a read-only table, such as an input parameter passed by reference. This restriction applies even if a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) is used and the content of the table itself is not actually modified.
-   Unlike [READ TABLE](javascript:call_link\('abapread_table.htm'\)), a table expression does not change the value of the system field sy-tabix, except when used in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).
-   Like the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)), a table expression is a single line read. If multiple lines of an internal table are to be read, the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) or a [FOR expression](javascript:call_link\('abenfor.htm'\)) generally has better performance than using table expressions in a loop.
-   [Mesh path expressions](javascript:call_link\('abenmesh_path_expression.htm'\)) are a special form of table expression that can be used in exactly the same way as table expressions.

Example

The content of the component carrid of the line of the internal table carrier\_tab is passed to the method get\_spfli. In this table, the component carrname of the [secondary key](javascript:call_link\('abensecondary_key_glosry.htm'\) "Glossary Entry") name has a specific value.

DATA carrier\_tab TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid
                 WITH NON-UNIQUE SORTED KEY name COMPONENTS carrname.
SELECT \* FROM scarr INTO TABLE @carrier\_tab.
TRY.
    DATA(flight\_tab) = cl\_demo\_spfli=>get\_spfli(
      carrier\_tab\[ KEY name
                   COMPONENTS carrname = 'United Airlines' \]-carrid ).
    cl\_demo\_output=>display( flight\_tab ).
  CATCH cx\_sy\_itab\_line\_not\_found.
    cl\_demo\_output=>display( \`Nothing found\` ).
ENDTRY.

Example

The first calculation with table lines is a bad example of how to use table expressions. The same selection is made three times in the same statement. The second calculation shows how this can be avoided by using an [assignment to a field symbol](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

DATA itab TYPE TABLE OF i.
itab = VALUE #( ( 3 ) ( 5 ) ).
"Bad example
itab\[ table\_line = 3 \] =
  itab\[ table\_line = 3 \] \* itab\[ table\_line = 3 \].
"Good example
ASSIGN itab\[ table\_line = 5 \] TO FIELD-SYMBOL(<fs>).
<fs> = <fs> \* <fs>.

Examples

The program DEMO\_TABLE\_EXPRESSIONS shows further examples of how to use table expressions.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_ITAB\_LINE\_NOT\_FOUND

-   Cause: The specified table line was not found.
    Runtime error: ITAB\_LINE\_NOT\_FOUND

Continue
[table\_exp - itab\_line](javascript:call_link\('abentable_exp_itab_line.htm'\))
[table\_exp - Result](javascript:call_link\('abentable_exp_result.htm'\))
[table\_exp - Chainings](javascript:call_link\('abentable_exp_chaining.htm'\))
[table\_exp - default](javascript:call_link\('abentable_exp_optional_default.htm'\))
[table\_exp - Write Positions](javascript:call_link\('abentable_exp_lhs.htm'\))