  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

Native SQL interface

Part of the [database interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_interface_glosry.htm "Glossary Entry") responsible for [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") statements. The Native SQL interface handles the statements triggered from the [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_glosry.htm "Glossary Entry") framework and all Native SQL statements embedded statically between [EXEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapendexec.htm). Vendor-specific [SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_glosry.htm "Glossary Entry") statements are passed, unchanged, to the [database system](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_system_glosry.htm "Glossary Entry") of the current [database connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). SAP-specific static Native SQL statements are edited in the Native SQL interface before being passed. To enable this, the Native SQL interface contains platform-dependent parts (known as client libraries), which also perform conversion between ABAP types and database types.