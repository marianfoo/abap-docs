  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [itab - Table Expressions (table\_exp)](javascript:call_link\('abentable_expressions.htm'\)) → 

table\_exp - Write Positions

Table expressions and their [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) can be specified as [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"). The result of a table expression in these positions is always a temporary field symbol.

-   If a single table expression is specified, or a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) whose last position is a table expression, the entire line found is modified in the writing position.

-   If a [chaining](javascript:call_link\('abentable_exp_chaining.htm'\)) is specified whose last position is a structure component after a structure component selector, this component is modified in the write position.

In the case of writes performed on the temporary field symbol, the same rules apply as to a field symbol assigned a table line using [READ TABLE ASSIGNING](javascript:call_link\('abapread_table_outdesc.htm'\)). More specifically, the read-only character of key fields must be respected. Table expressions that return a line of a sorted table or hashed table to write positions such as the left side of an assignment or as actual parameters for output parameters always raise an exception.

Hint

The constructor operators VALUE and REF used to control the [result](javascript:call_link\('abentable_exp_result.htm'\)) of the table expression cannot be used in write positions.

Example

An internal table is prefilled with initial lines, which are overwritten with a value in the [DO](javascript:call_link\('abapdo.htm'\)) loop.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 5 ( ) ).
DO lines( itab ) TIMES.
  itab\[ sy-index \] = sy-index \*\* 2.
ENDDO.

Executable Example

[Table Expressions, Write Position](javascript:call_link\('abentable_exp_itab_changing_abexa.htm'\))

Continue
![Example](exa.gif "Example") [table\_exp - Write Positions](javascript:call_link\('abentable_exp_itab_changing_abexa.htm'\))