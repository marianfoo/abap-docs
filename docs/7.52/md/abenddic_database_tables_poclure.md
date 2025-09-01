  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) → 

Restrictions in Pooled Tables and Cluster Tables

The following general restrictions apply to pooled tables and cluster tables:

-   Access to pooled tables and cluster tables using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") is not possible.

-   Pooled tables and cluster tables cannot be [data sources](javascript:call_link\('abencds_f1_data_source.htm'\)) of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). Views like this can be activated but not used.

-   Cluster tables cannot be [buffered](javascript:call_link\('abensap_puffering.htm'\)).

-   Pooled tables and cluster tables cannot be [global temporary tables (GTTs)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).

-   No [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) can be defined for pooled tables and cluster tables.

The following restrictions apply when accessing pooled tables and cluster tables using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"):

-   [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that contain pooled tables or cluster tables as a data source cannot be used as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

-   The addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) cannot be used when accessing pooled tables or cluster tables if single columns are specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   When accessing pooled tables or cluster tables, not all columns of a data source can be specified in the statement [SELECT](javascript:call_link\('abapselect.htm'\)) using data\_source~\* in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   When accessing pooled tables or cluster tables, no [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) except COUNT( \* ) can be created in the statement [SELECT](javascript:call_link\('abapselect.htm'\)). COUNT(\*) is emulated in this case.

-   When accessing pooled tables or cluster tables, no [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be used.

-   When accessing pooled tables or cluster tables, no [joins](javascript:call_link\('abapselect_join.htm'\)) can be created in the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

-   No [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) for [associations](javascript:call_link\('abencds_f1_association.htm'\)) of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be used when accessing pooled tables or cluster tables.

-   When accessing pooled tables or cluster tables, no columns of the data source can be specified on the right side in [comparisons](javascript:call_link\('abenwhere_logexp_compare.htm'\)) in [SQL conditions](javascript:call_link\('abenwhere_logexp.htm'\)).

-   In pattern matches using [LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\)) in a [WHERE](javascript:call_link\('abapwhere.htm'\)) condition, the addition [ESCAPE](javascript:call_link\('abenwhere_logexp_like.htm'\)) cannot be specified when a pooled table is accessed.

-   The additions [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) and [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) cannot be specified when accessing pooled tables or cluster tables.

-   When accessing pooled tables or cluster tables, it is not possible to use [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) to sort by single columns in the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

-   When accessing pooled tables or cluster tables, no [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") can be used, either as a [WHERE condition](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\)) or as a [data source](javascript:call_link\('abapinsert_source.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).

-   The primary key fields of pooled tables or cluster tables cannot be overwritten using the addition [SET](javascript:call_link\('abapupdate_source.htm'\)) of the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)).

-   [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") cannot be used to access pooled tables or cluster tables. The addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) and the addition [CONNECTION](javascript:call_link\('abapinsert_update_modify_conn.htm'\)) in [write statements](javascript:call_link\('abenopen_sql_writing.htm'\)) cannot be used.