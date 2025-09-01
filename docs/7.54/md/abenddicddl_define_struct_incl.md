  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DEFINE STRUCTURE - include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing structure from ABAP Dictionary, including database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).

-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).

-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Note

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) in cases where the include structure is suitable for database tables.

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
[DEFINE STRUCTURE - extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))