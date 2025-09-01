  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20include%2C%20ABENDDICDDL_DEFINE_STRUCT_INCL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure with the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing DDIC structure, DDIC database table, or DDIC view can be specified as struct.
-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).
-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).
-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))