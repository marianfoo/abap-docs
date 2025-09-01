---
title: "graph_workspace_glosry"
description: |
  graph_workspace_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraph_workspace_glosry.htm"
abapFile: "abengraph_workspace_glosry.htm"
keywords: ["do", "if", "try", "data", "abengraph", "workspace", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20graph%20workspace%2C%20ABENGRAPH_WORKSPACE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

graph workspace

A graph workspace is an object of the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") that defines a [graph](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengraph_glosry.htm "Glossary Entry") in terms of tables and columns, i. e. it consists of two tables (for [vertices](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvertex_glosry.htm "Glossary Entry") and [edges](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenedge_glosry.htm "Glossary Entry")) as sources for a graph model. It declares the key column of a [vertex table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvertex_table_glosry.htm "Glossary Entry") and an [edge table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenedge_table_glosry.htm "Glossary Entry"), and also the source and target column of an edge table. It is currently restricted to one key column and one source and target column. Graph workspaces are supported in ABAP by [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_hdb_graph.htm)