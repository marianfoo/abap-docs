  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE TABLE, include, ABENDDICDDL_DEFINE_TABLE_INCL, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE TABLE, include

Syntax

*\[*KEY*\]* *\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]* *\[*NOT NULL*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm) in the definition of a DDIC database table with the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The same applies as to [including](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_incl.htm) include structures into structures with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions KEY and NOT NULL can be used:

-   By using KEY all fields of the included structure are flagged as [key fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted between the existing key fields or directly after them. The corresponding attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using NOT NULL the [flag for initial values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_init.htm) is set for the included structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.