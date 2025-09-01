  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) → 

REPORT - DEFINING DATABASE

[Quick Reference](javascript:call_link\('abapreport_shortref.htm'\))

Obsolete Syntax

...  *\[* DEFINING DATABASE ldb *\]* ...

Effect

This addition of the report [REPORT](javascript:call_link\('abapreport.htm'\)) shows that the current program is the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") of the logical database ldb. The name of this logical database has a maximum length of 20 characters. Logical databases are defined using the tool [Logical Database Builder](javascript:call_link\('abenlogical_database_build_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), in which the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") is generated automatically including the statement REPORT. The name of the master program is SAPDBldb.

Note

If logical databases are no longer created, it is no longer necessary to use the addition DEFINING either.

Example

Introduces the logical database F1S.

REPORT sapdbf1s DEFINING DATABASE f1s.