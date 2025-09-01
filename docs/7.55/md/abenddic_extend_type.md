---
title: "DDIC - Dictionary DDL for Structure Enhancements"
description: |
  In the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm 'Glossary Entry'), a structure or DDIC database table can be given a source-code-based enhancement known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_75
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "try", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm) → 

DDIC - Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"), a structure or DDIC database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_extend_type.htm)