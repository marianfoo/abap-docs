  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

Data Clusters in Release 7.52

[1\. New catchable exceptions](#!ABAP_MODIFICATION_1@1@)

Modification 1

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