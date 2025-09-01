  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_functions.htm) → 

Date Functions and Time Functions

The following table shows the date and time functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

ABAP SQL

DATS\_IS\_VALID( date )

Shows whether the argument is a valid date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_DAYS\_BETWEEN( date1, date2 )

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_ADD\_DAYS( date, days , on\_error )

Total of days and a date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_ADD\_MONTHS( date, months, on\_error )

Total of months and a date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

TIMS\_IS\_VALID( time )

Shows whether the argument is a valid time.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_time_func.htm)

TSTMP\_IS\_VALID( tstmp )

Shows whether the argument is a valid time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_CURRENT\_UTCTIMESTAMP( )

Current UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_SECONDS\_BETWEEN( tstmp1, tstmp2, on\_error )

Difference between two time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_ADD\_SECONDS( tstmp, seconds, on\_error )

Total of seconds and a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_TO\_DATS( tstmp, tzone, clnt, on\_error )

Local date of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_TIMS( tstmp, tzone, clnt, on\_error )

Local time of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_DST( tstmp, tzone, clnt, on\_error )

Local summer time marker of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

DATS\_TIMS\_TO\_TSTMP( date, time, tzone, clnt, on\_error )

Time stamp for a local date and a local time.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

ABAP\_SYSTEM\_TIMEZONE( clnt, on\_error )

System time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timezone_func.htm)

ABAP\_USER\_TIMEZONE( user, clnt, on\_error )

User time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timezone_func.htm)

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_date_time_functions.htm).