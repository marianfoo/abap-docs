---
title: "node_cycle_glosry"
description: |
  node_cycle_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennode_cycle_glosry.htm"
abapFile: "abennode_cycle_glosry.htm"
keywords: ["do", "if", "try", "abennode", "cycle", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20node%20cycle%2C%20ABENNODE_CYCLE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

node cycle

A node cycle occurs in an [SQL hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") for a [child node](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenchild_node_glosry.htm "Glossary Entry") that is also one of the preceding [parent nodes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenparent_node_glosry.htm "Glossary Entry") or its own parent node. For a child node of this type, the [hierarchy column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") [HIERARCHY\_IS\_CYCLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddddl_hierarchy.htm) contains the value 1.