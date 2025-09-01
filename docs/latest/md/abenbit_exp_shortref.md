  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  B

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20bit_exp%2C%20ABENBIT_EXP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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