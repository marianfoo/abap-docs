---
title: "DDIC - Foreign Key Dependencies"
description: |
  A foreign key dependency is a semantic dependency between two DDIC database tables, namely a foreign key table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_table_glosry.htm 'Glossary Entry') and a check table(https://help.sap.com/doc/abapdocu_latest_index_htm/l
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkeyrel.htm"
abapFile: "abenddic_database_tables_forkeyrel.htm"
keywords: ["do", "if", "try", "data", "abenddic", "database", "tables", "forkeyrel"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Key%20Dependencies%2C%20ABENDDIC_DATABASE_TABLES_FORKEYREL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") and a [check table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheck_table_glosry.htm "Glossary Entry").

The definition of a foreign key dependency is done in the foreign key table. By assigning check tables to table fields, the table fields become [foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry").

-   [Check table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_checktab.htm)
-   [Foreign Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)

Foreign key dependencies are evaluated during input checks, for input help on dynpros and in Web Dynpros, when creating [views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm), and in [lock objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlock_object_glosry.htm "Glossary Entry"). In the ABAP programming language or in ABAP SQL, foreign keys are not evaluated.

In a check table, [obsolete data can be flagged as obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_deprecation.htm). This has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_checktab.htm)
[DDIC - Foreign Keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm)
[DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_deprecation.htm)