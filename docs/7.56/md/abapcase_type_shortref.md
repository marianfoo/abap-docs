---
title: "CASE TYPE OF - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase_type.htm) Syntax CASE TYPE OF oref WHEN TYPE classintf INTO target1. statement_block1 WHEN TYPE classintf INTO target2. statement_block2 ... WHEN OTHERS. st
version: "7.56"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase_type_shortref.htm"
abapFile: "abapcase_type_shortref.htm"
keywords: ["do", "if", "case", "class", "abapcase", "type", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CASE TYPE OF - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase_type.htm)

Syntax

CASE TYPE OF oref
  *\[*WHEN TYPE class*|*intf *\[*INTO target1*\]*.
    *\[*statement\_block1*\]**\]*
  *\[*WHEN TYPE class*|*intf *\[*INTO target2*\]*.
    *\[*statement\_block2*\]**\]*
  ...
  *\[*WHEN OTHERS.
    *\[*statement\_blockn*\]**\]*
ENDCASE.

Effect

Defines a control structure with multiple statement blocks statement\_block1, ..., statement\_blockn. The first statement block is executed for which an object type class or intf specified in the WHEN TYPE statement is more general or equal to the dynamic or static type of the object reference variable oref. If the condition is not met, the statement block is executed after the statement WHEN OTHERS.

Addition

-   INTO target
    Specifies a target variable to which the object reference can be copied.