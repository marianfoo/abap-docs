  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_agg](javascript:call_link\('abapselect_aggregate.htm'\)) → 

sql\_agg - agg\_func

Syntax

... AVG( *\[*DISTINCT*\]* [col](javascript:call_link\('abenabap_sql_columns.htm'\)) *\[*[AS dtype](javascript:call_link\('abapselect_avg_as.htm'\))*\]* )
  *|* MEDIAN( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* MAX( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* MIN( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* SUM( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* PRODUCT( col )
  *|* STDDEV( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* VAR( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* CORR( [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)),[sql\_exp2](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* CORR\_SPEARMAN( [sql\_exp1](javascript:call_link\('abapsql_expr.htm'\)),[sql\_exp2](javascript:call_link\('abapsql_expr.htm'\))  )
  *|* STRING\_AGG( [sql\_exp](javascript:call_link\('abapsql_expr.htm'\))*\[*, sep*\]* *\[*ORDER BY [col1](javascript:call_link\('abenabap_sql_columns.htm'\)) *\[*ASCENDING*|*DESCENDING*\]*,
                                         [col2](javascript:call_link\('abenabap_sql_columns.htm'\)) *\[*ASCENDING*|*DESCENDING*\]*, ...*\]* )
  *|* COUNT( *\[*DISTINCT*\]* [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) )
  *|* COUNT( \* )
  *|* COUNT(\*)
  *|* [GROUPING](javascript:call_link\('abengrouping_function.htm'\))( [col](javascript:call_link\('abenabap_sql_columns.htm'\)) ) ...
  *|* [ALLOW\_PRECISION\_LOSS( ... )](javascript:call_link\('abapselect_allow_precision_loss.htm'\))

Variants:

[1\. ... AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )](#!ABAP_VARIANT_1@1@)
[2\. ... MEDIAN( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_2@2@)
[3\. ... MAX( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_3@3@)
[4\. ... MIN( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_4@4@)
[5\. ... SUM( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_5@5@)
[6\. ... PRODUCT( col )](#!ABAP_VARIANT_6@6@)
[7\. ... STDDEV( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_7@7@)
[8\. ... VAR( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_8@8@)
[9\. ... CORR( sql\_exp1,sql\_exp2 )](#!ABAP_VARIANT_9@9@)
[10\. ... CORR\_SPEARMAN( sql\_exp1,sql\_exp2 )](#!ABAP_VARIANT_10@10@)
[11\. ... STRING\_AGG( sql\_exp*\[*, sep*\]* *\[*ORDER BY ...*\]* )](#!ABAP_VARIANT_11@11@)
[12\. ... COUNT( *\[*DISTINCT*\]* sql\_exp )](#!ABAP_VARIANT_12@12@)
[13\. ... COUNT( \* )](#!ABAP_VARIANT_13@13@)
[14\. ... COUNT(\*)](#!ABAP_VARIANT_14@14@)
[15\. ... GROUPING( col )](#!ABAP_VARIANT_15@15@)
[16\. ... ALLOW\_PRECISION\_LOSS( ... )](#!ABAP_VARIANT_16@16@)

Effect

[Aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") in ABAP SQL. An aggregate function aggregates the values of the rows in a specific set of rows to a single value. Aggregate functions can be used in the following places:

-   As a standalone [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") [agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\)) in specific operand positions of a query. The evaluated row set is the full result set of the query or a group created using the addition [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)). The general rules described here apply.
-   As a [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") [win\_func](javascript:call_link\('abensql_win_func.htm'\)) in a [window expression](javascript:call_link\('abapselect_over.htm'\)). The evaluated row set is the current [window](javascript:call_link\('abenwindow_glosry.htm'\) "Glossary Entry") or a box inside the window. The general rules apply in addition to the rules for window functions.
-   As an aggregate function in a [hierarchy aggregate navigator](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)). The evaluated row set consists of the [hierarchy nodes](javascript:call_link\('abenhierarchy_node_glosry.htm'\) "Glossary Entry") determined by the navigator. The general rules apply in addition to the rules for hierarchy aggregate navigators.

The following table shows which aggregate functions can be used in which places:

\-

[agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\))

[win\_exp](javascript:call_link\('abapselect_over.htm'\))

[HIERARCHY\_DESCENDANTS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_desc_agg.htm'\))

[HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\))

AVG

x

x

\-

\-

MEDIAN

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

STDDEV

x

x

\-

\-

VAR

x

x

\-

\-

CORR

x

x

\-

\-

CORR\_SPEARMAN

x

x

\-

\-

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

ALLOW\_PRECISION\_LOSS

x

\-

\-

\-

The following shared properties apply here:

-   The addition DISTINCT excludes duplicate values from the calculation in any operand positions in which it is specified.
-   If the argument of an aggregate function (except COUNT) has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), it is ignored when the function is evaluated. The result is a null value only if all the rows in the column in question contain a null value.
-   The aggregate function COUNT counts rows and never produces the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").
-   Arguments of type STRING, RAWSTRING, LCHR, LRAW, and GEOM\_EWKB cannot be handled using aggregate functions.

Hint

The database platform determines whether an overflow occurs if the result of an aggregate function exceeds its value range. On some database platforms, intermediate results outside the value range are allowed. The overflow behavior of SQL expressions, on the other hand, is platform-independent. If an SQL expression in an aggregate expression produces an overflow, an exception is raised on every platform, even if a corresponding result of the aggregate function would not raise an exception on every platform.

Variant 1   

... AVG( *\[*DISTINCT*\]* col *\[*AS dtype*\]* )

Effect

Determines the average value of the content of a column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) in a row set. The optional addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)) can be used to define the result type explicitly.

The data type of the column must be numeric. The data types DF16\_RAW and DF34\_RAW and the obsolete types DF16\_SCL and DF34\_SCL are not allowed. The data type INT8 is only allowed together with the addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)).

The implicit data type of the result for [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") is the corresponding data type (DECFLOAT16 or DECFLOAT34 or DF16\_DEC or DF34\_DEC) and is otherwise the type FLTP, a platform-dependent intermediate result, or is determined by the addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)).

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) cannot be specified as arguments for AVG.

Hint

The result of the aggregate functions AVG in the data type FLTP is platform-dependent. The type of platform also determines whether the result of an aggregate expression AVG, which is used in a HAVING clause as an intermediate result, is of type FLTP. The addition [AS dtype](javascript:call_link\('abapselect_avg_as.htm'\)) can be used to force the type FLTP.

Example

Determination of the average value of all values in a column and checking of the result.

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

... MEDIAN( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the statistical median of an input expression. Null values are ignored. If the number of non-null values is even, then the return value is the average of the two middle elements. Otherwise, the middle element is returned. The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the result of the SQL expression.

The result of the SQL expression sql\_exp must have a [numeric data type](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) except for the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

Example

Determination of the median value of all values in a column. As the number of non-null values is even, the average of the two middle values is calculated. Since the data type of the result is INT4, the integer is rounded. The value returned is 6.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @(
VALUE #(
( id = 'A' num1 = 2 dats1 = '20200504' )
( id = 'B' num1 = 20 dats1 = '20200505' )
( id = 'C' num1 = 4 dats1 = '20200506' )
( id = 'D' num1 = 6 dats1 = '20200507' )
( id = 'E' num1 = 5 dats1 = '20200508' )
( id = 'F' num1 = 8 dats1 = '20200509' ) ) ).
SELECT
  FROM demo\_expressions
  FIELDS
    MEDIAN( num1 ) AS median\_value
    INTO @DATA(result).

Variant 3   

... MAX( *\[*DISTINCT*\]* sql\_exp )

Variant 4   

... MIN( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the maximum value or minimum value of the results of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) in a row set. The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the result of the SQL expression.

The result of the SQL expression sql\_exp must be a numeric type except for the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)). If a single column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) is specified for the expression, this column can also have any data type.

Example

Determination of the minimum value and maximum value of all values in a column and checking of the result.

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

Variant 5   

... SUM( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the sum of the results of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) in a row set. The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the result of the SQL expression.

The result of the SQL expression sql\_exp must be a numeric type except for the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)). If a single column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) is specified for the expression, this column can have any numeric data type except DF16\_RAW and DF34\_RAW and except the obsolete data types DF16\_SCL and DF34\_SCL .

Hint

If the aggregate function SUM is used for columns of types DECFLOAT16 or DF16\_DEC, it is best to use a target field with the data type decfloat34 to avoid overflows.

Example

Summation of all values in a column and checking the result.

DATA(n) = 9.
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @( VALUE #(
  FOR i = 0 UNTIL i > n
  ( id = CONV #( i ) num1 = i ) ) ).
SELECT SUM( num1 )
       FROM demo\_expressions
       INTO (@DATA(sum)).
ASSERT sum = ( n \* ( n + 1 ) ) / 2.

Variant 6   

... PRODUCT( col )

Effect

Determines the product of the values of a column col in a row set. The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the column. The column must have a numeric type except for the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

Hint

The aggregate function PRODUCT can currently be used only in the [hierarchy aggregate navigator](javascript:call_link\('abenhierarchy_agg_navi_glosry.htm'\) "Glossary Entry") [HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenselect_hierarchy_ancs_agg.htm'\)).

Executable Example

See [Hierarchy Navigator HIERARCHY\_ANCESTORS\_AGGREGATE](javascript:call_link\('abenhier_ancs_agg_abexa.htm'\))

Variant 7   

... STDDEV( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the standard deviation of a given expression as the square root of the VAR function. The result of the SQL expression sql\_exp can have either the data type FLTP or DECFLOAT34. To use STDDEV with other data types, a conversion must first be performed using the SQL function [CAST](javascript:call_link\('abensql_cast.htm'\)). The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the result of the SQL expression, that is, either FLTP or DECFLOAT34.

See Variant 8 below for an example.

Variant 8   

... VAR( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the variance of a given expression as the square of the standard deviation. The SQL expression sql\_exp can only be FLTP or DECFLOAT34. To use VAR with other data types, a conversion must first be performed using the SQL function [CAST](javascript:call_link\('abensql_cast.htm'\)). The data type of the result is the [external data type](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") of the result of the SQL expression, that is, either FLTP or DECFLOAT34.

Example

Determination of the average, the standard deviation, and the variance of the salaries of all employees listed in table DEMO\_EMPLOYEES. The data type of column SALARY is DEC and to calculate the standard deviation and variance, the column is converted to type DECFLOAT34.

SELECT
  FROM demo\_employees
  FIELDS
  AVG(  salary as dec( 10,2 ) ) AS average,
  STDDEV( CAST( salary AS D34N ) ) AS stddev,
  VAR( CAST( salary AS D34N ) ) AS variance
  INTO @DATA(result).

Variant 9   

... CORR( sql\_exp1,sql\_exp2 )

Effect

Determines the Pearson product momentum correlation coefficient between two columns. In other words, it measures the linear correlation of two value sets. The result of the SQL expressions sql\_exp1 and sql\_exp2 can have any [numeric data type](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). The data type of the result is always FLTP. The result ranges from -1 to 1. If a correlation cannot be computed, the result is null.

See Variant 10 below for an example.

Variant 10   

... CORR\_SPEARMAN( sql\_exp1,sql\_exp2 )

Effect

Determines the Spearman's rank correlation coefficient of the values found in the corresponding rows of two columns. In other words, it measures the monotonous correlation of two value sets. The result of the SQL expressions sql\_exp1 and sql\_exp2 can have any numeric data type. The data type of the result is always FLTP. The result ranges from -1 to 1.

Example

Determination of the Pearson product momentum and the Spearman's rank correlation for columns NUM1 and NUM2 of table DEMO\_EXPRESSIONS. CORR is 0.959, since the correlation is not linear. CORR\_SPEARMAN is 1, since the value sets are correlated monotonously.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM TABLE @(
VALUE #(
( id = 'A' num1 = 1 num2 = 2 )
( id = 'B' num1 = 2 num2 = 4 )
( id = 'C' num1 = 3 num2 = 8 )
( id = 'D' num1 = 4 num2 = 16 ) ) ).
SELECT
  CORR( num1,num2 ) AS corr,
  CORR\_SPEARMAN( num1, num2 ) AS corr\_spearman
  FROM demo\_expressions
  INTO @DATA(result).

Variant 11   

... STRING\_AGG( sql\_exp*\[*, sep*\]* *\[*ORDER BY ...*\]* )

Effect

Chains the results of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) in a row set. The data type of the result is SSTRING with the length 1333. If the string in question is greater than 1333, a catchable exception of the class CX\_SY\_OPEN\_SQL\_DB is raised. The results of the SQL expression sql\_exp must be a flat character-like data type like CHAR, SSTRING, DATS, or TIMS.

An optional separator sep separated by a comma can be specified after the SQL expression. If sep is specified, its content is inserted into the string between consecutive results of the SQL expression. If sep is not specified, these results are appended to each other directly. sep can be a [literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or a [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, or n with a maximum of 1333 characters. In sep, all trailing blanks are respected.

The optional addition ORDER BY can be used to define the order in which the results of the SQL expression are chained. If ORDER BY is not specified, the order is undefined. ORDER BY is followed by a comma-separated list of columns of the data sources of the current query. These columns are used to sort the rows of the row set. A column can only be specified directly using the column name [col1](javascript:call_link\('abenabap_sql_columns.htm'\)), [col2 ...](javascript:call_link\('abenabap_sql_columns.htm'\)). Alias names defined using [AS](javascript:call_link\('abapselect_list.htm'\)) cannot be specified. The additions ASCENDING and DESCENDING determine whether the rows are sorted in ascending or descending order by the column in question. The default is ASCENDING.

Hints

-   The addition DISTINCT cannot be specified for the aggregate function STRING\_AGG.
-   The aggregate function STRING\_AGG cannot be used as a [window function](javascript:call_link\('abensql_win_func.htm'\)).
-   When used, the aggregate function STRING\_AGG requires the [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).
-   Respecting all trailing blanks in sep is different to the behavior of [&&](javascript:call_link\('abensql_string.htm'\)), where a truncation occurs.

Executable Example

[SQL Expressions, Aggregate Function string\_agg](javascript:call_link\('abensql_expr_string_agg_abexa.htm'\))

Variant 12   

... COUNT( *\[*DISTINCT*\]* sql\_exp )

Effect

Determines the number of distinct values of the results of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) in a row set.

-   If the addition DISTINCT is not specified, COUNT determines all rows in which the result of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) is not the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry")
-   If the addition DISTINCT is specified, COUNT determines the number of distinct values of the results of the SQL expression [sql\_exp](javascript:call_link\('abapsql_expr.htm'\)). [Null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are ignored here.

The data type of the result is INT4. The SQL expression sql\_exp can be a result with any type except for the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\)). If a single column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) is specified for the expression, this column can have any data type.

Hint

An aggregate function COUNT without the addition DISTINCT requires the [strict mode from Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)).

Example

Determination of the number of airlines flying to New York.

SELECT COUNT( DISTINCT carrid )
       FROM spfli
       WHERE cityto = 'NEW YORK'
       INTO @DATA(count).

Variant 13   

... COUNT( \* )

Variant 14   

... COUNT(\*)

Effect

The two spellings have the same meaning and, regardless of a specific value, produce the number of rows in a row set: The following applies to the data type of the result:

-   If used as an aggregate expression [agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\)):
    -   If COUNT( \* ) or COUNT(\*) is specified as an aggregate expression in a SELECT list with other columns or together with a [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause, the data type of the result is INT4 and no numbers greater than 2147483647 can be determined.
    -   If COUNT( \* ) or COUNT(\*) is specified as the only column and the [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) clause is not specified as an aggregate expression in a SELECT list, the internal data type of the result is INT8 and numbers up to +9223372036854775807 can be determined. The system field sy-dbcnt is set to the value -1 for results outside of the value range of the type i.
-   If used as a window function [win\_func](javascript:call_link\('abensql_win_func.htm'\)) and in [hierarchy aggregate navigators](javascript:call_link\('abenselect_hierarchy_agg_navis.htm'\)), the data type of the result is INT8.

Hint

A target object of the type INT8, p, or decfloat34 must be specified if a standalone function COUNT( \* ) or COUNT(\*) expects a value greater than the value range of INT4.

Example

Example for counting rows using COUNT. The single-row result contains the values 7, 2, and 10 in its columns.

-   10 is the total number of rows in the result set determined using COUNT(\*) and is independent of a single value.
-   7 is the number of rows determined using COUNT without DISTINCT in which [case distinction](javascript:call_link\('abensql_simple_case.htm'\)) does not produce the null value.
-   2 is the number of distinct results "X" and "Y" determined using COUNT and DISTINCT of the [case distinction](javascript:call_link\('abensql_simple_case.htm'\)) while ignoring the null value.

The difference 3 of the results of COUNT(\*) and COUNT without DISTINCT is the number of rows in which the [case distinction](javascript:call_link\('abensql_simple_case.htm'\)) produces the null value.

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

Variant 15   

... GROUPING( col )

Effect

The grouping function [GROUPING](javascript:call_link\('abengrouping_function.htm'\)) can be used to verify whether a column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) is part of the aggregation. The grouping function can be used only if the GROUP BY clause contains the addition GROUPING SETS. The data type of the result of the grouping function is [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)). [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) cannot be specified as arguments for GROUPING. For more information, see [sql\_agg - GROUPING](javascript:call_link\('abengrouping_function.htm'\)).

Executable Example

[GROUPING, Aggregate Function](javascript:call_link\('abengrouping_function_abexa.htm'\))

Variant 16   

ALLOW\_PRECISION\_LOSS( ... )

Effect

The ALLOW\_PRECISION\_LOSS statement improves the performance of an [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") [agg\_exp](javascript:call_link\('abapselect_aggregate.htm'\)) at the cost of accuracy of the result. This function should only be used on decimal values and when loss of precision is acceptable. Currently, SUM is the only supported aggregate expression.

For more information, see [sql\_agg - ALLOW\_PRECISION\_LOSS](javascript:call_link\('abapselect_allow_precision_loss.htm'\)).

Executable Example

[sql\_agg - Aggregate Function ALLOW\_PRECISION\_LOSS](javascript:call_link\('abensql_expr_aggr_prec_loss_abexa.htm'\))

Continue
[sql\_agg - AVG, AS](javascript:call_link\('abapselect_avg_as.htm'\))
[sql\_agg - ALLOW\_PRECISION\_LOSS](javascript:call_link\('abapselect_allow_precision_loss.htm'\))