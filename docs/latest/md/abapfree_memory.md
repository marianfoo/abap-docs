---
title: "FREE MEMORY"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory_shortref.htm) Syntax FREE MEMORY ID id. Effect This statement has the same effect as the statement DELETE FROM MEMORY ID id.(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory.htm"
abapFile: "abapfree_memory.htm"
keywords: ["delete", "do", "while", "if", "case", "try", "class", "data", "abapfree", "memory"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FREE%20MEMORY%2C%20ABAPFREE_MEMORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FREE MEMORY

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_memory_shortref.htm)

Syntax

FREE MEMORY ID id.

Effect

This statement has the same effect as the statement

[DELETE FROM MEMORY ID id.](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_cluster.htm)

The addition ID can be omitted outside of classes. In this case, all [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry") are deleted from the [ABAP Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry").

Hint

The use of FREE MEMORY without the addition ID is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfree_mem_id_obsolete.htm). While the statement EXPORT without addition ID affects only one data cluster, for FREE MEMORY, all clusters are affected. It is safest to use the statement DELETE FROM, because here the addition ID is mandatory.

Example

Deletion of the data cluster with the ID demo from the ABAP memory.

DATA(dobj) = \`xxx\`.
EXPORT content = dobj TO MEMORY ID 'demo'.
IMPORT content = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 0.
FREE MEMORY ID 'demo'.
IMPORT content = dobj FROM MEMORY ID 'demo'.
ASSERT sy-subrc = 4.