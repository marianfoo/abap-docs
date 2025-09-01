---
title: "MOVE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_shortref.htm) Obsolete Syntax MOVE EXACT source  TO destination          source ?TO destination. Variants: 1. MOVE EXACT source TO destination.(#!ABAP_VARIANT_1@1@) 2. MOVE sourc
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_obs.htm"
abapFile: "abapmove_obs.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abapmove", "obs"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MOVE, ABAPMOVE_OBS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

MOVE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_shortref.htm)

Obsolete Syntax

MOVE *{**\[*EXACT*\]* source  TO destination*}*
   *|* *{*        source ?TO destination*}*.

Variants:

[1\. MOVE *\[*EXACT*\]* source TO destination.](#!ABAP_VARIANT_1@1@)
[2\. MOVE source ?TO destination.](#!ABAP_VARIANT_2@2@)

Effect

Obsolete form of the [assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm) of data objects and reference variables source to target variables destination. If EXACT is specified, only data objects can be specified for source. If EXACT is not specified, the following can be specified for source alongside data objects:

-   [Functional method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_functional.htm)
-   [Certain built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm)

The following cannot be specified with MOVE:

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [calculation expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for source
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm) or a [writable expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwritable_expression_glosry.htm "Glossary Entry") for destination.

Hints

-   Instead of MOVE, only the more general [assignment operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassignment_operator_glosry.htm "Glossary Entry") [\=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm) and [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm) should be used, which enable a more general concept.
-   The option to specify functional methods and some built-in functions as assignment sources was added to the source position of the statement MOVE, which was originally designed only for assigning data objects, making this source position an [extended functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_functional_positions.htm). This does not, however, cover all the possible functions of assignment operators. New developments, such as specifying [constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry"), or [inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are now only made possible for assignment operators.

Variant 1   

MOVE *\[*EXACT*\]* source TO destination.

Effect

Without the addition EXACT, this statement works in the same way as

[destination = source.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm)

If the addition EXACT is specified, the statement works like

[destination = EXACT #( source ).](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlossless_move.htm)

In this way, the addition EXACT produces a [lossless assignment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") in accordance with the rules that apply when using the [lossless operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_exact.htm). This can raise exceptions if values are lost or if they are invalid. If an exception is raised when the operator EXACT is used, the statement is not executed, and the value of the target field remains unchanged. In assignments made without the operator EXACT, the target field contains an undefined value when an exception raised by the conversion is handled.

Hint

When MOVE is used for [enumerated objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), addition EXACT and the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_exact.htm) have the special effect that they can enable assignments, which would otherwise have not been possible.

Example

The two commented out assignments of a number to the [enumerated variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") num is not possible. The assignment is possible using EXACT, because in this case the assignment follows the same [rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexact_constructor_enum.htm) as the lossless operator shown below.

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

[destination ?= source.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm)

source and destination must have reference types. The addition ?TO makes [downcasts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendown_cast_glosry.htm "Glossary Entry") possible, whereas in TO only [upcasts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry") can be used.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassign_calc_guidl.htm "Guideline")