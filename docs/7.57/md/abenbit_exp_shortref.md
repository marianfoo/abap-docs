  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: bit_exp, ABENBIT_EXP_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

bit\_exp - Short Reference

[Reference](javascript:call_link\('abapcompute_bit.htm'\))

Syntax

... *{* *\[*BIT-NOT*\]* operand1
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand2
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand3
      ...  *\]**\]* *}* ...

Effect

Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicitly using [( )](javascript:call_link\('abenbit_brackets.htm'\)) and can occur in the [read positions of certain statements](javascript:call_link\('abenoperands_expressions.htm'\)).

Additions   

-   [BIT-NOT](javascript:call_link\('abapcompute_bit.htm'\))
    Negates an operand operand.
-   [BIT-AND*|*BIT-OR*|*BIT-XOR](javascript:call_link\('abenbit_operators.htm'\))
    Bit operators.