---
title: "Syntax"
description: |
  ... HIERARCHY_DESCENDANTS_AGGREGATE( ... )(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_desc_agg.htm)  HIERARCHY_ANCESTORS_AGGREGATE( ... )(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_ancs_agg.htm) ... Effect Specifies
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_agg_navis.htm"
abapFile: "abenselect_hierarchy_agg_navis.htm"
keywords: ["select", "do", "if", "try", "data", "abenselect", "hierarchy", "agg", "navis"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) →  [SELECT, FROM hierarchy\_data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_data.htm) →  [SELECT, FROM hierarchy\_navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_navigators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM hierarchy_aggregate_navigator, ABENSELECT_HIERARCHY_AGG_NAVIS, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECT, FROM hierarchy\_aggregate\_navigator

Syntax

... [HIERARCHY\_DESCENDANTS\_AGGREGATE( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_desc_agg.htm)
  *|* [HIERARCHY\_ANCESTORS\_AGGREGATE( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_ancs_agg.htm) ...

Effect

Specifies a [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") as a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in an ABAP SQL [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry"). A hierarchy aggregate navigator accesses an [SQL hierarchy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_hierarchy_glosry.htm "Glossary Entry") and uses [aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_function_glosry.htm "Glossary Entry") to evaluate it. The following hierarchy aggregate navigators are available:

-   [HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_desc_agg.htm)
-   [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_ancs_agg.htm)

Continue
[SELECT, FROM hierarchy\_descendants\_aggregate](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_desc_agg.htm)
[SELECT, hierarchy\_ancestors\_aggregate](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_ancs_agg.htm)