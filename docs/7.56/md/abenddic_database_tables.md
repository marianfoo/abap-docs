  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) → 

DDIC - Database Tables

The term [DDIC database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_db_table_glosry.htm "Glossary Entry") (or database table or table for short) describes a physical database table in the current [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry") in the ABAP Dictionary:

-   A DDIC database table is a two-dimensional matrix that consists of rows and columns.
-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_key_glosry.htm "Glossary Entry"). This is a minimal attribute, that is, if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.
-   A [primary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_key_glosry.htm "Glossary Entry") must exist for every table.
-   In the [relational model](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelational_data_model_glosry.htm "Glossary Entry"), the relationship between objects is expressed by a [foreign key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenforeign_key_glosry.htm "Glossary Entry").

In [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"), only DDIC database tables can be accessed.

The name of a DDIC database table must follow the [naming rules for DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_dbtab_names.htm).

The definition of a DDIC database table consists of the following:

-   A non-nested [DDIC structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) with its [technical](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_techstruc.htm) and [semantic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_semastruc.htm) attributes
-   Additional [technical attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_techspec.htm) of the DDIC database table
-   Additional [semantic attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm) of the DDIC database table

The most common [table category](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_tab_cat.htm) of a DDIC database table is the [transparent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransparent_table_glosry.htm "Glossary Entry"). When the table is activated, the platform-dependent SQL DDL statement CREATE TABLE is used to generate a physical database table with all [indexes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_index.htm) from its definition in the ABAP Dictionary for those indexes for which this is not excluded explicitly in the definition. This is done in the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") in the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The [built-in types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary used to define the components of the structure are implemented as database-dependent types. The definition of a table in the database can be displayed in transaction SE11 by choosing Utilities → Database Object. In addition to regular transparent tables, there are also special [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") for storing temporary data within a work step.

The order of the fields in the ABAP Dictionary and on the database does not need to match. More specifically, the order of the table fields, except for key fields, of existing DDIC database tables in the dictionary can be modified without affecting the database object. When using [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"), this is handled accordingly in the database interface and the order in the ABAP Dictionary always applies. When using [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry"), the order of the columns in the database system must be applied explicitly. If [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp.htm) is used, the results are sorted in the same order as in the ABAP Dictionary (if possible).

-   [Technical attributes of database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_tech.htm)
-   [Semantic attributes of database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm)
-   [Global temporary tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_gtt.htm)

DDIC database tables can be defined with form-based tools in transaction SE11 or with source-code-based editors using [Dictionary DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_table.htm)

If existing DDIC database tables are modified, adjustments may be necessary.

-   [Adjusting database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_adj.htm)

Hints

-   [Customizing includes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_customizing_includes.htm) and [append structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_append_structures.htm) can be used to enhance DDIC database tables in the ABAP Dictionary delivered by SAP without making modifications.
-   Suitable [CDS views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") can be defined as [replacement objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_replacement_objects.htm) for [transparent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransparent_table_glosry.htm "Glossary Entry") DDIC database tables. In this case, reads in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") access the replacement objects rather than the DDIC database tables.
-   If existing dictionary objects used to define DDIC database tables are changed, it may be necessary to [adjust](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_adj.htm) these tables on the database. This can be very time-consuming for tables with a large number of rows. Furthermore, [foreign keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenforeign_key_glosry.htm "Glossary Entry") in the converted tables can become inconsistent. A where-used list should be created before dictionary objects such as data elements or domains are changed.
-   DDIC database tables managed by the ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_recomm.htm)).

Continue
[DDIC - Naming Rules for Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_dbtab_names.htm)
[DDIC - Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_tech.htm)
[DDIC - Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_sema.htm)
[DDIC - Global Temporary Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_gtt.htm)
[DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_table.htm)
[DDIC - Adjusting Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_adj.htm)