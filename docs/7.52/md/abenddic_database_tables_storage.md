  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Storage Type of Database Tables

The storage type only applies if the current database is an [SAP HANA](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") database. The specified storage type is ignored by other database systems. In this case, the platform-specific storage type is used. The following settings can be defined for the SAP HANA database:

-   Column store

This setting should be used in following cases:

-   The database table is designed for application data analyzed in [SAP HANA](javascript:call_link\('abenhana_glosry.htm'\) "Glossary Entry").

-   The database table contains a very large number of rows and the storage type column store provides better compression.

-   The database table has a [full text index](javascript:call_link\('abenfull_text_index_glosry.htm'\) "Glossary Entry").

-   The database table contains table fields with HANA data types that are supported only by the storage type column store.

-   Row store

This setting should only be used in SAP HANA databases if the database table is used mainly for frequent single row accesses. This is the only possible setting for [global temporary tables (GTTs)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).

-   Undefined

-   This setting cannot be used for [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry"). Column store or row store must be specified for these tables instead.

-   This is the only setting possible for [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") Pooled tables and cluster tables are not defined as database tables on the database, which means there is no point in specifying a fixed storage type. The fixed storage type is set when pooled tables and cluster tables are [transformed](javascript:call_link\('abenddic_database_tables_poclutr.htm'\)) to transparent tables. Column store is usually the recommended type here.

Note

For more information about the differences between row store and column store on the SAP HANA database, see the [SAP HANA Platform](https://help.sap.com/viewer/de2486ee947e43e684d39702027f8a94/2.0.00/en-us) documentation.