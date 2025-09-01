  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

DDIC - Adjusting Database Tables

When an existing modified DDIC database table is activated, existing content must be adjusted on the database in the following cases:

-   When a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") is inserted. Here, the data of the table is copied to all clients specified in the client table T000.

-   When fields of existing DDIC database tables are deleted. Rows can be lost when key fields are deleted.

-   When the technical attributes of table fields are changed.

Hints

-   The order of table fields in transparent tables in ABAP Dictionary may be different from the order of the columns of the physical database table on the database, which means that not every modification here requires an adjustment.

-   In adjustments, initial fields are not given the null value and are given their type-dependent initial value instead, regardless of the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)).

-   For more information, see Adjustment of Database Structures.