  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Database Tables, ABENDDIC_DEFINE_TABLE, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Database Tables

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a database table can be displayed and modified using source-code-based methods in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, the source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))

Hint

All properties of a DDIC database table described in the preceding sections can be defined using DEFINE TABLE or in transaction SE11, with the following exceptions. The [technical properties](javascript:call_link\('abenddic_database_tables_techspec.htm'\)), which are activated and transported separately from the DDIC database table, and [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) must be edited using transaction SE11 as before.

Continue
[DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\))