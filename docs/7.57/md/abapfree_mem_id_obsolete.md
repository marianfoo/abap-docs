---
title: "Obsolete Syntax"
description: |
  FREE MEMORY. Effect If the addition ID is not specified in the statement FREE MEMORY(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory. Hint This short form is extremely error-prone and forbidden in classes, since a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_mem_id_obsolete.htm"
abapFile: "abapfree_mem_id_obsolete.htm"
keywords: ["delete", "do", "if", "class", "data", "abapfree", "mem", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE, no_id, ABAPFREE_MEM_ID_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

FREE, no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfree_memory.htm), all data clusters are deleted from the ABAP memory.

Hint

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.