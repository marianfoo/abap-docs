  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenldb_statements.htm) → 

REPORT, DEFINING DATABASE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport_shortref.htm)

Obsolete Syntax

...  *\[* DEFINING DATABASE ldb *\]* ...

Effect

This addition of the report [REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapreport.htm) shows that the current program is the [database program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database ldb. The name of this logical database has a maximum length of 20 characters. Logical databases are defined with the tool [Logical Database Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_database_build_glosry.htm "Glossary Entry") of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), in which the [master program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmaster_program_glosry.htm "Glossary Entry") is generated automatically including the statement REPORT. The name of the master program is SAPDBldb.

Hint

If logical databases are no longer created, it is no longer necessary to use the addition DEFINING either.

Example

Introduces the logical database F1S.

REPORT sapdbf1s DEFINING DATABASE f1s.