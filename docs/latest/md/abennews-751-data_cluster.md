  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.51](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Clusters%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-DATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Data Clusters in ABAP Release 7.51

Modification

New Structure for Export/Import Tables

[Export tables and import tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a new [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm) can now be used to save [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers in the [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm).

In this [structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexport_data_cluster_indx.htm), the field CLUSTD has the data type RAWSTRING ([BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables and import tables.