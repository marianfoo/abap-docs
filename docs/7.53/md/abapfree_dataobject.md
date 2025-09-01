  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Initializations](javascript:call_link\('abeninitializations.htm'\)) → 

FREE

[Quick Reference](javascript:call_link\('abapfree_shortref.htm'\))

Syntax

FREE dobj.

Effect

The statement FREE deletes all rows from an internal table and releases the memory area that the rows occupied.

On other data objects, FREE works like the statement [CLEAR](javascript:call_link\('abapclear.htm'\)).

If dobj is a structure with table-like components, the memory of all the table-like components is released.

Notes

-   If dobj is an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), FREE is only applied to the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") and not the header line.
    
-   Unlike CLEAR, the initial memory area (see [INITIAL SIZE](javascript:call_link\('abaptypes_itab.htm'\))) remains unoccupied when FREE is used. This can become necessary when there is a lack of memory.
    
-   In general, FREE should be used only if the entire memory is to be released in full and the internal table is no longer needed (or at the least not filled again right away).
    
-   See also [Memory Requirements of Deep Data Objects](javascript:call_link\('abenmemory_consumption_1.htm'\)).
    

Example

At the breakpoints in the memory analysis of the ABAP debugger, it is clear that FREE frees up more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.