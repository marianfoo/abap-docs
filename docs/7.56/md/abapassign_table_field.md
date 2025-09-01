---
title: "ASSIGN, TABLE FIELD"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_shortref.htm) Obsolete Syntax ASSIGN TABLE FIELD (name). Effect This variant of the dynamic specification(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_dobj.htm) of the
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_table_field.htm"
abapFile: "abapassign_table_field.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abapassign", "table", "field"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_assignments.htm) → 

ASSIGN, TABLE FIELD

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_shortref.htm)

Obsolete Syntax

ASSIGN TABLE FIELD (name).

Effect

This variant of the [dynamic specification](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_dobj.htm) of the memory area in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) is only possible outside of classes and without specifying [casting\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_casting.htm) and [range\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_range.htm) explicitly. When executing the statement, the name in the character-like data object name is searched for in the [table work areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm) in the current [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry"). The name in name must be specified in uppercase letters.

Hint

Table work areas are designed to be interfaces to classic dynpros only.