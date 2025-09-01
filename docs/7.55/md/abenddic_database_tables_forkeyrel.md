  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Specific Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry") and a [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry").

A foreign key dependency is defined in the foreign key table. Check tables are assigned to table fields and these fields become [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

-   [Check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))

-   [Foreign Key](javascript:call_link\('abenddic_database_tables_forkey.htm'\))

Among other things, foreign key dependencies are evaluated for input checks, for input help on dynpros and in Web Dynpro, when creating [views](javascript:call_link\('abenddic_views.htm'\)), and in [lock objects](javascript:call_link\('abenlock_object_glosry.htm'\) "Glossary Entry"). Foreign keys are not used in the ABAP programming language or in ABAP SQL.

In a check table, [obsolete data can be identified](javascript:call_link\('abenddic_deprecation.htm'\)), which has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](javascript:call_link\('abenddic_database_tables_checktab.htm'\))
[DDIC - Foreign Keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\))
[DDIC - Flagging of Deprecated Data in Check Tables](javascript:call_link\('abenddic_deprecation.htm'\))