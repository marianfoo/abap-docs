  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) → 

Open SQL - Database Hints

Syntax

... %\_HINTS db @dbhint1
           *\[*db @dbhint2
            ... *\]*  ...

Effect

The addition %\_HINTS can be used to specify [database hints](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_hint_glosry.htm "Glossary Entry") at the following positions in Open SQL statements:

-   After the [clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) of SELECT statements in [main](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmainquery_glosry.htm "Glossary Entry") and [subqueries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry").

-   After the WHERE condition of the statements [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm) and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm).

One or more database hints can be specified after %\_HINTS as a blank-separated list in flat, character-like data objects dbhint1, dbhint2, ... . The name of host variables should be prefixed with the escape character @. The addition db must be used before each database hint to specify the database system for which the hint is intended. The following table shows the possible additions and the corresponding database system:

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

If [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is used, or if [pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") or [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") are accessed, any database hints specified are ignored.

Notes

-   A database hint usually only affects the part of an Open SQL statement for which is it specified. It does not usually affect the way a statement works, but may affect performance.

-   Database hints should only be used with extreme caution. For example, they can be used as a last resort to influence the optimizer of the database system when selecting a secondary index.

-   If database hints are used, they should generally be checked every time the database release or system configuration is changed.

-   Database hints specified as literals are also not evaluated until runtime. If the syntax is incorrect, they can cause exceptions at runtime or are ignored. In the [strict mode as of Release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_751.htm) only, statically known database hints are also checked statically.

-   Database hints of the [database interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_interface_glosry.htm "Glossary Entry") are intended for internal use only. These are put between & characters and are evaluated before they are transferred to the database system from the database interface.

-   In the [strict modes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_modes.htm) of the syntax check from Release 7.40, SP05, the escape character @ must be before a hint that is not specified as a literal.

Example

Specifies a [HANA-specific database hint](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us) for the [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry").

SELECT \*
       FROM scarr
       WHERE carrid = 'LH'
       %\_HINTS HDB 'INDEX\_SEARCH'
       INTO TABLE @DATA(result).