  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.51, ABENNEWS-751-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.51

Modification

New Structure for Export/Import Tables

[Export tables and import tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a new [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm) can now be used to save [data clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm).

In this [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexport_data_cluster_indx.htm), the field CLUSTD has the data type RAWSTRING ([BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenblob_glosry.htm "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables and import tables.