---
title: "database_luw_glosry"
description: |
  database_luw_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_luw_glosry.htm"
abapFile: "abendatabase_luw_glosry.htm"
keywords: ["do", "if", "try", "data", "abendatabase", "luw", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

database LUW

Also referred to as database transaction. Indivisible sequence of database operations concluded by a [database commit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The database LUW is either executed completely or not at all by the [database system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_system_glosry.htm "Glossary Entry"). If an error is detected within a database LUW, all database changes made since the start of the database LUW can be canceled using a [database rollback](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_transaction.htm)