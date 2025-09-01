  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [Data Clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster.htm) → 

FREE MEMORY

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_memory_shortref.htm)

Syntax

FREE MEMORY ID id.

Effect

This statement has the same effect as the statement

[DELETE FROM MEMORY ID id.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_cluster.htm)

Outside of classes, you can omit the addition ID. In this case, all [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") are deleted from the [ABAP Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_memory_glosry.htm "Glossary Entry").

Note

The use of FREE MEMORY without the addition ID is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_mem_id_obsolete.htm). While the statement EXPORT without addition ID involves only one data cluster, in this case all clusters are involved. We recommend using the statement DELETE FROM, because here the addition ID is mandatory.

Example

Deletes the data cluster with the ID demo from the ABAP memory.

DATA(dobj) = \`xxx\`.
EXPORT contents = dobj TO MEMORY ID 'demo'.
IMPORT contents = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 0.
FREE MEMORY ID 'demo'.
IMPORT contents = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 4.