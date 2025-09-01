  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

secondary connection

Self-defined [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry") from an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") to a [secondary database](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry"). The connection can be to other databases or to other [database schemas](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The properties of the secondary connections that can be used by a [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry") tool. The only secondary connections that should be used are those from an AS ABAP with an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as its standard database to another SAP HANA database. SAP HANA Smart Data Access (SDA) should be used for access to other databases.

[→ More about](javascript:call_link\('abenopensql_multiconnect.htm'\))