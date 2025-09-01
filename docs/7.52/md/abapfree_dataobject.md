---
title: "FREE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_shortref.htm) Syntax FREE dobj. Effect The statement FREE deletes all rows from an internal table and releases the memory area that the rows occupied. On other data objects, FREE works like the statement CLEAR(ht
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm"
abapFile: "abapfree_dataobject.htm"
keywords: ["delete", "do", "if", "try", "data", "types", "internal-table", "abapfree", "dataobject"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Initializations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitializations.htm) → 

FREE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_shortref.htm)

Syntax

FREE dobj.

Effect

The statement FREE deletes all rows from an internal table and releases the memory area that the rows occupied.

On other data objects, FREE works like the statement [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm).

If dobj is a structure with table-like components, the memory of all the table-like components is released.

Notes

-   If dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"), FREE is only applied to the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") and not the header line.
    
-   Unlike CLEAR, the initial memory area (see [INITIAL SIZE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_itab.htm)) remains unoccupied when FREE is used. This can become necessary when there is a lack of memory.
    
-   In general, FREE should be used only if the entire memory is to be released in full and the internal table is no longer needed (or at the least not filled again right away).
    
-   See also [Memory Requirements of Deep Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption_1.htm).
    

Example

At the breakpoints in the memory analysis of the ABAP debugger you can see that FREE frees up more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.