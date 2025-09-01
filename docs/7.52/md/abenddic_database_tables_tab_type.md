  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Table Category of Database Tables

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in ABAP Dictionary. The fields of transparent tables can be edited using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). Outside AS ABAP, they can be edited using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

ABAP Dictionary makes it possible to transform database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into one of the following table categories:

-   [Global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\))

A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

-   [Pooled tables and cluster tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\))

Pooled tables and cluster tables are the content of a table pool or table cluster and do not exist as variants of tables on the database.