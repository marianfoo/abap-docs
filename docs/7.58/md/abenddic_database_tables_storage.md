  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Storage%20Type%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_STORAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

DDIC - Storage Type of Database Tables

The storage type has an effect only if the current database is an [SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") database. The specified storage type is ignored by other database systems and the platform-dependent storage type is used instead. The following settings can be defined for the SAP HANA database:

-   Column store
    
    This setting should be used in the following cases:
    
    -   The DDIC database table is designed for application data analyzed in [SAP HANA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_hana_glosry.htm "Glossary Entry").
    -   The DDIC database table contains a very large number of rows since the storage type Column Store provides better compression.
    -   The DDIC database table has a [full text index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfull_text_index_glosry.htm "Glossary Entry").
    -   The DDIC database table contains table fields with HANA data types that are supported only by the storage type column store.
-   Row store
    
    This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. For [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm), it is the only possible setting.
    

Hint

For more information about the differences between row store and column store on the SAP HANA database, see the SAP HANA documentation.