  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.40, SP05

-   [Conditions for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP05_1)

-   [Rules for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP05_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.40, SP05 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.40 SP05](javascript:call_link\('abennews-740_sp05-open_sql.htm'\)):

-   Listings of operands as comma-separated lists

-   Escape character @ in front of [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\))

-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

-   Addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\))

-   [Joins](javascript:call_link\('abapselect_join.htm'\)):

-   ON conditions without a column from a database table or view specified on the right side as an operand.

-   Multiple consecutive joins where a join expression (and not a database table or view) is on the right side of a join expression.

-   Use of RIGHT OUTER JOIN

-   Fields from the right side specified in LEFT OUTER JOIN or from the left side in RIGHT OUTER JOIN in the WHERE condition.

-   Access to [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [SELECT](javascript:call_link\('abapselect.htm'\)).

Rules for the Strict Mode

The strict mode of the syntax in Release 7.40, SP05 checks whether the following additional rules are followed:

-   Any errors that would normally be displayed as syntax warnings are reported as syntax errors.

-   All lists of operands must be comma-separated lists. This affects the following:

-   In the statement [SELECT](javascript:call_link\('abapselect.htm'\)), columns, aggregate expressions, or SQL expressions specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and columns specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) and [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)).

-   In the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)), change expressions specified after [SET](javascript:call_link\('abapupdate_source.htm'\)).

-   [Host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) must be prefixed with the escape character @.

-   If an explicit comma-separated list is specified without the addition [DISTINCT](javascript:call_link\('abapselect_clause.htm'\)) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)), all columns of the results set defined here must exist as identically named components in a structure or table specified after [INTO CORRESPONDING FIELDS](javascript:call_link\('abapinto_clause.htm'\)).

-   The [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a data source of a read statement or of a target of a write statement must not be accessed in ON and WHERE conditions without automatic client handling being switched off using CLIENT SPECIFIED first. In addition, this applies in particular in strict mode when using [dynamic](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) [conditions](javascript:call_link\('abenwhere_logexp.htm'\)), [alternative table names](javascript:call_link\('abapfrom_clause.htm'\)), or [joins](javascript:call_link\('abapselect_join.htm'\)).

-   The addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) can only be used for client-specific database tables or views.

-   If the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_logexp_itab.htm'\)) is used, no database fields of the built-in types STRING and RAWSTRING plus LCHR and LRAW can occur in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   If [database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") with the same number of key fields and view fields are accessed in a dynamic FROM clause combined with the addition [ORDER BY PRIMARY KEY](javascript:call_link\('abaporderby_clause.htm'\)), the exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is raised.

-   Like in classes, the [obsolete short forms](javascript:call_link\('abenopen_sql_obsolete.htm'\)) are forbidden.

Comma-separated lists of operands and the escape character @ can only be used in programs in which the program attribute [fixed point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") is activated.