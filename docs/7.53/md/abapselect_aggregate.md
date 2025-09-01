---
title: "Syntax"
description: |
  ...  AVG( DISTINCT col(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) AS dtype(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm) )  MAX( DISTINCT col(https://help.sap.com/doc/abapdocu_753_index_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm"
abapFile: "abapselect_aggregate.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abapselect", "aggregate"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) → 

ABAP SQL - Aggregate Expressions agg\_exp

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_shortref.htm)

Syntax

... *{* AVG( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) *\[*[AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm)*\]* )
    *|* MAX( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) )
    *|* MIN( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) )
    *|* SUM( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) )
    *|* COUNT( DISTINCT [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) )
    *|* COUNT( \* )
    *|* COUNT(\*)
    *|* [GROUPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_function.htm)( [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm)*|*[sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) ) *}* ...

Effect

[Aggregate expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") for the following:

-   Specifying [col\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_clause_col_spec.htm) for a column of the results set in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry")
    
-   Specifying an operand in the [HAVING clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry").
    

In an aggregate expression, a column [col](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") or an SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) is specified as an argument of one of the aggregate functions shown here. Each aggregate function calculates a single value from the values of the column or from the results of the SQL expression and from multiple rows of the results set of a query as follows. Here, the addition DISTINCT excludes duplicate values from the calculation:

-   AVG( *\[*DISTINCT*\]* col *\[*[AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm)*\]* )
    

Determines the average value of the contents of column col in the results set or in the current group. The data type of the column must be numeric. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed. The data type INT8 is only permitted in conjunction with the addition [AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm). The data type of the result for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") is the corresponding data type (DF16\_DEC or DF34\_DEC) and is otherwise the type FLTP, a platform-dependent subtotal, or is determined by the addition [AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm). SQL expressions cannot be specified as arguments.

-   MAX( *\[*DISTINCT*\]* col*|*sql\_exp )
    MIN( *\[*DISTINCT*\]* col*|*sql\_exp )
    

Determine the maximum value or minimum value of the values of the column col or of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) in the results set or the current group. The data type of the result is the [external data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") of the corresponding column or of the result of the SQL expression. A column with any data type can be specified for col. The result of an SQL expression sql\_exp must be a numeric type (except for the types for decimal floating point numbers).

-   SUM( *\[*DISTINCT*\]* col*|*sql\_exp )
    

Determines the total of the content of the column col or of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) in the results set or the current group. The data type of the result is the [external data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") of the corresponding column or of the result of the SQL expression. The data type of the column col must be a numeric type. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed. The result of an SQL expression sql\_exp must be a numeric type (except for the types for decimal floating point numbers).

-   COUNT( DISTINCT col*|*sql\_exp )
    

Determines the number of distinct values in the column col or of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) in the results set or the current group. The data type of the result is INT4. A column with any data type can be specified for col. An SQL expression sql\_exp can be a result with any type (except for the types for decimal floating point numbers).

-   COUNT( \* )
    COUNT( \* )
    

Determines the number of rows in the results set or in the current group. No column identifier is specified in this case.

-   If COUNT( \* ) or COUNT(\*) is specified in a SELECT list with other columns or together with a [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) clause, the data type of the result is INT4 and no numbers greater than 2147483647 can be determined.

-   If COUNT( \* ) or COUNT(\*) is specified as the only column and the [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) clause is not specified, the internal data type of the result is INT8 and numbers up to +9223372036854775807 can be determined. The system field sy-dbcnt is set to the value -1 in results outside of the value range of the type i.

-   [GROUPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_function.htm) ( col )
    

[Aggregate function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaggregate_function_glosry.htm "Glossary Entry") for [grouping sets](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_set_glosry.htm "Glossary Entry") [GROUPING SETS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgrouping_sets_clause.htm) in a [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm) clause of a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry"). The grouping function GROUPING makes it possible to identify whether a specific column in the results set in question was aggregated or not. A grouping function can be used only if the GROUP BY clause contains a [GROUPING SETS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgrouping_sets_clause.htm) addition. The data type of the result of the grouping function is [INT1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). More information can be found in [agg\_exp - GROUPING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengrouping_function.htm).

If the value of an aggregate expression is too large for the [target area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm), an exception is raised. More specifically, a target object of the type p or decfloat34 must be specified if a standalone function COUNT( \* ) or COUNT(\*) expects a value greater than the value range of INT4.

If the argument of an aggregate function has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), it is ignored when the function is evaluated. The result is a null value only if all the rows in the column in question contain a null value.

Notes

-   The database platform determines whether an overflow occurs if the result of an aggregate function exceeds its value range. On some database platforms, intermediate results outside the value range are allowed. The overflow behavior of SQL expressions, on the other hand, is platform-independent. An aggregate expression with an SQL expression raises an exception on every platform in the case of an overflow, even if a corresponding result of the aggregate function would not raise an exception on every platform.
    
-   The result of the aggregate functions AVG in the data type FLTP is platform-dependent. The type of platform also determines whether the result of an aggregate expression AVG, which is used in a HAVING clause as a subtotal, is of type FLTP. The addition [AS dtype](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm) can be used to force the type FLTP.
    
-   If the aggregate function SUM is used for columns of type DF16\_DEC, it is best to use a target field with the data type decfloat34 to avoid overflows.
    
-   If required, a column col can be specified to contain a [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) for associations of a CDS view.
    
-   If SQL expressions are specified as arguments of aggregate expressions, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Determines the number of airlines flying to New York.

SELECT COUNT( DISTINCT carrid )
       FROM spfli
       WHERE cityto = 'NEW YORK'
       INTO @DATA(count).

Example

Returns the flight date, the number of passengers, and the average and maximum luggage weight of all Lufthansa flights with the flight number 0400.

SELECT FROM sbook
       FIELDS fldate,
              COUNT( \* ) AS count,
              AVG( luggweight AS DEC( 16,4 ) ) AS avg,
              MAX( luggweight ) AS max
       WHERE carrid = 'LH' AND
             connid = '0400'
       GROUP BY fldate
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Use in Aggregate Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_in_aggregates_abexa.htm)

Continue
[agg\_exp - AVG, AS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_avg_as.htm)