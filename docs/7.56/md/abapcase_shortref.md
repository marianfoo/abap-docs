---
title: "CASE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase.htm) Syntax CASE operand. WHEN operand1 OR operand2 OR operand3 .... statement_block1 ... WHEN OTHERS. statement_blockn ENDCASE. Effect Defines a control structur
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase_shortref.htm"
abapFile: "abapcase_shortref.htm"
keywords: ["do", "if", "case", "abapcase", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CASE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase.htm)

Syntax

CASE operand.
  *\[*WHEN operand1 *\[*OR operand2 *\[*OR operand3 *\[*...*\]**\]**\]*.
    *\[*statement\_block1*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The first statement block, for which the content of the operand operand is identical to one of the operands operand1, operand2, ... in the WHEN statement, is executed first. If no matches are found, the statement block is executed after the statement WHEN OTHERS.