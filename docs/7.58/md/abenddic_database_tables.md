  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Database Tables

The term [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") (or database table or table for short) describes a physical database table in the current [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") in the ABAP Dictionary:

-   A DDIC database table is a two-dimensional matrix that consists of rows and columns.
-   A field or combination of fields that uniquely identifies every row in a table is known as a [table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"). This is a minimal property, that is, if one of the fields is removed from the key, the remaining fields cannot uniquely identify the table rows.
-   A [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") must exist for every table.
-   In the [relational model](javascript:call_link\('abenrelational_data_model_glosry.htm'\) "Glossary Entry"), the relationship between objects is expressed by a [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only database tables can be accessed that are defined in ABAP Dictionary.

The name of a DDIC database table must follow the [naming rules for DDIC database tables](javascript:call_link\('abenddic_dbtab_names.htm'\)).

The definition of a DDIC database table consists of the following:

-   A non-nested [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) with its [technical](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) and [semantic](javascript:call_link\('abenddic_database_tables_semastruc.htm'\)) properties.
-   Additional [technical properties](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) of the DDIC database table.
-   Additional [semantic properties](javascript:call_link\('abenddic_database_tables_sema.htm'\)) of the DDIC database table.

The most common [table category](javascript:call_link\('abenddic_database_tables_tab_cat.htm'\)) of a DDIC database table is the [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). When the table is activated, the platform-dependent SQL DDL statement CREATE TABLE is used to generate a physical database table with all [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) from its definition in the ABAP Dictionary for those indexes for which this is not excluded explicitly in the definition. This is done in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") in the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The [built-in DDIC types](javascript:call_link\('abenddic_builtin_types.htm'\)) used to define the components of the structure are implemented as database-dependent types. The definition of a table in the database can be displayed in transaction SE11 by choosing Utilities → Database Object. Besides transparent tables, there are also [global temporary tables (GTTs)](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") for storing temporary data within a work step.

The order of the fields in the ABAP Dictionary and on the database does not need to match. Therefore, the order of the table fields, except for key fields, of existing DDIC database tables can be modified without affecting the corresponding database object. When accessing a DDIC database table using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), the database interface considers potential differences and respects the order defined in ABAP Dictionary. When using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), the order of the columns in the database system must be considered by the developer. If [AMDP](javascript:call_link\('abenamdp.htm'\)) is used, the results are sorted in the same order as in the ABAP Dictionary (if possible).

-   [Technical properties of database tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))
-   [Semantic properties of database tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))
-   [Global temporary tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))

DDIC database tables can be defined with form-based tools in transaction SE11 or with source-code-based editors using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP development tools for Eclipse](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section describes the syntax of the source-code-based definition:

-   [Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\))

If existing DDIC database tables are modified, adjustments may be necessary.

-   [Adjusting database tables](javascript:call_link\('abenddic_database_tables_adj.htm'\))

Hints

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\)) and [append structures](javascript:call_link\('abenddic_append_structures.htm'\)) can be used to extend DDIC database tables delivered by SAP without modifying the original object.
-   DDIC database tables can be released for developer extensibility under the [C0 release contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). This is described in section [C0 Contract Rules for DDIC Objects](javascript:call_link\('abenc0_contract_rules_ddic.htm'\)).
-   If existing ABAP Dictionary objects in the definition of DDIC database tables are changed, it may be necessary to [adjust](javascript:call_link\('abenddic_database_tables_adj.htm'\)) these tables on the database. This can be very time-consuming for tables with a large number of rows. Furthermore, [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") in the converted tables can become inconsistent. A where-used list should be created before ABAP Dictionary objects such as data elements or domains are changed.
-   Suitable [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can be defined as [replacement objects](javascript:call_link\('abenddic_replacement_objects.htm'\)) for [transparent](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") DDIC database tables. In this case, reads in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") access the replacement objects instead of the original DDIC database table.
-   DDIC database tables managed by the ABAP Dictionary should not be accessed directly in the database (see [Access to ABAP-Managed Database Objects](javascript:call_link\('abendatabase_access_recomm.htm'\))).

Continue
[DDIC - Naming Rules for Database Tables](javascript:call_link\('abenddic_dbtab_names.htm'\))
[DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\))
[DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\))
[DDIC - Global Temporary Tables](javascript:call_link\('abenddic_database_tables_gtt.htm'\))
[DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\))
[DDIC - Adjusting Database Tables](javascript:call_link\('abenddic_database_tables_adj.htm'\))