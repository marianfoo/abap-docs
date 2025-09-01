  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Foreign%20Key%20Dependencies%2C%20ABENDDIC_DATABASE_TABLES_FORKEYREL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry").

The definition of a foreign key dependency is done in the foreign key table. By assigning check tables to table fields, the table fields become [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

-   [Check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
-   [Foreign Key](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

Foreign key dependencies are evaluated during input checks, for input help on dynpros and in Web Dynpros, when creating [views](javascript:call_link\('abenddic_views.htm'\)), and in [lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry"). In the ABAP programming language or in ABAP SQL, foreign keys are not evaluated.

In a check table, [obsolete data can be flagged as obsolete](javascript:call_link\('abenddic_deprecation.htm'\)). This has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
[DDIC - Foreign Keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
[DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\))