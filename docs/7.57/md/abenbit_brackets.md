  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [Bit Expressions (bit\_exp)](javascript:call_link\('abapcompute_bit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: bit_exp - \( \), ABENBIT_BRACKETS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

bit\_exp - ( )

Syntax

... ( bit\_exp ) ...

Effect

A complete bit expression bit\_exp can be placed in parentheses. A bit expression in parentheses can be used as the operand of another bit expression and is not calculated until used in this way.

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