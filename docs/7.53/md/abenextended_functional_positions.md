  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Operand Positions](javascript:call_link\('abenoperand_positions_obsolete.htm'\)) → 

Extended Functional Operand Positions

Extended functional operand positions are [functional operand positions](javascript:call_link\('abenfunctional_positions.htm'\)) in which certain built-in functions can be specified alongside data objects, [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), and [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), if a single data object is specified as their argument. The following extended functional operand positions exist:

-   Operand operand of the predicate expression

[... operand IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))

-   Operands operand of the statement

[WHEN operand ...](javascript:call_link\('abapwhen.htm'\))

No [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), however, can be specified for operand.

-   Source field source of the obsolete statement

[MOVE source TO ...](javascript:call_link\('abapmove_obs.htm'\))

No [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), however, can be specified for source.

The following built-in functions can be specified for IS *\[*NOT*\]* INITIAL, WHEN, and MOVE:

-   [General numeric functions](javascript:call_link\('abennumerical_functions.htm'\))

-   [Floating point functions](javascript:call_link\('abenfloating_point_functions.htm'\))

-   [Length functions for strings](javascript:call_link\('abenlength_functions.htm'\))

-   [Length functions for byte strings](javascript:call_link\('abendescriptive_functions_binary.htm'\))

-   [Row function for internal tables](javascript:call_link\('abendescriptive_functions_table.htm'\))

However, these functions can only be specified at extended functional operand positions if the argument is not an expression, a functional method, or a built-in function.

Note

Extended functional operand positions exist for historical reasons and they have been replaced by [operand positions for functions and expressions](javascript:call_link\('abenexpression_positions.htm'\)). In all appropriate places, operand positions in which functional methods or built-in functions could previously also be specified, were replaced by a suitable [operand position](javascript:call_link\('abenexpression_positions.htm'\)). In the remaining statements, IS *\[*NOT*\]* INITIAL, WHEN, and MOVE, this did not take place for the following reasons:

-   The operand position of the predicate expression IS *\[*NOT*\]* INITIAL is suitable for use as a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"), but not as a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In particular, [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") are not valid here.

-   WHEN is used to distinguish cases using [CASE](javascript:call_link\('abapcase.htm'\)). Generally, no operations should be performed after WHEN and constant values should be specified instead. The operand position after CASE, on the other hand, was changed to a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

-   MOVE is obsolete and has been replaced by the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)). The right side of a statement with assignment operator is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

The extended functional operand position should not be used in the case of WHEN. The more general assignment operator \= should be used instead of MOVE.

Bad Example

Specifies the built-in function lines as the source of the obsolete statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)).

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DATA lines TYPE i.
...
MOVE lines( itab ) TO lines.

Good Example

Uses the general [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), which enables inline declarations on the left side.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DATA(lines) = lines( itab ).