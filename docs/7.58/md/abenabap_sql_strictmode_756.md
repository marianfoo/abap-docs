  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenabap_sql_oview.htm'\)) →  [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Strict%20Mode%20in%20ABAP%20Release%207.56%2C%20ABENABAP_SQL_STRICTMODE_756%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP SQL - Strict Mode in ABAP Release 7.56

-   [Conditions for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_1)
-   [Rules for the Strict Mode](#@@ITOC@@ABENABAP_SQL_STRICTMODE_756_2)

Conditions for the Strict Mode   

The strict mode of the syntax check in ABAP release 7.56 applies to all ABAP SQL statements that use one of the following features introduced in [ABAP release 7.56](javascript:call_link\('abennews-756-abap_sql.htm'\)):

-   Use of the string function [INITCAP](javascript:call_link\('abensql_string_func.htm'\)).
-   Use of one of the new date/time functions [IS\_VALID](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_YEAR](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_MONTH](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_DAY](javascript:call_link\('abensql_date_func.htm'\)), [EXTRACT\_HOUR](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_MINUTE](javascript:call_link\('abensql_time_func.htm'\)), [EXTRACT\_SECOND](javascript:call_link\('abensql_time_func.htm'\)), [DAYNAME](javascript:call_link\('abensql_date_func.htm'\)), [MONTHNAME](javascript:call_link\('abensql_date_func.htm'\)), [WEEKDAY](javascript:call_link\('abensql_date_func.htm'\)), [DAYS\_BETWEEN](javascript:call_link\('abensql_date_func.htm'\)), [ADD\_DAYS](javascript:call_link\('abensql_date_func.htm'\)), and [ADD\_MONTHS](javascript:call_link\('abensql_date_func.htm'\)).
-   Use of [new casts](javascript:call_link\('abensql_cast.htm'\)).
-   Use of the set operators [INTERSECT](javascript:call_link\('abapunion.htm'\)) and [EXCEPT](javascript:call_link\('abapunion.htm'\)).
-   Use of the function [UNIT\_CONVERSION](javascript:call_link\('abensql_curr_unit_conv_func.htm'\)).
-   New special expression [sql\_null](javascript:call_link\('abensql_null.htm'\)).
-   Use of the CDS system table functions [SERIES\_GENERATE\_DATE](javascript:call_link\('abencds_series_generators.htm'\)), [SERIES\_GENERATE\_INTEGER](javascript:call_link\('abencds_series_generators.htm'\)), [SERIES\_GENERATE\_TIME](javascript:call_link\('abencds_series_generators.htm'\)), and [SERIES\_GENERATE\_TIMESTAMP](javascript:call_link\('abencds_series_generators.htm'\)).
-   Use of the parameter start in the string function [REPLACE\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)).
-   Use of the string function [SUBSTRING\_REGEXPR](javascript:call_link\('abensql_string_func.htm'\)).

Rules for the Strict Mode   

The strict mode in ABAP release 7.56 covers all rules of the [strict mode in ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).