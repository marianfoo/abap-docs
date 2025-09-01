  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [arith\_exp - Arithmetic Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_arith.htm) → 

arith\_exp - ( )

Syntax

... ( arith\_exp ) ...

Effect

A full arithmetic expression arith\_exp can be placed in parentheses. An arithmetic expression in parentheses can be used as the operand for another arithmetic expression and is only calculated when used in this way.

Example

The parentheses in the second calculation correspond to the implicit parentheses in the first calculation. The parentheses in the third calculation change its order. The results are 2, 2, and 3. In the third calculation, the result of the parenthesis is rounded to the value 1.

cl\_demo\_output=>display(
  |  3 \*   2   / 3   = {   3 \*   2   / 3   }\\n| &&
  |( 3 \*   2 ) / 3   = { ( 3 \*   2 ) / 3   }\\n| &&
  |  3 \* ( 2   / 3 ) = {   3 \* ( 2   / 3 ) }| ).