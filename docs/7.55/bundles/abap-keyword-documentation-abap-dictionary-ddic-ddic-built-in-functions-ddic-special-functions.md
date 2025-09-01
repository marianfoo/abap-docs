# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Functions / DDIC - Special Functions

Included pages: 3


### abenddic_special_functions.htm

---
title: "DDIC - Special Functions"
description: |
  These built-in functions are delivered by SAP and are not provided as native functions on every database platform: -   Conversion functions(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_conversion_functions.htm) -   Date functions and time functions(https://help.sap.com/doc
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_special_functions.htm"
abapFile: "abenddic_special_functions.htm"
keywords: ["do", "data", "abenddic", "special", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) → 

DDIC - Special Functions

These built-in functions are delivered by SAP and are not provided as native functions on every database platform:

-   [Conversion functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_conversion_functions.htm)

-   [Date functions and time functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_date_time_functions.htm)

Continue
[DDIC - Conversion Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_conversion_functions.htm)
[DDIC - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_date_time_functions.htm)


### abenddic_conversion_functions.htm

---
title: "DDIC - Conversion Functions"
description: |
  The following table shows the conversion functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm 'Glossary Entry').
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_conversion_functions.htm"
abapFile: "abenddic_conversion_functions.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "conversion", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_special_functions.htm) → 

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Conversion of an argument of type GEOM\_EWKB to JSON format

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_geo_conv_func.htm)

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

CURRENCY\_CONVERSION

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_curr_unit_conv_func.htm)

DECIMAL\_SHIFT

Setting the decimal separator

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

\-

\-

FLTP\_TO\_DEC

Conversion of an argument of type FLTP to a packed number

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION

Conversion of units

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conv_func_unit_curr_v2.htm)

\-

Descriptions of the possible operands and data types as well as the exact functionality can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_conversion_functions.htm).


### abenddic_date_time_functions.htm

---
title: "DDIC - Date Functions and Time Functions"
description: |
  The following table shows the date and time functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm 'Glossary Entry'
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_date_time_functions.htm"
abapFile: "abenddic_date_time_functions.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abenddic", "date", "time", "functions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_special_functions.htm) → 

DDIC - Date Functions and Time Functions

The following table shows the date and time functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

ABAP\_SYSTEM\_TIMEZONE

System time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timezone_func.htm)

ABAP\_USER\_TIMEZONE

User time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timezone_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timezone_func.htm)

DATN\_ADD\_DAYS

Adds days to a date.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATN\_ADD\_MONTHS

Adds months to a date.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATN\_DAYS\_BETWEEN

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATS\_ADD\_DAYS

Adds days to a date.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATS\_ADD\_MONTHS

Adds months to a date.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATS\_DAYS\_BETWEEN

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATS\_FROM\_DATN

Converts a date from type DATN to type DATS.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

DATS\_IS\_VALID

Shows whether the argument is a valid date.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm)

DATS\_TIMS\_TO\_TSTMP

Time stamp for a local date and a local time.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

DATS\_TO\_DATN

Converts a date from type DATS to type DATN.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TIMS\_FROM\_TIMN

Converts a time from type TIMN to type TIMS.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TIMS\_IS\_VALID

Shows whether the argument is a valid time.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_time_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_time_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_time_func.htm)

TIMS\_TO\_TIMN

Converts a time from type TIMS to type TIMN.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TSTMP\_ADD\_SECONDS

Adds seconds to a time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

TSTMP\_CURRENT\_UTCTIMESTAMP

Current UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

TSTMP\_IS\_VALID

Shows whether the argument is a valid time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

TSTMP\_SECONDS\_BETWEEN

Difference between two time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

TSTMP\_TO\_DATS

Local date of a time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_DST

Local daylight saving time marker of a time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_TIMS

Local time of a time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TSTMPL\_FROM\_UTCL

Converts a time stamp from type UTCLONG to type TIMESTAMPL.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

TSTMPL\_TO\_UTCL

Converts a time stamp from type TIMESTAMPL to type UTCLONG.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_time_conversions.htm)

UTCL\_ADD\_SECONDS

Adds seconds to a UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

UTCL\_CURRENT

Returns the current UTC time stamp within a SELECT\-statement.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

UTCL\_SECONDS\_BETWEEN

Difference between two UTC time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_timestamp_func.htm)

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_date_time_functions.htm).
