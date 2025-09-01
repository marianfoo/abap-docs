  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20database%20procedure%20interface%2C%20ABENDATABASE_PROC_INTF_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

database procedure interface

Global non-modifiable [interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenintf_gen_glosry.htm "Glossary Entry") of the [class library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_library_glosry.htm "Glossary Entry") that is generated for each [database procedure proxy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry"). For each interface parameter of the represented [SQLScript procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_procedure_glosry.htm "Glossary Entry"), a database procedure interface contains the declaration of an [ABAP data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry"), as defined in the mapping of the database procedure proxy. Programs that use [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm) to call the SQLScript procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.