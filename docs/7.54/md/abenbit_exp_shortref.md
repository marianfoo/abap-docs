  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

bit\_exp - Quick reference

[Reference](javascript:call_link\('abapcompute_bit.htm'\))

Syntax

... *{* *\[*BIT-NOT*\]* operand1
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand2
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand3
      ...  *\]**\]* *}* ...

Effect

Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicitly using [( )](javascript:call_link\('abenbit_brackets.htm'\)) and can occur in the [reading positions of certain statements](javascript:call_link\('abenoperands_expressions.htm'\)).

Additions

-   [BIT-NOT](javascript:call_link\('abapcompute_bit.htm'\))
    Negates an operand operand.
    
-   [BIT-AND*|*BIT-OR*|*BIT-XOR](javascript:call_link\('abenbit_operators.htm'\))
    Bit operators.