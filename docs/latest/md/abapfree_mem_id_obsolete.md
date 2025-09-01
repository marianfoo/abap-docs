  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FREE%2C%20no_id%2C%20ABAPFREE_MEM_ID_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FREE, no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory.

Hints

-   FREE MEMORY without addition ID also deletes data clusters written internally by the runtime framework, as for [local update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm "Glossary Entry").
-   This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.