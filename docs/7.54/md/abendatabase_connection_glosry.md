  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database connection

Connection between an [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") and a [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"). A database connection defines the address of the database system, the [database user](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry"), and hence the [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry") associated with this user. By default, the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") uses the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") of the current [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") to access the [standard AS ABAP connection](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). Optionally, database accesses can also be performed on [secondary databases](javascript:call_link\('abensecondary_db_glosry.htm'\) "Glossary Entry") using [secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") or on the standard database using [service connections](javascript:call_link\('abenservice_connection_glosry.htm'\) "Glossary Entry"). Up to 16 database connections can be opened for a single work process.

[→ More](javascript:call_link\('abenopensql_multiconnect.htm'\))