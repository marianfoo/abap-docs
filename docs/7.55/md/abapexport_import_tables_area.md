---
title: "EXPORT, IMPORT, dbtab"
description: |
  Obsolete Syntax TABLES(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables.htm) dbtab. ... EXPORT(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm) parameter_list(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_import_tables_area.htm"
abapFile: "abapexport_import_tables_area.htm"
keywords: ["do", "if", "try", "class", "data", "abapexport", "import", "tables", "area"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Obsolete Access to Data Clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_obsolete.htm) → 

EXPORT, IMPORT, dbtab

Obsolete Syntax

[TABLES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptables.htm) dbtab.
...
[EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_param.htm)
       TO [DATABASE*|**{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* *\[*CLIENT cl*\]* ID id](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm)
       *\[*COMPRESSION *{*ON*|*OFF*}**\]*.
...
[IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm) [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_parameterlist.htm)
       FROM [DATABASE*|**{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* *\[*CLIENT cl*\]* ID id](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_medium.htm)
       *\[*[conversion\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_conversion.htm)*\]*.

Effect

If the addition FROM wa or TO wa is not specified in exports or imports using the media database table or shared memory, the ABAP runtime environment attempts to transport the components between [SRTF2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm) and [CLUSTR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexport_data_cluster_indx.htm) of the [table work area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using TABLES dbtab. If the table work area is not found, these components are not transported.

Hints

-   In global classes, it is not possible to use table work areas anyway. In local classes of programs other than [class pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry"), the implicit mechanism is applied to any table work areas of their [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry").

-   The implicit use of table work areas is obsolete and hence the short forms shown here should no longer be used for data transports. Instead, it is recommended that FROM wa and TO wa are specified explicitly if the components between SRTF2 and CLUSTR are written or read.