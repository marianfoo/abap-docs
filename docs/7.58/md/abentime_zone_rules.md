  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_processing.htm) →  [Date, Time, Time Stamp, and Time Zones](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Rules%20for%20Time%20Zones%2C%20ABENTIME_ZONE_RULES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Rules for Time Zones

Conversion of the UTC reference time to the local date and the local time zone and vice versa, is based on a set of rules stored in AS ABAP system tables. Conversions of this kind are caused by:

-   The statements [CONVERT UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_utclong.htm), [CONVERT INTO UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_utclong.htm), [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_time-stamp.htm), and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_time-stamp.htm).
-   The formatting option [TIMEZONE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm) for string templates and the addition [TIME ZONE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) of the statement WRITE.

The names of all associated tables start with TTZ. The following database tables, whose content can be maintained using transaction STZBD, are relevant for time zones:

-   The database table TTZZ contains a list of possible time zones in the column TZONE. The entries in the columns ZONERULE and DSTRULE refer to the rules for the time difference of the time zone to the UTC reference time in table TTZR and to the rules for daylight saving time in the tables TTZD, TTZDF, and TTZDV.
-   The column ZONERULE of the database table TTZR contains a list of possible rules for the time difference between time zones and the UTC reference time. The columns UTCDIFF and UTCSIGN contain the time differences to UTC and their signs while ignoring daylight saving time.
-   The database table TTZD contains a list of all possible daylight saving time rules in the column DSTRULE. The column DSTDIFF contains the time difference between daylight saving time and standard time.
-   The database table TTZDF contains a list of fixed daylight saving time rules in the column DSTRULE. The column YEARACT contains year numbers to which the rule applies. The columns DATEFROM, TIMEFROM, DATETO, and TIMETO contain the date and time for the beginning and end of daylight saving time.
-   The database table TTZDV contains a list of variable daylight saving time rules in the column DSTRULE. The column YEARFROM contains a year number for every rule from which the rule applies. The columns MONTHFROM, WEEKDFROM, WEEKDCFROM, TIMEFROM, MONTHTO, WEEKDTO, WEEKDCTO, and TIMETO contain the month, week, day, and time for the beginning and end of daylight saving time.

A correct set of rules must contain all rules listed in TTZZ for the time difference between time zones and the UTC reference time in TTZR and all rules listed for daylight saving time in TTZD. If the time difference between daylight saving time and standard time in TTZD is not equal to 0, the associated daylight saving time rule must be contained in at least one of the tables TTZDF orTTZDV. While TTZDF contains fixed date specifications for the switch, the date in TTZDV is variable by specifying a day in a particular week of a month is specified. The system always searches TTZDF first for the daylight saving time rule and then TTZDV.

Hint

The database tables normally also contain an explicit rule for the time zone UTC. This rule should be designed in such a way that when it is used, the UTC reference time is not converted to another time.

Notes for Daylight Saving Time   

If a time zone defines a daylight saving time rule with a daylight saving time difference not equal to 0, the following should be noted:

-   If during daylight saving time a new year starts (in the southern hemisphere), then the year specified in the database tables TTZDF or TTZDV identifies the beginning of the daylight saving time, while the end is in the following year.
-   The time specified for the beginning of daylight saving time in the tables TTZDF and TTZDV identifies the time at which the clock is put forward by the daylight saving time difference when the standard time ends. The first second of daylight saving time is the time resulting from the addition of the daylight saving time difference to the specified time.
-   At the start of daylight saving time, a time interval of the length of the daylight saving time difference is created, for which a date and time can be formulated, but which does not exist as a local time and which cannot be assigned to a UTC reference time. A local time of this type is handled in the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_time-stamp.htm) as an invalid time.
-   The time specified in the database tables TTZDF or TTZDV for the end of daylight saving time identifies the time at which the clock is put back by the daylight saving time difference when daylight saving time ends. The first second of the standard time is the time resulting from the subtraction of the daylight saving time difference from the specified time.
-   At the end of daylight saving time, a time interval of the length of the daylight saving time difference is created, which is passed twice as a local time (the double hour). If a date and time is formulated for this interval, the statement [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_time-stamp.htm) handles it as a time from daylight saving time, by default.