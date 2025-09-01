---
title: "REPORT, DEFINING DATABASE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport_shortref.htm) Obsolete Syntax ...   DEFINING DATABASE ldb  ... Effect This addition of the statement REPORT(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport.htm) shows tha
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport_defining.htm"
abapFile: "abapreport_defining.htm"
keywords: ["do", "if", "try", "data", "abapreport", "defining"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REPORT%2C%20DEFINING%20DATABASE%2C%20ABAPREPORT_DEFINING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REPORT, DEFINING DATABASE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport_shortref.htm)

Obsolete Syntax

...  *\[* DEFINING DATABASE ldb *\]* ...

Effect

This addition of the statement [REPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreport.htm) shows that the current program is the [database program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database ldb. The name of this logical database has a maximum length of 20 characters. Logical databases are defined with the tool [Logical Database Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_database_build_glosry.htm "Glossary Entry") of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), in which the [master program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmaster_program_glosry.htm "Glossary Entry") is generated automatically including the statement REPORT. The name of the master program is SAPDBldb.

Hint

If logical databases are no longer created, it is no longer necessary to use the addition DEFINING either.

Example

Introduces the logical database F1S.

REPORT sapdbf1s DEFINING DATABASE f1s.