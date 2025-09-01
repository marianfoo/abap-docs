  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

Native SQL interface

Part of the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") responsible for [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements. The Native SQL interface handles the statements made from the [ADBC framework](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") and all Native SQL statements embedded statically between [EXEC](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)). Vendor-specific [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements are passed unchanged to the [database system](javascript:call_link\('abendatabase_system_glosry.htm'\) "Glossary Entry") of the current [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). SAP-specific static Native SQL statements are processed in the Native SQL interface before being passed. To enable this, the Native SQL interface contains platform-dependent parts (referred to as client libraries), which also perform conversion between ABAP types and database types.