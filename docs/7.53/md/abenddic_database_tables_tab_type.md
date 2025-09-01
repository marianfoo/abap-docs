  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Table Category of Database Tables

-   [Transparent tables](#abenddic-database-tables-tab-type-1--------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_TYPE_2)

Transparent tables

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in ABAP Dictionary. The fields of transparent tables can be edited using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") as well as using [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). Outside AS ABAP, they can be edited using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

Global temporary tables

[Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) are a further category of table. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

Note

The ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) makes it possible to transform database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](javascript:call_link\('abenddicddl_define_table_props.htm'\)).