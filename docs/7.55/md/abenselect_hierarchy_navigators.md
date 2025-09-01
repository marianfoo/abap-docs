---
title: "Syntax"
description: |
  ... hierarchy_node_navigator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_node_navis.htm)  hierarchy_agg_navigator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm) ... Effect Specifies a hierarchy navigator
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_navigators.htm"
abapFile: "abenselect_hierarchy_navigators.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abenselect", "hierarchy", "navigators"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_data.htm) → 

SELECT, FROM hierarchy\_navigator

Syntax

... [hierarchy\_node\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_node_navis.htm)
  *|* [hierarchy\_agg\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm) ...

Effect

Specifies a [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_navigator_glosry.htm "Glossary Entry") as a data source [data\_source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in a ABAP SQL [query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquery_glosry.htm "Glossary Entry").

A hierarchy navigator accesses a [SQL hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") and evaluates it. There are different kinds of hierarchy navigators:

-   [Hierarchy node navigators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_navi_glosry.htm "Glossary Entry") [hierarchy\_node\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_node_navis.htm) select certain hierarchy nodes and their properties.

-   [Hierarchy aggregate navigators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") [hierarchy\_agg\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_node_navis.htm) select certain hierarchy nodes and apply additional [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_function_glosry.htm "Glossary Entry") to them.

The tabular result contains the hierarchy nodes selected by the [hierarchy navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_node_glosry.htm "Glossary Entry"). The columns of the tabular result include the additional [hierarchy columns](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddddl_hierarchy.htm) of the SQL hierarchy specified after SOURCE, plus further hierarchy columns specific to the hierarchy navigators where applicable.

The same applies to the additional hierarchy columns as when accessing a SQL hierarchy [hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy.htm):

-   If \* or ...~\* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm), they are not read and are not part of a structure or internal table created using an inline declaration @DATA(...) in the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm).

-   They can, however, be specified explicitly in the SELECT list and, like any column in the result set, can be used for columns [colname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) specified in the other clauses of the query.

A hierarchy navigator exposes all associations of the SQL hierarchy used implicitly and leaves its [association target](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenassociation_target_glosry.htm "Glossary Entry") unchanged.

Hints

-   Hierarchy navigators do not create any SQL hierarchies:

-   They cannot be specified as a source in hierarchy navigators.

-   They cannot be exposed as a [CTE hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencte_hierarchy_glosry.htm "Glossary Entry").

-   On [SAP HANA databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"), the result sets of the hierarchy navigators are based on the use of the identically named hierarchy navigation functions. More information can be found in the [SAP HANA documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Continue
[SELECT, FROM hierarchy\_node\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_node_navis.htm)
[SELECT, FROM hierarchy\_aggregate\_navigator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_agg_navis.htm)