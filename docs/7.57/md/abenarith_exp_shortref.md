---
title: "Syntax"
description: |
  ...  +- operand1 +-/DIVMOD +- operand2 +-/DIVMOD +- operand3 ...   ... Effect Arithmetic expression for calculating a numeric result from the operand operand. Arithmetic expression
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_exp_shortref.htm"
abapFile: "abenarith_exp_shortref.htm"
keywords: ["do", "if", "abenarith", "exp", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: arith_exp, ABENARITH_EXP_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

arith\_exp - Short Reference

Syntax

... *{* *\[*+*|*\-*\]* operand1
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand2
      *\[**{*+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\**}* *\[*+*|*\-*\]* operand3
      ... *\]**\]* *}* ...

Effect

Arithmetic expression for calculating a numeric result from the operand operand. Arithmetic expressions can be parenthesized explicitly using [( )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_brackets.htm) and can occur in the [read positions of certain statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperands_expressions.htm).

Additions   

-   [+*|*\-](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm)
    Sign of an operand operand.
-   [+*|*\-*|*\**|*/*|*DIV*|*MOD*|*\*\*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm)
    Arithmetic operators.