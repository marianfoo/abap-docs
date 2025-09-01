---
title: "standard_db_connection_glosry"
description: |
  standard_db_connection_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm"
abapFile: "abenstandard_db_connection_glosry.htm"
keywords: ["do", "try", "data", "abenstandard", "connection", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

standard connection

[Database connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm "Glossary Entry") between an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") and its [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry"). A standard connection is always opened for each [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry") of an AS ABAP. The [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_user_glosry.htm "Glossary Entry") is assigned to the [database user](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the standard connection. By default, reads in [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"), [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry"), and [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry") are performed on this [database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm "Glossary Entry") using this standard connection.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_connections.htm)