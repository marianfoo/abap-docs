  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) →  [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Export%2FImport%20Tables%2C%20ABENEXPORT_DATA_CLUSTER_INDX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Export/Import Tables

When storing [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers of the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are referred to as [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry").

-   [Structure for Data Clusters in One Row](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_1)
-   [Structure for Data Clusters in Multiple Rows](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Hints

-   The structure for data clusters in a row is the newer variant and is recommended for new database tables.
-   Status information about the actual data cluster, such as date, user, or language, can be stored in freely definable fields.
-   For information about processing [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry") using SQL, see [SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindx_type_table_and_sql.htm).
-   When accessing data clusters in export/import tables using the statements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm) and [IMPORT ... FROM DATABASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm), [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not supported.

Structure for Data Clusters in One Row   

In export/import table structures like this, the data cluster is stored in a single row in a column CLUSTD of the type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) ([BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")).

-   If the data objects are to be stored as client-dependent objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component is not required for client-independent storage.
-   The next field must be a key field with the name RELID of type CHAR and with length 2. The specification of the area ar is stored here.
-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id within the length of the key field is stored here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right.
-   Any number of fields with freely selectable name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.
-   The final field must be called CLUSTD and linked with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). This column is given the actual data cluster.

Hint

The total length of all [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm), that is the total length of MANDT, RELID, and the key fields for the ID, and SRTF2, is limited to 900 bytes, like every AS ABAP [database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) defined in the ABAP Dictionary. If the table content is to be transported by specifying a key, a limit of 120 bytes is required here.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are stored in a single row.

Structure for Data Clusters in Multiple Rows   

In export/import table structures like this, the data cluster is stored in a column CLUSTD of the type [LRAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and can be split multiple rows. The structure requires the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.
-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster stored in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRTF2, an uncatchable exception is raised.
-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.
-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and [LRAW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) of any length. The current length of the field CLUSTD of each row is stored in CLUSTR, while CLUSTD contains the actual data cluster, which can span multiple rows.

Hints

-   When a data cluster is split across multiple rows, the associated administration data must be stored for each row. In each row, the content of the custom fields are stored redundantly.
-   The additional key field SRTF2 is part of the total length of all [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.
-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry") are used:
    -   When data is stored in the table INDX, data is at risk of being overwritten or deleted unintentionally by other programs.
    -   The custom fields between SRTF2 and CLUSTR do not usually match their own application.
    -   The table INDX has the [delivery class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm) A and is client-dependent. The delivery class L may be better suited for storing temporary data. If the data needs to be client-independent data, the table used should not contain a client column. This prevents redundant data from being stored.
    -   New export/import tables should be created with a [BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") column CLUSTD.
-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are stored in multiple rows.

Continue
[SQL Access to Export/Import Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindx_type_table_and_sql.htm)