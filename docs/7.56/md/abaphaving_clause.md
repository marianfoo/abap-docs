---
title: "SELECT, HAVING"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm) Syntax ... HAVING sql_cond(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) ... Effect The addition HAVING limits the number of rows in groups in the result set of a
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm"
abapFile: "abaphaving_clause.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abaphaving", "clause"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_clauses.htm) → 

SELECT, HAVING

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm)

Syntax

... HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) ...

Effect

The addition HAVING limits the number of rows in groups in the result set of a [query](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquery_glosry.htm "Glossary Entry") by using the logical expression sql\_cond on these rows. The logical expression evaluates the content of row groups. Those rows are placed in the result set for which the logical expression is true.

The following applies to the operands of the relational expressions of the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_stmt_logexp.htm):

-   Non-aggregated [columns](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_columns.htm) used as operands in the [data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) do not have to be listed as such in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) and are listed after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) instead. For each group, the value used for the grouping is evaluated.
-   If [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) are used on the left side, either the same expression must be specified or all non-aggregated columns of the expression must be specified individually after [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm).
-   In a HAVING condition, aggregate expressions [sql\_agg](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm) can be used directly or as operands of SQL expressions on both sides of comparisons. Columns that are specified as the argument of an aggregate expression directly or via an SQL expression do not need to be listed after GROUP BY. This kind of aggregate expression is evaluated for each row group defined in GROUP BY and its result is used as an operand in the comparison. The aggregate functions of the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) and the HAVING clause and the SQL expressions specified as arguments here do not need to be the same.

If a HAVING clause is specified, all columns in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) that are not arguments of [aggregate expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_aggregate.htm) here must be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm). If the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) is specified as \*, HAVING clauses without [GROUP BY clauses](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) cannot be used.

[Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm) applies to the HAVING clause. The [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source cannot be used as an operand in the HAVING condition.

Hints

-   Aggregate expressions on the left side of a logical expression after HAVING are SQL expressions. Thus, all SQL expressions except for window expressions can be specified there. Aggregate expressions on the right side of a logical expression are an exception to the rule that no SQL expressions can be specified here.
-   Columns that are specified as arguments of aggregate expressions after HAVING can also be specified after GROUP BY.
-   If a column is specified using a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_path.htm), both the parameter passing and any attributes specified are respected by comparisons between the SELECT list and the HAVING clause.
-   If the addition GROUP BY is not specified or the data object column\_syntax in the dynamic column specification after GROUP BY is initial, the addition HAVING can only be specified if the entire result set is grouped into a row, that is, if there are only aggregate expressions specified after SELECT. In this case, only those aggregate expressions can be specified as operands in sql\_cond that are evaluated for all rows in the result set.
-   The [client column](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent data source can still be used in the HAVING condition if implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry") is switched off using the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm).
-   When an SQL expression is specified on the left side of the HAVING condition or a host expression occurs on the right side, the syntax check is performed in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.

Example

Reading of the number of bookings in each class and for each flight date of a connection.

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

[SQL Expressions, Use in Aggregate Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_in_aggregates_abexa.htm)