---
title: "temporal_hierarchy_glosry"
description: |
  temporal_hierarchy_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentemporal_hierarchy_glosry.htm"
abapFile: "abentemporal_hierarchy_glosry.htm"
keywords: ["select", "do", "if", "try", "data", "abentemporal", "hierarchy", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

temporal SQL hierarchy

Special [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") that only contains [hierarchy nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") that meet certain conditions for time intervals. When the SQL hierarchy is created with the addition [PERIOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) or [PERIOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_hierarchy.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry"), columns of the [SQL data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_data_source_glosry.htm "Glossary Entry") of the hierarchy are defined as interval limits of so-called [periods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenperiod_glosry.htm "Glossary Entry") and a time interval is specified for the [root node set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_node_set_glosry.htm "Glossary Entry"). [Validity intervals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalidity_interval_glosry.htm "Glossary Entry") are determined as intersections of these time intervals. Only nodes with non-empty validity intervals are included in the hierarchy. The validity intervals of [child nodes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_node_glosry.htm "Glossary Entry") result from their period and the validity interval of the [parent node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_node_glosry.htm "Glossary Entry").