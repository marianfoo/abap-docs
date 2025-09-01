  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

ABAP SQL - Strict Mode in Release 7.54

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-754-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_754_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.54 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.54](javascript:call_link\('abennews-754-abap_sql.htm'\)):

-   Use of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) as operands of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))
-   Definition of [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") by specifying [JOIN TO ONE*|*MANY](javascript:call_link\('abapwith_associations_defining.htm'\)) in the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)) when defining common table expressions.
-   Use of [window expressions](javascript:call_link\('abapselect_over.htm'\)).
-   Use of the aggregate function [STRING\_AGG](javascript:call_link\('abapselect_aggregate.htm'\)).
-   Use of the aggregate function [COUNT( sql\_exp )](javascript:call_link\('abapselect_aggregate.htm'\)) without the addition DISTINCT.
-   Use of the [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)).
-   Use of the additions [NEW](javascript:call_link\('abapselect_into_target.htm'\)) or [INDICATORS](javascript:call_link\('abapselect_indicators.htm'\)) in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause.
-   Use of the new data types from the ABAP Dictionary in a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression or after the addition [AS](javascript:call_link\('abapselect_avg_as.htm'\)) of the aggregate function AVG.
-   Use of the additions USING *\[*ALL*\]* CLIENTS *\[*IN*\]* in [queries](javascript:call_link\('abapselect_client.htm'\)) or in [write statements](javascript:call_link\('abapiumd_client.htm'\)).
-   Use of the WITH additions in the [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\)) or of the hierarchy navigator [HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)).
-   Use of the built-in function [UUID](javascript:call_link\('abensql_uuid.htm'\)).
-   Use of the window functions [LEAD](javascript:call_link\('abensql_win_func.htm'\)) and [LAG](javascript:call_link\('abensql_win_func.htm'\)).
-   Evaluation of value tuples in a relational expression using the operator [IN](javascript:call_link\('abenwhere_logexp_list_in.htm'\)).
-   Evaluation of [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") or [geodata types](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") in the relational expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.54 covers all rules of the [strict mode in Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)) plus the following rules:

-   An alias name defined using the addition AS for columns of the result set in a [SELECT](javascript:call_link\('abapselect_list.htm'\)) list or for data sources in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause must comply with the [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) for program-internal names and the name table\_line cannot be used. More specifically, an alias name must not contain a minus character (\-).
-   If strict mode is applied to the statement [FETCH](javascript:call_link\('abapfetch.htm'\)), it is also applied to the associated statement [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)). If the rules are broken in OPEN CURSOR, an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.
-   The obsolete use of the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) is forbidden in the statement [SELECT](javascript:call_link\('abapselect.htm'\)) in queries and subqueries.
-   The obsolete use of the addition [CLIENT SPECIFIED](javascript:call_link\('abapud_client_obsolete.htm'\)) in write statements is forbidden.