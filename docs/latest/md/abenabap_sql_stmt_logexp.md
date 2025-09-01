  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20rel_exp%20for%20Statements%2C%20ABENABAP_SQL_STMT_LOGEXP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - rel\_exp for Statements

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

Syntax

... *{* *{*operand1 *{*[\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](javascript:call_link\('abenwhere_logexp_compare.htm'\))*}*
                  *{*  [operand2](javascript:call_link\('abenwhere_logexp_compare.htm'\))
                  *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* )*}* *}**}*
    *|* *{*[operand *\[*NOT*\]* BETWEEN operand1 AND operand2](javascript:call_link\('abenwhere_logexp_interval.htm'\))*}*
    *|* *{*[operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*](javascript:call_link\('abenwhere_logexp_like.htm'\))*}*
    *|* *{*[operand IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))*}*
    *|* *{*[operand IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\))*}*
    *|* *{* [EXISTS](javascript:call_link\('abenwhere_logexp_exists.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* )*}*
    *|* *{*[operand *\[*NOT*\]* IN (operand1, operand2 ...)](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))*}*
    *|* *{*[operand *\[*NOT*\]* IN](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* )*}*
    *|* *{*[( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),](javascript:call_link\('abenwhere_logexp_list_in.htm'\))
                                        [( operand12, operand22 ... ), ... )](javascript:call_link\('abenwhere_logexp_list_in.htm'\))*}*
    *|* *{*[operand *\[*NOT*\]* IN @range\_tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))*}*
    *|* *{*[(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))*}* *}* ...

Effect

Relational expression in a condition of an ABAP SQL statement. Logical expressions sql\_cond can be formed from the relational expressions shown here for the following conditions:

-   Read accesses
    -   [WHERE clause](javascript:call_link\('abapwhere.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry")
    -   [HAVING clause](javascript:call_link\('abaphaving_clause.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry")
    -   [ON condition](javascript:call_link\('abapselect_join.htm'\)) of a [join expression](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry")
-   Modifying accesses
    -   [WHERE condition](javascript:call_link\('abapupdate_source.htm'\)) of the statement [UPDATE](javascript:call_link\('abapupdate.htm'\))
    -   [WHERE condition](javascript:call_link\('abapdelete_where.htm'\)) of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))

Possible operands of a relational expression are elementary [SQL operands](javascript:call_link\('abensql_operands.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)). The kind of expression and where it is used determine which operands can be used and where. The following principles apply:

-   On the right side of relational expressions, [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)), [cast expressions](javascript:call_link\('abensql_cast.htm'\)), and built-in [SQL functions](javascript:call_link\('abensql_builtin_func.htm'\)) can be used. No other [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible. [Typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) are handled as elementary SQL expressions, while [untyped literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)) are handled like [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)).
-   [Aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can only be used as operands in the [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), but also on the right side.
-   [Window expressions](javascript:call_link\('abenwindow_expression_glosry.htm'\) "Glossary Entry") cannot be used.
-   Operands of the type STRING, RAWSTRING, LCHR, LRAW, or GEOM\_EWKB cannot be used. One exception is the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)), which can also evaluate [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") and [geodata types](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry").

A relational expression rel\_exp is either

-   true
-   false, or
-   unknown.

The expression is unknown if one of the operands involved contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") and is evaluated with a comparison other than [IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)). The result of joins of relational expressions with unknown results is described under [AND, OR, NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)).

In an SQL condition of a statement, the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-dependent data source of a query or of the target of a write statement cannot be used as an operand due to [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)). This is checked completely in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from ABAP release 7.40, SP05.

Hints

-   In comparisons between values determined on the database, it is essential that only operands of the same type and the same length are used. This avoids platform-dependent conversions from taking place.
-   The following elements of relational expressions cannot be handled by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)):
    
    -   [SQL Expressions](javascript:call_link\('abapsql_expr.htm'\)) except those listed under [ABAP SQL Engine, Supported SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)).
    -   Comparisons between different types except the following cases: Both operands have numeric types except DF16\_DEC or DF34\_DEC; both operands are character-like; both operands have the type RAW with the same length.
    
    Statements that use relational expression that cannot be handled by the ABAP SQL engine bypass the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.
    
-   The ABAP SQL statement bypasses [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") if items other than [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") or [host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") are specified on the right side of a relational expression or are used to identify a single record or a generically buffered area.
-   A client column can be used as an operand only if [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is disabled using the obsolete addition CLIENT SPECIFIED for the query or the write statement.
-   That the result of a check is unknown if one of the operands has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), is especially true for the [null expression NULL](javascript:call_link\('abensql_null.htm'\)) that contains the null value by definition.
-   Single relational expressions that are unknown can be handled similarly to expressions that are false in the sense that they are not true. Caution is needed when using [AND, OR, NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)). For example, an unknown expression cannot be made true by using NOT.
-   The rule that the result of an relational expression is unknown if an operand contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is overridden by an initial ranges table in the expression [IN range\_tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\)). It also has no effect if an empty internal table is used for [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) because then the entire WHERE condition is ignored.
-   If in [dynamic conditions](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) alias names defined with [AS](javascript:call_link\('abapfrom_clause.htm'\)) or [joins](javascript:call_link\('abapfrom_clause.htm'\)) are used, a [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") can be accessed outside the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check in WHERE conditions and ON conditions, without [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) being disabled using CLIENT SPECIFIED. In this case, there are two conditions for the client column: the implicit condition of the automatic client handler for the current client and the explicitly specified condition. If the current client is not specified in the explicitly specified condition, no rows are selected.
-   When SQL expressions occur on the left side of a relational expression, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Continue
[sql\_cond - Comparison Operators](javascript:call_link\('abenwhere_logexp_compare.htm'\))
[sql\_cond - BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))
[sql\_cond - LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\))
[sql\_cond - IS NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))
[sql\_cond - IS INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\))
[sql\_cond - EXISTS](javascript:call_link\('abenwhere_logexp_exists.htm'\))
[sql\_cond - IN ( ... )](javascript:call_link\('abenwhere_logexp_in.htm'\))
[sql\_cond - IN range\_tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))
[sql\_cond - (cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
[sql\_cond - subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\))