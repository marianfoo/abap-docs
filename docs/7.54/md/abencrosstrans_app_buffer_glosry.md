  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

cross-transaction application buffer

Application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry"). ABAP programs access cross-transaction application buffers by specifying [SHARED BUFFER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm) or [SHARED MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster_medium.htm) as medium with the statements [EXPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexport_data_cluster.htm) and [IMPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapimport_data_cluster.htm) for [data clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_glosry.htm "Glossary Entry"). The two categories differ in respect to how the system behaves when the memory limit is reached.