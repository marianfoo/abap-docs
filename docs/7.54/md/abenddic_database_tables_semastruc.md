---
title: "Structure-Specific Semantic Attributes of Database Tables"
description: |
  The following semantic attributes are the same as those of a structure(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_sema.htm) in ABAP Dictionary: -   Short text -   Documentation -   Short text of table fields -   Output style of table fields -   Reference field f
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_semastruc.htm"
abapFile: "abenddic_database_tables_semastruc.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "types", "abenddic", "database", "tables", "semastruc"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_sema.htm) → 

Structure-Specific Semantic Attributes of Database Tables

The following semantic attributes are the same as those of a [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_sema.htm) in ABAP Dictionary:

-   Short text

-   Documentation

-   Short text of table fields

-   Output style of table fields

-   Reference field for components of the [built-in data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) CURR and QUAN. If a field in a database table is used as a reference field in a different table, the field cannot be deleted.

-   Search help

Notes

-   The semantic attributes apply mainly to the database table in question. The [separation of concerns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenseperation_concerns_guidl.htm "Guideline") principle dictates that the way a table field is written must not necessarily be suitable for displaying a help text of an application that edits the table.

-   Like regular structure components, [search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry") can be assigned to table fields or the whole table. If the [separation of concerns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenseperation_concerns_guidl.htm "Guideline") dictates that table fields are not to be used directly for input fields on dynpros or Web Dynpros, it is not recommended that search helps are assigned.