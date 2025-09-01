---
title: "Built-In Date Types, Time Types, and Time Stamp Types"
description: |
  The data objects of the date types, time types, and time stamp types are used to handle calendar dates, times, and time stamps. Attributes Type Length Default Length Name d 8 characters Date field(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_field_glosry.htm 'Glossary Entry'
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm"
abapFile: "abenbuiltin_types_date_time.htm"
keywords: ["do", "try", "class", "data", "types", "abenbuiltin", "date", "time"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Predefined Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) → 

Built-In Date Types, Time Types, and Time Stamp Types

The data objects of the date types, time types, and time stamp types are used to handle calendar dates, times, and time stamps.

Attributes

Type

Length

Default Length

Name

d

8 characters

 

[Date field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_field_glosry.htm "Glossary Entry")

t

6 characters

 

[Time field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_field_glosry.htm "Glossary Entry")

utclong

8 byte

 

[Time stamp field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

d

Any eight alphanumeric characters, but only those digits are valid that are valid as dates in accordance with the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31

"00000000"

t

Any six alphanumeric characters, but only those digits are valid that are valid as times in accordance in the format 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

"000000"

utclong

Internal 8-byte integer representation of a UTC time stamp exact to 100 nanoseconds, in ISO-8601 notation between "0001-01-01T00:00:00.0000000" and "9999-12-31T23:59:59.9999999". There are 3,155,380,704,000,000,000 real values and one special [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm).

[0](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm)

Notes

-   Date types and time types d and t

-   The date types and time types are used to handle values for calendar dates and times. Information about how they are used and their special handling can be found under [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_date_time.htm).

-   From a technical perspective, the data types d and t are flat character-like types. The content of their data objects is saved in accordance with the current [system code page](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_codepage_glosry.htm "Glossary Entry").

-   As character-like data types, data objects of the data types d and t can be used like text fields of the type c. This applies in particular also to structures with components of the types d and t.

-   The generic type [clike](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm) also covers the types d and t.

-   Data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions.

-   The data types d and t are the built-in ABAP types that correspond to the special types [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm), [DATN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm), and [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm) in ABAP Dictionary.

-   The valid values of the data types d and t are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to function correctly for operands with valid values.

-   Time stamp type utclong

-   The time stamp type utclong represented internally by integer numbers is a type for real [time stamp fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong.htm) and replaces the [time stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) represented by packed numbers.

-   The data type utclong is the built-in ABAP type that corresponds to the special type [UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm) in ABAP Dictionary.

-   The system class [CL\_ABAP\_UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_system_class.htm) for time stamps in time stamp fields contains the minimum and maximum values of the type utclong as attributes.

-   Invalid values in time stamps (meaning integers outside of the string of valid values) can be produced by [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry").

-   There is not a time stamp for the missing days due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".

Example

Declares date fields and time fields of the built-in ABAP types d and t and examples for how to use them. These declarations are made both using the statement [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm) and using the declaration operator [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm).

DATA: tomorrow  TYPE d,
      next\_hour TYPE t.
DATA(today) = sy-datlo.
DATA(now)   = sy-timlo.
tomorrow  = today + 1.
next\_hour = ( now + 3600 ) / 3600 \* 3600.

Example

Creates a time stamp of the type utclong using the built-in function [utclong\_current](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutclong_current.htm) and converts it into date fields and time fields.

DATA(ts) = utclong\_current( ).
CONVERT UTCLONG ts
        INTO DATE DATA(dat) TIME DATA(tim)
        TIME ZONE sy-zonlo.
cl\_demo\_output=>display(
  |{ ts }\\n| &&
  |{ dat }\\n| &&
  |{ tim }|  ).