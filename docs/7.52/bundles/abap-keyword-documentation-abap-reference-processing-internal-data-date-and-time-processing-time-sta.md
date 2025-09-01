# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Date and Time Processing / Time Stamp

Included pages: 7


### abentime_stamps.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) → 

Time Stamp

This section describes how non-time-zone-specific [time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented and the statements used to access them.

-   [Time Stamps - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm)

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time-stamp.htm)

-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm)

-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_time-stamp.htm)

-   [System Class for Time Stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_tstmp.htm)

Continue
[Time Stamps - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm)
[GET TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time-stamp.htm)
[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm)
[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_time-stamp.htm)
[System Class for Time Stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_tstmp.htm)
![Example](exa.gif "Example") [Converting Time Stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconvert_time_stamp_abexa.htm)


### abentime_stamp_oview.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

Time Stamps - Overview

-   [Representation of Time Stamps](#@@ITOC@@ABENTIME_STAMP_OVIEW_1)

-   [Access to Time Stamps](#@@ITOC@@ABENTIME_STAMP_OVIEW_2)

-   [Notes on Handling Time Stamps](#@@ITOC@@ABENTIME_STAMP_OVIEW_3)

-   [Examples](#@@ITOC@@ABENTIME_STAMP_OVIEW_4)

Representation of Time Stamps

[Time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented using packed numbers of the type [p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm). There is a short form and a long form.

-   In the short form, a time stamp is represented precisely to the second using a packed number with length 8, and the ABAP Dictionary type TIMESTAMP. The digits of the packed number show the time stamp in the format "yyyymmddhhmmss", where "yyyy" is the year, "mm" is the month, "dd" is the day, "hh" is the hour, "mm" are the minutes, and "ss" are the seconds.

-   In the long form, a time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type TIMESTAMPL The digits of the packed number show the time stamp in the format "yyyymmddhhmmss.sssssss", where, in addition to the short form, the seven decimal places "sssssss" are the fractions of a second. The maximum time resolution depends on the operating system of the [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry") and can be less.

In its integer part, a valid time stamp must contain valid dates and times:

-   When specifying the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.

-   When specifying the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.

A time valid in the Gregorian calendar must be represented. [Leap seconds](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenleap_second_glosry.htm "Glossary Entry") are not supported.

Note

The method NORMALIZE of class CL\_ABAP\_TSTMP can be used to convert invalid values in time stamps to valid values.

Access to Time Stamps

Only a few statements recognize that packed numbers of the types TIMESTAMP and TIMESTAMPL are time stamps. All other statements interpret the content of these data types numerically and, with the exception of direct comparisons, are not suitable for handling time stamps. The following statements can be used to handle time stamps:

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time-stamp.htm) creates a current time stamp.

-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm) converts a time stamp to a local date and a local time.

-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_time-stamp.htm) converts a local date and a local time to a time stamp.

The following settings for formatting output also handle time stamps in a specific way:

-   Use of the options [TIMESTAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) and [TIMEZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm)

-   Use of the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm) of the statement WRITE *\[*TO*\]*.

-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z support the serialization and deserialization of ABAP time stamps in [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_schema.htm).

The system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_tstmp.htm) provides methods for adding, subtracting, converting, and comparing time stamps.

Note

Special [time stamp functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timestamp_functions.htm) can be used in the CDS DDL of the [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") for editing time stamps saved in database tables.

Notes on Handling Time Stamps

Time stamps are only interpreted as such when they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type p, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two time stamps are compared with each other. In programs for which the program attribute [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is not set, note the rules applying to the data type p. In particular, direct comparisons of time stamps in the long form with the short form produce a meaningful result only when the program attribute fixed point arithmetic is set. Otherwise, you must use system class CL\_ABAP\_TSTMP for comparisons as well. When assigning time stamps in the long form to time stamps in the short form, unwanted rounding effects occur. For this reason, always use the method MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_tstmp.htm).

When time stamps are used in operand positions where they are not supposed to be used, no warnings are given by the syntax check or by the extended program check (not even in [lossless assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlossless_assignment_glosry.htm "Glossary Entry")).

Examples

Example

Direct comparison of time stamps of the same data type.

GET TIME STAMP FIELD DATA(ts2).
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD DATA(ts1).
ASSERT ts2 < ts1.

Example

Converts a time stamp to a date and a time field, and determines the summer time marker.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>display( |{ date }\\n{
                            time }\\n{
                            dst } | ).

Example

Type-friendly formatting of a time stamp in a string template.

GET TIME STAMP FIELD DATA(ts).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO } | ).

Example

Serializes a time stamp using a special domain.

DATA ts TYPE xsddatetime\_z.
GET TIME STAMP FIELD ts.
CALL TRANSFORMATION id SOURCE ts = ts
                       RESULT XML DATA(xml).
cl\_demo\_output=>display\_xml( xml ).

Example

Calculates the difference between two time stamps with the class CL\_ABAP\_TSTMP.

DATA: ts1 TYPE timestampl,
      ts2 TYPE timestampl.
GET TIME STAMP FIELD ts2.
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD ts1.
DATA(seconds) = cl\_abap\_tstmp=>subtract(
    EXPORTING
      tstmp1 = ts1
      tstmp2 = ts2 ).
cl\_demo\_output=>display( seconds ).

Example

Direct calculation with time stamps. If, for example, ts1 has the value 20161004130733, adding 3600 s in ts2 produces the value 20161004140733. Since the time stamps are interpreted as numbers of type p in the calculation, the result is 10000, which would generally be unexpected.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1
                                secs  = 3600 ).
cl\_demo\_output=>display( ts2 - ts1 ).

Example

Incorrect calculation with time stamps. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, if 20161004131906 is calculated, this produces the invalid value 20161004315506.

GET TIME STAMP FIELD DATA(ts).
ts = ts + 86400 \* 2 + 3600 \* 3.
cl\_demo\_output=>display( ts ).


### abapget_time-stamp.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

GET TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time_stamp_shortref.htm)

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement creates a [](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenposix_timestamp_glosry.htm "Glossary Entry")[POSIX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") UTC time stamp from the [system time](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_time_glosry.htm "Glossary Entry") and [system date](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_date_glosry.htm "Glossary Entry") in AS ABAP and assigns it to the variable time\_stamp.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. Depending on the data type, the time stamp is created either in the [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm) or in the [long form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm).
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type TIMESTAMP is declared.
    

Note

The precision of the decimal places of the long form depends on the hardware (processor) of the [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"). The maximum resolution of 100 ns is not always reached. On some platforms, only a resolution of milliseconds can be reached.

Example

Creates two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be given a special format for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD DATA(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT


### abapconvert_time-stamp.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

CONVERT TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time_stamp_shortref.htm)

Syntax

CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO *\[*DATE dat*\]*
             *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]*.

Effect

This statement interprets the content of time\_stamp as a [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm), converts it to the local data and the local time in the time zone specified in tz, and assigns the result to the variables dat, tim, and dst.

time\_stamp and tz are [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   The operand time\_stamp must have the type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 with seven decimal places. Depending on the data type, the content is interpreted either as a time stamp in the [short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm) or as a time stamp in the [long form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm). No other data types can be specified. If time\_stamp does not contain a valid time stamp, the content of dat and tim is not changed, and sy-subrc is set to 12.
    
-   The operand tz must be character-like and contain a [time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, the time zone is set implicitly to "UTC", dat and tim are given the appropriate values, and sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, the content of dat and tim is not changed and sy-subrc is set to 8.

-   If the [rule set](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, a non-handleable exception is raised.

-   The local date in the format of the data type d is assigned to dat and a variable must be specified to which the return value can be converted.
    
-   The local time in the format of the data type t is assigned to tim and a variable must be specified to which the return value can be converted. If the time stamp in time\_stamp is in the [long form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm), the seconds fractions in the decimal places are ignored.
    
-   If the time stamp in time\_stamp for the time zone specified in tz is in summer time, dst is given the value "X". Otherwise it is given the value " ".
    

The following applies to the return values dat, tim, and dst:

-   The return value for dat has the data type d. The following can be specified for dat:
    

-   An existing variable to which the return value can be [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_d.htm).

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of data type d is declared.

-   The return value for tim has the data type t. The following can be specified for tim:
    

-   An existing variable to which the return value can be [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_t.htm).

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of data type t is declared.

-   The return value for dst has the data type c with the length 1. The following can be specified for dst:
    

-   An existing variable of the type c with length 1

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of data type c with length 1 is declared.

When time stamps are converted to reflect the conversion from the Julian calendar to the Gregorian calendar and the non-existence of the days between 19/5/1582 and 10/14/1582, this returns the same results as the conversion for the days from 10/15/1582 to 10/24/1582 (which do exist).

If time\_stamp contains a valid value but produces an invalid date when combined with a valid time zone in tz, dat and tim are not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Time stamp was converted into the local time of the specified time zone and assigned to the target fields.

4

Time stamp was assigned to the target fields without conversion into the local time.

8

Time stamp could not be converted, because the specified time zone is not in the database table TTZZ.

12

Time stamp could not be converted since time\_stamp contains an invalid value or produces an invalid date when combined with the time zone.

Notes

-   A current UTC time stamp can be created using the statement [GET TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_time-stamp.htm).
    
-   The current user time zone can be found in the system field [sy-zonlo](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm).
    
-   It is now possible to use the return value for the summer time in dst to distinguish duplicate local time specifications that occur when UTC time stamps are converted into local time during the double hour in the changeover between summer and winter time.
    
-   Usually, an invalid date can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
    

Example

For the time zone "EST" in the database table TTZZ, a shift of -5 hours from the UTC reference time is entered in the database table TTZR. In the database table TTZDV, the end of summer time is defined as the last Sunday in October at 02:00 using the key "USA". In 2016 the last Sunday is October 30. If these settings are used in the rules, the two conversions below both produce the same local time of "01:30:00". The first conversion shows that the time is still in the summer time.

DATA: time\_stamp     TYPE timestamp,
      tz  TYPE ttzz-tzone.
tz = 'EST'.
time\_stamp = 20161030053000.
CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO DATE DATA(dat) TIME DATA(tim)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
time\_stamp = 20161030063000.
CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO DATE dat TIME tim
        DAYLIGHT SAVING TIME dst.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB


### abapconvert_date_time-stamp.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

CONVERT INTO TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time_stamp_shortref.htm)

Syntax

CONVERT DATE dat
        *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
        INTO TIME STAMP time\_stamp TIME ZONE tz.

Effect

This statements converts a date specified in dat, a time specified in tim, and a summer time marker specified in dst from the time zone specified in tz into a [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm) and maps the result to the variable time\_stamp.

dat, tim, dst, and tz are [functional operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   dat expects a data object of the type d containing a valid date. Operands of other types are converted to d. If dat contains an [invalid value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchar_date_time_fields_validity.htm), time\_stamp is not changed and sy-subrc is set to 12.
    
-   tim expects a data object of the type t containing a valid time. Operands of other types are converted to t. If the TIME addition is not specified, the system implicitly uses the initial time "000000" for tim. In tim, only the values 00 to 23 for the hours, and 00 to 59 for the minutes are valid. If tim contains an [invalid value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenchar_date_time_fields_validity.htm), time\_stamp is not changed and sy-subrc is set to 12.
    
-   dst can be specified as a data object of the type c with length 1 containing the value "X" or " ". This controls the behavior of the statement with respect to summer time.
    

-   If dst has the value "X", the value of tim is applied as the specified time in daylight saving time.

-   If dst has the value "X", the value of tim is applied as the specified time in winter time.

If the time zone specified in tz does not have a summer time rule (for example when "UTC" is specified), the addition DAYLIGHT SAVING TIME is ignored. If the addition DAYLIGHT SAVING TIME is not specified, the value of dst is set to "X" implicitly if the data in tim and dat is in summer time and is set to " " for data in winter time. In the extra hour that is caused by switching from summer time to winter time, tim and dat are interpreted as a time in summer time and dst is set to the value "X". If the value in dst does not match the data in tim and dat (that is, if the value "X" is specified in winter time and the value " " in summer time, time\_stamp is not changed and sy-subrc is set to 12.

-   tz expects a character-like data object containing a [time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, the time zone is set implicitly to "UTC", time\_stamp is given the appropriate data, and sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, time\_stamp remains unchanged and sy-subrc is set to 8.

-   If the [rule set](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, a non-handleable exception is raised.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. If time\_stamp has the data type TIMESTAMPL for the [long form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm), the seconds fractions in the decimal places are initialized when the assignment is made.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type TIMESTAMP is declared.
    

When dates are converted to reflect the conversion from the Julian calendar to the Gregorian calendar and the non-existence of the days between 19/5/1582 and 10/14/1582, this returns the same results as the conversion for the days from 10/15/1582 to 10/24/1582 (which do exist).

If dat and tim contain valid values but produce an invalid time stamp when combined with a valid time zone in tz, time\_stamp is not modified and sy-subrc is set to 12.

System Fields

sy-subrc

Meaning

0

Local time of specified time zone was converted to time stamp and assigned to the target field

4

The specified time was converted to a time stamp without time shift and assigned to the target field.

8

The specified time could not be converted, because the specified time zone is not in the database table TTZZ

12

The specified time could not be converted, because dat, tim, or dst contain invalid or inconsistent values.

Notes

-   Current user-specific local times and the corresponding local time zones are stored in the system fields [sy-datlo](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm), [sy-timlo](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm), and [sy-zonlo](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_system_fields.htm).
    
-   Specifying daylight saving time and winter time after DAYLIGHT SAVING TIME enables different UTC time stamps to be created from matching local time stamps within the extra hour when switching from daylight saving time to winter time.
    
-   When the switch is made from winter to daylight saving time, an hour is lost. For example, in the "CET" time zone in the year 2009, on March 29, the hour between 02:00 and 03:00 does not exist. If an attempt is made to convert a time during this missing hour, the statement is always terminated with the value 12 for sy-subrc because this time or this local time stamp does not exist.
    
-   Usually, an invalid time stamp can be created from a valid date and time only by combining the first valid date 00010101 with time zones east of UTC or the last valid date 99991231 with time zones west of UTC.
    

Example

For the time zone "EST", the settings apply that are described in the example for [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm) in the rule set for time stamps. By specifying the daylight saving and winter time, two different UTC time stamps "20161030053000" and "20161030063000" are created from one specified local time. Without the addition DAYLIGHT SAVING TIME, the UTC time stamp "20161030053000" is created.

DATA: dat TYPE d,
      tim TYPE t,
      tz  TYPE ttzz-tzone.
tz = 'EST'.
dat = '20161030'.
tim = '013000'.
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME 'X'
        INTO TIME STAMP DATA(time\_stamp) TIME ZONE tz.
cl\_demo\_output=>write\_data( time\_stamp ).
CONVERT DATE dat TIME tim DAYLIGHT SAVING TIME ' '
        INTO TIME STAMP time\_stamp TIME ZONE tz.
cl\_demo\_output=>write\_data( time\_stamp ).
cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB


### abencl_abap_tstmp.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

System Class for Time Stamps

The class CL\_ABAP\_TSTMP is used to calculate and convert [time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm). Important methods include:

-   The method ADD or SUBTRACTSECS adds or subtracts seconds from time stamps.

-   The method TD\_SUBTRACT calculates the difference between two time stamps.

-   The method MOVE converts the long form of time stamps to the short form, and back, avoiding unwanted rounding effects.

-   The method NORMALIZE normalizes time stamps. Invalid time stamps are converted into valid time stamps.

Example

Creation of a one hour earlier time stamp by subtracting 3600 seconds.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1
                                         secs  = 3600 ).
cl\_demo\_output=>display( |{ ts1 TIMESTAMP = ISO
                       }\\n{ ts2 TIMESTAMP = ISO }| ).


### abenconvert_time_stamp_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_processing.htm) →  [Time Stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamps.htm) → 

Converting Time Stamps

This example demonstrates the statements [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_date_time-stamp.htm).

Source Code

REPORT demo\_convert\_time\_stamp.
SELECTION-SCREEN: BEGIN OF SCREEN 100 AS WINDOW,
                  BEGIN OF BLOCK bl1 WITH FRAME.
PARAMETERS: date1 TYPE d,
            time1 TYPE t,
            tz1   TYPE ttzz-tzone.
SELECTION-SCREEN  BEGIN OF LINE.
PARAMETERS  dst\_flag AS CHECKBOX.
SELECTION-SCREEN: COMMENT 3(29) text-dst,
                  POSITION POS\_LOW.
PARAMETERS  dst1  TYPE abap\_bool.
SELECTION-SCREEN: END OF LINE,
                  END OF BLOCK bl1,
                  BEGIN OF BLOCK bl2 WITH FRAME.
PARAMETERS  tsout TYPE c LENGTH 19 MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl2,
                  BEGIN OF BLOCK bl3 WITH FRAME.
PARAMETERS  tz2   TYPE ttzz-tzone.
PARAMETERS: date2 TYPE d         MODIF ID out,
            time2 TYPE t         MODIF ID out,
            dst2  TYPE abap\_bool MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl3,
                  END OF SCREEN 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: date TYPE d,
          time TYPE t,
          ts   TYPE timestamp.
    date1 = sy-datlo.
    time1 = sy-timlo.
    tz1 = tz2 = 'UTC'.
    DO.
      IF sy-index > 1.
        CALL SELECTION-SCREEN 100 STARTING AT 10 10.
        IF sy-subrc <> 0.
          EXIT.
        ENDIF.
      ENDIF.
      date = date1.
      time = time1.
      IF dst\_flag = abap\_false.
        CONVERT DATE date TIME time
                INTO TIME STAMP ts TIME ZONE tz1.
      ELSE.
        CONVERT DATE date TIME time DAYLIGHT SAVING TIME dst1
                INTO TIME STAMP ts TIME ZONE tz1.
      ENDIF.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid input values for date,'
                & ' time or daylight saving time'
                   TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      CONVERT TIME STAMP ts TIME ZONE tz2
              INTO DATE date TIME time DAYLIGHT SAVING TIME dst2.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid time stamp'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      tsout = |{ ts TIMESTAMP = ISO TIMEZONE = 'UTC   ' }|.
      date2 = date.
      time2 = time.
    ENDDO.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'OUT'.
      screen\_wa-input   = '0'.
      screen\_wa-output  = '1'.
    ENDIF.
    MODIFY SCREEN FROM screen\_wa.
  ENDLOOP.

Description

The program is given a date, a time, and a time zone and converts this information into a [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_oview.htm). The program can also include summer time in its calculations. The resulting time stamp is then converted to the local date and local time of another time zone. The following table shows several possible combinations of input and output, where spc stands for a space and \- for no input or output.

date1

time1

tz1

dst1

ts

tz2

date2

time2

dst2

sy-subrc

16.07.2010

09:10:00

CET

\-

2010-07-16T07:10:00

CET

16.07.2010

09:10:00

X

\-

16.07.2010

09:10:00

CET

X

2010-07-16T07:10:00

CET

16.07.2010

09:10:00

X

\-

16.07.2010

09:10:00

CET

spc

\-

CET

\-

\-

\-

12

16.12.2010

09:10:00

CET

spc

2010-12-16T08:10:00

CET

16.12.2010

09:10:00

\-

\-

16.12.2010

09:10:00

CET

X

\-

CET

\-

\-

\-

12

16.12.2010

09:10:00

AUSTAS

\-

2010-12-15T22:10:00

AUSTAS

16.12.2010

09:10:00

X

\-

The third and fifth rows demonstrate that invalid summer time data produces the value 12 in sy-subrc.
