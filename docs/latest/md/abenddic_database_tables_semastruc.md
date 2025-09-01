  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Properties of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Structure-Specific%20Semantic%20Properties%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_SEMASTRUC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Structure-Specific Semantic Properties of Database Tables

The following semantic properties are the same as those of a [DDIC structure](javascript:call_link\('abenddic_structures_sema.htm'\)):

-   Short text
-   Documentation
-   Short text of table fields
-   Output style of table fields
-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN. If a field in a DDIC database table is used as a reference field in a different table, the field cannot be deleted.
-   Search help

Hints

-   The semantic properties apply mainly to the DDIC database table in question and they are not use-case specific. Due to the principle of [separation of concerns](javascript:call_link\('abenseparation_concerns_guidl.htm'\) "Guideline"), the description of a table field must not necessarily be suitable for displaying a help text of an application that is processing the table.
-   Like regular structure components, [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") can be assigned to table fields or the whole table. If a table field is not to be used directly for input fields on dynpros or Web Dynpros, due to [separation of concerns](javascript:call_link\('abenseparation_concerns_guidl.htm'\) "Guideline"), it is not recommended that search helps are assigned.