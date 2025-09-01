  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

database procedure interface

Global non-modifiable [interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenintf_gen_glosry.htm "Glossary Entry") of the [class library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_library_glosry.htm "Glossary Entry") that is generated for each [database procedure proxy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry"). For each interface parameter of the represented [SQLScript procedure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_script_procedure_glosry.htm "Glossary Entry"), a database procedure interface contains the declaration of an [ABAP data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_type_glosry.htm "Glossary Entry"), as defined in the mapping of the database procedure proxy. Programs that use [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm) to call the SQLScript procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.