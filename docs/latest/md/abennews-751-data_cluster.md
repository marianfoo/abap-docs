  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Data Clusters in ABAP Release 7.51

Modification

New Structure for Export/Import Tables

[Export tables and import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") with a new [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) can now be used to save [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in database tables and application buffers in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)).

In this [structure](javascript:call_link\('abenexport_data_cluster_indx.htm'\)), the field CLUSTD has the data type RAWSTRING ([BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables and import tables.