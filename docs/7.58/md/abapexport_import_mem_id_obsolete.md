---
title: "Obsolete Syntax"
description: |
  EXPORT(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) parameter_list(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm) TO MEMORY(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_clus
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_import_mem_id_obsolete.htm"
abapFile: "abapexport_import_mem_id_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "abapexport", "import", "mem", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_cluster_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20IMPORT%2C%20no_id%2C%20ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT, IMPORT, no\_id

Obsolete Syntax

[EXPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_param.htm) TO [MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.
[IMPORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_parameterlist.htm) FROM [MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm) *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_conversion.htm)*\]*.

Effect

If the addition ID is not specified in the statements [EXPORT TO MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster_medium.htm) or [IMPORT FROM MEMORY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_medium.htm), the statement EXPORT writes to an anonymous area of the [ABAP memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_memory_glosry.htm "Glossary Entry") and the statement IMPORT reads from this area.

Hint

This short form is extremely error-prone and forbidden in classes, since all EXPORT statements without an ID overwrite the same data cluster.