---
title: "ABAP SQL - Database Hints"
description: |
  Syntax ... %_HINTS db @dbhint1 db @dbhint2 ...   ... Effect The addition %_HINTS can be used to specify database hints(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_hint_glosry.htm 'Glossary Entry') at the following positions in ABAP SQL statements: -   After th
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_db_hints.htm"
abapFile: "abenabap_sql_db_hints.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "data", "abenabap", "sql", "hints"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) → 

ABAP SQL - Database Hints

Syntax

... %\_HINTS db @dbhint1
           *\[*db @dbhint2
            ... *\]*  ...

Effect

The addition %\_HINTS can be used to specify [database hints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_hint_glosry.htm "Glossary Entry") at the following positions in ABAP SQL statements:

-   After the [clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) of SELECT statements in [main](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmainquery_glosry.htm "Glossary Entry") and [subqueries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry").
-   After the WHERE condition of the statements [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm) and [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm).

One or more database hints can be specified after %\_HINTS as a blank-separated list in flat, character-like [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_literals.htm) or [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) dbhint1, dbhint2, .... The addition db must be used in front of each database hint to specify the database system for which the hint is intended. The following table shows the possible additions and the associated database system:

Addition

Database System

ADABAS

SAP MaxDB

AS400

IBM System i (AS/400)

DB2

IBM DB2

DB6

IBM DB2 UDB

HDB

SAP HANA database

MSSQLNT

Microsoft SQL Server

ORACLE

Oracle DB

SYBASE

Sybase ASE

A database system can be specified more than once if there are multiple database hints for this system. The possible database hints are database-specific and may depend on the release of the database system. They can be found in the documentation of the respective database system. An empty hint is ignored.

Any database hints specified are ignored if [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") is used.

Hints

-   A database hint usually only affects the part of an ABAP SQL statement for which is it specified. It does not usually affect the way a statement works, but may affect performance.
-   Database hints should only be used with extreme caution. For example, they can be used as a last resort to affect the optimizer of the database system when selecting a secondary index.
-   If database hints are used, they should generally be checked every time the database release or system configuration is changed.
-   Database hints specified as literals are also not evaluated until runtime. If the syntax is incorrect, they can cause exceptions at runtime or are ignored. In the [strict mode as of Release 7.51](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_751.htm) only, statically known database hints are also checked statically.
-   Database hints of the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry") are intended for internal use only. These are noted between & characters and are evaluated by the database interface before they are transferred to the database system.
-   In the [strict modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) of the syntax check from Release 7.40, SP05, the escape character @ must be specified in front of a hint that is not specified as a literal.

Example

Specification of a [HANA-specific database hint](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) for the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry").

SELECT \*
       FROM scarr
       WHERE carrid = 'LH'
       %\_HINTS HDB 'INDEX\_SEARCH'
       INTO TABLE @DATA(result).