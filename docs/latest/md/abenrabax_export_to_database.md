  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%20in%20EXPORT%2C%20ABENRABAX_EXPORT_TO_DATABASE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions in EXPORT

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_COMPRESSION\_ERROR

-   Cause: More than 2 GB of data is to be exported.
    Runtime error: EXPORT\_TOO\_MUCH\_DATA

CX\_SY\_EXPIMP\_DB\_SQL\_ERROR

-   Cause: SQL error in export to the database.
    Runtime error: [DBIF\_...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_exceptions.htm)

CX\_SY\_EXPORT\_BUFFER\_NO\_MEMORY

-   Cause: The size of the data cluster exceeds a quarter of the total size of the associated application buffer.
    Runtime error: EXPORT\_BUFFER\_NO\_MEMORY

CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY

-   Cause: Data cluster is too large for the associated application buffer. This buffer is almost completely filled.
    Runtime error: EXPORT\_NO\_SHARED\_MEMORY

Uncatchable Exceptions

-   Cause: More rows are required when storing in an export/import table than allowed by the value range of the column SRTF2.
    Runtime error: EXPORT\_TOO\_MUCH\_DATA
-   Cause: Data field too short
    Runtime error: EXPORT\_TABLE\_CLUSTD\_TOO\_SHORT
-   Cause: Data field has incorrect type
    Runtime error: EXPORT\_TABLE\_CLUSTD\_WRONG\_TYPE
-   Cause: Length field has incorrect type
    Runtime error: EXPORT\_TABLE\_CLUSTR\_WRONG\_TYPE
-   Cause: Client field must be first
    Runtime error: EXPORT\_TABLE\_MANDT\_NOT\_FIRST
-   Cause: Field RELID missing
    Runtime error: EXPORT\_TABLE\_NO\_RELID
-   Cause: No user key in structure
    Runtime error: EXPORT\_TABLE\_NO\_USER\_KEY
-   Cause: Counter field has incorrect type
    Runtime error: EXPORT\_TABLE\_SRTF2\_WRONG\_TYPE
-   Cause: Table has incorrect structure
    Runtime error: EXPORT\_TABLE\_TOO\_FEW\_FIELDS
-   Cause: Table unknown to the database
    Runtime error: EXPORT\_TABLE\_UNKNOWN
-   Cause: Table key must start at the beginning
    Runtime error: EXPORT\_TABLE\_WRONG\_KEY\_POS
-   Cause: Problem when changing the data in the database table
    Runtime error: EXPORT\_TABLE\_UPDATE\_CONFLICT
-   Cause: Database table has wrong length
    Runtime error: EXPORT\_TABLE\_WRONG\_LENGTH
-   Cause: No memory available for compression
    Runtime error: EXPORT\_COMPRESS\_ALLOC\_FAILED
-   Cause: The database table is not an export/import table.
    Runtime error: EXPORT\_INCL\_TABLE\_STRUCTURE
-   Cause: No more paging area available
    Runtime error: EXPORT\_NO\_CONTAINER
-   Cause: Error when exporting the transactional application buffer
    Runtime error: EXPORT\_BUFFER\_FAILED
    Runtime error: EXPORT\_BUFFER\_EXTERNAL\_ERROR
    Runtime error: EXPORT\_BUFFER\_INTERNAL\_ERROR