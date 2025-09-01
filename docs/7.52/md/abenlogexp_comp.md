  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) → 

rel\_exp - Comparison Expressions

Syntax

... *{* operand1   [*{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm)
               *|* [*{*CO*|*CN*|*CA*|*NA*|*CS*|*NS*|*CP*|*NP*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm)
               *|* [*{*BYTE-CO*|*BYTE-CN*|*BYTE-CA*|*BYTE-NA*|*BYTE-CS*|*BYTE-NS*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bytes.htm)
               *|* [*{*O*|*Z*|*M*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bitmasks.htm) operand2 *}*
  *|* *{* [operand *\[*NOT*\]* BETWEEN operand1 AND operand2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm) *}*
  *|* *{* [operand *\[*NOT*\]* IN seltab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm) *}*  ...

Effect

[Comparison expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_expression_glosry.htm "Glossary Entry") join two or more operands using a [relational operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_operator_glosry.htm "Glossary Entry") to make a [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") and produce a [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") as the result of the comparison.

-   The operands are compared using one of the [relational operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm) shown here.

-   The comparisons follow [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm).

operand1, operand2, and operand are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"), which means that the following can be specified:

-   [Data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry")

-   [Predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry")

-   [Functional methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry")

-   [Calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry")

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")

-   [Table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry")

When a predefined function, a functional method, or a constructor expression is specified, its return value or result is used as an operand. When a calculation expression is specified, its result is used. A single operand can be compared with all single operands listed in the [comparison rules for single operands](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands.htm). A calculation expression can be compared with all single operands or comparisons listed in the [comparison rules for calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expressions.htm).

Example

Typical use of a logical expression, in this case a comparison of a built-in function with a literal, in a IF statement.

DATA flag TYPE c LENGTH 1.
...
IF to\_upper( flag ) = 'X'.
  ...
ENDIF.

Continue
[rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_op.htm)
[rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm)