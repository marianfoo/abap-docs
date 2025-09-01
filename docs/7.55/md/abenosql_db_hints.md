  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) → 

ABAP SQL - Database Hints

Syntax

... %\_HINTS db @dbhint1
           *\[*db @dbhint2
            ... *\]*  ...

Effect

The addition %\_HINTS can be used to specify [database hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") at the following positions in ABAP SQL statements:

-   After the [clauses](javascript:call_link\('abenselect_clauses.htm'\)) of SELECT statements in [main](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") and [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").

-   After the WHERE condition of the statements [UPDATE](javascript:call_link\('abapupdate.htm'\)) and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).

One or more database hints can be specified after %\_HINTS as a blank-separated list in flat, character-like [literals](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) dbhint1, dbhint2, and so on. The addition db must be used before each database hint to specify the database system for which the hint is intended. The following table shows the possible additions and the corresponding database system:

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

A database system can be specified more than once if there are several database hints for this system. The possible database hints are database-specific and may depend on the release of the database system. They can be found in the documentation of the respective database system. An empty hint is ignored.

Any database hints specified are ignored if [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is used.

Hints

-   A database hint usually only affects the part of an ABAP SQL statement for which is it specified. It does not usually affect the way a statement works, but may affect performance.

-   Database hints should only be used with extreme caution. For example, they can be used as a last resort to affect the optimizer of the database system when selecting a secondary index.

-   If database hints are used, they should generally be checked every time the database release or system configuration is changed.

-   Database hints specified as literals are also not evaluated until runtime. If the syntax is incorrect, they can cause exceptions at runtime or are ignored. In the [strict mode as of Release 7.51](javascript:call_link\('abenopensql_strict_mode_751.htm'\)) only, statically known database hints are also checked statically.

-   Database hints of the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") are intended for internal use only. These are put between & characters and are evaluated before they are transferred to the database system from the database interface.

-   In the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05, the escape character @ must be before a hint that is not specified as a literal.

Example

Specifies a [HANA-specific database hint](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) for the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

SELECT \*
       FROM scarr
       WHERE carrid = 'LH'
       %\_HINTS HDB 'INDEX\_SEARCH'
       INTO TABLE @DATA(result).