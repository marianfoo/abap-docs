---
title: "Syntax"
description: |
  ... ( arith_exp ) ... Effect A full arithmetic expression arith_exp can be placed in parentheses. An arithmetic expression in parentheses can be used as the operand for another arithmetic expression and is calculated first when used in this way. Example The parentheses in the second calculation co
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_brackets.htm"
abapFile: "abenarith_brackets.htm"
keywords: ["do", "data", "abenarith", "brackets"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_arith.htm) → 

arith\_exp - ( )

Syntax

... ( arith\_exp ) ...

Effect

A full arithmetic expression arith\_exp can be placed in parentheses. An arithmetic expression in parentheses can be used as the operand for another arithmetic expression and is calculated first when used in this way.

Example

The parentheses in the second calculation correspond to the implicit parentheses in the first calculation. The parentheses in the third calculation change its order. The results are 2, 2, and 3. In the third calculation, the result of the parenthesis is rounded to the value 1.

cl\_demo\_output=>display(
  |  3 \*   2   / 3   = {   3 \*   2   / 3   }\\n| &&
  |( 3 \*   2 ) / 3   = { ( 3 \*   2 ) / 3   }\\n| &&
  |  3 \* ( 2   / 3 ) = {   3 \* ( 2   / 3 ) }| ).