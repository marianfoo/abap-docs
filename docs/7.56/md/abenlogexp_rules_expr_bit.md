---
title: "Hint"
description: |
  A bit expression cannot be specified as the operand of a predicate expression(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_expression_glosry.htm 'Glossary Entry'). Example This example shows the different ways lengths are handled in comparisons between byte fields and b
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_expr_bit.htm"
abapFile: "abenlogexp_rules_expr_bit.htm"
keywords: ["do", "if", "try", "data", "types", "abenlogexp", "rules", "expr", "bit"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands.htm) →  [rel\_exp - Comparison Type of Calculation Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_expressions.htm) → 

rel\_exp - Comparison Type of Bit Expressions

[Bit expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be used as operands of comparison expressions with the following:

-   [Comparison operators for all data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_compare_all.htm)
-   [Comparison operators for byte-like data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bytes.htm)
-   [Comparison operators for bit patterns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_bitmasks.htm)

A [bit expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm) can be compared with a single operand of a [byte-like data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry") or with a different bit expression.

Each bit expression of a comparison expression is calculated based on the length of the single longest operand, for which shorter operands are padded on the right with hexadecimal 0. All operands of the entire comparison expression are considered. The result of the involved bit expressions is contained in this length and, if necessary, a single operand is padded with hexadecimal 0 on the right before comparison. The comparison is then performed according to the [comparison rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomparison_type.htm) for a byte-like [comparison type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomparison_type_glosry.htm "Glossary Entry").

Hint

A bit expression cannot be specified as the operand of a [predicate expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpredicate_expression_glosry.htm "Glossary Entry").

Example

This example shows the different ways lengths are handled in comparisons between byte fields and bit expressions. The bit expression in the first comparison is evaluated with length 4 and produces the value hexadecimal 1100. The single operand on the right is lengthened to the value hexadecimal 1100 by filling with hexadecimal 00 and the equality comparison is true. In the second comparison, on the other hand, the operand on the left is converted to the type xstring and the operand on the right is not lengthened, which is why the inequality comparison is true.

IF x\`FFFF\` BIT-AND x\`11\` = xstring\`11\`.
  ...
ENDIF.
IF x\`1100\` <> xstring\`11\`.
  ...
ENDIF.