  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) → 

Export/Import Tables

When storing [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), database tables with one of the following structures must be specified: These database tables are known as [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry").

-   [Structure for Data Clusters in One Row](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_1)

-   [Structure for Data Clusters in Multiple Rows](#@@ITOC@@ABENEXPORT_DATA_CLUSTER_INDX_2)

Notes

-   The structure for data clusters in a single row is the newer variant and is recommended for new database tables.

-   Status information about the actual data cluster, such as date, user, or language, can be saved in custom fields.

-   Notes about how to edit [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") using SQL can be found under [SQL Access to Export/Import Tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\)).

Structure for Data Clusters in One Row

In export/import table structures like this, the data cluster is saved in a single row in a column CLUSTD of the type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")).

-   If the data objects are saved as client-specific objects, the first field must be a key field with the name MANDT of type CLNT for the client. This component does not apply if objects are saved as cross-client objects.

-   The next field must be a key field with the name RELID of type CHAR and with length 2. The area saved here is specified as ar.

-   This must be followed by at least one key field of type CHAR with any name. The identifier specified in id in the length of the key field is saved here. If more than one key field is defined, the identifier is divided among them according to the respective length of the key fields. If the total length of the key fields is not sufficient for the identifier, it is truncated on the right side.

-   Any number of fields with any name and type can follow, which are filled with values by specifying FROM wa. The addition TO wa of the statement IMPORT reads these fields again.

-   The final field must be called CLUSTD and associated with the data element INDX\_CLUST\_BLOB with the dictionary type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)). This column is given the actual data cluster.

Note

The total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) (meaning the total length of MANDT, RELID, the key fields for the ID, and SRTF2) is limited to 900 bytes, like every AS ABAP [database](javascript:call_link\('abenddic_database_tables.htm'\)) defined in ABAP Dictionary. If the table content is transported by specifying a key, a limit of 120 bytes is required here too.

Example

The database table DEMO\_INDX\_BLOB is an example of how data clusters are saved in a single row.

Structure for Data Clusters in Multiple Rows

In export/import table structures like this, the data cluster is saved in a column CLUSTD of the type [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) and can span multiple rows. The structure needs the additional columns SRTF2 and CLUSTR to manage this repository.

-   The structure starts with the same key fields as in the structure above for data clusters in a single row.

-   The next field must be a further key field with the name SRTF2 of type INT4. It contains the row numbers of the data cluster saved in the field CLUSTD. This cluster can span multiple rows and is filled automatically by the system. If more rows are required than allowed by the value range of SRFT2, a non-handleable exception is raised.

-   Any number of fields with custom names and types can follow. The same applies to these fields as to the structure above for data clusters in a single row.

-   The last two components must be called CLUSTR and CLUSTD and have the types [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) and [LRAW](javascript:call_link\('abenddic_builtin_types.htm'\)) of any length. The current length of the field CLUSTD of each row is saved in CLUSTR, while CLUSTD contains the actual data cluster (which can span multiple rows).

Notes

-   When a data cluster is split across multiple rows, the associated administration data must be saved for each row. In each row, the content of the custom fields are saved redundantly.

-   The additional key field SRTF2 is part of the total length of all [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). When table content is transported by specifying a key, the key field SRTF2 does not usually need to be specified since only transports of all rows in a data cluster are feasible.

-   A database table INDX, delivered by SAP, has the layout for a data cluster in multiple rows and can be used as a template for creating custom database tables or for test purposes. In production programs, however, it is strongly recommended that separate [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") are used:

-   When data is saved in the table INDX, data is at risk of being overwritten or deleted by other programs.

-   The custom fields between SRTF2 and CLUSTR do not usually match their own application.

-   The table INDX has the [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) A and is client-specific. The delivery class L may be better suited for saving temporary data. If the data needs to be cross-client data, the table used should not contain a client column. This prevents redundant data from being saved.

-   New export/import tables should be created using a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") column CLUSTD.

-   Old export/import tables can also occur, however, where the column SRTF2 has the data type INT1 or INT2. In these tables, a data cluster cannot cover more rows than allowed by the value range of these types.

Example

The database table DEMO\_INDX\_TABLE is an example of how data clusters are saved in multiple rows.

Continue
[SQL access to export tables/import tables](javascript:call_link\('abenindx_type_table_and_sql.htm'\))