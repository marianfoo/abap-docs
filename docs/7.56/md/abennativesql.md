---
title: "Embedded Native SQL (EXEC SQL)"
description: |
  The following ABAP statements are used to embed Native SQL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm 'Glossary Entry') statically in ABAP programs: EXEC SQL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm) ... ENDEXEC(https://h
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm"
abapFile: "abennativesql.htm"
keywords: ["do", "if", "try", "data", "abennativesql"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql.htm) → 

Embedded Native SQL (EXEC SQL)

The following ABAP statements are used to embed [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") statically in ABAP programs:

[EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm)
  ...
[ENDEXEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendexec.htm)

Native SQL statements embedded between EXEC SQL and ENDEXEC are not part of the ABAP language scope and do not follow ABAP syntax. Basically, database-specific [SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") statements can be embedded that are passed unchanged from the Native SQL interface to a database system and executed there. Almost the entire SQL language scope of the relevant database can be used, and the addressed database tables do not have to be declared in the ABAP Dictionary. In addition, a small set of SAP-specific Native SQL statements and additions are available that can only be specified between EXEC SQL and ENDEXEC and that are subject to special handling by the Native SQL interface.

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_guidl.htm "Guideline")

Hint

If Native SQL is used instead of ABAP SQL, the use of [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc.htm) is recommended.

Continue
[EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm)
[EXEC SQL - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexec_sql_abexas.htm)