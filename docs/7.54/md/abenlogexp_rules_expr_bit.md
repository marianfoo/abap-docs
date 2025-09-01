---
title: "Note"
description: |
  A bit expression cannot be specified as the operand of a predicate expression(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm 'Glossary Entry'). Example This example demonstrates the different ways lengths are handled in comparisons between byte field
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_expr_bit.htm"
abapFile: "abenlogexp_rules_expr_bit.htm"
keywords: ["do", "if", "try", "data", "types", "abenlogexp", "rules", "expr", "bit"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_expressions.htm) → 

rel\_exp - Comparison Type of Bit Expressions

[Bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be used as operands in comparison expressions with the following:

-   [comparison operators for all data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_compare_all.htm)

-   [comparison operators for byte-like data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bytes.htm)

-   [comparison operators for bit patterns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bitmasks.htm)

A [bit expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_bit.htm) can be compared with a single operand of a [byte-like data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") or with another bit expression.

Each bit expression of a comparison expression is calculated based on the length of its longest operand, with shorter operands padded on the right with hexadecimal 0. All operands of the entire comparison expression are respected. The result of the bit expressions involved is contained within this length and, if necessary, a single operand is converted to this length before the comparison, again by filling with hexadecimal 0 on the right. The comparison is then performed using the [comparison rule](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_type.htm) for a byte-like [comparison type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_type_glosry.htm "Glossary Entry").

Note

A bit expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Example

This example demonstrates the different ways lengths are handled in comparisons between byte fields and bit expressions. The bit expression in the first comparison is evaluated with length 4 and produces the value hexadecimal 1100. The single operand on the right is converted to the value hexadecimal 1100 by filling with hexadecimal 00 and the equality comparison is true. In the second comparison, on the other hand, the operand on the left is converted to the type xstring and the operand on the right is not made longer. Here, the inequality comparison is true.

IF x\`FFFF\` BIT-AND x\`11\` = xstring\`11\`.
  ...
ENDIF.
IF x\`1100\` <> xstring\`11\`.
  ...
ENDIF.