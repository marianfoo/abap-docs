  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Embedded%20Native%20SQL%20%28EXEC%20SQL%29%2C%20ABENNATIVESQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Embedded Native SQL (EXEC SQL)

The following ABAP statements are used to embed [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statically in ABAP programs:

[EXEC SQL](javascript:call_link\('abapexec.htm'\))
  ...
[ENDEXEC](javascript:call_link\('abapendexec.htm'\))

Native SQL statements embedded between EXEC SQL and ENDEXEC are not part of the ABAP language scope and do not follow ABAP syntax. Basically, database-specific [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") statements can be embedded that are passed unchanged from the Native SQL interface to a database system and executed there. Almost the entire SQL language scope of the relevant database can be used, and the addressed database tables do not have to be declared in the ABAP Dictionary. In addition, a small set of SAP-specific Native SQL statements and additions are available that can only be specified between EXEC SQL and ENDEXEC and that are subject to special handling by the Native SQL interface.

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Hint

If Native SQL is used instead of ABAP SQL, the use of [ADBC](javascript:call_link\('abenadbc.htm'\)) is recommended.

Continue
[EXEC SQL](javascript:call_link\('abapexec.htm'\))
[EXEC SQL - Examples](javascript:call_link\('abenexec_sql_abexas.htm'\))