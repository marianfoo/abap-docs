  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) → 

REPORT, DEFINING DATABASE

[Short Reference](javascript:call_link\('abapreport_shortref.htm'\))

Obsolete Syntax

...  *\[* DEFINING DATABASE ldb *\]* ...

Effect

This addition of the statement [REPORT](javascript:call_link\('abapreport.htm'\)) shows that the current program is the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") of the logical database ldb. The name of this logical database has a maximum length of 20 characters. Logical databases are defined with the tool [Logical Database Builder](javascript:call_link\('abenlogical_database_build_glosry.htm'\) "Glossary Entry") of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), in which the [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") is generated automatically including the statement REPORT. The name of the master program is SAPDBldb.

Hint

If logical databases are no longer created, it is no longer necessary to use the addition DEFINING either.

Example

Introduces the logical database F1S.

REPORT sapdbf1s DEFINING DATABASE f1s.