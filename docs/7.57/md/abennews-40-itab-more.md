  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables and Extracts in Release 4.0, ABENNEWS-40-ITAB-MORE, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables and Extracts in Release 4.0

[1\. New Addition TRANSPORTING f1 f2 ... for MODIFY](#!ABAP_MODIFICATION_1@1@)
[2\. Unassigned Field Symbols for INSERT, SORT, and AT](#!ABAP_MODIFICATION_2@2@)
[3\. LOOP ... WHERE for Unstructured Line Types](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Addition TRANSPORTING f1 f2 ... for MODIFY
Using the addition [TRANSPORTING f1 f2 ... *\[*WHERE cond*\]*](javascript:call_link\('abapmodify_itab.htm'\)) of the statement MODIFY, it is now possible to target the content of individual fields and modify it (known as a selective field transport).

Modification 2   

Unassigned Field Symbols for INSERT, SORT, and AT
If the field symbol <fs> was not yet assigned (using [ASSIGN](javascript:call_link\('abapassign.htm'\))), it is ignored in the following statements:

-   [INSERT <fs> INTO fg.](javascript:call_link\('abapinsert_fg.htm'\))
-   [SORT BY <fs>.](javascript:call_link\('abapsort_extract.htm'\))
-   [SORT itab BY <fs>.](javascript:call_link\('abapsort_itab.htm'\))
-   [AT NEW <fs>.](javascript:call_link\('abapat_extract.htm'\))
-   [AT END OF <fs>.](javascript:call_link\('abapat_extract.htm'\))

Modification 3   

LOOP ... WHERE for Unstructured Line Types
For tables without structured line types, tables of type I for example, a WHERE condition ([LOOP](javascript:call_link\('abaploop_at_itab.htm'\))) can now be formulated using the addition TABLE LINE.
The same applies to the WHERE variants of the statements [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)).