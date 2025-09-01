---
title: "External Views for SAP HANA Views in XSC"
description: |
  Open SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm 'Glossary Entry') provides access to all database tables and views whose structures are defined as repository objects in ABAP Dictionary(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_views.htm"
abapFile: "abenexternal_views.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "types", "abenexternal", "views"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_access_xsc.htm) → 

External Views for SAP HANA Views in XSC

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") provides access to all database tables and views whose structures are defined as repository objects in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). A [SAP HANA view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_view_glosry.htm "Glossary Entry") (an attribute view, analytic view, or calculation view), on the other hand, is an entity of the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry") and is defined in [SAP HANA XS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxs_glosry.htm "Glossary Entry"). This uses HANA-specific data types and different naming conventions to ABAP Dictionary also apply. This means that direct access to an SAP HANA view using Open SQL is not possible.

In [ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm), views known as [external views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_external_views.htm) are used for direct access to a SAP HANA view in the [SAP HANA repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_hana_repository_glosry.htm "Glossary Entry") in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsc_glosry.htm "Glossary Entry"). An external view is a special [view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenview_glosry.htm "Glossary Entry") in ABAP Dictionary that functions as a proxy for an SAP HANA view and which can be accessed using SAP HANA and Open SQL.

Notes

-   The following restrictions currently apply to the use of external views in ABAP programs:

-   The structure of analytic views do not allow them to be read using [SELECT \*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm). The same basic rules apply to the statement SELECT in Open SQL as when using the HANA-SQL statement SELECT, with individual columns and the addition GROUP BY needing to be specified. If SELECT \* is used, a runtime error occurs.

-   Calculation views with parameters can be access only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   External views should only be used in those cases that are not covered by [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry").

-   For SAP HANA views in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsa_glosry.htm "Glossary Entry"), other methods must be used such as [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc_glosry.htm "Glossary Entry").