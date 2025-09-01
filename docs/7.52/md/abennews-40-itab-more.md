  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Releases 4.0 and 4.5](javascript:call_link\('abennews-40.htm'\)) → 

Internal Tables and Extracts in Release 4.0

Modification 1

New addition for MODIFY: TRANSPORTING f1 f2 ...
Using the addition [TRANSPORTING f1 f2 ... *\[*WHERE cond*\]*](javascript:call_link\('abapmodify_itab.htm'\)) of the statement MODIFY, it is now possible to target the content of individual fields and modify it (known as a selective field transport).

Modification 2

Unassigned field symbols for INSERT, SORT, and AT
If the field symbol <fs> was not yet assigned (using [ASSIGN](javascript:call_link\('abapassign.htm'\))), it is ignored in the following statements:

-   [INSERT <fs> INTO fg.](javascript:call_link\('abapinsert_fg.htm'\))
    
-   [SORT BY <fs>.](javascript:call_link\('abapsort_extract.htm'\))
    
-   [SORT itab BY <fs>.](javascript:call_link\('abapsort_itab.htm'\))
    
-   [AT NEW <fs>.](javascript:call_link\('abapat_extract.htm'\))
    
-   [AT END OF <fs>.](javascript:call_link\('abapat_extract.htm'\))
    

Modification 3

LOOP ... WHERE for unstructured row types
A WHERE condition ([LOOP](javascript:call_link\('abaploop_at_itab.htm'\))) can now be formulated using the addition TABLE LINE for tables without structured row types (for example, tables with type I).
The same applies to the WHERE variants of the statements [DELETE](javascript:call_link\('abapdelete_itab.htm'\)) and [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)).