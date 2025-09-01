  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

Data Clusters in Release 7.51

[1\. New structure for export tables/import tables](#!ABAP_MODIFICATION_1@1@)

Modification 1

New Structure for Export Tables/Import Tables

[Export tables/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") with a new [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) can now be used to save [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)).

In this [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)), the field CLUSTD has the data type RAWSTRING ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables/import tables.