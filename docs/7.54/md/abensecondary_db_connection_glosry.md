  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

secondary connection

Self-defined [database connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_connection_glosry.htm "Glossary Entry") between an [AS ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") and a [secondary database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_glosry.htm "Glossary Entry"). The connection can be a connection a different database or to other [database schemas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_schema_glosry.htm "Glossary Entry") in the [standard database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry"). The properties of the secondary connections used by a [work process](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry") are defined in the database table DBCON. These secondary connections are managed using the [DBA Cockpit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendba_cockpit_glosry.htm "Glossary Entry") tool. The only secondary connections that should be used are those between an AS ABAP with a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") as its standard database and another SAP HANA database. SAP HANA Smart Data Access (SDA) should be used for access to other databases.

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_multiconnect.htm)