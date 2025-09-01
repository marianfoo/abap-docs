---
title: "Time Stamps in Packed Numbers"
description: |
  In this format, time stamps(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm 'Glossary Entry') are represented using packed numbers of the type p(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm). -   Represen
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm"
abapFile: "abentime_stamps_packed.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abentime", "stamps", "packed"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Time%20Stamps%20in%20Packed%20Numbers%2C%20ABENTIME_STAMPS_PACKED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Time Stamps in Packed Numbers

In this format, [time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented using packed numbers of the type [p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm).

-   [Representation of Time Stamps in Packed Numbers](#abentime-stamps-packed-1-------accessing-time-stamps-in-packed-numbers---@ITOC@@ABENTIME_STAMPS_PACKED_2)
-   [Notes on Handling Time Stamps in Packed Numbers](#abentime-stamps-packed-3-------examples-for-time-stamps-in-packed-numbers---@ITOC@@ABENTIME_STAMPS_PACKED_4)

Representation of Time Stamps in Packed Numbers   

There is a short form and a long form.

-   In the short form, a time stamp is represented precisely to the second using a packed number with length 8 without decimal places, and the ABAP Dictionary type TIMESTAMP. The digits of the packed number show the time stamp in the format yyyymmddhhmmss, where yyyy is the year, mm is the month, dd is the day, hh is the hour, mm are the minutes, and ss are the seconds.
-   In the long form, a time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type TIMESTAMPL The digits of the packed number show the time stamp in the format yyyymmddhhmmss.sssssss, where, in addition to the short form, the seven decimal places sssssss are the fractions of a second. The maximum time resolution that can be achieved depends on the operating system of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") and can be less.

In its integer part, a valid time stamp must contain valid dates and times:

-   When specifying the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.
-   When specifying the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.

A time valid in the Gregorian calendar must be represented. [Leap seconds](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleap_second_glosry.htm "Glossary Entry") are not supported.

Hints

-   An initial packed number with the value 0 does not contain a valid time stamp.
-   The method NORMALIZE of class CL\_ABAP\_TSTMP can be used to convert invalid values in time stamps to valid values.

Accessing Time Stamps in Packed Numbers   

Only a few statements recognize that packed numbers of the types TIMESTAMP and TIMESTAMPL are time stamps. All other statements interpret the content of these data types as numbers and, with the exception of direct comparisons, are not suitable for handling time stamps. The statements for handling time stamps in packed numbers are as follows:

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time-stamp.htm) creates a current time stamp.
-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_time-stamp.htm) converts a time stamp to a local date and a local time.
-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_date_time-stamp.htm) converts a local date and a local time to a time stamp.

Furthermore, time stamps in packed numbers are handled specifically in the following output formats:

-   Use of the options [TIMESTAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) and [TIMEZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm)
-   Use of the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) of the statement WRITE *\[*TO*\]*.
-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z support the serialization and deserialization of ABAP time stamps in [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_schema.htm).

The system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tstmp.htm) provides methods for adding, subtracting, converting, and comparing time stamps in packed numbers.

Hint

Special [time stamp functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") can be used in ABAP SQL and the CDS DDL of the ABAP CDS for processing time stamps stored as packed numbers in database tables.

Notes on Handling Time Stamps in Packed Numbers   

Time stamps in packed numbers are only interpreted as such if they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type p, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two time stamps are compared with each other. In programs for which the program property [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is not set, the corresponding rules applying to the data type p should be respected. In particular, direct comparisons of time stamps in the long form with the short form produce a meaningful result only when the program property fixed point arithmetic is set. Otherwise, the system class CL\_ABAP\_TSTMP must be used for comparisons as well.

A time stamp in its short form is the integer part of a time stamp in its long form. When simply assigning time stamps in the long form to time stamps in the short form, the [p to p](abenconversion_type_p.htm#@@ITOC@@ABENCONVERSION_TYPE_P_1) conversion rule applies and hence commercial rounding takes place. Therefore, unwanted rounding effects might occur that can even lead to invalid values, e.g. when seconds are rounded to 60. To avoid unwanted rounding effects, the following should be done instead of assignments:

-   In order to avoid invalid values, the methods MOVE\_TO\_SHORT and MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tstmp.htm) can be used. But these methods also round commercially.
-   In order to achieve the same integer part, the long time stamp must be rounded down. This can be achieved by using the built-in function [round](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendec_floating_point_functions.htm) with an appropriate mode or [trunc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_functions.htm).

See also the executable example [Rounding Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenround_time_stamp_abexa.htm).

When time stamps in packed numbers are used in operand positions that are not specifically intended for them, no warnings are given by the syntax check or by the extended program check, not even in [lossless assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").

Examples for Time Stamps in Packed Numbers   

Example

Direct comparison of time stamps in packed numbers with the same data type.

GET TIME STAMP FIELD FINAL(ts2).
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD FINAL(ts1).
ASSERT ts2 < ts1.

Example

Conversion of a time stamp in a packed number to a date and a time field, and determination of the daylight saving time marker.

GET TIME STAMP FIELD FINAL(ts).
CONVERT TIME STAMP ts TIME ZONE
        cl\_demo\_date\_time=>get\_user\_time\_zone( )
        INTO DATE FINAL(date) TIME FINAL(time)
        DAYLIGHT SAVING TIME FINAL(dst).
cl\_demo\_output=>display( |{ date }\\n{
                            time }\\n{
                            dst } | ).

Example

Formatting of a time stamp in a packed number in a string template in a type-friendly way.

GET TIME STAMP FIELD FINAL(ts).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO } | ).

Example

Serialization of a time stamp in a packed number by using a special domain.

DATA ts TYPE xsddatetime\_z.
GET TIME STAMP FIELD ts.
CALL TRANSFORMATION id SOURCE ts = ts
                       RESULT XML FINAL(xml).
cl\_demo\_output=>display\_xml( xml ).

Example

Calculation of the difference between two time stamps in packed numbers using the class CL\_ABAP\_TSTMP.

DATA: ts1 TYPE timestampl,
      ts2 TYPE timestampl.
GET TIME STAMP FIELD ts2.
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD ts1.
FINAL(seconds) = cl\_abap\_tstmp=>subtract(
    EXPORTING
      tstmp1 = ts1
      tstmp2 = ts2 ).
cl\_demo\_output=>display( seconds ).

Example

Direct calculation using time stamps in packed numbers. If, for example, ts1 has the value 20161004130733, adding 3600 s in ts2 produces the value 20161004140733. Since the time stamps are interpreted as numbers of type p in the calculation, the result is 10000, which would generally be unexpected.

GET TIME STAMP FIELD FINAL(ts1).
FINAL(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1
                                secs  = 3600 ).
cl\_demo\_output=>display( ts2 - ts1 ).

Example

Incorrect calculation using time stamps in packed numbers. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, the invalid value 20161004315506 is calculated from 20161004131906.

GET TIME STAMP FIELD DATA(ts).
ts = ts + 86400 \* 2 + 3600 \* 3.
cl\_demo\_output=>display( ts ).

Continue
[GET TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time-stamp.htm)
[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_time-stamp.htm)
[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_date_time-stamp.htm)
[System Class for Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tstmp.htm)
![Example](exa.gif "Example") [Convert Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconvert_time_stamp_abexa.htm)
![Example](exa.gif "Example") [Rounding Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenround_time_stamp_abexa.htm)