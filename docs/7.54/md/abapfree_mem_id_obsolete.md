---
title: "Obsolete Syntax"
description: |
  FREE MEMORY. Effect If the addition ID is not specified in the statement FREE MEMORY(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory. Note This short form is extremely error-prone and forbidden in classes, since a
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_mem_id_obsolete.htm"
abapFile: "abapfree_mem_id_obsolete.htm"
keywords: ["delete", "do", "if", "class", "data", "abapfree", "mem", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_cluster_obsolete.htm) → 

FREE - no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory.

Note

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.