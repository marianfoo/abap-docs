  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MOVE, ABAPMOVE_OBS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

MOVE

[Short Reference](javascript:call_link\('abapmove_shortref.htm'\))

Obsolete Syntax

MOVE *{**\[*EXACT*\]* source  TO destination*}*
   *|* *{*        source ?TO destination*}*.

Variants:

[1\. MOVE *\[*EXACT*\]* source TO destination.](#!ABAP_VARIANT_1@1@)
[2\. MOVE source ?TO destination.](#!ABAP_VARIANT_2@2@)

Effect

Obsolete form of the [assignment](javascript:call_link\('abenequals_operator.htm'\)) of data objects and reference variables source to target variables destination. If EXACT is specified, only data objects can be specified for source. If EXACT is not specified, the following can be specified for source alongside data objects:

-   [Functional method calls](javascript:call_link\('abapcall_method_functional.htm'\))
-   [Certain built-in functions](javascript:call_link\('abenextended_functional_positions.htm'\))

The following cannot be specified with MOVE:

-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), and [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") for source
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)) or a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") for destination.

Hints

-   Instead of MOVE, only the more general [assignment operators](javascript:call_link\('abenassignment_operator_glosry.htm'\) "Glossary Entry") [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)) should be used, which enable a more general concept.
-   The option to specify functional methods and some built-in functions as assignment sources was added to the source position of the statement MOVE, which was originally designed only for assigning data objects, making this source position an [extended functional operand position](javascript:call_link\('abenextended_functional_positions.htm'\)). This does not, however, cover all the possible functions of assignment operators. New developments, such as specifying [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), or [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") are now only made possible for assignment operators.

Variant 1   

MOVE *\[*EXACT*\]* source TO destination.

Effect

Without the addition EXACT, this statement works in the same way as

[destination = source.](javascript:call_link\('abenequals_operator.htm'\))

If the addition EXACT is specified, the statement works like

[destination = EXACT #( source ).](javascript:call_link\('abenlossless_move.htm'\))

In this way, the addition EXACT produces a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") in accordance with the rules that apply when using the [lossless operator](javascript:call_link\('abenlossless_operator_glosry.htm'\) "Glossary Entry") [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)). This can raise exceptions if values are lost or if they are invalid. If an exception is raised when the operator EXACT is used, the statement is not executed, and the value of the target field remains unchanged. In assignments made without the operator EXACT, the target field contains an undefined value when an exception raised by the conversion is handled.

Hint

When MOVE is used for [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), addition EXACT and the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) have the special effect that they can enable assignments, which would otherwise have not been possible.

Example

The two commented out assignments of a number to the [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") num is not possible. The assignment is possible using EXACT, because in this case the assignment follows the same [rules](javascript:call_link\('abenexact_constructor_enum.htm'\)) as the lossless operator shown below.

TYPES:
  BEGIN OF ENUM number,
    n0, n1, n2,
  END OF ENUM number.
DATA num TYPE number.
"num = 1.
"MOVE 1 TO num.
MOVE EXACT 1 TO num.
num = EXACT number( 1 ).

Variant 2   

MOVE source ?TO destination.

Effect

This statement works in the same way as

[destination ?= source.](javascript:call_link\('abapmove_cast.htm'\))

source and destination must have reference types. The addition ?TO makes [downcasts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") possible, whereas in TO only [upcasts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") can be used.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](javascript:call_link\('abenassign_calc_guidl.htm'\) "Guideline")