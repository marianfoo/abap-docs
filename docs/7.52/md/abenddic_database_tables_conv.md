  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) → 

Converting Database Tables

When an existing modified table is activated, existing content must be converted on the database in the following cases:

-   When a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") is inserted. Here, the data of the table is copied to all clients specified in the client table T000.

-   When fields of existing database tables are deleted. Rows can be lost when key fields are deleted.

-   When the technical attributes of table fields are changed.

-   When a [pooled table or cluster table](javascript:call_link\('abenddic_database_tables_poolclu.htm'\)) is changed to a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") or back.

-   When new fields are inserted between existing fields or when the field order is changed in a pooled table or cluster table.

-   When a pooled table or cluster table is assigned to a different table pool or table cluster.

Note

-   The order of table fields in transparent tables in ABAP Dictionary may be different from the order of the columns of the physical database table on the database, which means that not every modification here requires a conversion.

-   In pooled tables or cluster tables, the conversion is made for the table pool or table cluster.

-   Pooled tables or cluster tables that contain more than 749 fields cannot be converted. This means that is not possible to make changes to these tables that require a conversion. New fields can only be appended to the end of these tables.

-   In updates, initial fields are not given the null value and are given their type-dependent initial value instead, regardless of the [flag for initial values](javascript:call_link\('abenddic_database_tables_init.htm'\)).

-   For more information, see Adjustment of Database Structures.