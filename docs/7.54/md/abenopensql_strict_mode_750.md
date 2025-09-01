  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.50

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-750-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_750_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.50 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.50](javascript:call_link\('abennews-750-open_sql.htm'\)):

-   A [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) started with [FIELDS](javascript:call_link\('abapselect.htm'\)) after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) in the [SELECT statement](javascript:call_link\('abapselect.htm'\)).

-   Access to a [global temporary table (GTT)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).

-   Use of [UNION](javascript:call_link\('abapunion_clause.htm'\)).

-   Use of [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\))

-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) on the left side of a [WHERE condition](javascript:call_link\('abenwhere_logexp.htm'\)) or [HAVING condition](javascript:call_link\('abaphaving_clause.htm'\)).

-   In a [cast expression](javascript:call_link\('abensql_cast.htm'\)), other [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are used as operands or FLTP is not the only data type that can be specified as the target type.

-   Use of the numeric function [ROUND](javascript:call_link\('abensql_arith_func.htm'\)) or the string functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [LPAD](javascript:call_link\('abensql_string_func.htm'\)), [LENGTH](javascript:call_link\('abensql_string_func.htm'\)), [LTRIM](javascript:call_link\('abensql_string_func.htm'\)), [REPLACE](javascript:call_link\('abensql_string_func.htm'\)), [RIGHT](javascript:call_link\('abensql_string_func.htm'\)), [RTRIM](javascript:call_link\('abensql_string_func.htm'\)), and [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)).

-   In an [ON](javascript:call_link\('abapselect_join.htm'\)) condition

-   of any join, an [SQL expression](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") is used on the left side,

-   of an outer join, the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) is used.

-   [Comparison](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) of columns or expressions of the types DF16\_DEC or DF34\_DEC with other numeric types (except with itself) or comparison of columns of expressions of the type SSTRING with other types (except with itself) in a [CASE expression](javascript:call_link\('abensql_case.htm'\)).

-   When specified, columns on the right side of an interval condition [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))

-   [Subquery](javascript:call_link\('abapinsert_from_select.htm'\)) as data source of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).

-   [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") used together with database tables or classic views in a SELECT statement.

-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

-   Implicit pass of a value to an input parameter of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), annotated with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

-   [Path expression](javascript:call_link\('abenopen_sql_path.htm'\)) as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.50 covers all rules of the [strict mode in Release 7.40, SP08](javascript:call_link\('abenopensql_strict_mode_740_sp08.htm'\)), plus the following rules:

-   The [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause must be specified as the last clause of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement and the [optional additions](javascript:call_link\('abapselect_additions.htm'\)) of the SELECT statement must be specified after the INTO clause.

-   If an [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) statement is checked in accordance with the rules of the strict mode from Release 7.50, all [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) must be prefixed with the escape character @ in the statements [FETCH](javascript:call_link\('abapfetch.htm'\)) and [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)) that access the open cursor.

-   A column can occur only once in a single [update expression](javascript:call_link\('abapupdate_set_expression.htm'\)) after the addition [SET](javascript:call_link\('abapupdate_source.htm'\)) of the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)).

-   If the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is specified as \*, [HAVING clauses](javascript:call_link\('abaphaving_clause.htm'\)) without [GROUP BY clauses](javascript:call_link\('abapgroupby_clause.htm'\)) are forbidden.

-   No [writes](javascript:call_link\('abenopen_sql_writing.htm'\)) can be performed on database tables or classic views with a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").

-   In a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, it is not possible to access to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") as an [obsolete data source](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)).

-   If it is not possible to make a [lossless](javascript:call_link\('abapmove_exact.htm'\)) read on a [literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)), a syntax error occurs.

Note

If used in the statements FETCH and CLOSE CURSOR, the escape character @ is ignored by the checks made on the associated statement OPEN CURSOR.