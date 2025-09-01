  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Check%20Table%2C%20ABENDDIC_DATABASE_TABLES_CHECKTAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined by a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") can be assigned a check table. The [value table](javascript:call_link\('abenvalue_table_glosry.htm'\) "Glossary Entry") of any [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") and becomes a part of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. The corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly (not by using a DDIC data element) cannot be assigned a check table.
-   As long as a DDIC database table is a check table, none of its key fields can be deleted and the order of the key fields cannot be modified.
-   As long as a DDIC database table is a check table, its primary key can be expanded only by appending new key fields to its end. The existing foreign keys then automatically become generic regarding the new key fields.
-   A client field cannot be inserted later into an existing check table.
-   A special column can be used to [flag obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)) in check tables.