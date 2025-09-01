---
title: "DDIC - Structure-Specific Semantic Properties of Database Tables"
description: |
  The following semantic properties are the same as those of a DDIC structure(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_sema.htm) in the ABAP Dictionary: -   Short text -   Documentation -   Short text of table fields -   Output style of table fields -   Referenc
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_semastruc.htm"
abapFile: "abenddic_database_tables_semastruc.htm"
keywords: ["delete", "do", "if", "try", "data", "types", "abenddic", "database", "tables", "semastruc"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_sema.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Structure-Specific Semantic Properties of Database Tables, ABENDDIC_DATABASE_T
ABLES_SEMASTRUC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Structure-Specific Semantic Properties of Database Tables

The following semantic properties are the same as those of a [DDIC structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_structures_sema.htm) in the ABAP Dictionary:

-   Short text
-   Documentation
-   Short text of table fields
-   Output style of table fields
-   Reference field for components of the [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) CURR and QUAN. If a field in a DDIC database table is used as a reference field in a different table, the field cannot be deleted.
-   Search help

Hints

-   The semantic properties should apply mainly to the DDIC database table described. Due to the principle of [separation of concerns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenseperation_concerns_guidl.htm "Guideline") the description of a table field must not necessarily be suitable for displaying a help text of an application that is processing the table.
-   Like regular structure components, [search helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensearch_help_glosry.htm "Glossary Entry") can be assigned to table fields or the whole table. If the [separation of concerns](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenseperation_concerns_guidl.htm "Guideline") specifies that table fields are not to be used directly for input fields on dynpros or Web Dynpros, it is not recommended that search helps are assigned.