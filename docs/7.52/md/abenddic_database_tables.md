  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) → 

Database Tables

In ABAP Dictionary, the term "database table" (or table for short) is the database-independent definition of a database table.

-   A database table is a two-dimensional matrix which consists of rows and columns (fields).

-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). This is a minimal attribute: if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.

-   A [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") must exist for every table.

-   In the [relational model](javascript:call_link\('abenrelational_data_model_glosry.htm'\) "Glossary Entry"), the relationship between objects is expressed in terms of a [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

In [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), only those database tables can be accessed that are defined in ABAP Dictionary.

The name of a database table in ABAP Dictionary can have a maximum of 16 characters, can consist of letters, numbers, and underscores, must start with a letter, and can be prefixed by a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry") (/.../) from a [prefix namespace](javascript:call_link\('abenprefix_name_space_glosry.htm'\) "Glossary Entry"). The name is located in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and in the namespace of the global [object types](javascript:call_link\('abenobject_type_glosry.htm'\) "Glossary Entry") in the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

The definition of a database table consists of the following:

-   A flat, non-nested [structure](javascript:call_link\('abenddic_structures.htm'\)) in ABAP Dictionary with its [technical](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) and [semantic](javascript:call_link\('abenddic_database_tables_semastruc.htm'\)) attributes

-   Additional [technical attributes](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) of the database table

-   Additional [semantic attributes](javascript:call_link\('abenddic_database_tables_sema.htm'\)) of the database table

The most common [table category](javascript:call_link\('abenddic_database_tables_tab_type.htm'\)) of database table is the [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). When the table is activated, the platform-specific SQL DDL statement CREATE TABLE is used to generate a physical database table with all [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) from its definition in ABAP Dictionary (if this is not excluded explicitly in the definition). This is done in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") in the [standard AS ABAP database](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). The [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary used to define the components of the structure are implemented as database-specific types. The definition of a table in the database can be displayed in ABAP Dictionary by choosing Utilities → Database Object. Alongside regular transparent tables, the following categories also exist:

-   Special [global temporary tables (GTTs)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") for saving temporary data within a work step

-   [Pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") that are grouped in other tables and do not exist as individual variants of database tables on the database

The order of the fields in ABAP Dictionary and on the database does not need to match. More specifically, the order of the table fields (with the exception of key fields) of existing database tables in the dictionary can be modified without modifying the database object. When using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), this is handled appropriately in the database interface and the order in ABAP Dictionary always applies. When using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), the order of the columns in the database system must be applied explicitly. If [AMDP](javascript:call_link\('abenamdp.htm'\)) is used, the results are placed in the same order as in ABAP Dictionary (if possible).

-   [Technical attributes of database tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))

-   [Semantic attributes of database tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))

-   [Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))

-   [Pooled tables and cluster tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\))

-   [Updating database tables](javascript:call_link\('abenddic_database_tables_conv.htm'\))

Notes

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)) and [append structures](javascript:call_link\('abenddic_append_structures.htm'\)) are available for making enhancements to database tables in ABAP Dictionary delivered by SAP without making modifications.

-   Suitable [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be defined as [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) for [transparent](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") database tables. In this case, reads in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") access the replacement objects rather than the database tables.

-   Database tables are edited using a [source code-based editor](javascript:call_link\('abenddic_tools.htm'\)) in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). Here, the structures can be created or edited using a syntax based on the [DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry").

-   Database tables managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Continue
[Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))
[Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))
[Global Temporary Tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))
[Pooled Tables and Cluster Tables](javascript:call_link\('abenddic_database_tables_poolclu.htm'\))
[Converting Database Tables](javascript:call_link\('abenddic_database_tables_conv.htm'\))