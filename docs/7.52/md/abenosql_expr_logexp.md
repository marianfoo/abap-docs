  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) → 

sql\_cond - rel\_exp for Expressions

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}* operand2 *}*
    *|* *{*operand  *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand  IS *\[*NOT*\]* NULL*}* *}* ...

Effect

Relational expression in a condition of an expression in an Open SQL statement. Logical expressions sql\_cond can be formed from the relational expressions shown here for the following conditions:

-   [Filter condition](javascript:call_link\('abenopen_sql_path_filter.htm'\)) of a [path expression](javascript:call_link\('abenopen_sql_path.htm'\))

-   [WHEN condition](javascript:call_link\('abensql_searched_case.htm'\)) of a complex [case distinction](javascript:call_link\('abensql_case.htm'\))

The relational expressions that can be used in expressions are a subset of the [relational expressions for statements](javascript:call_link\('abenwhere_logexp.htm'\)), but also allow [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as operands on the right side.

-   operand1 =*|*<>*|*\>*|*<*|*\>=*|*<= operand2

Compares the operand operand1 on the left side with the operand operand2 on the right side. The same applies to relational operators as in a [condition for statements](javascript:call_link\('abenwhere_logexp_compare.htm'\)). The operands of size comparisons can have the following data types here:

-   Numeric data types: All except decimal floating point numbers

-   Character-like data types: CHAR, CLNT, LANG, CUKY, UNIT or c, NUMC or n, DATS or d, TIMS or t.

The operand operand2 on the right side can be any [SQL expression](javascript:call_link\('abapsql_expr.htm'\)), which covers columns, literals, host variables, and host expressions. If an operand of the comparison has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of this comparison is unknown.

-   operand *\[*NOT*\]* BETWEEN operand1 AND operand2

Checks the assignment to an interval. The relational expression functions in the same way as the corresponding [condition for statements](javascript:call_link\('abenwhere_logexp_interval.htm'\)). The addition NOT is not possible. The operands can have the same data types as for size comparisons. Any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand1 and operand2, which covers columns, literals, host variables, and host expressions. If one of the operands has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the check is unknown.

-   operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]*

Pattern comparison. The relational expression functions in the same way as the corresponding [condition for statements](javascript:call_link\('abenwhere_logexp_like.htm'\)). The addition NOT is not possible. The same applies to the operands as in the [condition for statements](javascript:call_link\('abenwhere_logexp_like.htm'\)). The operands must be character-like and only literals and [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) prefixed with an escape character @ can be specified on the right side.

-   operand IS *\[*NOT*\]* NULL

Checks for the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"). The relational expression functions in the same way as the corresponding [condition for statements](javascript:call_link\('abenwhere_logexp_null.htm'\)).

The operands on the left side can be any SQL expressions, which covers columns, literals, host variables, and host expressions. With the exception of LIKE, all occurring columns and expressions can have any dictionary types (except for ACCP, DF16\_SCL (obsolete), DF34\_SCL (obsolete), LCHR, LRAW, PREC, RAWSTRING, and STRING). Literals, host variables, and host expressions can have any ABAP types, except for string and xstring.

It must be possible to [compare](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) the data types of the operands of a relational expression. If this is not the case, a statically specified type raises a syntax error and a dynamically specified type raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS. Unlike in [conditions for statements](javascript:call_link\('abenwhere_logexp.htm'\)), operands of the types DATS and TIMS are handled like regular flat character-like operands.

If an expression is used for a selection, the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific data source of a query or of the target of a write statement can only be used as an operand in an SQL condition of the expression if automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is deactivated for the query or write by the addition CLIENT SPECIFIED. This is not possible for [filter conditions](javascript:call_link\('abenopen_sql_path_filter.htm'\)).

Notes

-   Because an expression is passed to the database essentially unchanged, the possible relational expressions and their operands represent only a subset of the [relational expressions for statements](javascript:call_link\('abenwhere_logexp.htm'\)). In some constructs, however, a WHERE, HAVING, or ON condition of a statement is processed by the ABAP runtime environment before the pass, to ensure platform-independent behavior.

-   The addition NOT cannot currently be specified in front of BETWEEN and LIKE. Instead, the operator [NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)) can be used in front of the full expression.