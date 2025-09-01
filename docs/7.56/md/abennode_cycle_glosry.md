---
title: "node_cycle_glosry"
description: |
  node_cycle_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennode_cycle_glosry.htm"
abapFile: "abennode_cycle_glosry.htm"
keywords: ["do", "try", "abennode", "cycle", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

node cycle

A node cycle occurs in an [SQL hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") for a [child node](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_node_glosry.htm "Glossary Entry") that is also one of the preceding [parent nodes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_node_glosry.htm "Glossary Entry") or its own parent node. For a child node of this type, the [hierarchy column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") [HIERARCHY\_IS\_CYCLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddddl_hierarchy.htm) contains the value 1.