  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 4.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-4.htm) →  [News for Release 4.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internal Tables and Extracts in Release 4.0, ABENNEWS-40-ITAB-MORE, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internal Tables and Extracts in Release 4.0

[1\. New Addition TRANSPORTING f1 f2 ... for MODIFY](#!ABAP_MODIFICATION_1@1@)
[2\. Unassigned Field Symbols for INSERT, SORT, and AT](#!ABAP_MODIFICATION_2@2@)
[3\. LOOP ... WHERE for Unstructured Line Types](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Addition TRANSPORTING f1 f2 ... for MODIFY
Using the addition [TRANSPORTING f1 f2 ... *\[*WHERE cond*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm) of the statement MODIFY, it is now possible to target the content of individual fields and modify it (known as a selective field transport).

Modification 2   

Unassigned Field Symbols for INSERT, SORT, and AT
If the field symbol <fs> was not yet assigned (using [ASSIGN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassign.htm)), it is ignored in the following statements:

-   [INSERT <fs> INTO fg.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_fg.htm)
-   [SORT BY <fs>.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_extract.htm)
-   [SORT itab BY <fs>.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)
-   [AT NEW <fs>.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_extract.htm)
-   [AT END OF <fs>.](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_extract.htm)

Modification 3   

LOOP ... WHERE for Unstructured Line Types
For tables without structured line types, tables of type I for example, a WHERE condition ([LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm)) can now be formulated using the addition TABLE LINE.
The same applies to the WHERE variants of the statements [DELETE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_itab.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_itab.htm).