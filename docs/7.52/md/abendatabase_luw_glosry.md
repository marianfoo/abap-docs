---
title: "database_luw_glosry"
description: |
  database_luw_glosry - ABAP 7.52 language reference documentation
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm"
abapFile: "abendatabase_luw_glosry.htm"
keywords: ["do", "if", "try", "data", "abendatabase", "luw", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

database LUW

Also called database transaction. Non-divisible sequence of database operations concluded by a [database commit](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). The database LUW is either executed completely or not at all by the [database system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_system_glosry.htm "Glossary Entry"). If an error is detected within a database LUW, it is possible to revoke all database changes since the start of the database LUW using a [database rollback](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_rollback_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_transaction.htm)