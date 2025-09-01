  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20secondary%20connection%2C%20ABENSECONDARY_DB_CONNECTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

secondary connection

User-defined [database connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry") from an [AS ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_abap_glosry.htm "Glossary Entry") to a [secondary database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_db_glosry.htm "Glossary Entry"). The connection can be to other databases or to other [database schemas](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [standard database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The properties of the secondary connections that can be used by a [work process](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_process_glosry.htm "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendba_cockpit_glosry.htm "Glossary Entry") tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") as its standard database to another SAP HANA database. [SAP HANA Smart Data Access (SDA)](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d) should be used for access to other databases.

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_connections.htm)