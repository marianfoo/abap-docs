---
title: "FREE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_shortref.htm) Syntax FREE dobj. Effect The statement FREE deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the initial memory requirement(ht
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_dataobject.htm"
abapFile: "abapfree_dataobject.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abapfree", "dataobject"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Initializations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitializations.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE, ABAPFREE_DATAOBJECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

FREE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_shortref.htm)

Syntax

FREE dobj.

Effect

The statement FREE deletes all lines from an internal table and releases the complete memory area that was occupied by the lines, including the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry").

On other data objects, FREE works like the statement [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm).

If dobj is a structure with tabular components, the memory of all the tabular components is released.

Hints

-   If dobj is an internal table with a [header line](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenheader_line_glosry.htm "Glossary Entry"), FREE only affects the [table body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_body_glosry.htm "Glossary Entry") and not the header line.
-   Unlike CLEAR, the [initial memory requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") does not remain occupied when FREE is used. This can become necessary when there is a lack of memory.
-   In general, FREE should only be used if the entire memory is to be released completely and the internal table is no longer needed or at the least not filled again immediately.
-   See also [Memory Requirements of Deep Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_1.htm).

Example

At the breakpoints in the memory analysis of the ABAP debugger, it can be observed that FREE releases more allocated bound memory than CLEAR.

DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          INITIAL SIZE 10000.
itab = VALUE #( FOR i = 1 UNTIL i > 10000 ( i ) ).
CLEAR itab.
BREAK-POINT.
FREE itab.
BREAK-POINT.