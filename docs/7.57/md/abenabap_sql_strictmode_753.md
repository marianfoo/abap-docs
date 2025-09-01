  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Strict Mode in Release 7.53, ABENABAP_SQL_STRICTMODE_753, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Strict Mode in Release 7.53

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_753_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_753_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in Release 7.53 applies to all ABAP SQL statements that use one of the following properties introduced in [Release 7.53](javascript:call_link\('abennews-753-abap_sql.htm'\)):

-   Use of one of the new [date/time functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)) TIMS\_IS\_VALID, TSTMP\_IS\_VALID, TSTMP\_CURRENT\_UTCTIMESTAMP, TSTMP\_SECONDS\_BETWEEN, TSTMP\_ADD\_SECONDS, TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, TSTMP\_TO\_DST, or DATS\_TIMS\_TO\_TSTMP.
-   Use of one of the new [time zone functions](javascript:call_link\('abensql_timezone_func.htm'\)) ABAP\_SYSTEM\_TIMEZONE or ABAP\_USER\_TIMEZONE.
-   Use of the relational expression [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\)).
-   Access to [hierarchy data](javascript:call_link\('abenselect_hierarchy_data.htm'\)).
-   The [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) addition [GROUPING SETS](javascript:call_link\('abapgrouping_sets_clause.htm'\)) is used.
-   A [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) is used in the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)).
-   The addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is specified in a [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) or the table or view that is modified by the INSERT statement is accessed there.

Rules for the Strict Mode   

The strict mode in Release 7.53 covers all rules of the [strict mode in Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).