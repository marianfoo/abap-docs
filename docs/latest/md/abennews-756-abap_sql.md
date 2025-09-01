  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL in ABAP Release 7.56

[1\. New String Function](#!ABAP_MODIFICATION_1@1@)
[2\. New Date and Time Functions](#!ABAP_MODIFICATION_2@2@)
[3\. New Casts](#!ABAP_MODIFICATION_3@3@)
[4\. New Set Operators](#!ABAP_MODIFICATION_4@4@)
[5\. New Function for Unit Conversion](#!ABAP_MODIFICATION_5@5@)
[6\. New Expression Null](#!ABAP_MODIFICATION_6@6@)
[7\. Addition for the String Function REPLACE\_REGEXPR](#!ABAP_MODIFICATION_7@7@)
[8\. New String Function SUBSTRING\_REGEXPR](#!ABAP_MODIFICATION_8@8@)
[9\. Byte Fields as Null Indicators](#!ABAP_MODIFICATION_9@9@)
[10\. Position of Null Indicators](#!ABAP_MODIFICATION_10@10@)
[11\. Strict Mode of the Syntax Check](#!ABAP_MODIFICATION_11@11@)

Modification 1   

New String Function

ABAP SQL now supports the new string function [INITCAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm).

Modification 2   

New Date and Time Functions

The following new generic [date and time functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_date_time_functions.htm) are available:

SQL Function

Date

Time

Time Stamp

IS\_VALID

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_time_func.htm)

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_YEAR

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_MONTH

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_DAY

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_HOUR

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_time_func.htm)

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_MINUTE

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_time_func.htm)

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

EXTRACT\_SECOND

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_time_func.htm)

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

DAYNAME

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

MONTHNAME

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

WEEKDAY

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

DAYS\_BETWEEN

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

ADD\_DAYS

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

ADD\_MONTHS

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm)

\-

[x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm)

Modification 3   

New Casts

The following [new casts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) are available:

Source type

Numeric target type

Character-like target type

Date/time field as target type

CHAR, SSTRING, DATS, TIMS

INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, FLTP

\-

\-

FLTP

INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34

CHAR, SSTRING

\-

DF16\_DEC, DF34\_DEC

FLTP

\-

\-

DATN

\-

\-

DATS

TIMN

\-

\-

TIMS

Modification 4   

New Set Operators

ABAP SQL now supports the new set operators [INTERSECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm) and [EXCEPT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunion.htm).

Modification 5   

New Function for Unit Conversion

ABAP SQL now supports the new function [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_curr_unit_conv_func.htm) for unit conversions.

Modification 6   

New Expression Null

ABAP SQL now supports the new expression [NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_null.htm).

Modification 7   

Addition for the String Function REPLACE\_REGEXPR

The new parameter start can now be used in the function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm). Additionally, the parameter occurrence can now include [expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexpression_glosry.htm "Glossary Entry").

Modification 8   

New String Function SUBSTRING\_REGEXPR

ABAP SQL now supports the new string function [SUBSTRING\_REGEXPR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm) which supports regular expressions.

Modification 9   

Byte Fields as Null Indicators

The new addition [INDICATORS ... NULL BITFIELD](abapselect_indicators.htm#!ABAP_ALTERNATIVE_2@2@) of the INTO clause of a SELECT statement allows a [byte field type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_type_glosry.htm "Glossary Entry") component to be specified as a [null indicator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_indicator_glosry.htm "Glossary Entry"). The single bits of the byte field serve for indicating null values in the result set of the query. For this purpose, [condensed indicator structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencondensed_ind_structure_glosry.htm "Glossary Entry") can be declared with the addition [AS BITFIELD](abaptypes_indicators.htm#!ABAP_ADDITION_2@2@) of the TYPES statement.

Modification 10   

Position of Null Indicators

If CORRESPONDING FIELDS is used in the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause of a SELECT statement, a [null indicator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_indicator_glosry.htm "Glossary Entry") defined by [INDICATORS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_indicators.htm) can be positioned anywhere in the target area. Otherwise, it must be the last component.

Modification 11   

Strict Mode of the Syntax Check

If one the new features listed above or one of the new CDS system table functions [SERIES\_GENERATE\_](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_series_generators.htm) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_756.htm), which handles the statement more strictly than the regular syntax check.