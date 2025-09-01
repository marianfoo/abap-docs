  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE STRUCTURE, value_help, ABENDDICDDL_DEFINE_STRUCT_VALUHELP, 757%0D%0
A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE STRUCTURE, value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") to a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, value\_help is an existing search help in the ABAP Dictionary. All parameters of the search help must be linked with structure components after WHERE.

Hint

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