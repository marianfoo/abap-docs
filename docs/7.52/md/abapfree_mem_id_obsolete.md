---
title: "Obsolete Syntax"
description: |
  FREE MEMORY. Effect If the addition ID is not specified in the statement FREE MEMORY(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_memory.htm), then all data clusters are deleted from the ABAP memory. Note This short form is extremely error-prone and forbidden in classes, sin
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_mem_id_obsolete.htm"
abapFile: "abapfree_mem_id_obsolete.htm"
keywords: ["delete", "do", "if", "class", "data", "abapfree", "mem", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_obsolete.htm) → 

FREE - no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfree_memory.htm), then all data clusters are deleted from the ABAP memory.

Note

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.