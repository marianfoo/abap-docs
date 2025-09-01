---
title: "EXEC SQL - Embedded Native SQL"
description: |
  The following ABAP statements are used to embed Native SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm 'Glossary Entry') statically in ABAP programs: EXEC SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm) ... ENDEXEC(https://h
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennativesql.htm"
abapFile: "abennativesql.htm"
keywords: ["do", "if", "try", "data", "abennativesql"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql.htm) → 

EXEC SQL - Embedded Native SQL

The following ABAP statements are used to embed [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") statically in ABAP programs:

[EXEC SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm)
  ...
[ENDEXEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendexec.htm)

Native SQL statements embedded between EXEC SQL and ENDEXEC do not fall within the scope of ABAP and do not follow ABAP syntax. Mainly, database-specific [SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_glosry.htm "Glossary Entry") statements can be embedded that are passed unchanged from the Native SQL interface to a database system, and executed there. Almost the full SQL language scope of the relevant database can be used and the addressed database tables do not have to be declared in ABAP Dictionary. In addition, a small set of SAP-specific Native SQL statements and additions are available that can only be specified between EXEC SQL and ENDEXEC and that are subject to special handling by the Native SQL interface.

Programming Guideline

[Using Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm "Guideline")

Note

If Native SQL is used instead of Open SQL, the use of [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) is recommended.

Continue
[EXEC SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm)
[EXEC SQL - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexec_sql_abexas.htm)