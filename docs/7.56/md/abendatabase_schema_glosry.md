  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database schema

A database schema groups [database objects](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") in a [database](javascript:call_link\('abendatabase_glosry.htm'\) "Glossary Entry"). Within a database schema, [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") can be used to access the objects of the same schema directly. [Database users](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") implicitly access the database schema assigned to their [database user names](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry"). Objects in a different schema can be accessed only by specifying their schema name. Access to a database schema by a database user is regulated by individual authorizations. The objects managed by the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") for a database and the implementations of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are located in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") that is assigned the database user name when the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") is accessed.