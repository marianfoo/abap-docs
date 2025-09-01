---
title: "DDIC - Adjusting Database Tables"
description: |
  When an existing modified DDIC database table is activated, existing content must be adjusted on the database in the following cases: -   When a client column(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm 'Glossary Entry') is inserted. During the adjustmen
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_adj.htm"
abapFile: "abenddic_database_tables_adj.htm"
keywords: ["insert", "delete", "do", "if", "case", "try", "data", "abenddic", "database", "tables", "adj"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Adjusting%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_ADJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Adjusting Database Tables

When an existing modified DDIC database table is activated, existing content must be adjusted on the database in the following cases:

-   When a [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") is inserted. During the adjustment, the data of the table is copied to all clients listed in the client table T000.
-   When fields of existing DDIC database tables are deleted. When key fields are deleted, rows can be lost.
-   When fields of existing DDIC database tables are renamed. The field with the old name is deleted and a field with the new name is appended. This leads to the loss of the data in column with the old field name.
-   Changing the technical properties of table fields.

Hints

-   The order of table fields in transparent tables in the ABAP Dictionary may be different from the order of the columns of the physical database table on the database. This means that modifying the order of table fields does not necessarily require an adjustment.
-   In adjustments, initial fields are filled with their type-dependent initial value, regardless of the [flag for initial values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_init.htm).
-   For more information, see [Adjustment of Database Structures](https://help.sap.com/docs/ABAP_PLATFORM_NEW/ec1c9c8191b74de98feb94001a95dd76/cf21f1ab446011d189700000e8322d00).