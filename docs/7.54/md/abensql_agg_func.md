---
title: "Syntax"
description: |
  ... AVG( DISTINCT col(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) AS dtype(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm) )  MAX( DISTINCT sql_exp(https://help.sap.com/doc/abapdocu_754_index
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_agg_func.htm"
abapFile: "abensql_agg_func.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "try", "class", "data", "types", "abensql", "agg", "func"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) → 

sql\_exp - agg\_func

Syntax

... AVG( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*[AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm)*\]* )
  *|* MAX( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* MIN( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* SUM( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* PRODUCT( col )
  *|* STRING\_AGG( [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm)*\[*, sep*\]* *\[*ORDER BY [col1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*ASCENDING*|*DESCENDING*\]*,
                                        [col2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) *\[*ASCENDING*|*DESCENDING*\]*, ...*\]* )
  *|* COUNT( *\[*DISTINCT*\]* [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) )
  *|* COUNT( \* )
  *|* COUNT(\*)
  *|* [GROUPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengrouping_function.htm)( [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) ) ...

Variants:

[1\. ... AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )](#!ABAP_VARIANT_1@1@)
[2\. ... MAX( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_2@2@)
[3\. ... MIN( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_3@3@)
[4\. ... SUM( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_4@4@)
[5\. ... PRODUCT( col )](#!ABAP_VARIANT_5@5@)
[6\. ... STRING\_AGG( sql\_exp*\[*, sep*\]* *\[*ORDER BY ...*\]* )](#!ABAP_VARIANT_6@6@)
[7\. ... COUNT( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_7@7@)
[8\. ... COUNT( \* )](#!ABAP_VARIANT_8@8@)
[9\. ... COUNT( \* )](#!ABAP_VARIANT_9@9@)
[10\. ... GROUPING( col )](#!ABAP_VARIANT_10@10@)

Effect

[Aggregate function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_function_glosry.htm "Glossary Entry") in ABAP SQL. An aggregate function aggregates the values of the rows in a specific set of rows to a single value. Aggregate functions can be used in the following places:

-   As a standalone [aggregate expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") [agg\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm) in specific operand positions of a query. The evaluated row set is the full results set of the query or a group created using the addition [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm). The general rules apply.
    
-   As a [window function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_function_glosry.htm "Glossary Entry") [win\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm) in a [window expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm). The evaluated row set is the current [window](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwindow_glosry.htm "Glossary Entry") or a box inside the window. The general rules apply, plus the rules for window functions.
    
-   As an aggregate function in a [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_agg_navis.htm). The evaluated row set consists of the [hierarchy nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_node_glosry.htm "Glossary Entry") determined by the navigator. The general rules apply, plus the rules for hierarchy aggregate navigators.
    

The following table shows which aggregate functions can be used in which places:

\-

[agg\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm)

[win\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_over.htm)

[HIERARCHY\_DESCENDANTS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_desc_agg.htm)

[HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm)

AVG

x

x

\-

\-

MAX

x

x

x

x

MIN

x

x

x

x

SUM

x

x

x

x

PRODUCT

\-

\-

\-

x

STRING\_AGG

x

\-

\-

x

COUNT

x

x

x

x

COUNT(\*)

x

x

x

x

GROUPING

x

\-

\-

\-

The following shared properties apply here:

-   The addition DISTINCT excludes duplicate values from the calculation in any operand positions in which it is specified.
    
-   If the argument of an aggregate function (except COUNT) has the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), it is ignored when the function is evaluated. The result is a null value only if all the rows in the column in question contain a null value.
    
-   The aggregate function COUNT counts rows and never produces the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry").
    
-   Arguments of type STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB cannot be handled using aggregate functions.
    

Note

The database platform determines whether an overflow occurs if the result of an aggregate function exceeds its value range. On some database platforms, intermediate results outside the value range are allowed. The overflow behavior of SQL expressions, on the other hand, is platform-independent. If an SQL expression in an aggregate expression produces an overflow, an exception is raised on every platform, even if a corresponding result of the aggregate function would not raise an exception on every platform.

Variant 1

... AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )

Effect

Determines the average value of the content of a column [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) in a row set. The optional addition [AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm) can be used to define the result type explicitly.

The data type of the column must be numeric. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed. The data type INT8 is only permitted in conjunction with the addition [AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm).

The implicit data type of the result for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry") is the corresponding data type (DECFLOAT16 or DECFLOAT34 (or DF16\_DEC or DF34\_DEC)) and is otherwise the type FLTP, a platform-dependent subtotal, or is determined by the addition [AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm).

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) cannot be specified as arguments for AVG.

Note

The result of the aggregate functions AVG in the data type FLTP is platform-dependent. The type of platform also determines whether the result of an aggregate expression AVG, which is used in a HAVING clause as a subtotal, is of type FLTP. The addition [AS dtype](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm) can be used to force the type FLTP.

Example

Determines the average value of all values in a column and checks the result.

DATA(n) = 9.
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @( VALUE #(
  FOR i = 0 UNTIL i > n
  ( id = CONV #( i ) num1 = i ) ) ).
SELECT AVG( num1 )
       FROM demo\_expressions
       INTO (@DATA(avg)).
ASSERT avg =  n / 2 .

Variant 2

... MAX( *\[*DISTINCT*\]* sql\_exp )

Variant 3

... MIN( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the maximum value or minimum value of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) in a row set. The data type of the result is the [external data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") of the result of the SQL expression.

The result of the SQL expression sql\_exp must be a numeric type (except for the [replacement types for decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_decimal_floating_point.htm)). If a single column [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) is specified for the expression, this column can also have any data type.

Example

Determines the minimum value and maximum value of all values in a column and checks the result.

DATA(n) = 9.
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @( VALUE #(
  FOR i = 0 UNTIL i > n
  ( id = CONV #( i ) num1 = i ) ) ).
SELECT MIN( num1 ) AS min, MAX( num1 ) AS max
       FROM demo\_expressions
       INTO (@DATA(min),@DATA(max)).
ASSERT min = 0.
ASSERT max = n.

Variant 4

... SUM( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the sum of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) in a row set. The data type of the result is the [external data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") of the result of the SQL expression.

The result of the SQL expression sql\_exp must be a numeric type (except for the [replacement types for decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_decimal_floating_point.htm)). If a single column [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) is specified for the expression, this column can have any numeric data type except DF16\_RAW and DF34\_RAW and except the obsolete data types DF16\_SCL and DF34\_SCL .

Note

If the aggregate function SUM is used for columns of types DECFLOAT16 or DF16\_DEC, it is best to use a target field with the data type decfloat34 to avoid overflows.

Example

Totals all values in a column and checks the result.

DATA(n) = 9.
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @( VALUE #(
  FOR i = 0 UNTIL i > n
  ( id = CONV #( i ) num1 = i ) ) ).
SELECT SUM( num1 )
       FROM demo\_expressions
       INTO (@DATA(sum)).
ASSERT sum = ( n \* ( n + 1 ) ) / 2.

Variant 5

... PRODUCT( col )

Effect

Determines the product of the values of a column col in a row set. The data type of the result is the [external data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexternal_data_type_glosry.htm "Glossary Entry") of the column. The column must have a numeric type (except for the [replacement types for decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_decimal_floating_point.htm)).

Note

The aggregate function PRODUCT can currently be used only in the [hierarchy aggregate navigator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_agg_navi_glosry.htm "Glossary Entry") [HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_ancs_agg.htm).

Executable Example

See [Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhier_ancs_agg_abexa.htm)

Variant 6

... STRING\_AGG( sql\_exp*\[*, sep*\]* *\[*ORDER BY ...*\]* )

Effect

Chains the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) in a row set. The data type of the result is SSTRING with the length 1333. If the string in question is greater then 1333, a handleable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised The results of the SQL expression sql\_exp must be a flat character-like data type like CHAR, SSTRING, DATS, or TIMS.

An optional separator sep separated by a comma can be specified after the SQL expression. If sep is specified, its content is inserted into the string between successive results of the SQL expression. If sep is not specified, these results are appended to each other directly. sep can be a [literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_host_literals.htm) or a [host constant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) c, d, t, n, or string with a maximum of 1333 characters.

The optional addition ORDER BY can be used to define the order in which the results of the SQL expression are chained. If ORDER BY is not specified, the order is undefined. ORDER BY is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the row set. A column can only be specified directly using the column name [col1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm), [col2 ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) Alias names defined using [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm) cannot be specified. The additions ASCENDING and DESCENDING determine whether the rows are sorted in ascending or descending order by the column in question. The default is ASCENDING.

Note

-   The addition DISTINCT cannot be specified for the aggregate function STRING\_AGG.
    
-   The aggregate function STRING\_AGG cannot be used as a [window function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm).
    
-   When used, the aggregate function STRING\_AGG requires the [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_754.htm).
    

Executable Example

[SQL Expressions, Aggregate Function string\_agg](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_expr_string_agg_abexa.htm)

Variant 7

... COUNT( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the number of distinct values of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) in a row set.

-   If the addition DISTINCT is not specified, COUNT determines all rows in which the result of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) is not the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry")

-   If the addition DISTINCT is specified, COUNT determines the number of distinct values of the results of the SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm). [Null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") are ignored here.

The data type of the result is INT4. The SQL expression sql\_exp can be a result with any type (except for the [replacement types for decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_decimal_floating_point.htm)). If a single column [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) is specified for the expression, this column can have any data type.

Note

An aggregate function COUNT without the addition DISTINCT requires the [strict mode from Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_754.htm).

Example

Determines the number of airlines flying to New York.

SELECT COUNT( DISTINCT carrid )
       FROM spfli
       WHERE cityto = 'NEW YORK'
       INTO @DATA(count).

Variant 8

... COUNT( \* )

Variant 9

... COUNT( \* )

Effect

The two spellings have the same meaning and, regardless of a specific value, produce the number of rows in a row set: The following applies to the data type of the result:

-   If used as an aggregate expression [agg\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_aggregate.htm):
    

-   If COUNT( \* ) or COUNT(\*) is specified as an aggregate expression in a SELECT list with other columns or together with a [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause, the data type of the result is INT4 and no numbers greater than 2147483647 can be determined.

-   If COUNT( \* ) or COUNT(\*) is specified as the only column and the [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgroupby_clause.htm) clause is not specified as an aggregate expression in a SELECT list, the internal data type of the result is INT8 and numbers up to +9223372036854775807 can be determined. The system field sy-dbcnt is set to the value -1 in results outside of the value range of the type i.

-   If used as a window function [win\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_win_func.htm) and in [hierarchy aggregate navigators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_agg_navis.htm), the data type of the result is INT8.
    

Note

A target object of the type INT8, p, or decfloat34 must be specified if a standalone function COUNT( \* ) or COUNT(\*) expects a value greater than the value range of INT4.

Example

Example for counting rows using COUNT. The single-row result contains the values 7, 2, and 10 in its columns.

-   10 is the total number of rows in the results set determined using COUNT(\*) and is not dependent on a single value.
    
-   7 is the number of rows determined using COUNT (without DISTINCT) in which [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm) does not produce the null value.
    
-   2 is the number of distinct results "X" and "Y” determined using COUNT und DISTINCT of the [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm) while ignoring the null value.
    

The difference 3 of the results of COUNT(\*) and COUNT without DISTINCT is the number of rows in which the [case distinction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_simple_case.htm) produces the null value.

DELETE FROM demo\_expressions.
INSERT demo\_expressions
       FROM TABLE @( VALUE #(
        FOR i = 1 UNTIL i > 10 ( id = CONV #( i ) num1 = i ) ) ).
SELECT FROM demo\_expressions
       FIELDS
         COUNT(
           CASE WHEN num1 < 4 THEN 'X'
                WHEN num1 BETWEEN 4 AND 7 THEN 'Y' END ) AS cnt,
         COUNT( DISTINCT
            CASE WHEN num1 < 4 THEN 'X'
                 WHEN num1 BETWEEN 4 AND 7 THEN 'Y' END ) AS cntdist,
         COUNT(\*) AS cntstar
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Variant 10

... GROUPING( col )

Effect

The grouping function [GROUPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengrouping_function.htm) can be used to verify whether a column [col](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) is part of the aggregation. The grouping function can be used only if the GROUP BY clause contains the addition GROUPING SETS. The data type of the result of the grouping function is [INT1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm). [SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) cannot be specified as arguments for GROUPING. More information can be found in [sql\_agg - GROUPING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengrouping_function.htm).

Executable Example

[GROUPING, Aggregate Function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengrouping_function_abexa.htm)

Continue
[sql\_agg - AVG, AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_avg_as.htm)