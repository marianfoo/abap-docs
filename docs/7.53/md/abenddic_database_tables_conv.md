  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_classical_objects.htm) →  [Database Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables.htm) → 

Converting Database Tables

When an existing modified table is activated, existing content must be converted on the database in the following cases:

-   When a [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") is inserted. Here, the data of the table is copied to all clients specified in the client table T000.

-   When fields of existing database tables are deleted. Rows can be lost when key fields are deleted.

-   When the technical attributes of table fields are changed.

Notes

-   The order of table fields in transparent tables in ABAP Dictionary may be different from the order of the columns of the physical database table on the database, which means that not every modification here requires a conversion.

-   In updates, initial fields are not given the null value and are given their type-dependent initial value instead, regardless of the [flag for initial values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_init.htm).

-   For more information, see Adjustment of Database Structures.