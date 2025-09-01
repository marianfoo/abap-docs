  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20itab_line%2C%20ABAPDELETE_ITAB_LINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab, itab\_line

[Short Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

... *{* [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\))  *|* [index](javascript:call_link\('abapdelete_itab_index.htm'\)) *}*.

Effect

In this variant, the statement DELETE deletes a line specified by a table key in [table\_key](javascript:call_link\('abapdelete_itab_key.htm'\)) or a line specified by a line number [index](javascript:call_link\('abapdelete_itab_index.htm'\)).

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
[DELETE itab, table\_key](javascript:call_link\('abapdelete_itab_key.htm'\))
[DELETE itab, index](javascript:call_link\('abapdelete_itab_index.htm'\))