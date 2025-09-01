  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps.htm) → 

Time Stamps in Packed Numbers

In this format, [time stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamp_glosry.htm "Glossary Entry") are represented using packed numbers of the type [p](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_types_numeric.htm).

-   [Representation of Time Stamps in Packed Numbers](#@@ITOC@@ABENTIME_STAMPS_PACKED_1)
-   [Accessing Time Stamps in Packed Numbers](#@@ITOC@@ABENTIME_STAMPS_PACKED_2)
-   [Notes on Handling Time Stamps in Packed Numbers](#@@ITOC@@ABENTIME_STAMPS_PACKED_3)
-   [Examples for Time Stamps in Packed Numbers](#@@ITOC@@ABENTIME_STAMPS_PACKED_4)

Representation of Time Stamps in Packed Numbers

There is a short form and a long form.

-   In the short form, a time stamp is represented precisely to the second using a packed number with length 8 without decimal places, and the ABAP Dictionary type TIMESTAMP. The digits of the packed number show the time stamp in the format "yyyymmddhhmmss", where "yyyy" is the year, "mm" is the month, "dd" is the day, "hh" is the hour, "mm" are the minutes, and "ss" are the seconds.
-   In the long form, a time stamp is represented precisely to 100 ns using a packed number with length 11 and seven decimal places, and the ABAP Dictionary type TIMESTAMPL The digits of the packed number show the time stamp in the format "yyyymmddhhmmss.sssssss", where, in addition to the short form, the seven decimal places "sssssss" are the fractions of a second. The maximum time resolution that can be achieved depends on the operating system of the [host computer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") and can be less.

In its integer part, a valid time stamp must contain valid dates and times:

-   When specifying the date, only the values 01 to 9999 for the year, 01 to 12 for the month, and 01 to 31 for the day are valid.
-   When specifying the time, only the values 00 to 23 for the hours, and 00 to 59 for the minutes and seconds are valid.

A time valid in the Gregorian calendar must be represented. [Leap seconds](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleap_second_glosry.htm "Glossary Entry") are not supported.

Hints

-   An initial packed number with the value 0 does not contain a valid time stamp.
-   The method NORMALIZE of class CL\_ABAP\_TSTMP can be used to convert invalid values in time stamps to valid values.

Accessing Time Stamps in Packed Numbers

Only a few statements recognize that packed numbers of the types TIMESTAMP and TIMESTAMPL are time stamps. All other statements interpret the content of these data types as numbers and, with the exception of direct comparisons, are not suitable for handling time stamps. The statements for handling time stamps in packed numbers are as follows:

-   [GET TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time-stamp.htm) creates a current time stamp.
-   [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_time-stamp.htm) converts a time stamp to a local date and a local time.
-   [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_date_time-stamp.htm) converts a local date and a local time to a time stamp.

Furthermore, time stamps in packed numbers are handled specifically in the following output formats:

-   Use of the options [TIMESTAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string_format_options.htm) and [TIMEZONE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_templates.htm)
-   Use of the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to_options.htm) of the statement WRITE *\[*TO*\]*.
-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z support the serialization and deserialization of ABAP time stamps in [asXML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson_schema.htm).

The system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_tstmp.htm) provides methods for adding, subtracting, converting, and comparing time stamps in packed numbers.

Hint

Special [time stamp functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") can be used in ABAP SQL and the CDS DDL of the ABAP CDS for processing time stamps stored as packed numbers in database tables.

Notes on Handling Time Stamps in Packed Numbers

Time stamps in packed numbers are only interpreted as such if they are accessed by the statements, methods, and functions listed above. When being assigned or converted, they behave like packed numbers of the type p, which means they are not suitable for direct calculations. Comparisons produce a meaningful result only when two time stamps are compared with each other. In programs for which the program attribute [Fixed Point Arithmetic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") is not set, the corresponding rules applying to the data type p should be respected. In particular, direct comparisons of time stamps in the long form with the short form produce a meaningful result only when the program attribute fixed point arithmetic is set. Otherwise, the system class CL\_ABAP\_TSTMP must be used for comparisons as well.

A time stamp in its short form is the integer part of a time stamp in its long form. When assigning time stamps in the long form to time stamps in the short form, unwanted rounding effects can always occur. For this reason, the method MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_tstmp.htm) should always be used for this.

When time stamps in packed numbers are used in operand positions that are not specifically intended for them, no warnings are given by the syntax check or by the extended program check, not even in [lossless assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlossless_assignment_glosry.htm "Glossary Entry").

Examples for Time Stamps in Packed Numbers

Example

Direct comparison of time stamps in packed numbers with the same data type.

GET TIME STAMP FIELD DATA(ts2).
WAIT UP TO 1 SECONDS.
GET TIME STAMP FIELD DATA(ts1).
ASSERT ts2 < ts1.

Example

Conversion of a time stamp in a packed number to a date and a time field, and determination of the daylight saving time marker.

GET TIME STAMP FIELD DATA(ts).
CONVERT TIME STAMP ts TIME ZONE sy-zonlo
        INTO DATE DATA(date) TIME DATA(time)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>display( |{ date }\\n{
                            time }\\n{
                            dst } | ).

Example

Formatting of a time stamp in a packed number in a string template in a type-friendly way.

GET TIME STAMP FIELD DATA(ts).
cl\_demo\_output=>display( |{ ts TIMESTAMP = ISO } | ).

Example

Serialization of a time stamp in a packed number by using a special domain.

DATA ts TYPE xsddatetime\_z.
GET TIME STAMP FIELD ts.
CALL TRANSFORMATION id SOURCE ts = ts
                       RESULT XML DATA(xml).
cl\_demo\_output=>display\_xml( xml ).

Example

Calculation of the difference between two time stamps in packed numbers using the class CL\_ABAP\_TSTMP.

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

Direct calculation using time stamps in packed numbers. If, for example, ts1 has the value 20161004130733, adding 3600 s in ts2 produces the value 20161004140733. Since the time stamps are interpreted as numbers of type p in the calculation, the result is 10000, which would generally be unexpected.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>add( tstmp = ts1
                                secs  = 3600 ).
cl\_demo\_output=>display( ts2 - ts1 ).

Example

Incorrect calculation using time stamps in packed numbers. The assumption here is that time stamps are interpreted as a number of seconds in calculations. This is not the case here. The result does not meet expectations and is generally not a valid time stamp. For example, the invalid value 20161004315506 is calculated from 20161004131906 .

GET TIME STAMP FIELD DATA(ts).
ts = ts + 86400 \* 2 + 3600 \* 3.
cl\_demo\_output=>display( ts ).

Continue
[GET TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time-stamp.htm)
[CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_time-stamp.htm)
[CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_date_time-stamp.htm)
[System Class for Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_tstmp.htm)
![Example](exa.gif "Example") [Convert Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconvert_time_stamp_abexa.htm)