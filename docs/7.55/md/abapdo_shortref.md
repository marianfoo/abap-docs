---
title: "DO - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo.htm) Syntax DO n TIMES VARYING dobj FROM dobj1 NEXT dobj2 RANGE range VARYING .... statement_block ENDDO. Effect Executes the statement block statement_block more than once in a si
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo_shortref.htm"
abapFile: "abapdo_shortref.htm"
keywords: ["loop", "do", "data", "abapdo", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  D

DO - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo.htm)

Syntax

DO *\[*n TIMES*\]*
   *\[*VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
   *\[*VARYING ...*\]**\]*.
  *\[*statement\_block*\]*
ENDDO.

Effect

Executes the statement block statement\_block more than once in a single loop.

Additions

-   n TIMES
    Limits the number of loop passes to n.
    

-   [VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdo_varying.htm)
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.