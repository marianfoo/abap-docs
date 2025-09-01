---
title: "secondary_db_connection_glosry"
description: |
  secondary_db_connection_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm"
abapFile: "abensecondary_db_connection_glosry.htm"
keywords: ["do", "if", "try", "data", "abensecondary", "connection", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: secondary connection, ABENSECONDARY_DB_CONNECTION_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

secondary connection

Self-defined [database connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_connection_glosry.htm "Glossary Entry") from an [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") to a [secondary database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_glosry.htm "Glossary Entry"). The connection can be to other databases or to other [database schemas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [standard database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The properties of the secondary connections that can be used by a [work process](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendba_cockpit_glosry.htm "Glossary Entry") tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_database_glosry.htm "Glossary Entry") as its standard database to another SAP HANA database. SAP HANA Smart Data Access (SDA) should be used for access to other databases.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_connections.htm)