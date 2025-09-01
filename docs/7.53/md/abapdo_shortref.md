  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DO - Quick reference

[Reference](javascript:call_link\('abapdo.htm'\))

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
    
-   [VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*](javascript:call_link\('abapdo_varying.htm'\))
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.