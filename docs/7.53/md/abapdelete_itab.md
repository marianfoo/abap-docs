  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) → 

DELETE itab

[Quick Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

DELETE *{* [itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\)) *|* [itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\)) *|* [duplicates](javascript:call_link\('abapdelete_duplicates.htm'\)) *}*.

Effect

This statement either deletes a row ([itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\))) or several rows ([itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\))), which can be specified with a table key or a table index, or it deletes adjacent duplicate rows [duplicates](javascript:call_link\('abapdelete_duplicates.htm'\)).

System Fields

sy-subrc

Meaning

0

At least one row was deleted.

4

No rows were deleted, since no appropriate row was found when deleting using a table key or when specifying a logical expression, the index specified when deleting using a table index was greater than the current number of rows, or no duplicate adjacent rows were found.

The system field sy-tabix is not set.

Notes

-   Deleting rows in internal tables using DELETE does not usually free any memory in the internal table. Statements such as [CLEAR](javascript:call_link\('abapclear.htm'\)) or [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) must be used to free this memory.
    
-   An internal table - in which all rows have been deleted with DELETE - is usually not an initial internal table.
    
-   When deleting rows in an internal table, costs are incurred for updating all existing [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") and [table indexes](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). The [primary key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and all unique [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") are updated directly, whereas non-unique secondary keys are only updated if the rows to be deleted are contained within an updated part of a relevant index ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). When deleting a row from a standard table and the row is found using a secondary key, the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") in particular must be updated, and this usually requires a linear search.
    
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
    
-   Using a special variant [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)), rows from the last path node of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry") can be deleted.
    

Example

Deletes all initial rows of an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
...
DELETE itab WHERE table\_line IS INITIAL.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR
    

Continue
[DELETE itab - itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\))
[DELETE itab - itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\))
[DELETE itab - duplicates](javascript:call_link\('abapdelete_duplicates.htm'\))