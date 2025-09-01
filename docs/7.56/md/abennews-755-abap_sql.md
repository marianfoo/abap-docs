  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP SQL in Release 7.55

[1\. New aggregate function ALLOW\_PRECISION\_LOSS](#!ABAP_MODIFICATION_1@1@)
[2\. Optional window frame specification within a window function](#!ABAP_MODIFICATION_2@2@)
[3\. New window functions FIRST\_VALUE and LAST\_VALUE](#!ABAP_MODIFICATION_3@3@)
[4\. New date/time conversion functions](#!ABAP_MODIFICATION_4@4@)
[5\. New time stamp functions](#!ABAP_MODIFICATION_5@5@)
[6\. New date functions](#!ABAP_MODIFICATION_6@6@)
[7\. New additions after the ORDER BY clause](#!ABAP_MODIFICATION_7@7@)
[8\. New aggregate functions](#!ABAP_MODIFICATION_8@8@)
[9\. New geometry conversion function as\_geo\_json](#!ABAP_MODIFICATION_9@9@)
[10\. SQL Conditions Revised](#!ABAP_MODIFICATION_10@10@)
[11\. New window function NTILE](#!ABAP_MODIFICATION_11@11@)
[12\. SELECT, INTO target modification](#!ABAP_MODIFICATION_12@12@)
[13\. New type conversion function to\_blob](#!ABAP_MODIFICATION_13@13@)
[14\. New type conversion function to\_clob](#!ABAP_MODIFICATION_14@14@)
[15\. New currency conversion function currency conversion](#!ABAP_MODIFICATION_15@15@)
[16\. Streaming and locators can now be used on SQL expressions](#!ABAP_MODIFICATION_16@16@)
[17\. Further data types allowed in elementary SQL expressions](#!ABAP_MODIFICATION_17@17@)
[18\. Hierarchy load options](#!ABAP_MODIFICATION_18@18@)
[19\. Typed literals](#!ABAP_MODIFICATION_19@19@)
[20\. New string functions](#!ABAP_MODIFICATION_20@20@)
[21\. Addition to the UPDATE FROM clause](#!ABAP_MODIFICATION_21@21@)
[22\. Strict Mode of the Syntax Check](#!ABAP_MODIFICATION_22@22@)

Modification 1   

New aggregate function ALLOW\_PRECISION\_LOSS

ABAP SQL now supports the following new [aggregate function](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") in combination with the [aggregate expression](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") [SUM](javascript:call_link\('abensql_agg_func.htm'\)):

-   [ALLOW\_PRECISION\_LOSS](javascript:call_link\('abapselect_allow_precision_loss.htm'\))

Modification 2   

Optional window frame specification within a window function

The optional [window frame specification](javascript:call_link\('abapselect_over.htm'\)) allows to define a subset of rows within a window, called frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

Modification 3   

New window functions FIRST\_VALUE and LAST\_VALUE

ABAP SQL now supports the following new [window functions](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") in [window expressions](javascript:call_link\('abenwindow_expression_glosry.htm'\) "Glossary Entry"):

-   [FIRST\_VALUE](javascript:call_link\('abensql_win_func.htm'\)) and [LAST\_VALUE](javascript:call_link\('abensql_win_func.htm'\)).

Modification 4   

New date/time conversion functions

ABAP SQL now supports the following new [date/time conversion functions](javascript:call_link\('abensql_date_time_conversions.htm'\)):

-   [TSTMPL\_TO\_UTCL](javascript:call_link\('abensql_date_time_conversions.htm'\)) and [TSTMPL\_FROM\_UTCL](javascript:call_link\('abensql_date_time_conversions.htm'\))
-   [DATS\_TO\_DATN](javascript:call_link\('abensql_date_time_conversions.htm'\)) and [DATS\_FROM\_DATN](javascript:call_link\('abensql_date_time_conversions.htm'\))
-   [TIMS\_TO\_TIMN](javascript:call_link\('abensql_date_time_conversions.htm'\)) and [TIMS\_FROM\_TIMN](javascript:call_link\('abensql_date_time_conversions.htm'\))

Modification 5   

New time stamp functions

ABAP SQL now supports the following new [time stamp functions](javascript:call_link\('abensql_timestamp_func.htm'\)):

-   [UTCL\_CURRENT](javascript:call_link\('abensql_timestamp_func.htm'\)), [UTCL\_ADD\_SECONDS](javascript:call_link\('abensql_timestamp_func.htm'\)), and [UTCL\_SECONDS\_BETWEEN](javascript:call_link\('abensql_timestamp_func.htm'\)).

Modification 6   

New date functions

ABAP SQL now supports the following new [date functions](javascript:call_link\('abensql_date_func.htm'\)):

-   [DATN\_DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [DATN\_ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)), and [DATN\_ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\)).

Modification 7   

New additions after the ORDER BY clause

ABAP SQL now supports the following additions after the [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause:

-   [NULLS FIRST](javascript:call_link\('abaporderby_clause.htm'\)) and [NULLS LAST](javascript:call_link\('abaporderby_clause.htm'\)).

Modification 8   

New aggregate functions

ABAP SQL now supports the following new [aggregate functions](javascript:call_link\('abensql_agg_func.htm'\)):

-   MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN.

Modification 9   

New geometry conversion function as\_geo\_json

ABAP SQL now supports the following new [geometry conversion function](javascript:call_link\('abensql_geo_conv_func.htm'\)):

-   [as\_geo\_json](javascript:call_link\('abensql_geo_conv_func.htm'\))

Modification 10   

SQL Conditions Revised

-   The operator [IN](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) can now be used with a [subquery that returns value tuples](javascript:call_link\('abenwhere_logexp_list_in.htm'\)).
-   [SQL functions](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) and [cast expressions](javascript:call_link\('abensql_cast.htm'\)) can now be used as operands on the right side of [comparison operators](javascript:call_link\('abenwhere_logexp_compare.htm'\)).

Modification 11   

New window function NTILE

ABAP SQL now supports the following new [window function](javascript:call_link\('abenwindow_function_glosry.htm'\) "Glossary Entry") in [window expressions](javascript:call_link\('abenwindow_expression_glosry.htm'\) "Glossary Entry"):

-   [NTILE](javascript:call_link\('abensql_win_func.htm'\))

Modification 12   

SELECT, INTO target modification

When using SELECT, INTO target, host variables can now be declared inline even when the FROM\-clause is dynamic, as long as all fields of the SELECT list are known statically. Previously, the structure of the result set, including SELECT list, FROM clause, and any indicators needed to be static.

Modification 13   

New type conversion function to\_blob

Modification 14   

New type conversion function to\_clob

ABAP SQL now supports the new [type conversion functions](javascript:call_link\('abensql_type_conv_func.htm'\)) [to\_clob](javascript:call_link\('abensql_type_conv_func.htm'\)) and [to\_blob](javascript:call_link\('abensql_type_conv_func.htm'\)).

Modification 15   

New currency conversion function currency conversion

ABAP SQL now supports the new currency conversion function [currency\_conversion](javascript:call_link\('abensql_curr_unit_conv_func.htm'\)).

Modification 16   

Streaming and locators can now be used on SQL expressions

Streaming and locators can now be used in combination with SQL expressions such as [TO\_CLOB](javascript:call_link\('abensql_type_conv_func.htm'\)), [TO\_BLOB](javascript:call_link\('abensql_type_conv_func.htm'\)), and [AS\_GEO\_JSON](javascript:call_link\('abensql_geo_conv_func.htm'\)).

Modification 17   

Further data types allowed in elementary SQL expressions

[Elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) can now also have the dictionary data types STRING and RAWSTRING.

Modification 18   

Hierarchy load options

The [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) can now use the new addition LOAD BULK*|*INCREMENTAL*|*load\_option to specify the load policy for a generated hierarchy.

Modification 19   

Typed literals

[Typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) for many ABAP Dictionary types are now available in ABAP SQL.

Modification 20   

New string functions

ABAP SQL now supports the new string functions [REPLACE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), [LIKE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), and [OCCURRENCES\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)) that support regular expressions.

Modification 21   

Addition to the UPDATE FROM clause

[Set indicators](javascript:call_link\('abapupdate_set_indicator.htm'\)) can now be used as addition after the [UPDATE FROM](javascript:call_link\('abapupdate_source.htm'\))\-clause to indicate columns for update.

Modification 22   

Strict Mode of the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)), which handles the statement more strictly than the regular syntax check.