---
title: "DO - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm) Syntax DO n TIMES VARYING dobj FROM dobj1 NEXT dobj2 RANGE range VARYING .... statement_block ENDDO. Effect Executes the statement block statement_block more than once in a si
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo_shortref.htm"
abapFile: "abapdo_shortref.htm"
keywords: ["loop", "do", "if", "data", "abapdo", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DO, ABAPDO_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impr
ovement:)

DO - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm)

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
-   [VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo_varying.htm)
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.