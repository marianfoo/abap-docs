  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [bit\_exp - Bit Expressions](javascript:call_link\('abapcompute_bit.htm'\)) → 

bit\_exp - Bit operators

Bit operators work with the individual bits of the operands. The [calculation length](javascript:call_link\('abencalculation_length_glosry.htm'\) "Glossary Entry") is specified by the operands involved. Joining two operands with BIT-AND, BIT-OR, and BIT-XOR produces a result of this length, since each individual bit is set according to the table from the bits of the corresponding positions in the operands. BIT-NOT changes the bits of the operands to its right as shown in the table.

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

The order of the columns in the table reflects the priority of the bit operators. The operator BIT-NOT has the highest, and BIT-OR the lowest priority. Within one [level of parentheses](javascript:call_link\('abenbit_brackets.htm'\)), the results of operators with higher priority are formed before the results with operators of a lower priority. For consecutive operators of the same priority, the evaluation is carried out from left to right, except for the operator BIT-NOT, which is executed from right to left.

Example

Uses various bit operators.

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