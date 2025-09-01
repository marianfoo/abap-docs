  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) → 

DELETE itab

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_shortref.htm)

Syntax

DELETE *{* [itab\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_line.htm) *|* [itab\_lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm) *|* [duplicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_duplicates.htm) *}*.

Effect

This statement either deletes a row ([itab\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_line.htm)) or several rows ([itab\_lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm)), which can be specified with a table key or a table index, or it deletes adjacent duplicate rows [duplicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_duplicates.htm).

System Fields

sy-subrc

Meaning

0

At least one row was deleted.

4

No rows were deleted, since no appropriate row was found when deleting using a table key or when specifying a logical expression, the index specified when deleting using a table index was greater than the current number of rows, or no duplicate adjacent rows were found.

The system field sy-tabix is not set.

Notes

-   Deleting rows in internal tables using DELETE does not usually free any memory in the internal table. Statements such as [CLEAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_dataobject.htm) must be used to free this memory.
    
-   An internal table - in which all rows have been deleted with DELETE - is usually not an initial internal table.
    
-   When deleting rows in an internal table, costs are incurred for updating all existing [table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_key_glosry.htm "Glossary Entry") and [table indexes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_key_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and all unique [secondary keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") are updated directly, whereas non-unique secondary keys are only updated if the rows to be deleted are contained within an updated part of a relevant index ([lazy update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm "Glossary Entry")). When deleting a row from a standard table and the row is found using a secondary key, the [primary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") in particular must be updated, and this usually requires a linear search.
    
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpragma_glosry.htm "Glossary Entry").
    
-   Using a special variant [DELETE mesh\_path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_delete.htm), rows from the last path node of a [mesh path](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry") can be deleted.
    

Example

Deletes all initial rows of an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
...
DELETE itab WHERE table\_line IS INITIAL.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Continue
[DELETE itab - itab\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_line.htm)
[DELETE itab - itab\_lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_itab_lines.htm)
[DELETE itab - duplicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_duplicates.htm)