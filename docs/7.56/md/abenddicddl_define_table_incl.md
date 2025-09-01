---
title: "DDIC DDL - DEFINE TABLE, include"
description: |
  Syntax KEY group : INCLUDE struct WITH SUFFIX suffix NOT NULL ... extend(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comp_ext.htm) ...; Effect Includes an include structure(https://help.sap.com/doc/abapdocu_756_inde
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_table_incl.htm"
abapFile: "abenddicddl_define_table_incl.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "abenddicddl", "define", "table", "incl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_define_table.htm) →  [DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_table.htm) → 

DDIC DDL - DEFINE TABLE, include

Syntax

*\[*KEY*\]* *\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]* *\[*NOT NULL*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_include_structure.htm) in the definition of a DDIC database table with the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_table.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The same applies as to [including](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_struct_incl.htm) include structures into structures with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddicddl_define_structure.htm), except that the include structures must be suitable for DDIC database tables.

Additionally, the additions KEY and NOT NULL can be used:

-   By using KEY all fields of the included structure are flagged as [key fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_key.htm). The include structure must then be inserted between the existing key fields or directly after them. The corresponding attribute of the individual fields of an included structure does not have an effect. Either all fields are included as key fields or none.
-   By using NOT NULL the [flag for initial values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_init.htm) is set for the included structure. In this case, those fields in the include structure for which this attribute is set also keep their attribute, but it is not switched on for fields where the attribute is not set. If the flag for initial values is not set for the included include structure, this attribute is removed for all fields.