  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Table Category of Database Tables, ABENDDIC_DATABASE_TABLES_TAB_CAT, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Table Category of Database Tables

-   [Transparent Tables](#abenddic-database-tables-tab-cat-1-------global-temporary-tables---@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_2)

Transparent Tables   

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in the ABAP Dictionary. The fields of transparent tables can be processed using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") as well as using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). Outside AS ABAP, they can be processed using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

Global Temporary Tables   

[Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\)) are another category of tables. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

Hint

The ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) of the ABAP Workbench makes it possible to transform DDIC database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](javascript:call_link\('abenddicddl_define_table_props.htm'\)).