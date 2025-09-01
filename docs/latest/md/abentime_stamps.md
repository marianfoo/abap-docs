  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Time%20Stamps%2C%20ABENTIME_STAMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Time Stamps

This section describes the representation of time-zone-independent [time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") and the statements used for accessing time stamps. There are two ways in which time stamps can be handled in ABAP:

-   [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutclong.htm)
-   [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm)

Hints

-   In new programs, it is recommended that time stamps in time stamp fields are used.
-   The [system class for time stamps in packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_tstmp.htm) contains methods for the conversion between the two representation types for time stamps. These are necessary if time stamp fields are used in new programs, but existing repositories or interfaces must be accessed.
-   There are no time stamps for the missing days that exist due to the switch from the Julian to the Gregorian calendar. The time stamp 1582-10-04T23:59:59.9999999 is followed by the time stamp 1582-10-15T00:00:00.0000000.
-   Time stamps in ABAP are [POSIX time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") that do not support [leap seconds](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleap_second_glosry.htm "Glossary Entry").

Continue
[Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutclong.htm)
[Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm)