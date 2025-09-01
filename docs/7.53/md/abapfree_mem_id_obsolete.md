  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_obsolete.htm) → 

FREE - no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory.

Note

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.