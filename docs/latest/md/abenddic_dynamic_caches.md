---
title: "DDIC - Dynamic Caches"
description: |
  A dynamic cache(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm 'Glossary Entry') is a HANA tuning object(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm 'Glossary Entry') that serves as an interface b
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dynamic_caches.htm"
abapFile: "abenddic_dynamic_caches.htm"
keywords: ["insert", "update", "do", "if", "case", "try", "data", "abenddic", "dynamic", "caches"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dynamic%20Caches%2C%20ABENDDIC_DYNAMIC_CACHES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Dynamic Caches

A [dynamic cache](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") is a [HANA tuning object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm "Glossary Entry") that serves as an interface between [dynamic result caches](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1) in SAP HANA and DDIC views. A dynamic cache is defined for a DDIC database table. It defines a restricted subquery on the database table with the goal to cache read results of the table in question to avoid repeated aggregation. This optimizes the performance in certain use cases. At the same time, a dynamic caches guarantees up-to-date data. Each time the cached database table is updated with INSERT, the cached data is updated automatically.

ABAP Dictionary dynamic caches are defined using the

-   [Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm)

Further Information

[ABAP Data Models](https://help.sap.com/docs/ABAP_Cloud/aaae421481034feab3e71dd9e0f643bf/977a051cea1c4059be2500dcbf2d3d7d?version=sap_cross_product_abap) development guide, section about HANA Tuning Objects.

Hints

-   SAP HANA offers static and dynamic [view caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenview_cache_glosry.htm "Glossary Entry"). Only the dynamic version has been integrated into DDIC. Static view caches are called [Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/8ea43b3ff2e541e398e27d7e5caefab7) on SAP HANA, and dynamic caches are called [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1).
-   A DDIC dynamic cache is generated as SQL view on the database. Therefore, it is also referred to as view cache.
-   Further details on SAP HANA cached views and an executable example can be found in the topic about [Cached Views in SAP HANA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_cached_views.htm).

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dynamic_cache.htm)