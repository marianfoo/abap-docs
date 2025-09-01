  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) → 

DDIC - Structure-Dependent Semantic Attributes of Database Tables

The following semantic attributes are the same as those of a [DDIC structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in the ABAP Dictionary:

-   Short text
-   Documentation
-   Short text of table fields
-   Output style of table fields
-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN. If a field in a DDIC database table is used as a reference field in a different table, the field cannot be deleted.
-   Search help

Hints

-   The semantic attributes should apply mainly to the DDIC database table described. Due to the principle of [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") the description of a table field must not necessarily be suitable for displaying a help text of an application that is processing the table.
-   Like regular structure components, [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") can be assigned to table fields or the whole table. If the [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") specifies that table fields are not to be used directly for input fields on dynpros or Web Dynpros, it is not recommended that search helps are assigned.