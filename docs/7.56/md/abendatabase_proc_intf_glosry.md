  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

database procedure interface

Global non-modifiable [interface](javascript:call_link\('abenintf_gen_glosry.htm'\) "Glossary Entry") of the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") that is generated for each [database procedure proxy](javascript:call_link\('abendatabase_proc_proxy_glosry.htm'\) "Glossary Entry"). For each interface parameter of the represented [SQLScript procedure](javascript:call_link\('abensql_script_procedure_glosry.htm'\) "Glossary Entry"), a database procedure interface contains the declaration of an [ABAP data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry"), as defined in the mapping of the database procedure proxy. Programs that use [CALL DATABASE PROCEDURE](javascript:call_link\('abapcall_database_procedure.htm'\)) to call the SQLScript procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.