  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_assignments.htm) → 

MOVE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_shortref.htm)

Obsolete Syntax

MOVE *{**\[*EXACT*\]* source  TO destination*}*
   *|* *{*        source ?TO destination*}*.

Variants:

[1\. MOVE *\[*EXACT*\]* source TO destination.](#!ABAP_VARIANT_1@1@)
[2\. MOVE source ?TO destination.](#!ABAP_VARIANT_2@2@)

Effect

Obsolete form of the [assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) of data objects and reference variables source to target variables destination. If EXACT is specified, only data objects can be specified for source. If EXACT is not specified, the following can be specified for source alongside data objects:

-   [Functional method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm)
    
-   [Certain built-in functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_functional_positions.htm)
    

The following cannot be specified with MOVE:

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), and [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for source
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm) or a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") for destination.
    

Notes

-   Instead of MOVE, only the more general [assignment operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_operator_glosry.htm "Glossary Entry") [\=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) and [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm) should be used.
    
-   The option to specify function methods and some built-in functions as assignment sources was added to the source position of the statement MOVE (originally designed only for assigning data objects), which made this source position an [extended functional operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextended_functional_positions.htm). This does not, however, cover all the possible functions of assignment operators. New developments, such as specifying [constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry"), or [inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are now only made possible for assignment operators.
    

Variant 1

MOVE *\[*EXACT*\]* source TO destination.

Effect

Without the addition EXACT, this statement works in the same way as

[destination = source.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm)

If the addition EXACT is specified, the statement works like

[destination = EXACT #( source ).](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_move.htm)

In this way, the addition EXACT produces a [lossless assignment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry") in accordance with the rules that apply when using the [lossless operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_exact.htm). This can raise exceptions if values are lost or if they are invalid. If an exception is raised when the operator EXACT is used, the statement is not executed and the value of the target field remains unchanged. In assignments made without the operator EXACT, the target field contains an undefined value when an exception raised by the conversion is handled.

Note

When MOVE is used for [enumerated objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), additionEXACT and the lossless operator [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_exact.htm) have the special effect that they can enable assignments, which would otherwise have not been possible.

Example

It is not possible to have the two commented out assignments of a number to the [enumerated variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_variable_glosry.htm "Glossary Entry") num. The assignment is possible using EXACT, because in this case the assignment follows the same [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexact_constructor_enum.htm) as the lossless operator displayed underneath.

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

[destination ?= source.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm)

source and destination must have reference types. The addition ?TO makes [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry") possible, whereas in TO only [up casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") can be used.

Programming Guideline

[Assignments with the assignment operators \= and ?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassign_calc_guidl.htm "Guideline") only