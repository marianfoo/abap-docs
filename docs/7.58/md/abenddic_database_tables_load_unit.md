---
title: "DDIC - Load Unit of Database Tables"
description: |
  The load unit of a table specifies how the data of the table is loaded into the main memory of the SAP HANA database. The SAP HANA database offers the following settings: -   Column Loadable The complete table is considered as in-memory. The table data is loaded upon system start in a column-oriente
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_load_unit.htm"
abapFile: "abenddic_database_tables_load_unit.htm"
keywords: ["do", "while", "if", "try", "data", "abenddic", "database", "tables", "load", "unit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Properties of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_techspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Load%20Unit%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_LOAD_UNIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC - Load Unit of Database Tables

The load unit of a table specifies how the data of the table is loaded into the main memory of the SAP HANA database. The SAP HANA database offers the following settings:

-   Column Loadable
    
    The complete table is considered as in-memory. The table data is loaded upon system start in a column-oriented format into the main memory of the SAP HANA database. This is the default behavior.
    
-   Page Loadable
    
    By using a feature of the SAP HANA database called Native Storage Extension (NSE), table data is stored on disk in pages rather than in columns. These pages are loaded only on request into a special buffer in the HANA main memory. Unused data in the buffer can be paged out.
    

Typically, Page Loadable is used for large tables with less frequent accesses. While the SAP HANA database offers the load unit attribute also for single columns and partitions of a table, in the ABAP Dictionary this setting always affects the complete table and its indexes.

The ABAP Dictionary provides this setting in two flavors:

-   Column Preferred or Page Preferred
    -   Column Preferred is the default behavior.
    -   The load unit is only specified upon creation of the table.
    -   Changing from one preferred load unit to another does not change the load unit on the database.
    -   The ABAP DDIC consistency check does not consider the load unit. It is accepted if the load unit on the database differs from the values specified in the DDIC.
-   Column Enforced or Page Enforced
    -   The load unit is specified upon creation of the table. Furthermore, changes to the load unit in the ABAP DDIC result in corresponding changes on the database.
    -   Changing the enforced load unit results in a corresponding change on the database.
    -   The ABAP Dictionary consistency check respects the load unit. Different values for the load unit in the ABAP Dictionary and on the database result in tables that are inconsistent from the DDIC point of view.

The Column Preferred and Page Preferred settings for the load unit setting in the ABAP Dictionary offer the possibility for a database administrator or a tool like the SAP HANA NSE Advisor to overwrite the DDIC settings without making the table inconsistent. In general, most of the tables should use one of the Preferred settings for the load unit. Only if you are sure that the table should keep a specific load unit in all relevant scenarios (on premise, cloud, ...), you should use the Enforced load unit settings.

The load unit setting is completely transparent to applications.

Limitations:

-   Page Loadable cannot be used for database tables with [storage type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_storage.htm) Row store.
-   Page Loadable cannot be used for [global temporary tables (GTTs)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_gtt.htm).
-   Page Loadable cannot be set for tables that have [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") enabled.

Hint

For more information about the Native Storage Extension on the SAP HANA database, see the [SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/4efaa94f8057425c8c7021da6fc2ddf5).