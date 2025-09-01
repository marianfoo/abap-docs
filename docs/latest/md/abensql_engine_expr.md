  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - ABAP SQL Engine](javascript:call_link\('abenabap_sql_engine.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Supported%20SQL%20Expressions%2C%20ABENSQL_ENGINE_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

ABAP SQL Engine, Supported SQL Expressions

The evaluation of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as well as the execution of [built-in functions](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) as operands of such expressions is not fully supported by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry") and must be processed partly on the database. The following expressions and functions can be processed by the ABAP SQL engine. Their use in read accesses (even nested) does not lead to the bypassing of table buffering and does not cause the transport of an internal table accessed with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) to the database:

-   [Elementary SQL expression](javascript:call_link\('abensql_elem.htm'\))
-   [Built-in SQL function](javascript:call_link\('abensql_builtin_func.htm'\))
    -   [Numeric functions](javascript:call_link\('abensql_arith_func.htm'\)) ABS, CEIL, DIV, FLOOR, and MOD
    -   [String functions](javascript:call_link\('abensql_string_func.htm'\)) CONCAT, CONCAT\_WITH\_SPACE, LEFT, LENGTH, LOWER, RIGHT, UPPER and SUBSTRING
    -   [Null value function](javascript:call_link\('abensql_coalesce.htm'\)) COALESCE (in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list only)
-   [Arithmetic expressions](javascript:call_link\('abensql_arith.htm'\))
-   [Case distinctions](javascript:call_link\('abensql_case.htm'\)) (in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list only)
-   A standalone [aggregate function](javascript:call_link\('abensql_agg_func.htm'\)) COUNT( \* ) in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)).

The expressions and functions can be used in both [SELECT](javascript:call_link\('abapselect_list.htm'\)) lists and in [WHERE](javascript:call_link\('abapwhere.htm'\)) clauses.

If a catchable exception is raised when an SQL expression is processed by the ABAP SQL engine, it is wrapped by the class CX\_SY\_OPEN\_SQL\_DB and can be handled using this class. The attribute PREVIOUS of the associated exception object is then given the name of the original exception class.

Hints

-   When an SQL expression is processed by the ABAP SQL engine, the same results are produced as on the database and not as in the corresponding ABAP evaluation. The following are some examples:
    -   Evaluations of the functions [DIV](javascript:call_link\('abensql_arith_func.htm'\)) and [MOD](javascript:call_link\('abensql_arith_func.htm'\)) that are not the same as calculations with the identically named [ABAP operators](javascript:call_link\('abenarith_operators.htm'\)).
    -   Operands of the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)) that do not have trailing blanks on the database, unlike in ABAP.
    -   Any [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") produced as results of nested expressions, for example in the [COALESCE](javascript:call_link\('abensql_coalesce.htm'\)) function or in [comparisons](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)), are handled as null values.
    -   The result of a [relational expression](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) with columns that contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)).
    -   Calculations for built-in type [DECFLOAT16](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) are done with the respective arithmetic. The ABAP [calculation type](javascript:call_link\('abenarith_type.htm'\)) for [decfloat16](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) is [decfloat34](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) in contrast.
-   When calculating with the built-in types [DF16\_DEC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) and [DF34\_DEC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2), the ABAP SQL engine uses the respective decimal floating point arithmetic, while the database uses packed number arithmetic. This can lead to different results.