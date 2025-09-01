  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.52](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.52, ABENNEWS-752-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.52

Modification

New Catchable Exceptions

The following [exceptions in IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrabax_import_from_database.htm) were previously non-catchable but are now assigned to the exception class CX\_SY\_IMPORT\_FORMAT\_ERROR and hence can be handled:

-   CONNE\_ILLEGAL\_TRANSPORT\_HEADER
-   CONNE\_ILLEGAL\_TRANSPORT\_VERS
-   CONNE\_COMPRESS\_FLAG\_INVALID
-   CONNE\_CONTAINER\_TOO\_SHORT
-   CONNE\_DESCRIPTION\_FLAG\_INVALID
-   CONVERSION\_CODEPAGE\_UNKNOWN
-   IMPORT\_DESCR\_ENDMARK\_MISSING
-   IMPORT\_UNEXPECTED\_END\_OF\_DATA
-   IMPORT\_CONTAINER\_MISSING
    -   IMPORT\_FROM\_DATA\_BUFFER\_EMPTY is now also IMPORT\_CONTAINER\_MISSING
    -   IMPORT\_FROM\_INTTABLE\_EMPTY is now also IMPORT\_CONTAINER\_MISSING
-   IMPORT\_CONTAINER\_MISSING
-   IMPORT\_DECOMPRESS\_FAILED
-   IMPORT\_OBJECT\_DESTROYED