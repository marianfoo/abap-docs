  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) → 

Structure-Specific Semantic Attributes of Database Tables

The following semantic attributes are the same as those of a [structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in ABAP Dictionary:

-   Short text

-   Documentation

-   Short text of table fields

-   Output style of table fields

-   Reference field for components of the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) CURR and QUAN. If a field in a database table is used as a reference field in a different table, the field cannot be deleted.

-   Search help

Notes

-   The semantic attributes apply mainly to the database table in question. The [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") principle dictates that the way a table field is written must not necessarily be suitable for displaying a help text of an application that edits the table.

-   Like regular structure components, [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") can be assigned to table fields or the whole table. If the [separation of concerns](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline") dictates that table fields are not to be used directly for input fields on dynpros or Web Dynpros, it is not recommended that search helps are assigned.