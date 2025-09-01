  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

Pooled Tables and Cluster Tables

Pooled tables and cluster tables are an SAP-specific category of database tables that can be defined in ABAP Dictionary and exist alongside [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). Unlike transparent tables, pooled tables and cluster tables do not exist with this definition on the database and instead contain the content of a table pool or table cluster. Only the table pool or table cluster is defined as a special table on the database. It is still possible, however, to access pooled or cluster tables using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), just like a transparent table. The database interface transforms accesses to the relevant accesses to the table pool or table cluster. Some [restrictions](javascript:call_link\('abenddic_database_tables_poclure.htm'\)) apply, however, which are also specified under the statements in question. Direct access to pooled tables and cluster tables using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") is not possible.

-   [Pooled tables in table pools](javascript:call_link\('abenddic_database_tables_pool.htm'\))

-   [Cluster tables in table clusters](javascript:call_link\('abenddic_database_tables_cluster.htm'\))

Note

It is not usually recommended that new tables are created as pooled table or cluster tables. It was also never recommended that business data be saved in pooled tables or clustered tables. Pooled tables and cluster tables were only ever designed for internal control information, temporary data, or continuous texts such as documentation. It is generally recommended that any existing pooled tables and cluster tables are [transformed](javascript:call_link\('abenddic_database_tables_poclutr.htm'\)) to transparent tables.

Continue
[Pooled Tables in Table Pools](javascript:call_link\('abenddic_database_tables_pool.htm'\))
[Cluster Tables in Table Clusters](javascript:call_link\('abenddic_database_tables_cluster.htm'\))
[Restrictions in Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poclure.htm'\))
[Transforming Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poclutr.htm'\))