---
title: "One Page"
description: |
  ‏Relational Operator Other Page Single operand with numeric data type(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm 'Glossary Entry') or arithmetic expression(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expressions.htm"
abapFile: "abenlogexp_rules_expressions.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abenlogexp", "rules", "expressions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_operands.htm) → 

rel\_exp - Comparison Type of Calculation Expressions

Any [calculation expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") can be specified as an operand of a [comparison expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_expression_glosry.htm "Glossary Entry").

The table below lists all combinations that are possible for calculation expressions in comparison expressions:

One Page

‏Relational Operator

Other Page

Single operand with [numeric data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") or [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm)

[Arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry")

Single operand with any [elementary data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or [string expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm), [CO, CN, CA, NA, CS, NS, CP, NP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_strings.htm)

[String expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry")

Single operand with [byte-like data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") or [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry")

[\=, EQ, <>, NE, <, LT, \>, GT, <=, LE, \>=, GE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_any_operand.htm), [BYTE-CO, BYTE-CN, BYTE-CA, BYTE-NA, BYTE-CS, BYTE-NS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bytes.htm), [O, Z, M](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_bitmasks.htm)

[Bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry")

The [comparison type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type_glosry.htm "Glossary Entry") is determined differently depending on the type of calculation expression.

-   [Comparison type of arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_arith.htm)

-   [Comparison type of string expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_char.htm)

-   [Comparison type of bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_bit.htm)

In the case of comparison expressions using the relational operators [BETWEEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_between.htm) and [IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm) that are switched internally to joins of comparisons with the binary operators above, the rules of the individual comparisons apply.

Notes

-   [Relational expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") cannot yet be compared. Instead, they can be joined using [Boolean operators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboolean_operator_glosry.htm "Glossary Entry"), where the join with the operator [EQUIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_equiv.htm) corresponds to the equality comparison of the resulting [truth values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry").

-   A [calculation expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Continue
[rel\_exp - Comparison Type of Arithmetic Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_arith.htm)
[rel\_exp - Comparison Type of String Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_char.htm)
[rel\_exp - Comparison Type of Bit Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules_expr_bit.htm)