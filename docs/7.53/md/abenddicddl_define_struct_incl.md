  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_types.htm) →  [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures.htm) →  [Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_define_structure.htm) →  [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_structure.htm) → 

DEFINE STRUCTURE - include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm) in the definition of a structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Any existing structure from ABAP Dictionary, including database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm).

-   suffix can be used to specify an optional three-character [suffix](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_include_structure.htm).

-   A blank-separated list of additions, [extend](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_struct_comp_ext.htm), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Note

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_table.htm) in cases where the include structure is suitable for database tables.

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
[DEFINE STRUCTURE - extend](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_define_struct_comp_ext.htm)