  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) → 

Table Buffering - SQL Expressions

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are usually evaluated on the database and and any [built-in functions](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) used as operands of these expressions are usually executed on the database too. If used, SQL expressions then bypass table buffering. The following expressions and functions, however, have an implementation in the table buffer and table buffering is not bypassed when they are used in reads (including nested reads).

-   [Elementary SQL expression](javascript:call_link\('abensql_elem.htm'\))

-   [Built-in SQL function](javascript:call_link\('abensql_builtin_func.htm'\))

-   [Numeric functions](javascript:call_link\('abensql_arith_func.htm'\)) ABS, CEIL, DIV, FLOOR, and MOD

-   [String functions](javascript:call_link\('abensql_string_func.htm'\)) CONCAT, CONCAT\_WITH\_SPACE, and SUBSTRING

-   [Null value function](javascript:call_link\('abensql_coalesce.htm'\)) COALESCE (in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list only)

-   [Arithmetic expressions](javascript:call_link\('abensql_arith.htm'\))

-   [Case distinctions](javascript:call_link\('abensql_case.htm'\)) (in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list only)

The expressions and functions can be used in both [SELECT](javascript:call_link\('abapselect_list.htm'\)) lists and in [WHERE](javascript:call_link\('abapwhere.htm'\)) clauses.

If a catchable exception is raised when an SQL expression is evaluated in the table buffer, it is wrapped by the class CX\_SY\_OPEN\_SQL\_DB and can be handled using this class. The attribute PREVIOUS of the associated exception object is then given the name of the original exception class.

Notes

-   When an SQL expression is evaluated in the table buffer, the same results are produced as on the database and not as in the corresponding ABAP evaluation. The following are some examples:

-   Evaluations of the functions [DIV](javascript:call_link\('abensql_arith_func.htm'\)) and [MOD](javascript:call_link\('abensql_arith_func.htm'\)) that are not the same as calculations with the identically named [ABAP operators](javascript:call_link\('abenarith_operators.htm'\)).

-   Operands of the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) that do not have trailing blanks on the database, unlike in ABAP.

-   Any [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") produced as results of nested expressions (for example in the [COALESCE](javascript:call_link\('abensql_coalesce.htm'\)) function or in [comparisons](javascript:call_link\('abenosql_expr_logexp.htm'\))) are handled as null values.

-   The result of a [relational expression](javascript:call_link\('abenwhere_logexp.htm'\)) with columns that contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).

-   If an SQL expression can be evaluated in the table buffer, any [internal tables](javascript:call_link\('abapselect_itab.htm'\)) used as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") can also be evaluated on AS ABAP rather than their content having to be transported to the database. .