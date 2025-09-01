---
title: "Time Stamp Field with Time Stamp Type"
description: |
  ABAP contains the built-in ABAP type utclong(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm) for time stamps with a precision of 100 nanoseconds. A data object of this time stamp type is a time stamp field. Each valid value of a time stamp field is a UT
version: "7.55"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong.htm"
abapFile: "abenutclong.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "types", "abenutclong"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps.htm) → 

Time Stamp Field with Time Stamp Type

ABAP contains the built-in ABAP type [utclong](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm) for time stamps with a precision of 100 nanoseconds. A data object of this time stamp type is a time stamp field. Each valid value of a time stamp field is a [UTC time stamp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") and represents a unique time in [UTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_glosry.htm "Glossary Entry") reference time. In accordance with the POSIX standard, [leap seconds](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenleap_second_glosry.htm "Glossary Entry") are not supported, that is, each day has exactly 86400 seconds.

-   [Access to Time Stamp Fields](#abenutclong-1--------initial-value-of-a-time-stamp-field---@ITOC@@ABENUTCLONG_2)

-   [Internal Representation of a Time Stamp in a Time Stamp Field](#@@ITOC@@ABENUTCLONG_3)

Access to Time Stamp Fields

Time stamp fields can be used in suitable operand positions and special [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_elementary.htm) and [comparison rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_operands.htm) apply. Time stamp fields are only convertible to [text fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_field_glosry.htm "Glossary Entry") of the type c and [text strings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_string_glosry.htm "Glossary Entry") of the type string.

The following functions, statements, and classes are designed specifically for time stamp fields:

-   [Time stamp functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_functions.htm)

-   [Conversion Statements for Time Stamp Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_conversions.htm)

-   [System Class for Time Stamp Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_system_class.htm)

A time stamp field must have valid content each time it is used. If a time stamp field is used that contains an invalid time stamp or the initial value, a catchable exception of the class CX\_SY\_CONVERSION\_NO\_DATE\_TIME is usually raised. The content remains unchecked only in castings or in assignments between time stamp fields.

Hint

For time stamp fields, conversion errors raise an exception of the class CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Initial Value of a Time Stamp Field

The initial value of a time stamp is not a real time stamp value, that is, it represents an empty value, which is handled as follows, and not a time stamp:

-   In [comparisons](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_glosry.htm "Glossary Entry") and sorts based on comparisons, an initial time stamp field is smaller than every real time stamp.

-   An initial time stamp field passed as an argument is handled like the smallest real time stamp in the [time stamp functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_functions.htm).

-   In the [conversion statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_conversions.htm), initial time stamp fields produce initial results.

-   During the [conversion](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_utclong.htm) to character-like fields, an initial time stamp field fills a text field with spaces or creates an empty text string.

-   During formatting as a character string using [string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_glosry.htm "Glossary Entry") or with the statement [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm), an initial time stamp field creates a character string consisting of spaces.

Internal Representation of a Time Stamp in a Time Stamp Field

The internal representation of the valid values of a [time stamp field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_field_glosry.htm "Glossary Entry") with the [time stamp type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm) are uninterrupted sequences of integers starting from 0, where 0 represents the initial value and each number greater than 0 is assigned exactly one real time stamp.

-   The minimum internal value is 1 and corresponds to the time stamp "0001-01-01T00:00:00.0000000".

-   The maximum internal value is 3,155,380,704,000,000,000 and corresponds to the time stamp "9999-12-31T23:59:59.9999999".

-   The time interval between time stamps, which is represented by two adjacent integers, is 100 ns. Each integer between the minimum and maximum value represents a time stamp of 100 ns multiplied by the value of the number after "0001-01-01T00:00:00.0000000".

-   Time stamp fields must meet an [alignment requirement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment.htm). Their memory address must be divisible by eight.

Hint

Due to the switch from the Julian calendar to the Gregorian calendar, the time stamps "1582-10-04 23:59:59.9999999" and "1582-10-15T00:00:00.0000000" are directly adjacent. Internally, they are represented using two consecutive integers.

Continue
[Time Stamp Functions (ts\_func)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_functions.htm)
[Conversion Statements for Time Stamp Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_conversions.htm)
[System Class for Time Stamp Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_system_class.htm)