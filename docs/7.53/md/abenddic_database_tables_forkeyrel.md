---
title: "Foreign Key Dependencies"
description: |
  A foreign key dependency is a semantic dependency between two database tables, namely a foreign key table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_table_glosry.htm 'Glossary Entry') and a check table(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abe
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkeyrel.htm"
abapFile: "abenddic_database_tables_forkeyrel.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "database", "tables", "forkeyrel"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) →  [Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_sema.htm) →  [Table-Specific Semantic Attributes of Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_semasspec.htm) → 

Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two database tables, namely a [foreign key table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") and a [check table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_table_glosry.htm "Glossary Entry").

A foreign key dependency is defined in the foreign key table. Check tables are assigned to table fields and these fields become [foreign keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_glosry.htm "Glossary Entry").

-   [Check table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_checktab.htm)

-   [Foreign Key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm)

Among other things, foreign key dependencies are evaluated for input checks, for input help on dynpros and in Web Dynpro, when creating [views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_views.htm), and in [lock objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlock_object_glosry.htm "Glossary Entry"). Foreign keys are not used in the ABAP programming language or in ABAP SQL.

Continue
[Check Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_checktab.htm)
[Foreign Key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_forkey.htm)