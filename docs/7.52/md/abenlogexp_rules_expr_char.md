---
title: "Note"
description: |
  A string expression cannot be specified as the operand of a predicate expression(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm 'Glossary Entry'). Example This example demonstrates the effect of different comparison types. The first comparison is tru
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_char.htm"
abapFile: "abenlogexp_rules_expr_char.htm"
keywords: ["do", "if", "try", "data", "types", "abenlogexp", "rules", "expr", "char"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expressions.htm) → 

rel\_exp - Comparison Type of String Expressions

[String expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") can be used as operands in comparison expressions with the following:

-   [Relational operators for all data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_compare_all.htm)

-   [Relational operators for character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm)

It is possible to compare a [string expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") with a single operand of any [elementary data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or with another string expression.

If one of the operands of a comparison is a string expression, the [comparison type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type_glosry.htm "Glossary Entry") whose [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type.htm) are used to perform the comparison is always string. If necessary, single operands are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) to the type string before the comparison.

Note

A string expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Example

This example demonstrates the effect of different comparison types. The first comparison is true, since the character-like operand is converted to the type of the numeric operand (in accordance with the rule for [comparing character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_character.htm)) and the number value is compared. The second comparison is false, since the numeric operand is converted to the type string of the string expression and the internal representation of the code page used is compared.

IF \`02\` > 1.
  ...
ELSE.
  ...
ENDIF.
IF |02| > 1.
  ...
ELSE.
  ...
ENDIF.