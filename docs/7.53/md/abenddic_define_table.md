  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, the source code of a database table is not saved and transported. Instead, the source code of an existing database table is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

Note

All properties of a database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](javascript:call_link\('abenddic_database_tables_techspec.htm'\)), which are activated and transported separately from the database table, and [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) cannot be defined using the Dictionary DDL. They must be edited using transaction SE11 as before.

Continue
[DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))