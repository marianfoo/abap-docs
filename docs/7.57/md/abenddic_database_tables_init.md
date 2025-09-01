  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Flag for Initial Values in Database Tables, ABENDDIC_DATABASE_TABLES_INIT, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Flag for Initial Values in Database Tables

Table fields of DDIC database tables can be flagged for initial values. On the database, this flag is set to NOT NULL. When a new field is inserted into an existing DDIC database table, this flag can be used on all platforms to force an assignment of the [type-dependent initial value](javascript:call_link\('abenddic_builtin_types.htm'\)) to this field in all rows. The flag is always set automatically for [key fields](javascript:call_link\('abenddic_database_tables_key.htm'\)).

If a new table field without the property NOT NULL is inserted into an existing table, the field is given a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") in all rows. There is no equivalent to the null value in ABAP. It can only be queried in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") using the special WHERE condition [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).

Generally, table fields on most database platforms are created as NOT NULL, even if the flag for the initial value is not set in the ABAP Dictionary. Furthermore, all fields are given the property NOT NULL:

-   When a new table is created
-   When a table is [adjusted](javascript:call_link\('abenddic_database_tables_adj.htm'\))

With the exception of key fields on some database platforms, new fields are not created as NOT NULL only if they can be appended or inserted using ALTER TABLE without an [adjustment](javascript:call_link\('abenddic_database_tables_adj.htm'\)) (if the flag is not set in ABAP Dictionary). The NOT NULL definition of a database field can be seen by displaying the database object in the dictionary tool.

If the flag is set for an entire include structure, it only applies to those structure components where the flag is also set and not to all components. If the flag is not set for an include structure, all flags set for the included structure are ignored.

Hints

-   The flag cannot be set for the following data types:
    
    -   LCHR, LRAW, and the obsolete VARC. No [initial value](javascript:call_link\('abenddic_builtin_types.htm'\)) is assigned to these data types.
    -   NUMC and RAW with a length greater than or equal to 70.
    -   GEOM\_EWKB
    
    It is possible to set the flag for the data type RAW with a less than 70 even though it is not assigned an [initial value](javascript:call_link\('abenddic_builtin_types.htm'\)).
    
-   Except when inserting new fields, the indicator is not needed and the initial value is always set, which is especially true for [adjusting tables](javascript:call_link\('abenddic_database_tables_adj.htm'\)).
-   In tables with many rows, it can take a long time to set the type-dependent initial value and the initial value flag should only be used if absolutely necessary or if the table has a small number of entries.