  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Data Clusters in ABAP Release 7.52

Modification

New Catchable Exceptions

The following [exceptions in IMPORT](javascript:call_link\('abenrabax_import_from_database.htm'\)) were previously non-catchable but are now assigned to the exception class CX\_SY\_IMPORT\_FORMAT\_ERROR and hence can be handled:

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