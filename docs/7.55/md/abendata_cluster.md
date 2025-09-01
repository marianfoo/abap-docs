---
title: "Data Cluster"
description: |
  A data cluster is a group of data objects(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm 'Glossary Entry') grouped together for the purpose of storage in a memory medium(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medi
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster.htm"
abapFile: "abendata_cluster.htm"
keywords: ["delete", "do", "try", "class", "data", "abendata", "cluster"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) → 

Data Cluster

A data cluster is a group of [data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry") grouped together for the purpose of storage in a [memory medium](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) that can only be accessed using ABAP statements.

-   The data objects are written to the memory medium by the statement [EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm).

-   The data objects are extracted again by the statement [IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm).

-   The statement [DELETE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_cluster.htm) can be used to delete any memory medium.

-   The statement [FREE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_memory.htm) can be used to delete the ABAP Memory.

-   The statement [IMPORT DIRECTORY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_directory.htm) creates a list of all data objects that have previously been exported to a database table.

The statements for data clusters are complemented by the subclasses of the abstract system class [CL\_ABAP\_EXPIMP\_UTILITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_expimp.htm).

Hint

As well as the statements described here, some [obsolete accesses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_obsolete.htm) to data clusters also still exist.

Continue
[EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm)
[IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm)
[IMPORT DIRECTORY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_directory.htm)
[FREE MEMORY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfree_memory.htm)
[DELETE FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_cluster.htm)
[System Class for Data Clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_expimp.htm)