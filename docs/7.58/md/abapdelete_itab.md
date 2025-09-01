  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20ABAPDELETE_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab

[Short Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

DELETE *{* [itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\)) *|* [itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\)) *|* [duplicates](javascript:call_link\('abapdelete_duplicates.htm'\)) *}*.

Effect

This statement either deletes a line [itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\)) or multiple lines [itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\)), which can be specified using a table key or a table index, or it deletes adjacent duplicate lines [duplicates](javascript:call_link\('abapdelete_duplicates.htm'\)).

System Fields

sy-subrc

Meaning

0

At least one line was deleted.

4

No lines were deleted, since no appropriate line was found when deleting using a table key or when specifying a logical expression, the index specified when deleting using a table index was greater than the current number of lines, or no duplicate adjacent lines were found.

The system field sy-tabix is not set.

Hints

-   Deleting lines of internal tables using DELETE does not usually release any memory in the internal table. Statements such as [CLEAR](javascript:call_link\('abapclear.htm'\)) or [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) must be used to release this memory.
-   An internal table in which all lines have been deleted with DELETE is empty and the relational expression [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) is true. Nevertheless, the internal table usually still occupies memory and therefore is not in the same state as an initial table after its declaration.
-   When deleting lines in an internal table, costs are incurred for updating all existing [table keys](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry") and [table indexes](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). The [primary key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and all unique [secondary keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") are updated directly, whereas non-unique secondary keys are only updated if the lines to be deleted are contained within an updated part of a relevant index ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). When deleting a line from a standard table and the line is found using a secondary key, the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") in particular must be updated, which usually requires a linear search.
-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
-   A special variant [DELETE mesh\_path](javascript:call_link\('abenmesh_delete.htm'\)) can be used to delete lines from the last path node of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Example

Deletion of all initial lines of an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
...
DELETE itab WHERE table\_line IS INITIAL.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_ITAB\_DYN\_LOOP

-   Cause: Error in a dynamic WHERE condition
    Runtime error: DYN\_WHERE\_PARSE\_ERROR

Continue
[DELETE itab, itab\_line](javascript:call_link\('abapdelete_itab_line.htm'\))
[DELETE itab, itab\_lines](javascript:call_link\('abapdelete_itab_lines.htm'\))
[DELETE itab, duplicates](javascript:call_link\('abapdelete_duplicates.htm'\))