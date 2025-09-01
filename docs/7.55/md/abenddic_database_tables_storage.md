  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techspec.htm) → 

DDIC - Storage Type of Database Tables

The storage type only applies if the current database is an [SAP HANA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry") database. The specified storage type is ignored by other database systems and the platform-specific storage type is used instead. The following settings can be defined for the SAP HANA database:

-   Column store

This setting should be used in the following cases:

-   The DDIC database table is designed for application data analyzed in [SAP HANA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_glosry.htm "Glossary Entry").

-   The DDIC database table contains a very large number of rows and the storage type column store provides better compression.

-   The DDIC database table has a [full text index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfull_text_index_glosry.htm "Glossary Entry").

-   The DDIC database table contains table fields with HANA data types that are supported only by the storage type column store.

-   Row store

This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. This is the only possible setting for [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm).

Hint

More information about the differences between row store and column store on the SAP HANA database can be found in the SAP HANA documentation.