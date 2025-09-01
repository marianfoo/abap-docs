  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

secondary connection

Self-defined [database connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm "Glossary Entry") from an [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") to a [secondary database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_glosry.htm "Glossary Entry"). The connection can be to other databases or to other [database schemas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [standard database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The properties of the secondary connections that can be used by a [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendba_cockpit_glosry.htm "Glossary Entry") tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") as its standard database to another SAP HANA database. SAP HANA Smart Data Access (SDA) should be used for access to other databases.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_connections.htm)