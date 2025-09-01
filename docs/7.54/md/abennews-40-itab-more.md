  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-4.htm) →  [Changes in Release 4.0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-40.htm) → 

Internal Tables and Extracts in Release 4.0

Modification 1

New addition for MODIFY: TRANSPORTING f1 f2 ...
Using the addition [TRANSPORTING f1 f2 ... *\[*WHERE cond*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm) of the statement MODIFY, it is now possible to target the content of individual fields and modify it (known as a selective field transport).

Modification 2

Unassigned field symbols for INSERT, SORT, and AT
If the field symbol <fs> was not yet assigned (using [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm)), it is ignored in the following statements:

-   [INSERT <fs> INTO fg.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm)
    
-   [SORT BY <fs>.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_extract.htm)
    
-   [SORT itab BY <fs>.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm)
    
-   [AT NEW <fs>.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_extract.htm)
    
-   [AT END OF <fs>.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_extract.htm)
    

Modification 3

LOOP ... WHERE for unstructured row types
A WHERE condition ([LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm)) can now be formulated using the addition TABLE LINE for tables without structured row types (for example, tables with type I).
The same applies to the WHERE variants of the statements [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm) and [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm).