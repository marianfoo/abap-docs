  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database schema

A database schema groups [database objects](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") in a [database](javascript:call_link\('abendatabase_glosry.htm'\) "Glossary Entry"). Within a database schema, [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") can be used to access the objects in the same schema directly. [Database users](javascript:call_link\('abendatabase_user_glosry.htm'\) "Glossary Entry") access the database schema assigned to their [database user names](javascript:call_link\('abendatabase_user_name_glosry.htm'\) "Glossary Entry") implicitly. Objects in a different schema can be accessed only by specifying the schema name in question. The rights of a database user to access a database schema are organized using individual authorizations. The objects of a database and the implementations of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") managed by [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") are in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") assigned to the database user name in an read using the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry").