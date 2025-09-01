---
title: "Syntax"
description: |
  ...  WITH VALUE HELP value_help WHERE parameter1 = structure.component1 AND parameter2 = structure.component2 ... ... Effect Assigns a search help(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensearch_help_glosry.htm 'Glossary Entry') to a structure component(https://hel
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_valuhelp.htm"
abapFile: "abenddicddl_define_struct_valuhelp.htm"
keywords: ["do", "try", "data", "types", "abenddicddl", "define", "struct", "valuhelp"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comps.htm) → 

DDIC DDL - DEFINE STRUCTURE, value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensearch_help_glosry.htm "Glossary Entry") to a [structure component](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comps.htm) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, value\_help is an existing search help in the ABAP Dictionary. All parameters of the search help must be linked with structure components after WHERE.

Hint

The addition WITH VALUE HELP can be used, with the same meaning, in the definition of a database using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_table.htm).

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