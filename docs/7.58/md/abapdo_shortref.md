---
title: "DO - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm) Syntax DO n TIMES VARYING dobj FROM dobj1 NEXT dobj2 RANGE range VARYING .... statement_block ENDDO. Effect Executes the statement block statement_block more than once in a si
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo_shortref.htm"
abapFile: "abapdo_shortref.htm"
keywords: ["loop", "do", "if", "data", "abapdo", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DO%2C%20ABAPDO_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DO - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo.htm)

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
-   [VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdo_varying.htm)
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.