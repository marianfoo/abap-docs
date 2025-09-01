  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\)) →  [SELECT clauses](javascript:call_link\('abenselect_clauses.htm'\)) → 

SELECT - HAVING

[Quick Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... HAVING [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)) ...

Effect

The addition HAVING limits the number of rows in groups in the results set of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") by using the logical expression sql\_cond on these rows. The logical expression evaluates the content of row groups. Those rows are placed in the results set for which the logical expression is true.

The following should be noted with respected to the operands of the relational expressions of the logical expression [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)):

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) in the [data sources](javascript:call_link\('abapselect_data_source.htm'\)) specified after [FROM](javascript:call_link\('abapfrom_clause.htm'\)) do not need to be specified in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and must be specified after the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) instead. For each group, the value used for the grouping is evaluated.
    
-   If [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are used on the left side, either the same expression must be specified or all columns of the expression must be specified individually after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).
    
-   In a HAVING condition, any aggregate expressions [agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\)) can be used on both sides of comparisons. Any columns and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) constructed using the columns can be specified as arguments of the aggregate functions. These columns do not need to be specified after GROUP BY. This kind of aggregate expression is evaluated for each row group defined in GROUP BY and its result is used as an operand in the comparison. The same applies to the SQL expressions in the aggregate functions as in the SELECT list. The aggregate functions of the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) and the HAVING clause and the SQL expressions specified as arguments here do not need to be the same.
    

If a HAVING clause is specified, all columns in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) that are not arguments of [aggregate functions](javascript:call_link\('abapselect_aggregate.htm'\)) here must be specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)). If the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is specified as \*, HAVING clauses without [GROUP BY clauses](javascript:call_link\('abapgroupby_clause.htm'\)) cannot be used. The addition HAVING cannot be specified for [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry") and [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry").

The [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific data source can only be used in the HAVING condition if automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is switched off using the addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)).

Notes

-   If no [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) grouping is applied to columns specified after HAVING outside of aggregate functions, a syntax error occurs in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08. Outside of these strict modes, a syntax check warning is produced and a non-catchable exception is raised. The same applies to columns specified directly in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) when a HAVING clause is specified, but that are not specified after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)).
    
-   If the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) is specified as \* and a HAVING clause is used without a [GROUP BY clause](javascript:call_link\('abapgroupby_clause.htm'\)), a syntax error is raised in [strict mode from 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)).
    
-   When an SQL expression is specified on the left side of the HAVING condition or a host expression occurs on the right side, the syntax check is performed in [strict mode from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.
    
-   Columns that are specified as arguments of aggregate functions after HAVING can also be specified after GROUP BY.
    
-   If a column is specified using a [path expression](javascript:call_link\('abenopen_sql_path.htm'\)), both the parameter passing and any attributes specified are respected by comparisons between the SELECT list and the HAVING clause.
    
-   If the addition GROUP BY is not specified or the data object column\_syntax in the dynamic column specification after GROUP BY is initial, the addition HAVING can only be specified if the entire results set is grouped into a line (that is, if there are only aggregate expressions specified after SELECT). In this case, only aggregate expressions can be specified as operands in sql\_cond. These operands are evaluated for all rows in the results set.
    

Example

Reads the number of bookings in each class and for each flight date of a connection.

DATA: carrid TYPE sbook-carrid VALUE 'LH',
      connid TYPE sbook-connid VALUE '400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
SELECT fldate, class, COUNT( \* ) AS class\_cnt
       FROM sbook
       WHERE connid = @connid
       GROUP BY carrid, fldate, class
       HAVING carrid = @carrid
       ORDER BY fldate, class
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Use in Aggregate Expressions](javascript:call_link\('abensql_expr_in_aggregates_abexa.htm'\))