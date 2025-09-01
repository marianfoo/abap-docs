  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) → 

DELETE itab - itab\_line

[Quick Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

... *{* [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\))  *|* [index](javascript:call_link\('abapdelete_itab_index.htm'\)) *}*.

Effect

In this variant, the statement DELETE deletes a row specified by a table key in [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) or a row specified by a row number [index](javascript:call_link\('abapdelete_itab_index.htm'\)).

Example

Deletes individual rows in an internal table. The first DELETE statement uses the primary table key to find the row. The second DELETE statement deletes the row by specifying a row number (here also determined by accessing a key).

DATA itab TYPE SORTED TABLE OF string
          WITH UNIQUE KEY primary\_key COMPONENTS table\_line.
itab = VALUE #( ( \`X\` ) ( \`Y\` ) ( \`Z\` ) ).
DELETE TABLE itab WITH TABLE KEY
  primary\_key COMPONENTS table\_line = \`X\`.
DELETE itab INDEX
  line\_index( itab\[ KEY primary\_key table\_line = \`Z\` \] ).

Continue
[DELETE itab - table\_key](javascript:call_link\('abapdelete_itab_key.htm'\))
[DELETE itab - index](javascript:call_link\('abapdelete_itab_index.htm'\))