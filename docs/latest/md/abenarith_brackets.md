---
title: "Syntax"
description: |
  ... ( arith_exp ) ... Effect A full arithmetic expression arith_exp can be placed in parentheses. An arithmetic expression in parentheses can be used as the operand for another arithmetic expression and is calculated first when used in this way. Example The parentheses in the second calculation co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_brackets.htm"
abapFile: "abenarith_brackets.htm"
keywords: ["do", "if", "data", "abenarith", "brackets"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_arith.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20arith_exp%20-%20%28%20%29%2C%20ABENARITH_BRACKETS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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