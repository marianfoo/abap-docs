  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database LUW

Also referred to as database transaction. Indivisible sequence of database operations concluded by a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). The database LUW is either executed completely or not at all by the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry"). If an error is detected within a database LUW, all database changes made since the start of the database LUW can be canceled using a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry").

[→ More about](javascript:call_link\('abendb_transaction.htm'\))