---
title: "Syntax"
description: |
  ...  +- operand1 +-/DIVMOD +- operand2 +-/DIVMOD +- operand3 ...   ... Effect Arithmetic expression for calculating a numeric result from the operand operand. Arithmetic expression
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_exp_shortref.htm"
abapFile: "abenarith_exp_shortref.htm"
keywords: ["do", "abenarith", "exp", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  A

arith\_exp - Quick reference

Syntax

... *{* *\[*+*|*\-*\]* operand1
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand2
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand3
      ... *\]**\]* *}* ...

Effect

Arithmetic expression for calculating a numeric result from the operand operand. Arithmetic expressions can be parenthesized explicitly using [( )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_brackets.htm) and can occur in the [read positions of certain statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_expressions.htm).

Additions

-   [+*|*\-](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_arith.htm)
    Sign of an operand operand.
    

-   [+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_operators.htm)
    Arithmetic operators.