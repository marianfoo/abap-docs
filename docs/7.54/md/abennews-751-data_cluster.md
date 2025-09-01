  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.51](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-751.htm) → 

Data Clusters in Release 7.51

[1\. New structure for export tables/import tables](#!ABAP_MODIFICATION_1@1@)

Modification 1

New Structure for Export Tables/Import Tables

[Export tables/import tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexport_import_table_glosry.htm "Glossary Entry") with a new [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexport_data_cluster_indx.htm) can now be used to save [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry") in database tables and application buffers in the [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry") using [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm).

In this [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexport_data_cluster_indx.htm), the field CLUSTD has the data type RAWSTRING ([BLOB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenblob_glosry.htm "Glossary Entry")) and can save data cluster in a single row. The columns required for the administration of a data cluster across multiple rows, SRTF2 and CLUSTR, are now obsolete.

The new structure is recommended for export tables/import tables.