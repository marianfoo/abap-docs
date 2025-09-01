  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20temporal%20SQL%20hierarchy%2C%20ABENTEMPORAL_HIERARCHY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

temporal SQL hierarchy

Special [SQL hierarchy](javascript:call_link\('abensql_hierarchy_glosry.htm'\) "Glossary Entry") that only contains [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") that meet certain conditions for time intervals. When the SQL hierarchy is created with the addition [PERIOD](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) in [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) or [PERIOD](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), columns of the [SQL data source](javascript:call_link\('abensql_data_source_glosry.htm'\) "Glossary Entry") of the hierarchy are defined as interval limits of so-called [periods](javascript:call_link\('abenperiod_glosry.htm'\) "Glossary Entry") and a time interval is specified for the [root node set](javascript:call_link\('abenroot_node_set_glosry.htm'\) "Glossary Entry"). [Validity intervals](javascript:call_link\('abenvalidity_interval_glosry.htm'\) "Glossary Entry") are determined as intersections of these time intervals. Only nodes with non-empty validity intervals are included in the hierarchy. The validity intervals of [child nodes](javascript:call_link\('abenchild_node_glosry.htm'\) "Glossary Entry") result from their period and the validity interval of the [parent node](javascript:call_link\('abenparent_node_glosry.htm'\) "Glossary Entry").