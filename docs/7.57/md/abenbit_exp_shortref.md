  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  B

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: bit_exp, ABENBIT_EXP_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

bit\_exp - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm)

Syntax

... *{* *\[*BIT-NOT*\]* operand1
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand2
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand3
      ...  *\]**\]* *}* ...

Effect

Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicitly using [( )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_brackets.htm) and can occur in the [read positions of certain statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_expressions.htm).

Additions   

-   [BIT-NOT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm)
    Negates an operand operand.
-   [BIT-AND*|*BIT-OR*|*BIT-XOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_operators.htm)
    Bit operators.