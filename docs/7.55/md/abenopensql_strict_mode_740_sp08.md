  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

ABAP SQL - Strict Mode in Release 7.40, SP08

-   [Conditions for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP08_1)

-   [Rules for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_740_SP08_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.40, SP08 applies to all ABAP SQL statements that use one of the following features introduced in [Release 7.40 SP08](javascript:call_link\('abennews-740_sp08-open_sql.htm'\)):

-   Columns dbtab~\* specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

-   Inline declarations using [@DATA(...)](javascript:call_link\('abapselect_into_target.htm'\)) for the [target area](javascript:call_link\('abapinto_clause.htm'\)) of [SELECT](javascript:call_link\('abapselect.htm'\)).

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry"):

-   Minus sign (\-) in front of an operand of an [arithmetic expression](javascript:call_link\('abensql_arith.htm'\))

-   SQL expression as an operand of a [simple case distinction](javascript:call_link\('abensql_simple_case.htm'\))

-   Use of a [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\))

-   SQL expression after SELECT together with [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) or the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\))

-   SQL expression after the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) of the statement SELECT

-   SQL expression as an argument of [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) in the SELECT list or in the HAVING clause

-   [Joins](javascript:call_link\('abapselect_join.htm'\)):

-   Use of the additions LIKE, IN, and NOT plus the operators OR or NOT in an ON condition.

-   Outer join without a comparison between columns on the left and right sides.

-   [Subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") specified in a [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)).

-   Arrangement of the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)) as the final clause of a SELECT statement.

Rules for the Strict Mode

The strict mode in Release 7.40, SP08 covers all rules of the [strict mode in Release 7.40, SP05](javascript:call_link\('abenopensql_strict_mode_740_sp05.htm'\)), plus the following rules:

-   If the content of an [untyped literal](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or a host [expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) read in an operand position needs to be converted to the target type, this is done using the [rules for lossless assignments](javascript:call_link\('abapmove_exact.htm'\)). If the assignment cannot be lossless, an exception is raised.

-   If [AS tabalias](javascript:call_link\('abapfrom_clause.htm'\)) is used to define an alias name for a DDIC database table, this name must also be used in dynamic tokens.

-   Comparisons between non-[comparable types](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) produce a syntax error or raise an exception.

-   If a column specified in the [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\)) outside of an aggregate expression is not specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), a syntax error occurs.

-   Columns specified directly in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) cannot be specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) if a HAVING clause is specified.