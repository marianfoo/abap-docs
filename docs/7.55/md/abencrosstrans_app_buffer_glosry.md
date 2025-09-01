  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

cross-transaction application buffer

Application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_memory_glosry.htm "Glossary Entry"). ABAP programs access cross-transaction application buffers by specifying [SHARED BUFFER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) or [SHARED MEMORY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) as the medium with the statements [EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm) for [data clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry"). The difference between the two types lies in the system behavior when the memory limit is reached.