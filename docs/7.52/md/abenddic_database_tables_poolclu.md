  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) → 

Pooled Tables and Cluster Tables

Pooled tables and cluster tables are an SAP-specific category of database tables that can be defined in ABAP Dictionary and exist alongside [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry"). Unlike transparent tables, pooled tables and cluster tables do not exist with this definition on the database and instead contain the content of a table pool or table cluster. Only the table pool or table cluster is defined as a special table on the database. It is still possible, however, to access pooled or cluster tables using [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), just like a transparent table. The database interface transforms accesses to the relevant accesses to the table pool or table cluster. Some [restrictions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclure.htm) apply, however, which are also specified under the statements in question. Direct access to pooled tables and cluster tables using [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") is not possible.

-   [Pooled tables in table pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_pool.htm)

-   [Cluster tables in table clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_cluster.htm)

Note

It is not usually recommended that new tables are created as pooled table or cluster tables. It was also never recommended that business data be saved in pooled tables or clustered tables. Pooled tables and cluster tables were only ever designed for internal control information, temporary data, or continuous texts such as documentation. It is generally recommended that any existing pooled tables and cluster tables are [transformed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclutr.htm) to transparent tables.

Continue
[Pooled Tables in Table Pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_pool.htm)
[Cluster Tables in Table Clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_cluster.htm)
[Restrictions in Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclure.htm)
[Transforming Pooled Tables and Cluster Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_poclutr.htm)