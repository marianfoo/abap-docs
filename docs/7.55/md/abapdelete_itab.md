---
title: "DELETE itab"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_shortref.htm) Syntax DELETE  itab_line(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_line.htm)  itab_lines(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab.htm"
abapFile: "abapdelete_itab.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "catch", "data", "internal-table", "abapdelete", "itab"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) → 

DELETE itab

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_shortref.htm)

Syntax

DELETE *{* [itab\_line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_line.htm) *|* [itab\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_lines.htm) *|* [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_duplicates.htm) *}*.

Effect

This statement either deletes a line [itab\_line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_line.htm) or multiple lines [itab\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_lines.htm), which can be specified using a table key or a table index, or it deletes adjacent duplicate lines [duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_duplicates.htm).

System Fields

sy-subrc

Meaning

0

At least one line was deleted.

4

No lines were deleted, since no appropriate line was found when deleting using a table key or when specifying a logical expression, the index specified when deleting using a table index was greater than the current number of lines, or no duplicate adjacent lines were found.

The system field sy-tabix is not set.

Hints

-   Deleting lines of internal tables using DELETE does not usually release any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_dataobject.htm) must be used to release this memory.

-   An internal table in which all lines have been deleted with DELETE is usually not an initial internal table.

-   When deleting lines in an internal table, costs are incurred for updating all existing [table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_key_glosry.htm "Glossary Entry") and [table indexes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_key_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and all unique [secondary keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") are updated directly, whereas non-unique secondary keys are only updated if the lines to be deleted are contained within an updated part of a relevant index ([lazy update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlazy_update_glosry.htm "Glossary Entry")). When deleting a line from a standard table and the line is found using a secondary key, the [primary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") in particular must be updated, which usually requires a linear search.

-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma_glosry.htm "Glossary Entry").

-   A special variant [DELETE mesh\_path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_delete.htm) can be used to delete lines from the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_glosry.htm "Glossary Entry").
    

Example

Deletion of all initial lines of an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
...
DELETE itab WHERE table\_line IS INITIAL.

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Continue
[DELETE itab, itab\_line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_line.htm)
[DELETE itab, itab\_lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_lines.htm)
[DELETE itab, duplicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_duplicates.htm)