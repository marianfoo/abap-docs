  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20secondary%20connection%2C%20ABENSECONDARY_DB_CONNECTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

secondary connection

User-defined [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") from an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") to a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). The connection can be to other databases or to other [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The properties of the secondary connections that can be used by a [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as its standard database to another SAP HANA database. [SAP HANA Smart Data Access (SDA)](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/a07c7ff25997460bbcb73099fb59007d) should be used for access to other databases.

[→ More about](javascript:call_link\('abendb_connections.htm'\))