---
title: "database_connection_glosry"
description: |
  database_connection_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_connection_glosry.htm"
abapFile: "abendatabase_connection_glosry.htm"
keywords: ["do", "try", "data", "abendatabase", "connection", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

database connection

Connection between an [AS ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") and a [database system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_system_glosry.htm "Glossary Entry"). A database connection defines the address of the database system, the [database user](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_user_glosry.htm "Glossary Entry"), and hence the [database schema](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_schema_glosry.htm "Glossary Entry") associated with this user. By default, the [database interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_interface_glosry.htm "Glossary Entry") uses the [standard connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") of the current [work process](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry") to access the [standard AS ABAP connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_db_glosry.htm "Glossary Entry"). Optionally, database accesses can also be performed on [secondary databases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_glosry.htm "Glossary Entry") using [secondary connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") or on the standard database using [service connections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenservice_connection_glosry.htm "Glossary Entry"). Up to 16 database connections can be opened for a single work process.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_multiconnect.htm)