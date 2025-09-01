  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  B

bit\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm)

Syntax

... *{* *\[*BIT-NOT*\]* operand1
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand2
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand3
      ...  *\]**\]* *}* ...

Effect

Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicitly using [( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbit_brackets.htm) and can occur in the [read positions of certain statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_expressions.htm).

Additions

-   [BIT-NOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm)
    Negates an operand operand.
    

-   [BIT-AND*|*BIT-OR*|*BIT-XOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbit_operators.htm)
    Bit operators.