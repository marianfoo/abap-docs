  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [itab - Table Functions (table\_func)](javascript:call_link\('abentable_functions.htm'\)) → 

table\_func - lines

Syntax

... lines( arg ) ...

Effect

The [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) table function lines returns the number of lines in an internal table. The argument arg is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry") that expects an internal table. The return value has the type i.

Hint

The function specified here is one of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)) if its argument is a single data object.

Example

The number of lines in an internal table filled from a database table must match the number of lines on the database.

SELECT carrid
       FROM scarr
       INTO TABLE @DATA(itab).
SELECT COUNT(\*)
       FROM scarr
       INTO @DATA(lines).
ASSERT lines( itab ) = lines.