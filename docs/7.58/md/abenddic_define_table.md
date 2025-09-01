  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Defining%20Database%20Tables%2C%20ABENDDIC_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC - Dictionary DDL for Defining Database Tables

A DDIC database table can be displayed and modified in a source-code-based editor in the [ABAP development tools for Eclipse (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

Hint

All properties of a DDIC database table can be defined in ADT using Dictionary DDL or in transaction SE11, with the following exceptions. The [technical properties](javascript:call_link\('abenddic_database_tables_techspec.htm'\)), which are activated and transported separately from the DDIC database table, and [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) can be edited in a form-based tool in ADT.
-   [Extensibility annotations](javascript:call_link\('abenddicddl_define_ext_annos.htm'\)), which are a prerequisite for [C0 release](javascript:call_link\('abenc0_contract_rules_ddic.htm'\)), can be maintained only in ADT.

Continue
[DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))