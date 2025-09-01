  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DEFINE STRUCTURE - include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) → 

DEFINE STRUCTURE - extend

Syntax

... *\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
    EXTEND component : *\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]* *\[*foreign\_key*\]* ...

Effect

Defines component properties when [including](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) include structures using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) - Properties of a foreign key relationship

-   [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) - Assignment to a search help.

-   foreign\_key - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Note

The addition EXTEND can be used for individual components and with the same meaning in the definition of a database table with [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) or an append structure with [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

Example

Includes a structure include\_struct in a structure struct, where EXTEND is used to assign a search help to the components comp1 and comp2.

...
define structure struct {
  ...
  include include\_struct
    extend comp1 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2
    extend comp2 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2;
  ...
  }