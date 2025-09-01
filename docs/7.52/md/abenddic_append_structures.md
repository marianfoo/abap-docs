---
title: "Append Structures"
description: |
  An append structure is a structure in ABAP Dictionary appended to another structure(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm) or database table(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) and which appends the
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_append_structures.htm"
abapFile: "abenddic_append_structures.htm"
keywords: ["insert", "do", "if", "try", "class", "data", "abenddic", "append", "structures"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_enhancements.htm) → 

Append Structures

An append structure is a structure in ABAP Dictionary appended to another [structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures.htm) or [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables.htm) and which appends their components to them. Append structures can be added to structures and database tables delivered by SAP in customer systems. An append structure is assigned to exactly one table or structure. There can, however, be more than append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following enhancements can be made to a database table or structure using an append structure:

-   Insert new components (if permitted by the [enhancement category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_enh_cat.htm))

-   Define [foreign keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenforeign_key_glosry.htm "Glossary Entry") for existing fields of a database table

-   Bind [search helps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_help_glosry.htm "Glossary Entry") to existing components

All enhancements are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a database table or structure is activated, all associated append structures are found and their components are appended to the database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned database table or structure is adapted to the changes made. Any existing tables are not [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_conv.htm), which can produce different orders of the fields in the dictionary and on the database. When a structure or database table with append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransparent_table_glosry.htm "Glossary Entry").

-   No append structures can be appended to database tables with the type LCHR or LRAW, since these fields must always be the last field of the table.

-   Fields appended to a database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.

-   A binding of a check table or search help that already exists for a field of the database table cannot be modified using the append structure.

The enhancement of SAP structures or SAP tables using append structures in customer systems does not constitute a modification. Append structures created in for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to create the components of append structures of this type with names from the customer namespace too to avoid naming conflicts. After an upgrade, the associated append structures are appended again to tables modified by SAP.

Note

The same structure can be appended to multiple database tables or structures by including it in the individual append structures as an include structure.