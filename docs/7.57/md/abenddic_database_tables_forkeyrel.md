  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Foreign Key Dependencies, ABENDDIC_DATABASE_TABLES_FORKEYREL, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Foreign Key Dependencies

A foreign key dependency is a semantic dependency between two DDIC database tables, namely a [foreign key table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") and a [check table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencheck_table_glosry.htm "Glossary Entry").

A foreign key dependency is defined in the foreign key table. Check tables are assigned to table fields and these fields become [foreign keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenforeign_key_glosry.htm "Glossary Entry").

-   [Check table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_checktab.htm)
-   [Foreign Key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm)

Among other things, foreign key dependencies are evaluated for input checks, for input help on dynpros and in Web Dynpro, when creating [views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_views.htm), and in [lock objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlock_object_glosry.htm "Glossary Entry"). Foreign keys are not used in the ABAP programming language or in ABAP SQL.

In a check table, [obsolete data can be identified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_deprecation.htm), which has an effect on the input check and input help on dynpros or Web Dynpros.

Continue
[DDIC - Check Table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_checktab.htm)
[DDIC - Foreign Keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm)
[DDIC - Flagging of Deprecated Data in Check Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_deprecation.htm)