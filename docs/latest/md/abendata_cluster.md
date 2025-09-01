---
title: "Data Cluster"
description: |
  A data cluster is a group of data objects(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm 'Glossary Entry') grouped together for the purpose of storage in a memory medium(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cl
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm"
abapFile: "abendata_cluster.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "abendata", "cluster"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Cluster%2C%20ABENDATA_CLUSTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Cluster

A data cluster is a group of [data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm "Glossary Entry") grouped together for the purpose of storage in a [memory medium](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster_medium.htm) that can only be accessed using ABAP statements.

-   The data objects are written to the memory medium by the statement [EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm).
-   The data objects are extracted again by the statement [IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm).
-   The statement [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_cluster.htm) can be used to delete any memory medium.
-   The statement [FREE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory.htm) can be used to delete the ABAP Memory.
-   The statement [IMPORT DIRECTORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_directory.htm) creates a list of all data objects that have previously been exported to a database table.

The statements for data clusters are complemented by the subclasses of the abstract system class [CL\_ABAP\_EXPIMP\_UTILITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_expimp.htm).

Hint

As well as the statements described here, some [obsolete accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_obsolete.htm) to data clusters also still exist.

Continue
[EXPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexport_data_cluster.htm)
[IMPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_data_cluster.htm)
[IMPORT DIRECTORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapimport_directory.htm)
[FREE MEMORY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory.htm)
[DELETE FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_cluster.htm)
[System Class for Data Clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_expimp.htm)