  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - ABAP SQL Engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Engine%2C%20Supported%20SQL%20Expressions%2C%20ABENSQL_ENGINE_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

ABAP SQL Engine, Supported SQL Expressions

The evaluation of [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) as well as the execution of [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_builtin_functions.htm) as operands of such expressions is not fully supported by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") and must be processed partly on the database. The following expressions and functions can be processed by the ABAP SQL engine. Their use in read accesses (even nested) does not lead to the bypassing of table buffering and does not cause the transport of an internal table accessed with [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) to the database:

-   [Elementary SQL expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_elem.htm)
-   [Built-in SQL function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_builtin_func.htm)
    -   [Numeric functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) ABS, CEIL, DIV, FLOOR, and MOD
    -   [String functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) CONCAT, CONCAT\_WITH\_SPACE, LEFT, LENGTH, LOWER, RIGHT, UPPER and SUBSTRING
    -   [Null value function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm) COALESCE (in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) list only)
-   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm)
-   [Case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm) (in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) list only)
-   A standalone [aggregate function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) COUNT( \* ) in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm).

The expressions and functions can be used in both [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) lists and in [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) clauses.

If a catchable exception is raised when an SQL expression is processed by the ABAP SQL engine, it is wrapped by the class CX\_SY\_OPEN\_SQL\_DB and can be handled using this class. The attribute PREVIOUS of the associated exception object is then given the name of the original exception class.

Hints

-   When an SQL expression is processed by the ABAP SQL engine, the same results are produced as on the database and not as in the corresponding ABAP evaluation. The following are some examples:
    -   Evaluations of the functions [DIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) and [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) that are not the same as calculations with the identically named [ABAP operators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm).
    -   Operands of the type [SSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) that do not have trailing blanks on the database, unlike in ABAP.
    -   Any [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") produced as results of nested expressions, for example in the [COALESCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm) function or in [comparisons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_expr_logexp.htm), are handled as null values.
    -   The result of a [relational expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) with columns that contain [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_null.htm).
    -   Calculations for built-in type [DECFLOAT16](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) are done with the respective arithmetic. The ABAP [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_type.htm) for [decfloat16](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) is [decfloat34](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) in contrast.
-   When calculating with the built-in types [DF16\_DEC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2) and [DF34\_DEC](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_2), the ABAP SQL engine uses the respective decimal floating point arithmetic, while the database uses packed number arithmetic. This can lead to different results.