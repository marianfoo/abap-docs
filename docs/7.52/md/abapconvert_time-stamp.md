---
title: "CONVERT TIME STAMP"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time_stamp_shortref.htm) Syntax CONVERT TIME STAMP time_stamp TIME ZONE tz INTO DATE dat TIME tim DAYLIGHT SAVING TIME dst. Effect This statement interprets the content of time_stamp as
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm"
abapFile: "abapconvert_time-stamp.htm"
keywords: ["do", "if", "try", "data", "types", "abapconvert", "time", "stamp"]
---

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