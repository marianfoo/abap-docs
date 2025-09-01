---
title: "Conditions for the Strict Mode"
description: |
  The strict mode of the syntax check in Release 7.53 applies to all ABAP SQL statements that use one of the following attributes introduced in Release 7.53(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-753-abap_sql.htm): -   Use of one of the new date/time functions(https://
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_753.htm"
abapFile: "abenabap_sql_strictmode_753.htm"
keywords: ["select", "insert", "do", "if", "data", "abenabap", "sql", "strictmode", "753"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strict_modes.htm) → 

ABAP SQL - Strict Mode in Release 7.53

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-753-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_753_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.53 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-753-abap_sql.htm):

-   Use of one of the new [date/time functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_date_time_functions.htm) TIMS\_IS\_VALID, TSTMP\_IS\_VALID, TSTMP\_CURRENT\_UTCTIMESTAMP, TSTMP\_SECONDS\_BETWEEN, TSTMP\_ADD\_SECONDS, TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, TSTMP\_TO\_DST, or DATS\_TIMS\_TO\_TSTMP.
-   Use of one of the new [time zone functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_timezone_func.htm) ABAP\_SYSTEM\_TIMEZONE or ABAP\_USER\_TIMEZONE.
-   Use of the relational expression [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_initial.htm).
-   Access to [hierarchy data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_data.htm).
-   The [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) addition [GROUPING SETS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgrouping_sets_clause.htm) is used.
-   A [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_from_select.htm) is used in the statement [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm).
-   The addition [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) is specified in a [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_from_select.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm) or the table or view that is modified by the INSERT statement is accessed there.

Rules for the Strict Mode

The strict mode in Release 7.53 covers all rules of the [strict mode in Release 7.52](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_752.htm).