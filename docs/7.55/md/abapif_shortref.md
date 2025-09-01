---
title: "IF - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapif.htm) Syntax IF log_exp1(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm). statement_block1 ELSEIF log_exp2(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/a
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapif_shortref.htm"
abapFile: "abapif_shortref.htm"
keywords: ["do", "if", "abapif", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  I

IF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapif.htm)

Syntax

IF [log\_exp1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm).
  *\[*statement\_block1*\]*
*\[*ELSEIF [log\_exp2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlog_exp_shortref.htm).
  *\[*statement\_block2*\]**\]*
...
*\[*ELSE.
  *\[*statement\_blockn*\]**\]*
ENDIF.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The statement block after the first true logical expression log\_exp1, log\_exp2, ... is executed. If no logical expression is true, the statement block after ELSE is executed.