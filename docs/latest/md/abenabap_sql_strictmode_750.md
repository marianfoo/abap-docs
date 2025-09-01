  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.50%2C%20ABENABAP_SQL_STRICTMODE_750%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.50

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-750-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_750_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.50 applies to all ABAP SQL statements that use one of the following properties introduced in [ABAP release 7.50](javascript:call_link\('abennews-750-abap_sql.htm'\)):

-   Use of [UNION](javascript:call_link\('abapunion.htm'\)).
-   Use of [host expressions](javascript:call_link\('abenabap_sql_host_expressions.htm'\))
-   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) on the left-hand side of a [relational expression](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) of an [SQL condition](javascript:call_link\('abenasql_cond.htm'\))
-   Specifying columns on the right side of an interval condition [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))
-   Shared use of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") with DDIC database tables or DDIC views in a SELECT statement.
-   In a [cast expression](javascript:call_link\('abensql_cast.htm'\)), other [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are used as operands or FLTP is not the only data type that can be specified as the target type.
-   In an [ON](javascript:call_link\('abapselect_join.htm'\)) condition
    -   of any join, an [SQL expression](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") is used on the left side,
    -   of an outer join, the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) is used.
-   Use of [UNION](javascript:call_link\('abapunion.htm'\)) in a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").
-   Use of a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) as an operand n after [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)) or [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.
-   [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.
-   Implicit pass of a value to an input parameter of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), annotated with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.
-   A [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)) started with [FIELDS](javascript:call_link\('abapselect.htm'\)) after the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) in the [SELECT statement](javascript:call_link\('abapselect.htm'\)).
-   Access to a [global temporary table (GTT)](javascript:call_link\('abenddic_database_tables_gtt.htm'\)).
-   Use of the numeric function [ROUND](javascript:call_link\('abensql_arith_func.htm'\)) or the string functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [LPAD](javascript:call_link\('abensql_string_func.htm'\)), [LENGTH](javascript:call_link\('abensql_string_func.htm'\)), [LTRIM](javascript:call_link\('abensql_string_func.htm'\)), [REPLACE](javascript:call_link\('abensql_string_func.htm'\)), [RIGHT](javascript:call_link\('abensql_string_func.htm'\)), [RTRIM](javascript:call_link\('abensql_string_func.htm'\)), and [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)).
-   [Path expression](javascript:call_link\('abenabap_sql_path.htm'\)) as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)).
-   Subquery as [data source](javascript:call_link\('abapinsert_source.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).
-   [Comparison](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) of columns or expressions of the types DF16\_DEC or DF34\_DEC with other numeric types (except with itself) or comparison of columns or expressions of the type SSTRING with other types (except with itself) in a [CASE expression](javascript:call_link\('abensql_case.htm'\)).
-   Use of the target type INT8 in a [CAST expression](javascript:call_link\('abensql_cast.htm'\)).

Rules for the Strict Mode   

The strict mode in ABAP release 7.50 covers all rules of the [strict mode in ABAP release 7.40 SP08](javascript:call_link\('abenabap_sql_strictmode_740_sp08.htm'\)), plus the following rules:

-   In a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, it is not possible to access to a [CDS-managed DDIC view (obsolete)](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a corresponding CDS view as an [obsolete data source](javascript:call_link\('abenabap_sql_cds_obsolete.htm'\)).
-   No [writes](javascript:call_link\('abenabap_sql_writing.htm'\)) can be performed on DDIC database tables or DDIC views with a [replacement object](javascript:call_link\('abenreplacement_object_glosry.htm'\) "Glossary Entry").
-   If it is not possible to make a [lossless](javascript:call_link\('abapmove_exact.htm'\)) read on an [untyped literal](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), a syntax error occurs.
-   A column can occur only once in a single [update expression](javascript:call_link\('abapupdate_set_expression.htm'\)) after the addition [SET](javascript:call_link\('abapupdate_source.htm'\)) of the statement [UPDATE](javascript:call_link\('abapupdate.htm'\)).
-   If the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is specified as \*, [HAVING clauses](javascript:call_link\('abaphaving_clause.htm'\)) without [GROUP BY clauses](javascript:call_link\('abapgroupby_clause.htm'\)) are forbidden.
-   The [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause must be specified as the last clause of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement and the ABAP-specific additions [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) of the SELECT statement must be specified after the INTO clause.
-   If an [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)) statement is checked in accordance with the rules of the strict mode from ABAP release 7.60, all [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) must be prefixed with the escape character @ in the statements [FETCH](javascript:call_link\('abapfetch.htm'\)) and [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)) that access the open cursor.

Hint

If used in the statements FETCH and CLOSE CURSOR, the escape character @ is ignored by the checks made on the associated statement OPEN CURSOR.