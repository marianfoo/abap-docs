---
title: "Syntax"
description: |
  ...  BIT-NOT operand1 BIT-ANDBIT-ORBIT-XOR BIT-NOT operand2 BIT-ANDBIT-ORBIT-XOR BIT-NOT operand3 ...    ... Effect Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicit
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_exp_shortref.htm"
abapFile: "abenbit_exp_shortref.htm"
keywords: ["do", "abenbit", "exp", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  B

bit\_exp - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm)

Syntax

... *{* *\[*BIT-NOT*\]* operand1
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand2
      *\[**{*BIT-AND*|*BIT-OR*|*BIT-XOR*}* *\[*BIT-NOT*\]* operand3
      ...  *\]**\]* *}* ...

Effect

Bit expression that calculates a binary result from operand operand. Bit expressions can be parenthesized explicitly using [( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_brackets.htm) and can occur in the [reading positions of certain statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm).

Additions

-   [BIT-NOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm)
    Negates an operand operand.
    
-   [BIT-AND*|*BIT-OR*|*BIT-XOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_operators.htm)
    Bit operators.