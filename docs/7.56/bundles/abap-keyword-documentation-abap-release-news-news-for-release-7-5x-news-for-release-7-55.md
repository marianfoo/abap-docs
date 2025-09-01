# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.55

Included pages: 13


### abennews-755.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) → 

News for Release 7.55

The kernel release for Release 7.55 is 7.81.

-   [ABAP Dictionary in Release 7.55](javascript:call_link\('abennews-755-ddic.htm'\))
-   [ABAP CDS in Release 7.55](javascript:call_link\('abennews-755-abap_cds.htm'\))
-   [ABAP Sessions in Release 7.55](javascript:call_link\('abennews-755-abap_sessions.htm'\))
-   [Data Types in Release 7.55](javascript:call_link\('abennews-755-types.htm'\))
-   [Expressions and Functions in Release 7.55](javascript:call_link\('abennews-755-expressions.htm'\))
-   [String Processing in Release 7.55](javascript:call_link\('abennews-755-strings.htm'\))
-   [ABAP SQL in Release 7.55](javascript:call_link\('abennews-755-abap_sql.htm'\))
-   [ABAP CDS Access Control in Release 7.55](javascript:call_link\('abennews-755-cds_access_control.htm'\))
-   [Exception Handling in Release 7.55](javascript:call_link\('abennews-755-exceptions.htm'\))
-   [ABAP RESTful Application Programming Model in Release 7.55](javascript:call_link\('abennews-755-restful.htm'\))

Continue
[ABAP Dictionary in Release 7.55](javascript:call_link\('abennews-755-ddic.htm'\))
[ABAP CDS in Release 7.55](javascript:call_link\('abennews-755-abap_cds.htm'\))
[ABAP Sessions in Release 7.55](javascript:call_link\('abennews-755-abap_sessions.htm'\))
[Data Types in Release 7.55](javascript:call_link\('abennews-755-types.htm'\))
[Expressions and Functions in Release 7.55](javascript:call_link\('abennews-755-expressions.htm'\))
[String Processing in Release 7.55](javascript:call_link\('abennews-755-strings.htm'\))
[ABAP SQL in Release 7.55](javascript:call_link\('abennews-755-abap_sql.htm'\))
[ABAP CDS Access Control in Release 7.55](javascript:call_link\('abennews-755-cds_access_control.htm'\))
[Exception Handling in Release 7.55](javascript:call_link\('abennews-755-exceptions.htm'\))
[ABAP RESTful Application Programming Model in Release 7.55](javascript:call_link\('abennews-755-restful.htm'\))


### abennews-755-ddic.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP Dictionary in Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)
[2\. Load Unit](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](javascript:call_link\('abapexport_nametab.htm'\)) cannot be used any more and leads to a runtime error.
-   The internal ABAP statement [IMPORT NAMETAB](javascript:call_link\('abapimport_nametab.htm'\)) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](javascript:call_link\('abenddic_table_type_glosry.htm'\) "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry").
-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.

Modification 2   

Load Unit

In ABAP Dictionary, a new technical setting for database tables is available: the [load unit](javascript:call_link\('abenddic_database_tables_load_unit.htm'\)). It specifies how the data of the table is loaded into the main memory of the SAP HANA database. It can be used to reduce the memory consumption in the HANA database server.


### abennews-755-abap_cds.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP CDS in Release 7.55

[1\. Defining associations in CDS projection views](#!ABAP_MODIFICATION_1@1@)
[2\. CDS view entities](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Entity Extensions](#!ABAP_MODIFICATION_3@3@)
[4\. New session variables for user time zone and user date](#!ABAP_MODIFICATION_4@4@)
[5\. New string function for regular expressions](#!ABAP_MODIFICATION_5@5@)
[6\. ABAP program for migration analysis](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Defining associations in CDS projection views

It is now possible to define new associations to external data sources in [CDS projection views](javascript:call_link\('abencds_define_view_as_projection.htm'\)).

Modification 2   

CDS view entities

A new kind of CDS view is available: the [CDS view entity](javascript:call_link\('abencds_v2_views.htm'\)). CDS view entities represent an improved version of [CDS DDIC-based views](javascript:call_link\('abencds_v1_views.htm'\)) (DEFINE VIEW). They serve the same purpose and have the same structure as CDS DDIC-based views, but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views in the future. A CDS view entity is defined with the statement DEFINE VIEW ENTITY.

Modification 3   

CDS View Entity Extensions

The new statement [EXTEND VIEW ENTITY](javascript:call_link\('abencds_extend_view_entity.htm'\)) of the DDL of ABAP CDS makes it possible to add new view fields to existing CDS views entities and CDS projection views by using CDS view entity extensions.

Modification 4   

New session variables for user time zone and user date

Two new [session variables](javascript:call_link\('abencds_session_variable_v1.htm'\)) are available for [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") in ABAP CDS:

-   [$session.user\_timezone](javascript:call_link\('abencds_session_variable_v1.htm'\)), which returns the time zone defined in the user master record for the local user time.
-   [$session.user\_date](javascript:call_link\('abencds_session_variable_v1.htm'\)), which returns the local date of a user.

Modification 5   

New string function for regular expressions

ABAP CDS now supports the new string function [REPLACE\_REGEXPR](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) that allows regular expressions to be replaced.

Modification 6   

ABAP program for migration analysis

The following documented ABAP program is now available for evaluating whether a migration from a CDS DDIC-based view to a CDS view entity is possible:

RUTDDLS\_MIGRATION\_CANDIDATES.


### abennews-755-abap_sessions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP Sessions in Release 7.55

Modification

Number of ABAP sessions

The default value of profile parameter rdisp/max\_alt\_modes, that determines the possible number of [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") per [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"), was enhanced from 6 to 16 and is now the same as the maximum number of ABAP sessions per user session.


### abennews-755-types.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

Data Types in Release 7.55

Modification

Indicator structures

The new addition [INDICATORS](javascript:call_link\('abaptypes_indicators.htm'\)) to the statement [TYPES](javascript:call_link\('abaptypes.htm'\)) allows to define an [indicator structure](javascript:call_link\('abenindicator_structure_glosry.htm'\) "Glossary Entry") as a [substructure](javascript:call_link\('abensubstructure_glosry.htm'\) "Glossary Entry") of a given [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry"). An indicator structure can be used as a [ABAP SQL indicator](javascript:call_link\('abenabap_sql_indicator_glosry.htm'\) "Glossary Entry") in ABAP SQL read and write statements.


### abennews-755-expressions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

Expressions and Functions in Release 7.55

Modification

Calculation assignments in constructor operator REDUCE

In the assignments behind the addition NEXT of the constructor operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) the [calculation assignment operators](javascript:call_link\('abencalc_assignment_op_glosry.htm'\) "Glossary Entry") +=, +=, \*=, /= or &&=, can be used now and the respective rules apply.


### abennews-755-strings.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

String Processing in Release 7.55

[1\. Support of Perl Compatible Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Verbatim Replacements](#!ABAP_MODIFICATION_2@2@)
[3\. New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE](#!ABAP_MODIFICATION_3@3@)
[4\. Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations](#!ABAP_MODIFICATION_4@4@)
[5\. Formatting option CURRENCY for decimal floating point numbers](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Support of Perl Compatible Regular Expressions

Besides the existing support of [POSIX regular expressions](javascript:call_link\('abenposix_regex_glosry.htm'\) "Glossary Entry"), ABAP supports now also [PCRE regular expressions](javascript:call_link\('abenpcre_regex_glosry.htm'\) "Glossary Entry") that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](javascript:call_link\('abenkernel_glosry.htm'\) "Glossary Entry"). PCRE regular expressions can be used in the same way as POSIX regular expressions. The distinction is made:

-   By the new addition [PCRE](javascript:call_link\('abapfind_pattern.htm'\)) that can be used instead of [REGEX](javascript:call_link\('abapfind_pattern.htm'\)) in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)).
-   By the new argument [pcre](javascript:call_link\('abenstring_functions_regex.htm'\)) that can be used instead of [regex](javascript:call_link\('abenstring_functions_regex.htm'\)) in built-in functions.
-   By new (factory) methods of the [system classes](javascript:call_link\('abenregex_system_classes.htm'\)) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)).

Modification 2   

Verbatim Replacements

The new addition [VERBATIM](javascript:call_link\('abapreplace_options.htm'\)) of the [REPLACE](javascript:call_link\('abapreplace.htm'\)) statement causes all characters of the replacement string to be taken literally. With that addition, special characters for regular expression replacement patterns have no special meaning.

Modification 3   

New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE

Modification 4   

Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations

The exception that occurs when an operation with a [string](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") exceeds its [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) is now connected to the exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE and can be handled. Previously, it always resulted in runtime error STRING\_SIZE\_TOO\_LARGE.

This exception can also be handled for the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) if some conditions are met.

Modification 5   

Formatting option CURRENCY for decimal floating point numbers

The

-   addition [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) of the [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) statements
-   formatting option [CURRENCY](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\))

can now also be applied to [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").


### abennews-755-abap_sql.htm

  

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


### abennews-755-cds_access_control.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP CDS Access Control in Release 7.55

[1\. Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition](#!ABAP_MODIFICATION_1@1@)
[2\. Addition bypass when](#!ABAP_MODIFICATION_2@2@)
[3\. Check on the User Name in User Conditions](#!ABAP_MODIFICATION_3@3@)
[4\. Data Types](#!ABAP_MODIFICATION_4@4@)
[5\. Aspect Bypass Conditions](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition

In a literal condition, IS *\[*NOT*\]* INITIAL can now be used to check whether the value of the left side matches (does not match) the initial value of the ABAP data type that matches the element.

Modification 2   

Addition bypass when

The addition [BYPASS WHEN](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) can now be used to specify a bypass condition for an element. If the condition is met, the element in question is not used for authorization filtering.

Modification 3   

Check on the User Name in User Conditions

When the user name is checked in [user conditions](javascript:call_link\('abencds_f1_cond_user.htm'\)), the following can now be checked instead of the user name:

-   The value of the alias.
-   The number of the business partner assigned to the user.

Modification 4   

Data Types

The operand that can be specified on the left side of a condition of an access rule of a CDS role can now have the built-in ABAP Dictionary [data type](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)) RAW.

Modification 5   

Aspect Bypass Conditions

IS *\[*NOT*\]* INITIAL and IS INITIAL OR NULL are now possible as [aspect bypass conditions](javascript:call_link\('abencds_f1_define_generic_aspect.htm'\)).


### abennews-755-exceptions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

Exception Handling in Release 7.55

Modification

Declaration of CX\_NO\_CHECK exceptions

Exceptions of category CX\_NO\_CHECK are always declared implicitly in interfaces of procedures and can always be propagated.

Now it is also possible to declare exceptions of category CX\_NO\_CHECK with RAISING in procedure interfaces, for example for [methods](javascript:call_link\('abapmethods_general.htm'\)). This allows it to document the possible occurrence of such exceptions and to change the category of existing exceptions into CX\_NO\_CHECK without leading to syntax errors in procedure interfaces.


### abennews-755-restful.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP RESTful Application Programming Model in Release 7.55

In release 7.55, the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.55](javascript:call_link\('abennews-755-cds_bdl.htm'\))

Continue
[CDS BDL in Release 7.55](javascript:call_link\('abennews-755-cds_bdl.htm'\))


### abennews-755-cds_bdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) →  [ABAP RESTful Application Programming Model in Release 7.55](javascript:call_link\('abennews-755-restful.htm'\)) → 

CDS BDL in Release 7.55

[1\. Type Mapping](#!ABAP_MODIFICATION_1@1@)
[2\. Additional Save in Managed BOs](#!ABAP_MODIFICATION_2@2@)
[3\. Unmanaged Save in Managed BOs](#!ABAP_MODIFICATION_3@3@)
[4\. Implementation Grouping](#!ABAP_MODIFICATION_4@4@)
[5\. Managed Internal Numbering for Managed RAP BOs](#!ABAP_MODIFICATION_5@5@)
[6\. New Options for Output Parameters](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Lock in Managed RAP BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Draft Support for RAP BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Determine Actions](#!ABAP_MODIFICATION_9@9@)
[10\. Precheck for Modify Operations](#!ABAP_MODIFICATION_10@10@)
[11\. New Field Characteristics](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Type Mapping

The new statement [mapping for](javascript:call_link\('abenbdl_type_mapping.htm'\)) can be used to map field names from legacy code to field names from the current data model. Available for unmanaged and managed business objects.

Modification 2   

Additional Save in Managed BOs

The new statement [with additional save](javascript:call_link\('abenbdl_saving.htm'\)) can be used to enhance the default save sequence in a managed implementation scenario.

Modification 3   

Unmanaged Save in Managed BOs

The new statement [with unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)) can be used to implement an own saving strategy in a managed implementation scenario.

Modification 4   

Implementation Grouping

The new statement [group](javascript:call_link\('abenbdl_grouping.htm'\)) can be used to divide the implementation-relevant parts of a BO's business logic into several groups for behavior implementation.

Modification 5   

Managed Internal Numbering for Managed RAP BOs

The new statement [numbering:managed](javascript:call_link\('abenbdl_field_numbering.htm'\)) can be used to automatically generate values for primary key fields with a UUID. Available for managed implementation scenarios.

Modification 6   

New Options for Output Parameters

For actions and functions, the [output parameter](javascript:call_link\('abenbdl_action_output_para.htm'\)) can now be an entity or a structure.

The addition [selective](javascript:call_link\('abenbdl_action_output_para.htm'\)) can be used for an output parameter to return only parts of the result structure.

Modification 7   

Unmanaged Lock in Managed RAP BOs

The new statement [lock master unmanaged](javascript:call_link\('abenbdl_locking.htm'\)) can be used if the application developer wants to implement an own locking mechanism in a managed implementation scenario. An own locking mechanism can be used instead of the RAP locking mechanism provided by the RAP framework.

Modification 8   

Draft Support for RAP BOs

The new statement [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)) can be used to enable the draft concept for a RAP BO.

Modification 9   

Determine Actions

Determine actions are a new type of action defined using [determine action](javascript:call_link\('abenbdl_determine_action.htm'\)). With a determine action, determinations and validations can be executed on request.

Modification 10   

Precheck for Modify Operations

The new RAP BO operation addition [precheck](javascript:call_link\('abenbdl_precheck.htm'\)) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

Modification 11   

New Field Characteristics

CDS BDL now supports the following new [field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)):

-   [mandatory:create](javascript:call_link\('abenbdl_field_char.htm'\))
-   [readonly:update](javascript:call_link\('abenbdl_field_char.htm'\))


### abennews-755-restful.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.55](javascript:call_link\('abennews-755.htm'\)) → 

ABAP RESTful Application Programming Model in Release 7.55

In release 7.55, the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.55](javascript:call_link\('abennews-755-cds_bdl.htm'\))

Continue
[CDS BDL in Release 7.55](javascript:call_link\('abennews-755-cds_bdl.htm'\))
