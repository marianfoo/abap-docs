  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-755.htm) → 

ABAP SQL in Release 7.55

[1\. New aggregate function ALLOW\_PRECISION\_LOSS](#!ABAP_MODIFICATION_1@1@)
[2\. Optional window frame specification within a window function](#!ABAP_MODIFICATION_2@2@)
[3\. New window functions FIRST\_VALUE and LAST\_VALUE](#!ABAP_MODIFICATION_3@3@)
[4\. New date/time conversion functions for TIMESTAMPL, DATS and TIMS](#!ABAP_MODIFICATION_4@4@)
[5\. New time stamp functions UTCL\_CURRENT, UTCL\_ADD\_SECONDS, and UTCL\_SECONDS\_BETWEEN](#!ABAP_MODIFICATION_5@5@)
[6\. New date functions DATN\_DAYS\_BETWEEN, DATN\_ADD\_DAYS, and DATN\_ADD\_MONTHS](#!ABAP_MODIFICATION_6@6@)
[7\. New additions after the ORDER BY clause: NULLS FIRST and NULLS LAST](#!ABAP_MODIFICATION_7@7@)
[8\. New aggregate functions MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN](#!ABAP_MODIFICATION_8@8@)
[9\. New geometry conversion function as\_geo\_json](#!ABAP_MODIFICATION_9@9@)
[10\. SQL conditions revised](#!ABAP_MODIFICATION_10@10@)
[11\. New window function NTILE](#!ABAP_MODIFICATION_11@11@)
[12\. SELECT, INTO target - host variables can now be declared inline even when the FROM\-clause is dynamic](#!ABAP_MODIFICATION_12@12@)
[13\. New type conversion functions to\_clob and to\_blob](#!ABAP_MODIFICATION_13@13@)
[14\. New currency conversion function currency conversion](#!ABAP_MODIFICATION_14@14@)
[15\. Streaming and locators can now be used on SQL expressions](#!ABAP_MODIFICATION_15@15@)
[16\. Further data types allowed in elementary SQL expressions](#!ABAP_MODIFICATION_16@16@)
[17\. Hierarchy load options](#!ABAP_MODIFICATION_17@17@)
[18\. Typed literals](#!ABAP_MODIFICATION_18@18@)
[19\. New string functions](#!ABAP_MODIFICATION_19@19@)
[20\. Addition to the UPDATE FROM clause](#!ABAP_MODIFICATION_20@20@)
[21\. Strict mode of syntax check](#!ABAP_MODIFICATION_21@21@)

Modification 1

New aggregate function ALLOW\_PRECISION\_LOSS

ABAP SQL now supports the following new [aggregate function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_function_glosry.htm "Glossary Entry") in combination with the [aggregate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") [SUM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm):

-   [ALLOW\_PRECISION\_LOSS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_allow_precision_loss.htm)
    

Modification 2

Optional window frame specification within a window function

The optional [window frame specification](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_over.htm) allows to define a subset of rows within a window, called frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

Modification 3

New window functions FIRST\_VALUE and LAST\_VALUE

ABAP SQL now supports the following new [window functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_function_glosry.htm "Glossary Entry") in [window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_expression_glosry.htm "Glossary Entry"):

-   [FIRST\_VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_win_func.htm) and [LAST\_VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_win_func.htm).
    

Modification 4

New date/time conversion functions

ABAP SQL now supports the following new [date/time conversion functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm):

-   [TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm) and [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

-   [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm) and [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

-   [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm) and [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)
    

Modification 5

New time stamp functions UTCL\_CURRENT, UTCL\_ADD\_SECONDS, and UTCL\_SECONDS\_BETWEEN

ABAP SQL now supports the following new [time stamp functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm):

-   [UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm), [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm), and [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm).
    

Modification 6

New date functions DATN\_DAYS\_BETWEEN, DATN\_ADD\_DAYS, and DATN\_ADD\_MONTHS

ABAP SQL now supports the following new [date functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm):

-   [DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm), [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm), and [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm).
    

Modification 7

New additions after the ORDER BY clause: NULLS FIRST and NULLS LAST

ABAP SQL now supports the following additions after the [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) clause:

-   [NULLS FIRST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) and [NULLS LAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm).
    

Modification 8

New aggregate functions MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN

ABAP SQL now supports the following new [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm):

-   MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN.
    

Modification 9

New geometry conversion function as\_geo\_json

ABAP SQL now supports the following new [geometry conversion function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_geo_conv_func.htm):

-   [as\_geo\_json](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_geo_conv_func.htm)
    

Modification 10

SQL Conditions Revised

-   The operator [IN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_list_in.htm) can now be used with a [subquery that returns value tuples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_list_in.htm).

-   [SQL functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_builtin_functions.htm) and [cast expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) can now be used as operands on the right side of [comparison operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm).
    

Modification 11

New window function NTILE

ABAP SQL now supports the following new [window function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_function_glosry.htm "Glossary Entry") in [window expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwindow_expression_glosry.htm "Glossary Entry"):

-   [NTILE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_win_func.htm)
    

Modification 12

SELECT, INTO target modification

When using SELECT, INTO target, host variables can now be declared inline even when the FROM\-clause is dynamic, as long as all fields of the SELECT list are known statically. Previously, the structure of the result set, including SELECT list, FROM clause, and any indicators needed to be static.

Modification 13

New type conversion function to\_clob and to\_blob

ABAP SQL now supports the new [type conversion functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) [to\_clob](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) and [to\_blob](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm).

Modification 14

New currency conversion function currency conversion

ABAP SQL now supports the new currency conversion function [currency\_conversion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_curr_unit_conv_func.htm).

Modification 15

Streaming and locators can now be used on SQL expressions

Streaming and locators can now be used in combination with SQL expressions such as [TO\_CLOB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm), [TO\_BLOB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm), and [AS\_GEO\_JSON](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_geo_conv_func.htm).

Modification 16

Further data types allowed in elementary SQL expressions

[Elementary SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_elem.htm) can now also have the dictionary data types STRING and RAWSTRING.

Modification 17

Hierarchy load options

The [hierarchy generator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_hierarchy_generator.htm) can now use the new addition LOAD BULK*|*INCREMENTAL*|*load\_option to specify the load policy for a generated hierarchy.

Modification 18

Typed literals

[Typed literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_typed_literals.htm) for many ABAP Dictionary types are now available in ABAP SQL.

Modification 19

New string functions

ABAP SQL now supports the new string functions [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), [LIKE\_REGEXPR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm), and [OCCURRENCES\_REGEXPR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm) that support regular expressions.

Modification 20

Addition to the UPDATE FROM clause

[Set indicators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_indicator.htm) can now be used as addition after the [UPDATE FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm)\-clause to indicate columns for update.

Modification 21

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_755.htm), which handles the statement more strictly than the regular syntax check.