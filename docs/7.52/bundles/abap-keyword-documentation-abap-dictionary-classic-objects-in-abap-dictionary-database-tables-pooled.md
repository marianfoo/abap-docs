# ABAP - Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Database Tables / Pooled Tables and Cluster Tables

Included pages: 5


### abenddic_database_tables_poolclu.htm

  

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


### abenddic_database_tables_pool.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) → 

Pooled Tables in Table Pools

Pooled tables are a special category of database table in ABAP Dictionary. They are defined by being saved in table pools rather than being defined as pooled tables on the database.

-   [Table Pools](#@@ITOC@@ABENDDIC_DATABASE_TABLES_POOL_1)

-   [Pooled Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_POOL_2)

Table Pools

A table pool is defined as a database table on the database. It contains all rows of the pooled tables assigned to it. A table pool has the following table fields for this:

-   Key field TABNAME with the type CHAR of length 10 for the name of a pooled table

-   Key field VARKEY with the type CHAR with a maximum length of 110 for the values (chained as a character string) of the key fields of a row of the pooled table specified in TABNAME

-   Field DATALN with the type INT2 for the length of the string in VARDATA

-   Field VARDATA with the type RAW for the non-key fields (compressed in a byte chain) of the row specified by the key in VARKEY of the pooled table specified in TABNAME

The name of a table pool can have a maximum of ten characters. The configurable technical attributes of a database table are the [size category](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\)) and the [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)). All other technical attributes are fixed.

Once it is activated in ABAP Dictionary, a table pool must be created explicitly on the database using the Database Utility tool. A table pool that already contains data can no longer be modified or deleted.

Example

In systems where no transformation to transparent tables has taken place, the table pool ATAB contains pooled tables from the ABAP runtime environment.

Pooled Tables

All key fields of a pooled table must have a flat character-like data type. The total length of all key fields or the total length of all non-key fields of a pooled table cannot be greater than the length of the VARKEY or VARDATA field of the associated table pool. A pooled table cannot have any fields of the obsolete built-in types DF16\_SCL and DF34\_SCL. The name of a table field can have a maximum of 10 characters, which is also important when including structures as [include structures](javascript:call_link\('abenddic_include_structure.htm'\)).

Before a pooled table is created, a suitable transparent table with a suitable [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) must be created and transformed to a pooled table. This assigns the pooled table to a table pool.

No secondary indexes can be created for a pooled table. The same [technical settings](javascript:call_link\('abenddic_database_tables_tech.htm'\)) can be made as in a transparent table, but these are ignored (they are defaults for the [transformation](javascript:call_link\('abenddic_database_tables_poclutr.htm'\)) to a transparent table).

Note

A pooled table can be flagged as transparent in its technical settings, which is a simple way of transforming it to a transparent table.

Note

In systems where no transformation to transparent tables has taken place, the table PVERI\_CLNT is a pooled table in the table pool ATAB.


### abenddic_database_tables_cluster.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) → 

Cluster Tables in Table Clusters

Cluster tables are a special category of database table in ABAP Dictionary. They are defined by being saved in table clusters rather than being defined as cluster tables on the database.

-   [Table Cluster](#@@ITOC@@ABENDDIC_DATABASE_TABLES_CLUSTER_1)

-   [Cluster Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_CLUSTER_2)

Table Cluster

A table cluster is defined as a database table in the database. It contains all rows of the cluster tables assigned to it. Here, multiple rows from various cluster tables are grouped in a byte string. There is one row and (potentially) multiple continuation rows for this byte string. A table cluster has the following table fields for this:

-   Custom key fields CLKEY1, CLKEY2, ... with any name and any type permitted for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) except decimal floating point numbers.

-   Key field PAGENO with the type INT2 for indicating continuation rows.

-   TIMESTMP with the type CHAR of the length 14.

-   PAGELG with the type INT2 for the length of the byte string in VARDATA.

-   VARDATA with the type RAW for the rows (compressed in a byte string) of the assigned cluster tables determined using the key fields CLKEY1, CLKEY2, ... Alongside the actual values, the byte string contains information about the structure of the data and from which cluster table it comes. If the byte string is longer than the maximum length of the VARDATA field, a continuation row is written using the same key values. The continuation rows of a key are distinguished by their values in the field PAGENO. The actual length of the byte string is saved in the field PAGELG.

The name of a table cluster can have a maximum of ten characters. The configurable technical attributes of a database table are the [size category](javascript:call_link\('abenddic_database_tables_siz_cat.htm'\)) and the [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)). All other technical attributes are fixed.

Once it is activated in ABAP Dictionary, a table cluster must be created explicitly on the database using the Database Utility tool. A table cluster that already contains data can no longer be modified or deleted.

Note

Table clusters and cluster tables should not be confused with export/import tables used to add [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

Example

In systems where no transformation to transparent tables has taken place, the table cluster DOKCLU contains the cluster table DOKTL. The key fields ID, OBJECT, LANGU, TYP, and DOKVERSION cover a part of the table key DOKTL.

Cluster Tables

The intersection of the [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)) of the cluster tables constructs the primary key of the table cluster. The table key of a cluster table must contain the key of the assigned table cluster as its initial part. The key fields of a cluster table cannot have any built-in types for decimal floating point numbers. A cluster table cannot have any data fields of the obsolete built-in types DF16\_SCL and DF34\_SCL. The name of a table field can have a maximum of 10 characters, which is also important when including structures as [include structures](javascript:call_link\('abenddic_include_structure.htm'\)).

Before a cluster table is created, a suitable transparent table with a suitable [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)) must be created and transformed to a cluster table. This assigns the cluster table to a table cluster.

No secondary indexes can be created for a cluster table. The same [technical settings](javascript:call_link\('abenddic_database_tables_tech.htm'\)) can be made as in a transparent table, but these are ignored (they are defaults for the [transformation](javascript:call_link\('abenddic_database_tables_poclutr.htm'\)) to a transparent table).

Note

Table clusters and cluster tables should not be confused with [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") tables used to add [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

Example

The cluster table DOKTL, which contains all documentation created in the transaction SE61, is a part of the table cluster DOKCLU in systems where no transformation to transparent tables has yet taken place.


### abenddic_database_tables_poclure.htm

  

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


### abenddic_database_tables_poclutr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) → 

Transforming Pooled Tables and Cluster Tables

Any existing pooled tables and cluster tables should be transformed to transparent tables. In particular, if a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is used as the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), only transparent tables should be used, since the architecture of SAP HANA databases does not provide optimum support for pooled tables and cluster tables.

The tables can be transformed in ABAP Dictionary for the current system. By default, the table is then also transformed when migrated to another database in follow-on systems. If the transformation in follow-on systems is restricted only to specific database systems in exceptional cases, this can be specified using the Transparent on following DBs flag in the original system. If this is the case, any pooled tables or cluster tables transformed to transparent tables in one system, are transformed in follow-on systems only if migrated to the specified databases. They are kept as pooled tables or cluster tables for all other databases. Currently, only SAP HANA databases can be specified as database systems where this transformation can take place.

Once a table is transformed to a transparent database table, the Transparent on following DBs flag is kept and defines the transformation in further follow-on systems. If a transformed transparent table is migrated to a follow-on system, the pooled tables or cluster tables are only transformed to transparent tables if the flag is not set or if the flag is set and the target database system matches.

In addition, this flag specifies that tables on each database where they were once transparent are no longer transformed to a pooled table or cluster table, even if a transport with the corresponding table definition is imported or an attempt is made to perform the transformation in ABAP Dictionary. Before this can happen, the flag must be removed explicitly.
