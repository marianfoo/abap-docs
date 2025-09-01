---
title: "Obsolete Syntax"
description: |
  EXPORT(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) parameter_list(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_param.htm) TO MEMORY(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_clus
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_import_mem_id_obsolete.htm"
abapFile: "abapexport_import_mem_id_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "abapexport", "import", "mem", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_cluster_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, IMPORT, no_id, ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

EXPORT, IMPORT, no\_id

Obsolete Syntax

[EXPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_param.htm) TO [MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.
[IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_parameterlist.htm) FROM [MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm) *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_conversion.htm)*\]*.

Effect

If the addition ID is not specified in the statements [EXPORT TO MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster_medium.htm) or [IMPORT FROM MEMORY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_medium.htm), the statement EXPORT writes to an anonymous area of the [ABAP memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_memory_glosry.htm "Glossary Entry") and the statement IMPORT reads from this area.

Hint

This short form is extremely error-prone and forbidden in classes, since all EXPORT statements without an ID overwrite the same data cluster.