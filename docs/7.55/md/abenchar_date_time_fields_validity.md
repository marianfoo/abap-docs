---
title: "Validity of Date Fields and Time Fields"
description: |
  Date fields and time fields of the types d and t can contain any alphanumeric characters. -   Valid values for the type d, however, are only those digits that are allowed as dates according to the calendar rules in the format 'yyyymmdd': 'yyyy' (year): 0001 to 9999, 'mm' (month): 01 to 12, 'dd' (day
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchar_date_time_fields_validity.htm"
abapFile: "abenchar_date_time_fields_validity.htm"
keywords: ["do", "while", "if", "try", "data", "types", "abenchar", "date", "time", "fields", "validity"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) →  [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_date_time.htm) → 

Validity of Date Fields and Time Fields

Date fields and time fields of the types d and t can contain any alphanumeric characters.

-   Valid values for the type d, however, are only those digits that are allowed as dates according to the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31.

-   Valid values for the type t, however, are only those digits that can be interpreted as times in the 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

The ABAP runtime environment checks the validity at the following points:

-   Date fields and time fields with invalid values raise an exception as a [source field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_exact_elementary_valid.htm) of a [lossless assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"). Conversely, source fields of other types must not produce any invalid values in date fields and time fields as [target fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_exact_elementary_fit.htm) in a lossless assignment.

-   Invalid values cannot be converted to [time stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps.htm) using the statements [CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_date_utclong.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_date_time-stamp.htm).

-   In a regular assignment to numeric fields, [date fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) and [target fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_t.htm) with invalid values produce the value 0, with the following exceptions:

-   For a source field of the type d, the values from 10/5/1582 to 10/14/1582, which are missing due to the conversion from the Julian to the Gregorian calendar, are treated either as invalid values or as the valid values from 10/15/1582 to 10/24/1582, depending on the operand position.

-   For a source field of the type t that contains only digits, the numeric value is also calculated for invalid times according to the formula hh\*3600+mm\*60+ss.

-   For regular assignments of [numeric fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumeric_source_fields.htm) to date fields and time fields, the numeric fields must be within the value range of the data type i and comply with the following special rules:

-   When number values are assigned to date fields that cannot result from the reverse conversion, the date field is initialized

-   Any number values can be assigned to time fields. When converted, the number value is divided by 86400 and only the integer remainder of the division is respected, which always produces a valid time in hours, minutes, and seconds.

No checks are generally made on other assignments to date fields and time fields not mapped to assignments of numeric values or to other operand positions. As a result, invalid values are produced easily by date fields and time fields, and then processed further.

Initial Value of Date Fields

The initial value "00000000" of the data type d and the date 01.01.0001 play a special role in this context.

-   The initial value "00000000" of data type d is not a valid date. A conversion of the initial value "00000000" to a numeric data type results, like all invalid values, in the value 0. The reverse conversion of the number 0 to a date field of the type d always produces the invalid date "00000000". Negative and oversized numbers also produce the invalid date "00000000".

-   Since a conversion from a valid date in a field of the type d results in the number of days since 01.01.0001, this date is the zero point for date calculations. A conversion of a date field of the type d with the value "00010101" to a numeric value produces the value 0, like the conversion of the initial value or another invalid value, and the conversion cannot be reversed.

1 is the smallest number that is converted to a valid date, 02.01.0001, during assignment to a date field of type d. Assignments between valid date fields and numeric fields can be reversed only from this date.

In [lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"), invalid values in source fields raise exceptions instead of producing the value 0 or "00000000". Here, the value "00010101", which actually belongs to the value range, is considered invalid, while the initial value "00000000", which does not actually belong to the value range, is considered valid. This means that the initial value "00000000" can be used in lossless assignments and all valid assignments between date fields and numeric fields can be reversed.

[ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") is an exception to this rule. Here, the value "00010101" is also accepted as a valid date and handled like the initial value "00000000" in operand positions in which values must comply with the rules for lossless assignments.

Hint

The validity of the content of date fields and time fields must be guaranteed before they are accessed.

Example

Identification of an invalid date by a comparison with the value 0. For the comparison, the date field is converted to an integer field of type i, where an invalid date produces the value 0. The valid date "00010101", which would also produce the value 0, is handled separately beforehand.

DATA(date) = CONV d( '20160231' ).
date = COND #( WHEN date = '00010101' OR date <> 0 THEN date
               ELSE THROW cx\_sy\_conversion\_no\_date( ) ).

Example

Identification of an invalid time by a comparison with the value 0. For the comparison, the time field is converted to an integer field of type i, where an invalid time produces the value 0. The valid time "000000", which would also produce the value 0, is handled separately beforehand.

DATA(time) = CONV t( 'XXXXXX' ).
time = COND #( WHEN time = '000000' OR time <> 0 THEN time
               ELSE THROW cx\_sy\_conversion\_no\_time( ) ).