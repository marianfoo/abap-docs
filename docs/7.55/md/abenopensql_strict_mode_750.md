  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Release-Dependent Syntax Check Modes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm) → 

Strict Mode in Release 7.50

-   [Conditions for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_750_1)

-   [Rules for the Strict Mode](#@@ITOC@@ABENOPENSQL_STRICT_MODE_750_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.50 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-750-open_sql.htm):

-   A [SELECT clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause.htm) started with [FIELDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) after the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) in the [SELECT statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm).

-   Access to a [global temporary table (GTT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm).

-   Use of [UNION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapunion_clause.htm).

-   Use of [host expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_expressions.htm)

-   [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) on the left side of a [WHERE condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwhere.htm) or [HAVING condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm).

-   In a [cast expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm), other [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) are used as operands or FLTP is not the only data type that can be specified as the target type.

-   Use of the numeric function [ROUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith_func.htm) or the string functions [CONCAT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [LPAD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [LENGTH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [LTRIM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [REPLACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [RIGHT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [RTRIM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), and [SUBSTRING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm).

-   In an [ON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm) condition

-   of any join, an [SQL expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expression_glosry.htm "Glossary Entry") is used on the left side,

-   of an outer join, the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_null.htm) is used.

-   [Comparison](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare_types.htm) of columns or expressions of the types DF16\_DEC or DF34\_DEC with other numeric types (except with itself) or comparison of columns of expressions of the type SSTRING with other types (except with itself) in a [CASE expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_case.htm).

-   When specified, columns on the right side of an interval condition [BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_interval.htm)

-   [Subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_from_select.htm) as data source of the statement [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_dbtab.htm).

-   [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") used together with database tables or classic views in a SELECT statement.

-   [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") specified as a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

-   Implicit pass of a value to an input parameter of a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"), annotated with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm), in the [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

-   [Path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) as a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm).

Rules for the Strict Mode

The strict mode in Release 7.50 covers all rules of the [strict mode in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), plus the following rules:

-   The [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) clause must be specified as the last clause of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement and the [optional additions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_additions.htm) of the SELECT statement must be specified after the INTO clause.

-   If an [OPEN CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_cursor.htm) statement is checked in accordance with the rules of the strict mode from Release 7.50, all [host variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) must be prefixed with the escape character @ in the statements [FETCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfetch.htm) and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclose_cursor.htm) that access the open cursor.

-   A column can occur only once in a single [update expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm) after the addition [SET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm) of the statement [UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate.htm).

-   If the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) is specified as \*, [HAVING clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) without [GROUP BY clauses](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm) are forbidden.

-   No [writes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_writing.htm) can be performed on database tables or classic views with a [replacement object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreplacement_object_glosry.htm "Glossary Entry").

-   In a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement, it is not possible to access to a [CDS database view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") as an [obsolete data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_cds_obsolete.htm).

-   If it is not possible to make a [lossless](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm) read on a [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm), a syntax error occurs.

Hint

If used in the statements FETCH and CLOSE CURSOR, the escape character @ is ignored by the checks made on the associated statement OPEN CURSOR.