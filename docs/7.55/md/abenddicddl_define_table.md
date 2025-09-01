---
title: "DDIC DDL - DEFINE TABLE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_props.htm) table_annos(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_props.htm) DEFINE TABLE dbtab  ... field;(https://help.sap.com/doc/abapdocu_
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table.htm"
abapFile: "abenddicddl_define_table.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenddicddl", "define", "table"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Dictionary DDL for Defining Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_table.htm) → 

DDIC DDL - DEFINE TABLE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_props.htm)
[table\_annos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_props.htm)
DEFINE TABLE dbtab {
  ...
  [field;](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) dbtab in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

-   A DDIC database table is defined using the statement DEFINE TABLE. The restrictions for [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) apply to the name dbtab.

-   In front of the statement DEFINE TABLE,

-   the same mandatory structure properties must be specified as annotations [structure\_annos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_props.htm) as in the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_structure.htm).

-   any mandatory table properties must be specified as annotations [table\_annos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_props.htm). Any other properties are optional.

-   The table fields are defined in a semicolon-separated list in curly brackets { } using one of the following methods:

-   by defining single fields [field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_comps.htm)

-   by including include structures [include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_incl.htm).

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the DDIC database table DEMO\_BLOB\_TABLE in the [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") of the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

@EndUserText.label : 'Table with a BLOB Column'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #LIMITED
define table demo\_blob\_table {
  key name : abap.sstring(255) not null;
  picture  : abap.rawstring(0); }

Continue
[DDIC DDL - DEFINE TABLE, table\_annos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_props.htm)
[DDIC DDL - DEFINE TABLE, field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_comps.htm)
[DDIC DDL - DEFINE TABLE, include](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_table_incl.htm)