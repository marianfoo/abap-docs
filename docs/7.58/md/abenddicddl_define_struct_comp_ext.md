  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20extend%2C%20ABENDDICDDL_DEFINE_STRUCT_COMP_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC DDL - DEFINE STRUCTURE, extend

Syntax

... *\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_fkprps.htm)*\]*
    EXTEND component : *\[* [value\_help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_valuhelp.htm)*\]* *\[* [foreign\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_forkey.htm)*\]* ...

Effect

Defines component properties when [including](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_incl.htm) include structures using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_include_structure.htm) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_fkprps.htm) - Properties of a foreign key relationship
-   [value\_help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_struct_valuhelp.htm) - Assignment to a search help.
-   [foreign\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table_forkey.htm) - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Hint

The addition EXTEND can be used with the same meaning in the definition of a DDIC database table with [DEFINE TABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_define_table.htm) or an append structure with [EXTEND TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddicddl_extend_type.htm).

Example

Inclusion of a structure include\_struct in a structure struct, where EXTEND is used to assign a search help to the components comp1 and comp2.

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