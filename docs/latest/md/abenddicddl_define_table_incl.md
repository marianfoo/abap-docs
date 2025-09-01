  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Dictionary DDL for Defining Database Tables](javascript:call_link\('abenddic_define_table.htm'\)) →  [DDIC DDL - DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20TABLE%2C%20include%2C%20ABENDDICDDL_DEFINE_TABLE_INCL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC DDL - DEFINE TABLE, include

Syntax

*\[*KEY*\]* *\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]* *\[*NOT NULL*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a DDIC database table with the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The same applies as to [including](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) include structures into structures with the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions KEY and NOT NULL can be used:

-   By using KEY all fields of the included structure are flagged as [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)). The include structure must then be inserted between the existing key fields or directly after them. The key attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using NOT NULL the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)) is set for the included structure. When used, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.