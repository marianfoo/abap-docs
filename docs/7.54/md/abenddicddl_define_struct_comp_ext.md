---
title: "DEFINE STRUCTURE - extend"
description: |
  Syntax ... foreign_key_annos(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_fkprps.htm) EXTEND component : value_help(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm) foreign_key ..
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm"
abapFile: "abenddicddl_define_struct_comp_ext.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "struct", "comp", "ext"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_types.htm) →  [Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) →  [Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_define_structure.htm) →  [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm) →  [DEFINE STRUCTURE - include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm) → 

DEFINE STRUCTURE - extend

Syntax

... *\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_fkprps.htm)*\]*
    EXTEND component : *\[*[value\_help](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm)*\]* *\[*foreign\_key*\]* ...

Effect

Defines component properties when [including](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm) include structures using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_include_structure.htm) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table_fkprps.htm) - Properties of a foreign key relationship

-   [value\_help](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_valuhelp.htm) - Assignment to a search help.

-   foreign\_key - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Note

The addition EXTEND can be used for individual components and with the same meaning in the definition of a database table with [DEFINE TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_table.htm) or an append structure with [EXTEND TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm).

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