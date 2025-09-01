  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) → 

sql\_cond - rel\_exp for Statements

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

Syntax

... *{* *{*operand1 *{*[\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](javascript:call_link\('abenwhere_logexp_compare.htm'\))*}*
                  *{*  [operand2](javascript:call_link\('abenwhere_logexp_compare.htm'\))
                  *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[* [UNION ...](javascript:call_link\('abapunion.htm'\))*\]* )*}* *}**}*
    *|* *{*[operand *\[*NOT*\]* BETWEEN operand1 AND operand2](javascript:call_link\('abenwhere_logexp_interval.htm'\))*}*
    *|* *{*[operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*](javascript:call_link\('abenwhere_logexp_like.htm'\))*}*
    *|* *{*[operand *\[*NOT*\]* IN (operand1, operand2 ...)](javascript:call_link\('abenwhere_logexp_list.htm'\))*}*
    *|* *{*[operand *\[*NOT*\]* IN @seltab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))*}*
    *|* *{*[operand IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))*}*
    *|* *{*[operand IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\))*}*
    *|* *{*[(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))*}*
    *|* *{* [EXISTS](javascript:call_link\('abenwhere_logexp_exists.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* )*}*
    *|* *{*[operand *\[*NOT*\]* IN](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* )*}* *}* ...

Effect

Relational expression in a condition of an ABAP SQL statement. Logical expressions sql\_cond can be formed from the relational expressions shown here for the following conditions:

-   Read accesses

-   [WHERE clause](javascript:call_link\('abapwhere.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry")

-   [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry")

-   [ON condition](javascript:call_link\('abapselect_join.htm'\)) of a [join expression](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry")

-   Modifying accesses

-   [WHERE condition](javascript:call_link\('abapupdate_source.htm'\)) of the statement [UPDATE](javascript:call_link\('abapupdate.htm'\))

-   [WHERE condition](javascript:call_link\('abapdelete_where.htm'\)) of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))

The possible operands of a relational expression are [columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), which covers literals, [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)), and [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)). The category of the expression and where it is used determine which operands can be used and where. The following principles apply:

-   No [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") can be used on the right side of relational expression.

-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can currently only be used as operands in the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").

-   Columns or expressions of the type STRING, RAWSTRING, LCHR, or LRAW cannot be used.

A relational expression rel\_exp is either true, false, or unknown. The expression is unknown if one of the columns involved in the database contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") and is evaluated with another comparison as [IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)). The result of joins of relational expressions with unknown results is described under [AND, OR, NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)).

In an SQL condition of a statement, the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific data source of a query or of the target of a write statement can be used as an operand only if automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is switched off using the addition CLIENT SPECIFIED for the query or write. This is checked in full in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Notes

-   In comparisons between database columns or SQL expressions or aggregate expressions and database columns, it is essential that only operands of the same type and same length are used. This avoids platform-dependent conversion from taking place.

-   If required, a [specified column](javascript:call_link\('abenopen_sql_columns.htm'\)) can contain a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) for associations of a CDS view.

-   Specifying a column directly is equivalent to specifying a column as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)).

-   The ABAP SQL statement bypasses [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") in the following cases:

-   If expressions other than the [SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\)) that can be evaluated in the table buffer are used on the left side of a relational expression.

-   If items other than [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") or [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") are specified on the right side of a relational expression used to identify a single record or a generically buffered area.

In other conditions not used for identifications, columns too can be specified in [comparisons](javascript:call_link\('abenwhere_logexp_compare.htm'\)) or when [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)) is used. This applies in cases where neither (numeric) operand has the type DF16\_DEC or DF34\_DEC, both operands are character-like, or both operands have the type RAW with the same length.

-   When SQL expressions are specified on the left side of a relational expression or host expressions occur on the right side, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

-   If [dynamic conditions](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)), [alternative table names](javascript:call_link\('abapfrom_clause.htm'\)), or [joins](javascript:call_link\('abapselect_join.htm'\)) are used, a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") can be accessed outside the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check in WHERE conditions and ON conditions, without automatic client handling being switched off using CLIENT SPECIFIED. In this case, there are two conditions for the client column: the implicit condition of the automatic client handler for the current client and the explicitly specified condition. If the current client is not specified in the explicitly specified condition, no rows are selected.
    

Continue
[sql\_cond - Relational Operators](javascript:call_link\('abenwhere_logexp_compare.htm'\))
[sql\_cond - BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))
[sql\_cond - LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\))
[sql\_cond - IN ( ..., ... )](javascript:call_link\('abenwhere_logexp_list.htm'\))
[sql\_cond - IN seltab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))
[sql\_cond - IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))
[sql\_cond - IS INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\))
[sql\_cond - EXISTS](javascript:call_link\('abenwhere_logexp_exists.htm'\))
[sql\_cond - IN subquery](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\))
[sql\_cond - (cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
[sql\_cond - subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\))