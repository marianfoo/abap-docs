  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) →  [DDIC - Foreign Key Dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)) → 

DDIC - Check Table

Table fields of a DDIC database table whose data type is determined using a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") can be assigned a check table. Here, the [value table](javascript:call_link\('abenvalue_table_glosry.htm'\) "Glossary Entry") of any [domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") of the data element is used as a default value. A table field to which a check table is assigned is called a [foreign key field](javascript:call_link\('abenforeign_key_field_glosry.htm'\) "Glossary Entry") and becomes a part of the [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) of the table. The table itself becomes a foreign key table. The primary key of the check table is the foreign key of the foreign key table. Each key field of the check table corresponds to a field in the foreign key table. Here, the corresponding field pairs must have the same data type.

Hints

-   Fields whose data type is specified directly cannot be assigned a check table.

-   As long as a DDIC database table is a check table none of its key fields can be deleted and the order of the key fields cannot be modified.

-   As long as a DDIC database table is a check table its primary key can be expanded later only by appending new key fields to its end. The existing foreign keys then automatically become generic with respect to the new key fields.

-   A client field cannot be inserted later in an existing check table.

-   A special column can be used to [flag obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)) in check tables.