  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Time Stamps, ABENTIME_STAMPS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

Time Stamps

This section describes the representation of time-zone-independent [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") and the statements used for accessing time stamps. There are two ways in which time stamps can be handled in ABAP:

-   [Time Stamp Fields with Time Stamp Type](javascript:call_link\('abenutclong.htm'\))
-   [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\))

Hints

-   In new programs, it is recommended that time stamps in time stamp fields are used.
-   The [system class for time stamps in packed numbers](javascript:call_link\('abencl_abap_tstmp.htm'\)) contains methods for the conversion between the two representation types for time stamps. These are necessary if time stamp fields are used in new programs, but existing repositories or interfaces must be accessed.
-   There are no time stamps for the missing days that exist due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".
-   Time stamps in ABAP are [POSIX time stamps](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") that do not support [leap seconds](javascript:call_link\('abenleap_second_glosry.htm'\) "Glossary Entry").

Continue
[Time Stamp Fields with Time Stamp Type](javascript:call_link\('abenutclong.htm'\))
[Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\))