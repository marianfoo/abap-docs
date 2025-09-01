---
title: "BIT-NOT x"
description: |
  x BIT-AND y x BIT-XOR y x BIT-OR y 0 0 1 0 0 0 0 1 1 0 1 1 1 0 0 0 1 1 1 1 0 1 0 1 The order of the columns in the table reflects the priority of the bit operators. The operator BIT-NOT has the highest, and BIT-OR the lowest priority. Within one level of parentheses(https://help.sap.com/doc/abapdo
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_operators.htm"
abapFile: "abenbit_operators.htm"
keywords: ["do", "try", "data", "types", "abenbit", "operators"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_processing_expr_func.htm) →  [Bit Expressions (bit\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm) → 

bit\_exp - Bit Operators

Bit operators work with the individual bits of the operands. The [calculation length](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_length_glosry.htm "Glossary Entry") is determined by the operands involved. Combining two operands with BIT-AND, BIT-OR, and BIT-XOR produces a result of this length in which each bit is set according to the table from the bits of the corresponding positions in the operands. BIT-NOT changes the bits of the operands to its right as shown in the table.

x

y

BIT-NOT x

x BIT-AND y

x BIT-XOR y

x BIT-OR y

0

0

1

0

0

0

0

1

1

0

1

1

1

0

0

0

1

1

1

1

0

1

0

1

The order of the columns in the table reflects the priority of the bit operators. The operator BIT-NOT has the highest, and BIT-OR the lowest priority. Within one [level of parentheses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_brackets.htm), the results of operators with higher priority are formed before the results with operators of a lower priority. For adjacent operators of the same priority, the evaluation is performed from left to right, except for the operator BIT-NOT, which is executed from right to left.

Example

Use of various bit operators.

TYPES output TYPE TABLE OF xstring WITH EMPTY KEY.
DATA hex1 TYPE xstring VALUE '0011'.
DATA hex2 TYPE xstring VALUE '0101'.
cl\_demo\_output=>display( VALUE output(
  ( hex1 BIT-AND hex2 )
  ( hex1 BIT-OR hex2  )
  ( hex1 BIT-XOR hex2 ) ) ).

The displayed result is:

0001
0111
0110