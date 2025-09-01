  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, FROM](javascript:call_link\('abapfrom_clause.htm'\)) →  [SELECT, FROM data\_source](javascript:call_link\('abapselect_data_source.htm'\)) →  [SELECT, FROM hierarchy\_data](javascript:call_link\('abenselect_hierarchy_data.htm'\)) →  [SELECT, FROM hierarchy\_navigator](javascript:call_link\('abenselect_hierarchy_navigators.htm'\)) → 

SELECT, FROM hierarchy\_aggregate\_navigator

Syntax

... [HIERARCHY\_DESCENDANTS\_AGGREGATE( ... )](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\))
  *|* [HIERARCHY\_ANCESTORS\_AGGREGATE( ... )](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)) ...

Effect

Specifies a [hierarchy aggregate navigator](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") as a data source [data\_source](javascript:call_link\('abapselect_data_source.htm'\)) in a ABAP SQL [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"). A hierarchy aggregate navigator accesses an [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") and uses [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") to evaluate it. The following hierarchy aggregate navigators are available:

-   [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\))

-   [HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\))

Continue
[SELECT, FROM HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\))
[SELECT, FROM HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\))