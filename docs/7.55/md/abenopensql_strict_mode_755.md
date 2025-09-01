  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) → 

Strict Mode in Release 7.55

-   [Conditions for the Strict Mode](#abenopensql-strict-mode-755-1--------rules-for-the-strict-mode---@ITOC@@ABENOPENSQL_STRICT_MODE_755_2)

Conditions for the Strict Mode

The strict mode of the syntax check in Release 7.55 applies to all ABAP SQL statements that use one of the following attributes introduced in [Release 7.55](javascript:call_link\('abennews-755-abap_sql.htm'\)):

-   Using function [ALLOW\_PRECISION\_LOSS](javascript:call_link\('abapselect_allow_precision_loss.htm'\))

-   Optional addition [window frame specification](javascript:call_link\('abapselect_over.htm'\))

-   Window functions [FIRST\_VALUE](javascript:call_link\('abensql_win_func.htm'\)) and [LAST\_VALUE](javascript:call_link\('abensql_win_func.htm'\)).

-   Use of one of the new date/time functions [TSTMPL\_TO\_UTCL](javascript:call_link\('abensql_date_time_conversions.htm'\)), [TSTMPL\_FROM\_UTCL](javascript:call_link\('abensql_date_time_conversions.htm'\)), [DATS\_TO\_DATN](javascript:call_link\('abensql_date_time_conversions.htm'\)), [DATS\_FROM\_DATN](javascript:call_link\('abensql_date_time_conversions.htm'\)), [TIMS\_TO\_TIMN](javascript:call_link\('abensql_date_time_conversions.htm'\)), [TIMS\_FROM\_TIMN](javascript:call_link\('abensql_date_time_conversions.htm'\)), [UTCL\_CURRENT](javascript:call_link\('abensql_timestamp_func.htm'\)), [UTCL\_ADD\_SECONDS](javascript:call_link\('abensql_timestamp_func.htm'\)), [UTCL\_SECONDS\_BETWEEN](javascript:call_link\('abensql_timestamp_func.htm'\)), [DATN\_ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)), [DATN\_ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\)), and [DATN\_DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)).

-   New additions after the ORDER BY clause: [NULLS FIRST](javascript:call_link\('abaporderby_clause.htm'\)) and [NULLS LAST](javascript:call_link\('abaporderby_clause.htm'\)).

-   Use of one of the new [aggregate functions](javascript:call_link\('abensql_agg_func.htm'\)) MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN.

-   New geometry conversion function as\_geo\_json.

-   Subqueries in a relational expression using the operator [IN](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) with an operand list.

-   Use of the window function [NTILE](javascript:call_link\('abensql_win_func.htm'\))

-   Use of the SQL functions [TO\_CLOB](javascript:call_link\('abensql_type_conv_func.htm'\)) or [TO\_BLOB](javascript:call_link\('abensql_type_conv_func.htm'\))

-   Use of [typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\))

-   Use of the string functions [REPLACE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), [LIKE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)), and [OCCURRENCES\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)).

-   Use of [set indicators](javascript:call_link\('abapupdate_set_indicator.htm'\)) after [UPDATE FROM](javascript:call_link\('abapupdate_source.htm'\)).

Rules for the Strict Mode

The strict mode in Release 7.55 covers all rules of the [strict mode in Release 7.54](javascript:call_link\('abenopensql_strict_mode_754.htm'\)).