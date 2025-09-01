  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DEFINE STRUCTURE - component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

DEFINE STRUCTURE - value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") to a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, value\_help is an existing search help in ABAP Dictionary. All parameters of the search help must be associated with structure components after WHERE.

Note

The addition WITH VALUE HELP can be used, with the same meaning, in the definition of a database using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

Example

Defines elementary components with reference to data elements and binds a search help to the second component.

...
define structure struct {
  comp1 : s\_carr\_id;
  comp2 : s\_conn\_id
    with value help demo\_f4\_field
      where carrid = struct.comp1
        and connid = struct.comp2;
  ...
  }