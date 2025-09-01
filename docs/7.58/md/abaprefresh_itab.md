  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REFRESH%2C%20ABAPREFRESH_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REFRESH

[Short Reference](javascript:call_link\('abaprefresh_shortref.htm'\))

Obsolete Syntax

REFRESH itab.

Effect

This statement deletes all lines in an internal table itab. This releases the memory space required for the table, except for the [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry"). The operand itab must be an internal table.

The statement [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) can be used to delete all lines and release all memory occupied by these lines including the initial memory requirement.

System Fields

This statement always sets sy-subrc to 0.

Hints

-   The statement REFRESH itab has the same effect on internal tables as [CLEAR itab\[\]](javascript:call_link\('abapclear.htm'\)). If the internal table itab has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is initialized and not the header line.
-   If the internal table itab does not have a header line, REFRESH itab has the same effect as CLEAR itab. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of REFRESH instead of CLEAR obsolete too. [CLEAR](javascript:call_link\('abapclear.htm'\)) or [FREE](javascript:call_link\('abapfree_dataobject.htm'\)) can always be used to delete lines in internal tables.

Example

The following example shows that REFRESH initializes the table body but not the header line of an internal table itab.

DATA itab TYPE TABLE OF i WITH HEADER LINE.
DO 3 TIMES.
  itab = sy-index.
  APPEND itab.
ENDDO.
ASSERT itab   IS NOT INITIAL.
ASSERT itab\[\] IS NOT INITIAL.
REFRESH itab.
ASSERT itab   IS NOT INITIAL.
ASSERT itab\[\] IS INITIAL.