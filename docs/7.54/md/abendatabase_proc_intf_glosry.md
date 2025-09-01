  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database procedure interface

Global non-modifiable [interface](javascript:call_link\('abeninterface_glosry.htm'\) "Glossary Entry") from the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") that is generated for every [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry"). For each interface parameter of the represented [SQL Script procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry"), a database procedure interface contains the declaration of an [ABAP data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"), as defined in the mapping of the database procedure proxy. Programs that use [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) to call the SQL Script procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.