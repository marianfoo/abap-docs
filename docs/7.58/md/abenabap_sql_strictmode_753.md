  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.53%2C%20ABENABAP_SQL_STRICTMODE_753%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.53

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-753-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_753_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.53 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.53](javascript:call_link\('abennews-753-abap_sql.htm'\)):

-   Use of one of the new [date/time functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)) TIMS\_IS\_VALID, TSTMP\_IS\_VALID, TSTMP\_CURRENT\_UTCTIMESTAMP, TSTMP\_SECONDS\_BETWEEN, TSTMP\_ADD\_SECONDS, TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, TSTMP\_TO\_DST, or DATS\_TIMS\_TO\_TSTMP.
-   Use of one of the new [time zone functions](javascript:call_link\('abensql_timezone_func.htm'\)) ABAP\_SYSTEM\_TIMEZONE or ABAP\_USER\_TIMEZONE.
-   Use of the relational expression [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\)).
-   Access to [hierarchy data](javascript:call_link\('abenselect_hierarchy_data.htm'\)).
-   The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) is used.
-   A [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) is used in the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)).
-   The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is specified in a [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or the table or view that is modified by the INSERT statement is accessed there.

Rules for the Strict Mode   

The strict mode in ABAP release 7.53 covers all rules of the [strict mode in ABAP release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).