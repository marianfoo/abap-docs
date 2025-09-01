  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) →  [Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poolclu.htm) → 

Restrictions in Pooled Tables and Cluster Tables

The following general restrictions apply to pooled tables and cluster tables:

-   Access to pooled tables and cluster tables using [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") is not possible.

-   Pooled tables and cluster tables cannot be [data sources](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) of [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). Views like this can be activated but not used.

-   Cluster tables cannot be [buffered](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm).

-   Pooled tables and cluster tables cannot be [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_gtt.htm).

-   No [replacement objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_replacement_objects.htm) can be defined for pooled tables and cluster tables.

The following restrictions apply when accessing pooled tables and cluster tables using [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"):

-   [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") that contain pooled tables or cluster tables as a data source cannot be used as [data sources](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm).

-   The addition [DISTINCT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) cannot be used when accessing pooled tables or cluster tables if single columns are specified in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

-   When accessing pooled tables or cluster tables, not all columns of a data source can be specified in the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) using data\_source~\* in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

-   When accessing pooled tables or cluster tables, no [aggregate expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) except COUNT( \* ) can be created in the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm). COUNT(\*) is emulated in this case.

-   When accessing pooled tables or cluster tables, no [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) can be used.

-   When accessing pooled tables or cluster tables, no [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) can be created in the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm).

-   No [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) for [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm) of [CDS views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") can be used when accessing pooled tables or cluster tables.

-   When accessing pooled tables or cluster tables, no columns of the data source can be specified on the right side in [comparisons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) in [SQL conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm).

-   In pattern matches using [LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_like.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) condition, the addition [ESCAPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_like.htm) cannot be specified when a pooled table is accessed.

-   The additions [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) and [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) cannot be specified when accessing pooled tables or cluster tables.

-   When accessing pooled tables or cluster tables, it is not possible to use [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm) to sort by single columns in the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm).

-   When accessing pooled tables or cluster tables, no [subqueries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry") can be used, either as a [WHERE condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm) or as a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_source.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm).

-   The primary key fields of pooled tables or cluster tables cannot be overwritten using the addition [SET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_source.htm) of the statement [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm).

-   [Secondary connections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") cannot be used to access pooled tables or cluster tables. The addition [CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and the addition [CONNECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm) in [write statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) cannot be used.