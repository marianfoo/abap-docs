  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [bit\_exp - Bit Expressions](javascript:call_link\('abapcompute_bit.htm'\)) → 

bit\_exp - ( )

Syntax

... ( bit\_exp ) ...

Effect

A full bit expression bit\_exp can be placed in parentheses. A bit expression in parentheses can be used as the operand of another bit expression and is not calculated until used in this way.

Example

Parentheses in bit expressions

TYPES output TYPE TABLE OF xstring WITH EMPTY KEY.
DATA hex1 TYPE xstring VALUE '0011'.
DATA hex2 TYPE xstring VALUE '0101'.
DATA hex3 TYPE xstring VALUE '1100'.
cl\_demo\_output=>display( VALUE output(
  (   hex1 BIT-AND hex2   BIT-OR hex3  )
  ( ( hex1 BIT-AND hex2 ) BIT-OR hex3  )
  (   hex1 BIT-AND ( hex2 BIT-OR hex3 ) ) ) ).

The displayed result is:

1101
1101
0001