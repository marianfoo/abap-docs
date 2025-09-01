  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [Table Functions](javascript:call_link\('abentable_functions.htm'\)) → 

lines - Row Function

Syntax

... lines( arg ) ...

The table function lines returns the number of rows (or lines) in an internal table. The argument arg is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry") that expects an internal table. The return value has the type i.

Notes

-   The function described here is one of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if its argument is a single data object.

-   More specifically, a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") or similar chaining can be specified for the argument arg, if the result is an internal table.

Example

The number of rows in an internal table filled from a database table must match the number of rows on the database.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(itab).
SELECT COUNT(\*)
       FROM scarr
       INTO @DATA(lines).
ASSERT lines( itab ) = lines.