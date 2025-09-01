  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) → 

Database Tables

In ABAP Dictionary, the term "database table" (or table for short) is the database-independent definition of a database table.

-   A database table is a two-dimensional matrix which consists of rows and columns (fields).

-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_key_glosry.htm "Glossary Entry"). This is a minimal attribute: if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.

-   A [primary key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprimary_key_glosry.htm "Glossary Entry") must exist for every table.

-   In the [relational model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrelational_data_model_glosry.htm "Glossary Entry"), the relationship between objects is expressed in terms of a [foreign key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry").

In [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), only those database tables can be accessed that are defined in ABAP Dictionary.

The name of a database table in ABAP Dictionary can have a maximum of 16 characters, can consist of letters, numbers, and underscores, must start with a letter, and can be prefixed by a [namespace prefix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) from a [prefix namespace](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprefix_name_space_glosry.htm "Glossary Entry"). It is located in the namespace of the [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_types.htm) in ABAP Dictionary and in the namespace of the global [object types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_type_glosry.htm "Glossary Entry") in the [class library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_library_glosry.htm "Glossary Entry").

The definition of a database table consists of the following:

-   A flat, non-nested [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) in ABAP Dictionary with its [technical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techstruc.htm) and [semantic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_semastruc.htm) attributes

-   Additional [technical attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techspec.htm) of the database table

-   Additional [semantic attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_sema.htm) of the database table

The most common [table category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_tab_type.htm) of database table is the [transparent table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry"). When the table is activated, the platform-specific SQL DDL statement CREATE TABLE is used to generate a physical database table with all [indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_index.htm) from its definition in ABAP Dictionary (if this is not excluded explicitly in the definition). This is done in the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") in the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The [built-in types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary used to define the components of the structure are implemented as database-specific types. The definition of a table in the database can be displayed in ABAP Dictionary by choosing Utilities → Database Object. As well as normal transparent tables, there are also special [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") for saving temporary data within a work step.

The order of the fields in ABAP Dictionary and on the database does not need to match. More specifically, the order of the table fields (with the exception of key fields) of existing database tables in the dictionary can be modified without modifying the database object. When using [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this is handled accordingly in the database interface and the order in ABAP Dictionary always applies. When using [Native SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennative_sql_glosry.htm "Glossary Entry"), the order of the columns in the database system must be applied explicitly. If [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm) is used, the results are placed in the same order as in ABAP Dictionary (if possible).

-   [Technical attributes of database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_tech.htm)

-   [Semantic attributes of database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_sema.htm)

-   [Global temporary tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_gtt.htm)

Database tables can be defined as
form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_table.htm)

If existing database tables are modified, conversions may be necessary.

-   [Updating database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_conv.htm)

Notes

-   [Customizing includes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_customizing_includes.htm) and [append structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm) are available for making enhancements to database tables in ABAP Dictionary delivered by SAP without making modifications.

-   Suitable [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") can be defined as [replacement objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_replacement_objects.htm) for [transparent](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry") database tables. In this case, reads in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") access the replacement objects rather than the database tables.

-   Database tables managed by ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_recomm.htm)).

Continue
[Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_tech.htm)
[Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_sema.htm)
[Global Temporary Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_gtt.htm)
[Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_table.htm)
[Converting Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_conv.htm)