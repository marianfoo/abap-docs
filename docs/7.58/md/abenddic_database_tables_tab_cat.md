  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Category%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_TAB_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

DDIC - Table Category of Database Tables

-   [Transparent Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_1)
-   [Global Temporary Tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_CAT_2)

Transparent Tables   

The default table category is the transparent table. In transparent tables, the database object has the same name and the same columns as the definition in ABAP Dictionary. The fields of transparent tables can be processed not only using [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"), but also using [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry"). Outside AS ABAP, they can be processed using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_access_recomm.htm).

Global Temporary Tables   

[Global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm) are another category of tables. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Hint

The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) of the ABAP Workbench makes it possible to transform DDIC database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_props.htm).