---
title: "Rules for Time Zones"
description: |
  Conversion of the UTC reference time to the local date and the local time zone, and vice versa, is based on a set of rules stored in AS ABAP system tables. Conversions of this kind are effected by: -   The statements CONVERT UTCLONG(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapco
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm"
abapFile: "abentime_zone_rules.htm"
keywords: ["do", "while", "if", "data", "abentime", "zone", "rules"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Date, Time, Time Stamp, and Time Zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_oview.htm) → 

Rules for Time Zones

Conversion of the UTC reference time to the local date and the local time zone, and vice versa, is based on a set of rules stored in AS ABAP system tables. Conversions of this kind are effected by:

-   The statements [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm), [CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_utclong.htm), [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm), and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm).

-   The formatting option [TIMEZONE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm) for string templates and the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to_options.htm) of the statement WRITE.

The names of all associated tables start with TTZ. The following database tables , whose content can be edited using transaction STZBD, are relevant for time zones:

-   The database table TTZZ contains a list of possible time zones in the column TZONE. The entries in the columns ZONERULE and DSTRULE refer to the rules for the time difference of the time zone to the UTC reference time in table TTZR and to the rules for summer time in the tables TTZD, TTZDF, and TTZDV.

-   The column ZONERULE of the database table TTZR contains a list of possible rules for the time difference between time zones and the UTC reference time. The columns UTCDIFF and UTCSIGN contain the time differences to UTC and their signs, while ignoring summer time.

-   The database table TTZD contains a list of all possible summer time rules in column DSTRULE. The column DSTDIFF contains the time difference between summer time and winter time.

-   The database table TTZDF contains a list of fixed summer time rules in column DSTRULE. The column YEARACT contains year numbers for every year for which the rule applies. The columns DATEFROM, TIMEFROM, DATETO, and TIMETO contain the date and time for the beginning and end of summer time.

-   The database table TTZDV contains a list of variable summer time rules in column DSTRULE. The column YEARFROM contains a year number for every rule, saying in which year the rule applies. The columns MONTHFROM, WEEKDFROM, WEEKDCFROM, TIMEFROM, MONTHTO, WEEKDTO, WEEKDCTO, and TIMETO contain the month, week, day, and time for the beginning and end of summer time.

A correct set of rules must contain all rules specified in TTZZ for the time difference between time zones and the UTC reference time in TTZR and all rules specified for summer time in TTZD. If the time difference between summer time and winter time in TTZD is not equal to 0, the respective summer time rule must be included in at least one of the tables TTZDF or TTZDV. While TTZDF contains fixed dates for the switch, the date in TTZDV is variable, because a day in a particular week of a month is specified. The system always checks TTZDF first for the summer time rule and then TTZDV.

Note

The database tables normally also contain an explicit rule for the time zone UTC. This rule must be designed in such a way that when it is used, the UTC reference time is not converted to another time.

Notes for Summer Time

If a time zone specifies a summer time rule with a summer time difference not equal to 0, note the following:

-   If during summer time a new year starts (in the southern hemisphere), then the year specified in the database tables TTZDF or TTZDV identifies the beginning of the summer time, while the end is in the following year.

-   The time specified for the beginning of summer time in the tables TTZDF and TTZDV identifies the time when the clock is put forward by the summer time difference when the winter time ends. The first second of summer time is the time you get when you add the summer time difference to the specified time.

-   When summer time begins, a time interval of the length of the summer time difference is created, for which you can formulate a date and time, but which does not exist as a local time and which cannot be assigned to an UTC reference time. A local time of this type is handled in the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm) as an invalid time.

-   The time specified in the database tables TTZDF or TTZDV for the end of summer time identifies the time when the clock is put back by the summer time difference when summer time ends. The first second of the winter time is the time you get when you subtract the summer time difference from the specified time.

-   When summer time ends, a time interval of the length of the summer time difference is created, which is passed twice as a local time (the double hour). If a date and time is formulated for this interval, the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm) handles it as a time from summer time, by default.