---
title: "Meaning"
description: |
  O Ones: True if the bits that are 1 in operand2, are also 1 in operand1. If operand2 contains only zeroes, the relational expression is always true. Z Zeroes: True, if the bits that are 1 in operand2 are 0 in operand1. If operand2 contains only zeroes, the relational expression is always true. M Mix
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_bitmasks.htm"
abapFile: "abenlogexp_bitmasks.htm"
keywords: ["do", "if", "try", "data", "abenlogexp", "bitmasks"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_comp.htm) →  [rel\_exp - Relational Operators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_op.htm) → 

rel\_exp - Relational Operators for Bit Patterns

The table below shows the relational operators for comparisons of operands (single data objects or return values or [bit expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_expression_glosry.htm "Glossary Entry")) with bit patterns in byte-like operands in [comparison expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). The data type of the right operand operand2 must be byte-like (x or xstring). It contains the bit pattern with which the left operand operand1 is compared. If operand1 is shorter than operand2, hexadecimal zeroes are added on the right of operand1 (in accordance with the [comparison rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_rules_operands.htm)) to lengthen it appropriately. No conversion takes place. The data type of operand1 must also be byte-like (x or xstring).

operator

Meaning

O

Ones: True if the bits that are 1 in operand2, are also 1 in operand1. If operand2 contains only zeroes, the relational expression is always true.

Z

Zeroes: True, if the bits that are 1 in operand2 are 0 in operand1. If operand2 contains only zeroes, the relational expression is always true.

M

Mixed: True, if of the bits that are 1 in operand2, at least one is 1 and one is 0 in operand1. If operand2 contains only zeroes, the relational expression is always false.

Note

For the result of the comparisons, it is irrelevant whether the bits that are 0 in operand2, are 1 or 0 in operand1.

Example

The logical expression in the IF statement is false, because, before the comparison, 00 is added on the right of hex1. If the content of hex2 were 111100, the comparison would be true.

DATA: hex1 TYPE xstring,
      hex2 TYPE xstring.
hex1 = 'FFFF'.
hex2 = '111111'.
IF hex1 O hex2.
  ...
ENDIF.