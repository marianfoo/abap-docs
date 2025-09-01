---
title: "DDIC - Flag for Initial Values in Database Tables"
description: |
  Table fields of DDIC database tables can be flagged for initial values. On the database, this flag is set to NOT NULL. If a field is not flagged for an initial value, the field can be NOT NULL or NULL. When a new field is inserted into an existing DDIC database table, this flag can be used to force
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm"
abapFile: "abenddic_database_tables_init.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "abenddic", "database", "tables", "init"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Flag%20for%20Initial%20Values%20in%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_INIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion%20for%20improvement:)

DDIC - Flag for Initial Values in Database Tables

Table fields of DDIC database tables can be flagged for initial values. On the database, this flag is set to NOT NULL. If a field is not flagged for an initial value, the field can be NOT NULL or NULL. When a new field is inserted into an existing DDIC database table, this flag can be used to force an assignment of the [type-dependent initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) to this field in all rows and on all platforms. The flag is always set automatically for [key fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_key.htm).

If a new table field without the property NOT NULL is inserted into an existing table, the field is given a [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry") in all rows. There is no equivalent to the null value in ABAP. The null value can be queried in ABAP SQL using the WHERE condition with the addition [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_null.htm).

Generally, table fields on most database platforms are created as NOT NULL, even if the flag for the initial value is not set in the ABAP Dictionary. Furthermore, in the following scenarios, all fields are given the property NOT NULL:

-   When a new table is created.
-   When a table is [adjusted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm).

Only if new fields can be appended or inserted using ALTER TABLE without an [adjustment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm), they are created without the flag NOT NULL on some database platforms, given they are not flagged for initial values in ABAP Dictionary. This does not apply to key fields, which are always flagged as NOT NULL. Whether a field is defined as NOT NULL on the database can be seen by displaying the database object in the ABAP Dictionary tool.

If the flag is set for an entire include structure, it is applied only to those structure components that were originally flagged. The other structure components are skipped. If the flag is not set for an include structure, all structure components do not have the flag, regardless of the original definition.

Hints

-   The flag cannot be set for the following data types:
    
    -   LCHR, LRAW, and the obsolete VARC. No [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is assigned to these data types.
    -   NUMC and RAW with a length greater than or equal to 70.
    -   GEOM\_EWKB
    
    It is possible to set the flag for the data type RAW with a length less than 70 even though this data type does not have any [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
    
-   Except when inserting new fields, the indicator is not needed and the initial value is always set, which is especially true for [adjusting tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm).
-   In tables with many rows, it can take a long time to set the type-dependent initial value and the initial value flag should only be used if absolutely necessary or if the table has a small number of entries.