  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE STRUCTURE, include, ABENDDICDDL_DEFINE_STRUCT_INCL, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm) in the definition of a structure with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Any existing DDIC structure, including DDIC database tables or views, can be specified as struct.
-   group can be used to specify an optional name of a [group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm).
-   suffix can be used to specify an optional three-character [suffix](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_include_structure.htm).
-   A blank-separated list of additions, [extend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comp_ext.htm), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_table.htm) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in the ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_struct_comp_ext.htm)