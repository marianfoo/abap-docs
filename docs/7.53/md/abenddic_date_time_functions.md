  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [Special Functions](javascript:call_link\('abenddic_special_functions.htm'\)) → 

Date Functions and Time Functions

The following table shows the date and time functions supported by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

ABAP SQL

DATS\_IS\_VALID( date )

Shows whether the argument is a valid date.

[x](javascript:call_link\('abencds_f1_date_functions.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_DAYS\_BETWEEN( date1, date2 )

Difference between two dates.

[x](javascript:call_link\('abencds_f1_date_functions.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_ADD\_DAYS( date, days , on\_error )

Total of days and a date.

[x](javascript:call_link\('abencds_f1_date_functions.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_ADD\_MONTHS( date, months, on\_error )

Total of months and a date.

[x](javascript:call_link\('abencds_f1_date_functions.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

TIMS\_IS\_VALID( time )

Shows whether the argument is a valid time.

[x](javascript:call_link\('abencds_f1_time_functions.htm'\))

[x](javascript:call_link\('abensql_time_func.htm'\))

TSTMP\_IS\_VALID( tstmp )

Shows whether the argument is a valid time stamp.

[x](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_CURRENT\_UTCTIMESTAMP( )

Current UTC time stamp.

[x](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_SECONDS\_BETWEEN( tstmp1, tstmp2, on\_error )

Difference between two time stamps in seconds.

[x](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_ADD\_SECONDS( tstmp, seconds, on\_error )

Total of seconds and a time stamp.

[x](javascript:call_link\('abencds_f1_timestamp_functions.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_TO\_DATS( tstmp, tzone, clnt, on\_error )

Local date of a time stamp.

[x](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMP\_TO\_TIMS( tstmp, tzone, clnt, on\_error )

Local time of a time stamp.

[x](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMP\_TO\_DST( tstmp, tzone, clnt, on\_error )

Local summer time marker of a time stamp.

[x](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

DATS\_TIMS\_TO\_TSTMP( date, time, tzone, clnt, on\_error )

Time stamp for a local date and a local time.

[x](javascript:call_link\('abencds_f1_date_time_conversions.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

ABAP\_SYSTEM\_TIMEZONE( clnt, on\_error )

System time zone in AS ABAP.

[x](javascript:call_link\('abencds_f1_timezone_functions.htm'\))

[x](javascript:call_link\('abensql_timezone_func.htm'\))

ABAP\_USER\_TIMEZONE( user, clnt, on\_error )

User time zone in AS ABAP.

[x](javascript:call_link\('abencds_f1_timezone_functions.htm'\))

[x](javascript:call_link\('abensql_timezone_func.htm'\))

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](javascript:call_link\('abencds_f1_date_time_functions.htm'\)) and [ABAP SQL](javascript:call_link\('abenopen_sql_date_time_functions.htm'\)).