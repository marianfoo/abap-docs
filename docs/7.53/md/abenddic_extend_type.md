---
title: "Dictionary DDL for Structure Enhancements"
description: |
  In the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm 'Glossary Entry'), a structure or database table can be given a source-code-based enhancement known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_753_ind
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "try", "class", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_enhancements.htm) →  [Append Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_append_structures.htm) → 

Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry"), a structure or database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_extend_type.htm)

Note

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[EXTEND TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddicddl_extend_type.htm)