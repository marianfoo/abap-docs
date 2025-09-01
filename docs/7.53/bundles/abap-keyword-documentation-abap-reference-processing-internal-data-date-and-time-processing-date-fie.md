# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Date and Time Processing / Date Fields and Time Fields

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencharacter_date_time.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_date_time.htm)
- [abenchar_date_time_fields_access.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm)
- [abenchar_date_time_fields_charlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_charlike.htm)
- [abenchar_date_time_fields_numlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_numlike.htm)
- [abendate_time_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_abexa.htm)
- [abenchar_date_time_fields_validity.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_validity.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.212Z

---

### abencharacter_date_time.htm

> **📖 Official SAP Documentation**: [abencharacter_date_time.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_date_time.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) → 

Date Fields and Time Fields

The ABAP types [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) are built-in types for data objects that specify dates and times. The date type d describes a character-like local date in the format "yyyymmdd". The date type t describes a character-like local date in the format "hhmmss".

-   [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\))

-   [Validity of Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_validity.htm'\))

Continue
[Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\))
[Validity of Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_validity.htm'\))



**📖 Source**: [abencharacter_date_time.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharacter_date_time.htm)

### abenchar_date_time_fields_access.htm

> **📖 Official SAP Documentation**: [abenchar_date_time_fields_access.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) → 

Access to Date Fields and Time Fields

Only a few operand positions are affected by the fact that date fields and time fields contain a local date in the format "yyyymmdd" or a local time in the format "hhmmss":

-   When using date fields and time fields as source fields or target fields of a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   When converting a local date and a local time to a [time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)) using [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)) and back again using [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)).

-   In output formatting using [string templates](javascript:call_link\('abenstring_templates.htm'\)) or the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   When mapping to [asXML](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) or [JSON](javascript:call_link\('abenabap_asjson.htm'\)).

In all other operand positions, the handling of date fields and time fields is specified in the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_date_time.htm'\)) for these data types.

-   The conversion rules are designed so that data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions. In the latter case, the content of a date field is converted to the number of days since 01.01.0001 and the content of a time field is converted to the number of seconds since midnight.

-   The comparison rules are designed so that a later date or later time is greater than an earlier date or earlier time.

Direct assignments or comparisons between the data types d and t are meaningless and therefore forbidden. The following sections show examples of how to access date fields and time fields effectively.

-   [Character-like access to date/time fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))

-   [Numeric access to date/time fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))

Notes

-   The function modules of the function group SCAL provide some additional information about character-like dates, for example the day of the week or the calendar week for a given date.

-   Special [date functions](javascript:call_link\('abencds_f1_date_functions.htm'\)) and [time functions](javascript:call_link\('abencds_f1_time_functions.htm'\)) can be used in the CDS DDL of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") to edit dates and times saved in database tables.

Example

Conversion of a time stamp to date and time fields and their type-friendly formatting as string templates.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).
cl\_demo\_output=>display( |{ date DATE = ISO
                       }\\n{ time TIME = ISO }| ).

Continue
[Character-Like Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))
[Numeric Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))
![Example](exa.gif "Example") [Evaluating Date Fields and Time Fields](javascript:call_link\('abendate_time_abexa.htm'\))



**📖 Source**: [abenchar_date_time_fields_access.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm)

### abenchar_date_time_fields_charlike.htm

> **📖 Official SAP Documentation**: [abenchar_date_time_fields_charlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_charlike.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) →  [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\)) → 

Character-Like Access to Date Fields and Time Fields

Character-like access to character-like content of date fields and time fields is evaluated in a character-like manner. The character-like nature of date fields and time fields can be exploited, for example, to access detailed information. To avoid unexpected results from this type of access, the [validity](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)) of the content of the date or time fields must be verified. Most [statements](javascript:call_link\('abenstring_processing_statements.htm'\)) and [functions](javascript:call_link\('abenstring_functions.htm'\)) used in [string processing](javascript:call_link\('abenabap_data_string.htm'\)) are not suitable for editing date fields and time fields because they generally produce invalid content.

Example

The following example demonstrates how [substring functions](javascript:call_link\('abensubstring_functions.htm'\)) can be used to extract the components year, month, day, hour, minute, and second from date fields and time fields.

DATA: date TYPE d,
      time TYPE t.
DATA: year   TYPE i,
      month  TYPE i,
      day    TYPE i,
      hour   TYPE i,
      minute TYPE i,
      second TYPE i.
date = sy-datlo.
time = sy-timlo.
year   = substring( val = date off = 0 len = 4 ).
month  = substring( val = date off = 4 len = 2 ).
day    = substring( val = date off = 6 len = 2 ).
hour   = substring( val = time off = 0 len = 2 ).
minute = substring( val = time off = 2 len = 2 ).
second = substring( val = time off = 4 len = 2 ).



**📖 Source**: [abenchar_date_time_fields_charlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_charlike.htm)

### abenchar_date_time_fields_numlike.htm

> **📖 Official SAP Documentation**: [abenchar_date_time_fields_numlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_numlike.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) →  [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\)) → 

Numeric Access to Date Fields and Time Fields

Numeric access to date fields and time fields exploits the fact that the [conversion](javascript:call_link\('abenconversion_elementary.htm'\)) of the types d and t to numeric values produces an integer number of days or seconds. This applies particularly when using date fields and time fields in [numeric calculations](javascript:call_link\('abencompute_expressions.htm'\)), where these fields are converted to the corresponding calculation type. This enables differences to be calculated or values to be added or subtracted from date fields or time fields. None of the other arithmetic operations are generally advisable here. To avoid unexpected results from these calculations, the [validity](javascript:call_link\('abenchar_date_time_fields_validity.htm'\)) of the content of the date or time fields must be verified.

Example

The following calculations provide the current day of the year, plus the hour, minutes, and seconds of the current time. The date and time are provided by a [time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)).

DATA: date TYPE d,
      time        TYPE t,
      time\_stamp     TYPE timestamp,
      day    TYPE i,
      hour   TYPE i,
      minute TYPE i,
      second      TYPE i,
      first\_day   TYPE d.
GET TIME STAMP FIELD time\_stamp.
CONVERT TIME STAMP time\_stamp TIME ZONE sy-zonlo
        INTO DATE date TIME time.
first\_day = date(4) && '0101'.
day       = date - first\_day + 1.
second    = time.
hour      = second DIV 3600.
second    = second - hour \* 3600.
minute    = second DIV 60.
second    = second - minute \* 60.

Example

The following calculation produces the day of the week for a date field date containing any valid date. 1 means Monday, 2 means Tuesday, and so on.

day = ( 5 + date  MOD 7 ) MOD 7  + 1.

Example

The following calculation produces the last day of the previous month.

DATA date TYPE d.
date = sy-datlo.
date+6(2) = '01'.
date     = date - 1.



**📖 Source**: [abenchar_date_time_fields_numlike.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_numlike.htm)

### abendate_time_abexa.htm

> **📖 Official SAP Documentation**: [abendate_time_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) →  [Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_access.htm'\)) → 

Evaluating Date Fields and Time Fields

This example demonstrates calculations with date and time fields.

Source Code

REPORT demo\_data\_date\_time.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: ultimo TYPE d,
          t1 TYPE t VALUE '000000',
          t2 TYPE t,
          diff TYPE i,
          seconds TYPE i,
          hours TYPE i.
    "date calculation
    ultimo      = sy-datlo.
    ultimo+6(2) = '01'.
    ultimo      = ultimo - 1.
    cl\_demo\_output=>write(
      |Last day of last month: { ultimo }| ).
    "time calculation
    t2 = sy-timlo.
    diff = t2 - t1.
    seconds = diff MOD 86400.
    hours = seconds / 3600.
    cl\_demo\_output=>display(
      |Number of hours since midnight: { hours }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part of the main method, the last day of the previous month is assigned to ultimo. First, ultimo is filled with the current date. Then the date is changed to the first day of the current month using an offset. Finally, 1 is subtracted from ultimo, so that the content of the field is changed to the last day of the previous month. Before the subtraction takes place, the system converts ultimo into the number of days since 01.01.0001 and converts the result back into a date.

In the second part, the number of hours between midnight and the current time are calculated. First, the difference between the time fields is calculated. The difference is then converted into the total number of seconds using the MOD operation. A positive difference remains unchanged. This step is only required for negative differences. Finally, the number of hours is calculated by dividing the number of seconds by 3600.



**📖 Source**: [abendate_time_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_time_abexa.htm)

### abenchar_date_time_fields_access.htm

> **📖 Official SAP Documentation**: [abenchar_date_time_fields_access.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) → 

Access to Date Fields and Time Fields

Only a few operand positions are affected by the fact that date fields and time fields contain a local date in the format "yyyymmdd" or a local time in the format "hhmmss":

-   When using date fields and time fields as source fields or target fields of a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

-   When converting a local date and a local time to a [time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)) using [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)) and back again using [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)).

-   In output formatting using [string templates](javascript:call_link\('abenstring_templates.htm'\)) or the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   When mapping to [asXML](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) or [JSON](javascript:call_link\('abenabap_asjson.htm'\)).

In all other operand positions, the handling of date fields and time fields is specified in the [conversion rules](javascript:call_link\('abenconversion_elementary.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_date_time.htm'\)) for these data types.

-   The conversion rules are designed so that data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions. In the latter case, the content of a date field is converted to the number of days since 01.01.0001 and the content of a time field is converted to the number of seconds since midnight.

-   The comparison rules are designed so that a later date or later time is greater than an earlier date or earlier time.

Direct assignments or comparisons between the data types d and t are meaningless and therefore forbidden. The following sections show examples of how to access date fields and time fields effectively.

-   [Character-like access to date/time fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))

-   [Numeric access to date/time fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))

Notes

-   The function modules of the function group SCAL provide some additional information about character-like dates, for example the day of the week or the calendar week for a given date.

-   Special [date functions](javascript:call_link\('abencds_f1_date_functions.htm'\)) and [time functions](javascript:call_link\('abencds_f1_time_functions.htm'\)) can be used in the CDS DDL of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") to edit dates and times saved in database tables.

Example

Conversion of a time stamp to date and time fields and their type-friendly formatting as string templates.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time).
cl\_demo\_output=>display( |{ date DATE = ISO
                       }\\n{ time TIME = ISO }| ).

Continue
[Character-Like Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_charlike.htm'\))
[Numeric Access to Date Fields and Time Fields](javascript:call_link\('abenchar_date_time_fields_numlike.htm'\))
![Example](exa.gif "Example") [Evaluating Date Fields and Time Fields](javascript:call_link\('abendate_time_abexa.htm'\))



**📖 Source**: [abenchar_date_time_fields_access.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_access.htm)

### abenchar_date_time_fields_validity.htm

> **📖 Official SAP Documentation**: [abenchar_date_time_fields_validity.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_validity.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenchar_date_time_fields_validity.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchar_date_time_fields_validity.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)) → 

Validity of Date Fields and Time Fields

Date fields and time fields of the types d and t can contain any alphanumeric characters.

-   Valid values for the type d, however, are only those digits that are valid dates according to the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31.

-   Valid values for the type t, however, are only those digits that are interpreted as times in the 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

The ABAP runtime environment checks the validity at the following points:

-   Date fields and time fields with invalid values raise an exception when used as a [source field](javascript:call_link\('abenmove_exact_elementary_valid.htm'\)) of a [lossless assignment](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). Conversely, source fields of other types may not produce any invalid values in date fields and time fields as [target fields](javascript:call_link\('abenmove_exact_elementary_fit.htm'\)) in a lossless assignment.

-   Invalid values cannot be converted to [time stamps](javascript:call_link\('abentime_stamp_oview.htm'\)) by using the statement [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)).

-   In a regular assignment to numeric fields, [date fields](javascript:call_link\('abenconversion_type_d.htm'\)) and [target fields](javascript:call_link\('abenconversion_type_t.htm'\)) with invalid values produce the value 0, with the following exceptions:

-   For a source field of the type d, the values from 5.10.1582 to 14.10.1582, which are actually invalid due to the conversion from the Julian to Gregorian calendar, are handled just like the valid values from 15.10.1582 to 24.10.1582.

-   For a source field of the type t that contains only digits, the numeric value is calculated using the formula hh\*3600+mm\*60+ss, even if the times are invalid.

-   For regular assignments of [numeric fields](javascript:call_link\('abennumeric_source_fields.htm'\)) to date fields and time fields, the numeric fields must be within the value range of the data type i and comply with the following special rules:

-   When number values are assigned to date fields, and these fields cannot be produced by the reverse conversion, the date field is initialized

-   Any number values can be assigned to time fields. When converted, the number value is divided by 86400 and only the integer remainder of the division is respected. This always produces a valid time in hours.

No checks are generally made on other assignments to date fields and time fields not mapped to assignments of numeric values, nor to other operand positions. As a consequence, invalid values are produced easily by date fields and time fields, and then processed further.

Initial Value of Date Fields

The initial value "00000000" of the data type d and the date 01.01.0001 have a special part to play here.

-   The initial value "00000000" of data type d is not a valid date. A conversion of the initial value "00000000" to a numeric data type produces, like all invalid values, the value 0. Conversely, the conversion of the number 0 to a date field of the type d always produces the invalid date "00000000". Negative and oversized numbers also produce the invalid date "00000000".

-   A conversion of a valid date to a field of the type d produces the number of days since 01.01.0001, which makes this date the zero point for date calculations. A conversion of a date field of the type d with the value "00010101" to a numeric value produces the value 0, like the conversion of the initial value or any other invalid value, and the conversion cannot be reversed.

1 is the smallest number that is converted to a valid date, 02.01.0001, when assigning to a date field of type d. Assignments between valid date fields and numeric fields can be reversed only from this date.

In [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"), invalid values in source fields raise exceptions instead of producing the value 0 or "00000000". Here, the value "00010101", which is really part of the value range, is regarded as invalid, while "00000000", not actually part of the value range, is regarded as valid. This means that the initial value "00000000" can be used by lossless assignments and all valid assignments between date fields and numeric fields can be reversed.

Note

The validity of the content of date fields and time fields must be verified before they are accessed.

Example

Identify an invalid date by a comparison with the value 0. For the comparison, the date field is converted to an integer field of type i, where an invalid date produces the value 0. The valid date "00010101", which would also produce the value 0, is handled separately beforehand.

DATA(date) = CONV d( '20160231' ).
date = COND #( WHEN date = '00010101' OR date <> 0 THEN date
               ELSE THROW cx\_sy\_conversion\_no\_date( ) ).

Example

Identify an invalid time by a comparison with the value 0. For the comparison, the time field is converted to an integer field of type i, where an invalid time produces the value 0. The valid time "000000", which would also produce the value 0, is handled separately beforehand.

DATA(time) = CONV t( 'XXXXXX' ).
time = COND #( WHEN time = '000000' OR time <> 0 THEN time
               ELSE THROW cx\_sy\_conversion\_no\_time( ) ).
