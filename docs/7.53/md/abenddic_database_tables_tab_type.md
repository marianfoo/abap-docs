  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_tech.htm) →  [Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_techspec.htm) → 

Table Category of Database Tables

-   [Transparent tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_TYPE_1)

-   [Global temporary tables](#@@ITOC@@ABENDDIC_DATABASE_TABLES_TAB_TYPE_2)

Transparent tables

The default table category is the transparent table. In transparent tables, the database object has an identically named variant with the same columns as in the definition in ABAP Dictionary. The fields of transparent tables can be edited using [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry") as well as using [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry"). Outside AS ABAP, they can be edited using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_access_recomm.htm).

Global temporary tables

[Global temporary tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_gtt.htm) are a further category of table. A global temporary table (GTT) is a special transparent table used exclusively as a repository of temporary data during a [database LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Note

The ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm) makes it possible to transform database tables from one category to another. To create a different table category as a transparent table, a transparent table must be created first and then transformed into a different table category. In [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"), the table category is defined using the annotation [@AbapCatalog.tableCategory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table_props.htm).