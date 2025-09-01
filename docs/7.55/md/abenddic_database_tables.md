  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Database Tables

In ABAP Dictionary, the term DDIC database table (or database table or table for short) denotes the definition of a physical database table in the current [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"):

-   A DDIC database table is a two-dimensional matrix which consists of rows and columns.

-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). This is a minimal attribute: if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.

-   A [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") must exist for every table.

-   In the [relational model](javascript:call_link\('abenrelational_data_model_glosry.htm'\) "Glossary Entry"), the relationship between objects is expressed in terms of a [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only DDIC database tables can be accessed.

The name of a DDIC database table must follow the [naming rules for DDIC database tables](javascript:call_link\('abenddic_dbtab_names.htm'\)).

The definition of a DDIC database table consists of the following:

-   A non-nested [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) with its [technical](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) and [semantic](javascript:call_link\('abenddic_database_tables_semastruc.htm'\)) attributes

-   Additional [technical attributes](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) of the DDIC database table

-   Additional [semantic attributes](javascript:call_link\('abenddic_database_tables_sema.htm'\)) of the DDIC database table

The most common [table category](javascript:call_link\('abenddic_database_tables_tab_type.htm'\)) of a DDIC database table is the [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). When the table is activated, the platform-specific SQL DDL statement CREATE TABLE is used to generate a physical database table with all [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) from its definition in ABAP Dictionary if this is not excluded explicitly in the definition. This is done in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") in the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary used to define the components of the structure are implemented as database-specific types. The definition of a table in the database can be displayed in transaction SE11 by choosing Utilities → Database Object. As well as normal transparent tables, there are also special [global temporary tables (GTTs)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") for saving temporary data within a work step.

The order of the fields in ABAP Dictionary and on the database does not need to match. More specifically, the order of the table fields (with the exception of key fields) of existing DDIC database tables in the dictionary can be modified without modifying the database object. When using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), this is handled accordingly in the database interface and the order in ABAP Dictionary always applies. When using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), the order of the columns in the database system must be applied explicitly. If [AMDP](javascript:call_link\('abenamdp.htm'\)) is used, the results are placed in the same order as in ABAP Dictionary (if possible).

-   [Technical attributes of database tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))

-   [Semantic attributes of database tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))

-   [Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))

DDIC database tables can be defined with form-based tools in transaction SE11 or with source-code-based editors using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\))

If existing DDIC database tables are modified, adjustements may be necessary.

-   [Adjusting database tables](javascript:call_link\('abenddic_database_tables_adj.htm'\))

Hints

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)) and [append structures](javascript:call_link\('abenddic_append_structures.htm'\)) are available for making enhancements to DDIC database tables in ABAP Dictionary delivered by SAP without making modifications.

-   Suitable [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be defined as [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) for [transparent](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") DDIC database tables. In this case, reads in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") access the replacement objects rather than the DDIC database tables.

-   If existing dictionary objects used to define DDIC database tables are changed, it may be necessary to [adjust](javascript:call_link\('abenddic_database_tables_adj.htm'\)) these tables. This can be a very lengthy process for tables with a large number of rows. Furthermore, [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") in the converted tables can become inconsistent. A where-used list should be created before dictionary objects such as data elements or domains are changed.

-   DDIC database tables managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Continue
[DDIC - Naming Rules for Database Tables](javascript:call_link\('abenddic_dbtab_names.htm'\))
[DDIC - Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))
[DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))
[DDIC - Global Temporary Tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))
[DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\))
[DDIC - Adjusting Database Tables](javascript:call_link\('abenddic_database_tables_adj.htm'\))