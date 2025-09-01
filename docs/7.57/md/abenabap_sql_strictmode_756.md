  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Strict Mode in Release 7.56, ABENABAP_SQL_STRICTMODE_756, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Strict Mode in Release 7.56

-   [Conditions for the Strict Mode](#abenabap-sql-strictmode-756-1-------rules-for-the-strict-mode---@ITOC@@ABENABAP_SQL_STRICTMODE_756_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in Release 7.56 applies to all ABAP SQL statements that use one of the following features introduced in [Release 7.56](javascript:call_link\('abennews-756-abap_sql.htm'\)):

-   Use of the string function [INITCAP](javascript:call_link\('abensql_string_func.htm'\)).
-   Use of one of the new date/time functions [IS\_VALID](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_YEAR](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_MONTH](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_DAY](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_HOUR](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_MINUTE](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_SECOND](javascript:call_link\('abensql_time_func.htm'\)), [DAYNAME](javascript:call_link\('abensql_date_func.htm'\)), [MONTHNAME](javascript:call_link\('abensql_date_func.htm'\)), [WEEKDAY](javascript:call_link\('abensql_date_func.htm'\)), [DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)), and [ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\)).
-   Use of [new casts](javascript:call_link\('abensql_cast.htm'\)).
-   Use of [INTERSECT](javascript:call_link\('abapunion.htm'\)) and [EXCEPT](javascript:call_link\('abapunion.htm'\)).
-   Use of the CDS system table functions [SERIES\_GENERATE\_DATE](javascript:call_link\('abencds_series_generators.htm'\)), [SERIES\_GENERATE\_INTEGER](javascript:call_link\('abencds_series_generators.htm'\)), [SERIES\_GENERATE\_TIME](javascript:call_link\('abencds_series_generators.htm'\)), and [SERIES\_GENERATE\_TIMESTAMP](javascript:call_link\('abencds_series_generators.htm'\)).
-   Use of the parameter start in the string function [REPLACE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)).
-   Use of the string function [SUBSTRING\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)).

Rules for the Strict Mode   

The strict mode in Release 7.56 covers all rules of the [strict mode in Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).