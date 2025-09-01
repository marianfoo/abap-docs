---
title: "SELECT - HAVING"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm) Syntax ... HAVING sql_cond(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) ... Effect The addition HAVING limits the number of rows in groups in the results set o
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm"
abapFile: "abaphaving_clause.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abaphaving", "clause"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) → 

SELECT - HAVING

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm) ...

Effect

The addition HAVING limits the number of rows in groups in the results set of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") by using the logical expression sql\_cond on these rows. The logical expression evaluates the content of row groups. Those rows are placed in the results set for which the logical expression is true.

The following should be noted with respected to the operands of the relational expressions of the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm):

-   [Columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) in the [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) specified after [FROM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) do not need to be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) and must be specified after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) instead. For each group, the value used for the grouping is evaluated.
    
-   If [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) are used on the left side, either the same expression must be specified or all columns of the expression must be specified individually after [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm).
    
-   In a HAVING condition, any aggregate expressions [agg\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) can be used on both sides of comparisons. Any columns and [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) constructed using the columns can be specified as arguments of the aggregate functions. These columns do not need to be specified after GROUP BY. This kind of aggregate expression is evaluated for each row group defined in GROUP BY and its result is used as an operand in the comparison. The same applies to the SQL expressions in the aggregate functions as in the SELECT list. The aggregate functions of the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) and the HAVING clause and the SQL expressions specified as arguments here do not need to be the same.
    

If a HAVING clause is specified, all columns in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) that are not arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm) here must be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm). If the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) is specified as \*, HAVING clauses without [GROUP BY clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) cannot be used.

The [client column](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-specific data source can only be used in the HAVING condition if automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") is switched off using the addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm).

Notes

-   Columns that are specified as arguments of aggregate functions after HAVING can also be specified after GROUP BY.
    
-   If a column is specified using a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm), both the parameter passing and any attributes specified are respected by comparisons between the SELECT list and the HAVING clause.
    
-   If the addition GROUP BY is not specified or the data object column\_syntax in the dynamic column specification after GROUP BY is initial, the addition HAVING can only be specified if the entire results set is grouped into a line (that is, if there are only aggregate expressions specified after SELECT). In this case, only aggregate expressions can be specified as operands in sql\_cond. These operands are evaluated for all rows in the results set.
    
-   When an SQL expression is specified on the left side of the HAVING condition or a host expression occurs on the right side, the syntax check is performed in [strict mode from Release 7.50](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.
    

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

[SQL Expressions, Use in Aggregate Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_in_aggregates_abexa.htm)