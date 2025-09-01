  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20arith_exp%2C%20ABENARITH_EXP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

arith\_exp - Short Reference

Syntax

... *{* *\[*+*|*\-*\]* operand1
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand2
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand3
      ... *\]**\]* *}* ...

Effect

Arithmetic expression for calculating a numeric result from the operand operand. Arithmetic expressions can be parenthesized explicitly using [( )](javascript:call_link\('abenarith_brackets.htm'\)) and can occur in the [read positions of certain statements](javascript:call_link\('abenoperands_expressions.htm'\)).

Additions   

-   [+*|*\-](javascript:call_link\('abapcompute_arith.htm'\))
    Sign of an operand operand.
-   [+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](javascript:call_link\('abenarith_operators.htm'\))
    Arithmetic operators.