  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Native%20SQL%20interface%2C%20ABENNATIVE_SQL_INTERFACE_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Native SQL interface

Part of the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry") responsible for [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") statements. The Native SQL interface handles the statements made from the [ADBC framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadbc_glosry.htm "Glossary Entry") and all Native SQL statements embedded statically between [EXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendexec.htm). Vendor-specific [SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_glosry.htm "Glossary Entry") statements are passed unchanged to the [database system](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_system_glosry.htm "Glossary Entry") of the current [database connection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). SAP-specific static Native SQL statements are processed in the Native SQL interface before being passed. To enable this, the Native SQL interface contains platform-dependent parts (referred to as client libraries), which also perform conversion between ABAP types and database types.