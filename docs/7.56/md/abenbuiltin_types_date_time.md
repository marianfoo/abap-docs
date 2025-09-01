  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Built-In Date Types, Time Types, and Time Stamp Types

The data objects of the date types, time types, and time stamp types are used to store calendar dates, times, and time stamps.

Attributes

Type

Length

Default Length

Name

d

8 characters

 

[Date field](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

t

6 characters

 

[Time field](javascript:call_link\('abentime_field_glosry.htm'\) "Glossary Entry")

utclong

8 byte

 

[Time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

d

Any eight alphanumeric characters; valid values are only digits that are valid as dates in accordance with the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31

"00000000"

t

Any six alphanumeric characters; valid values are only digits that are valid as times in accordance with the 24-hour clock range in the format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

"000000"

utclong

Internal 8-byte integer representation of a UTC time stamp exact to 100 nanoseconds, in ISO-8601 notation between "0001-01-01T00:00:00.0000000" and "9999-12-31T23:59:59.9999999". There are 3,155,380,704,000,000,000 real values and one special [initial value](javascript:call_link\('abenutclong.htm'\)).

[0](javascript:call_link\('abenutclong.htm'\))

Hints

-   Date types and time types d and t
    -   The date types and time types are used to handle calendar date and time values. For more information on how to use them and their special handling, see [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)).
    -   From a technical perspective, the data types d and t are flat character-like types. The content of their data objects is stored according to the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry").
    -   As character-like data types, data objects of the data types d and t can be used like text fields of the type c. This applies in particular to structures with components of the types d and t.
    -   The generic type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) also includes the types d and t.
    -   Data objects of the types d and t behave like character-like objects in character-like operand positions and numeric in numeric operand positions.
    -   The data types d and t are the built-in ABAP types that correspond to the special types [DATS](javascript:call_link\('abenddic_date_time_types.htm'\)), [DATN](javascript:call_link\('abenddic_date_time_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_date_time_types.htm'\)), [TIMN](javascript:call_link\('abenddic_date_time_types.htm'\)) of the ABAP Dictionary.
    -   The valid values of the data types d and t are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to function correctly for operands with valid values.
-   Time stamp type utclong
    -   The time stamp type utclong represented internally by integer numbers replaces the [time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) represented by packed numbers as the type for real [time stamp fields](javascript:call_link\('abenutclong.htm'\)).
    -   The data type utclong is the built-in ABAP type that corresponds to the special type [UTCLONG](javascript:call_link\('abenddic_date_time_types.htm'\)) in ABAP Dictionary.
    -   The system class [CL\_ABAP\_UTCLONG](javascript:call_link\('abentimestamp_system_class.htm'\)) for time stamps in time stamp fields contains the minimum and maximum values of the type utclong as attributes.
    -   Invalid values in time stamps, that is integer numbers outside of the string of valid values, can be created using [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry").
    -   There is no time stamp for the days missing due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".

Example

Declaration of date fields and time fields of the built-in ABAP types d and t and examples for their use. The declarations are made with the statement [DATA](javascript:call_link\('abapdata.htm'\)) and using the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)).

DATA: tomorrow  TYPE d,
      next\_hour TYPE t.
DATA(today) = sy-datlo.
DATA(now)   = sy-timlo.
tomorrow  = today + 1.
next\_hour = ( now + 3600 ) / 3600 \* 3600.

Example

Creation of a time stamp of the type utclong with the built-in function [utclong\_current](javascript:call_link\('abenutclong_current.htm'\)) and its conversion to date and time fields.

DATA(ts) = utclong\_current( ).
CONVERT UTCLONG ts
        INTO DATE DATA(dat) TIME DATA(tim)
        TIME ZONE sy-zonlo.
cl\_demo\_output=>display(
  |{ ts }\\n| &&
  |{ dat }\\n| &&
  |{ tim }|  ).