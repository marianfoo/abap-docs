  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.54

-   [Conditions for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_754_1)

-   [Rules for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_754_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.54 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.54](javascript:call_link\('abennews-754-abap_sql.htm'\)):

-   Use of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) as operands of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\))

-   Definition of [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") by specifying [JOIN TO ONE*|*MANY](javascript:call_link\('abapwith_associations_defining.htm'\)) in the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)) when defining common table expressions.

-   Use of [window expressions](javascript:call_link\('abapselect_over.htm'\)).

-   Use of the aggregate function [STRING\_AGG](javascript:call_link\('abapselect_aggregate.htm'\)).

-   Use of the aggregate function [COUNT( sql\_exp )](javascript:call_link\('abapselect_aggregate.htm'\)) without the addition DISTINCT.

-   Use of the [hierarchy navigator](javascript:call_link\('abenhierarchy_navigator_glosry.htm'\) "Glossary Entry") [HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.54 covers all rules of the [strict mode in Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)).