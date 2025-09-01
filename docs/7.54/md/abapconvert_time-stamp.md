---
title: "CONVERT TIME STAMP"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time_stamp_shortref.htm) Syntax CONVERT TIME STAMP time_stamp TIME ZONE tz INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst. Effect This statement interprets the content of a packed numbe
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm"
abapFile: "abapconvert_time-stamp.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abapconvert", "time", "stamp"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) → 

CONVERT TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time_stamp_shortref.htm)

Syntax

CONVERT TIME STAMP time\_stamp TIME ZONE tz
        INTO *\[*DATE dat*\]*
             *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]*.

Effect

This statement interprets the content of a packed number time\_stamp as a [time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm), converts it to the local date and the local time in the time zone specified in tz, and assigns the result to the variables dat, tim, and dst. There must be at least one of the additions. At least one of the additions DATE or TIME must be specified. The conversion is made in accordance with the [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm).

time\_stamp and tz are [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

-   The operand time\_stamp must have the type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 with seven decimal places. Depending on the data type, the content is interpreted either as a time stamp in the [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) or as a time stamp in the [long form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm). No other data types can be specified. If time\_stamp does not contain a valid time stamp, the content of dat and tim is not changed, and sy-subrc is set to 12.
    
-   The operand tz must be character-like and contain a [time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_glosry.htm "Glossary Entry") from the database table TTZZ.
    

-   If tz is initial, the UTC time stamp is not converted to a different time zone. The local date and the local time in the target fields match the UTC reference time. In this case, sy-subrc is set to 4.

-   If the specified time zone is not found in the database table TTZZ, the content of dat and tim is not changed and sy-subrc is set to 8.

-   If the [rule set](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm) for the specified time zone is incomplete, a non-handleable exception is raised.

-   The local date is assigned to dat as a return value of the data type d. The following can be specified for dat:
    

-   An existing variable to which the return value can be [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_d.htm).

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of data type d is declared.

-   The local time is assigned to tim as a return value of data type t. If the time stamp in time\_stamp is in the long form, the seconds fractions in the decimal places are ignored. The following can be specified for tim:
    

-   An existing variable to which the return value can be [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_type_t.htm).

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of data type t is declared.

-   If the time stamp in time\_stamp for the time zone specified in tz is in summer time, dst is given the value "X". Otherwise it is given the value " ". The following can be specified for dst:
    

-   An existing variable of the type c with length 1

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of data type c with length 1 is declared.

When time stamps are converted to reflect the conversion from the Julian calendar to the Gregorian calendar and the non-existence of the days between 5.10.1582 and 14.10.1582, this returns the same results as the conversion for the days from 15.10.1582 to 24.10.1582 (which do exist).

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

-   A current UTC time stamp can be created using the statement [GET TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time-stamp.htm).
    
-   The current user time zone can be found in the system field [sy-zonlo](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_system_fields.htm).
    
-   It is now possible to use the return value for the summer time in dst to distinguish duplicate local time specifications that occur when UTC time stamps are converted into local time during the double hour in the changeover between summer and winter time.
    
-   Usually, an invalid date can be created from a valid time stamp only by combining the first valid day with time zones west of UTC or the last valid day with time zones east of UTC.
    
-   An initially packed number with the value 0 is not a valid time stamp, rather it results in the value 12 in sy-subrc.
    
-   An initial time zone tz matches UTC only if the tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm) are filled correctly for the time zone UTC.
    

Example

The following example for CONVERT TIME STAMP for time stamps in packed numbers functions in exactly the same way as the example for [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm) for time stamps in time stamp fields.

CONVERT TIME STAMP CONV time stamp( '20191103' && '053000' )
        TIME ZONE 'EST'
        INTO DATE DATA(dat) TIME DATA(tim)
        DAYLIGHT SAVING TIME DATA(dst).
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
CONVERT TIME STAMP CONV time stamp( '20191103' && '063000' )
        TIME ZONE 'EST'
        INTO DATE dat TIME tim
        DAYLIGHT SAVING TIME dst.
cl\_demo\_output=>write( |{ dat DATE = ISO } {
                          tim TIME = ISO } { dst }| ).
cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Inconsistent control tables for the conversion.
    Runtime error: CONVERT\_TSTMP\_INCONSISTENT\_TAB