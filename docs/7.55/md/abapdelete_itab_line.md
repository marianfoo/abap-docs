  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab.htm) → 

DELETE itab, itab\_line

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_shortref.htm)

Syntax

... *{* [table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_key.htm)  *|* [index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_index.htm) *}*.

Effect

In this variant, the statement DELETE deletes a line specified by a table key in [table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_key.htm) or a line specified by a line number [index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_index.htm).

Example

Deletion of individual lines in an internal table. The first DELETE statement uses the primary table key to find the line. The second DELETE statement deletes the line by specifying a line number, which is also determined here by accessing a key.

DATA itab TYPE SORTED TABLE OF string
          WITH UNIQUE KEY primary\_key COMPONENTS table\_line.
itab = VALUE #( ( \`X\` ) ( \`Y\` ) ( \`Z\` ) ).
DELETE TABLE itab WITH TABLE KEY
  primary\_key COMPONENTS table\_line = \`X\`.
DELETE itab INDEX
  line\_index( itab\[ KEY primary\_key table\_line = \`Z\` \] ).

Continue
[DELETE itab, table\_key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_key.htm)
[DELETE itab, index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_itab_index.htm)