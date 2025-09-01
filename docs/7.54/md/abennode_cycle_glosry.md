---
title: "node_cycle_glosry"
description: |
  node_cycle_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennode_cycle_glosry.htm"
abapFile: "abennode_cycle_glosry.htm"
keywords: ["do", "try", "abennode", "cycle", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

node cycle

A node cycle occurs in a [hierarchy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_glosry.htm "Glossary Entry") for a [child node](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchild_node_glosry.htm "Glossary Entry") when this node is also one of the preceding [parent nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenparent_node_glosry.htm "Glossary Entry") or its own parent node. For a child node of this type, the [hierarchy column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_column_glosry.htm "Glossary Entry") [HIERARCHY\_IS\_CYCLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddddl_hierarchy.htm) contains the value 1.