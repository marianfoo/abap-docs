  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) → 

Time Stamps

This section describes the representation of time-zone-independent [time stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") and the statements used for accessing time stamps. There are two ways in which time stamps can be handled in ABAP:

-   [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong.htm)

-   [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm)

Hints

-   In new programs, it is recommended to use time stamps in time stamp fields.

-   The [system class for time stamps in packed numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_tstmp.htm) contains methods for the conversion between the two representation types for time stamps. These are necessary if time stamp fields are used in new programs, but existing repositories or interfaces must be accessed.

-   There are no time stamps for the missing days that exist due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".

Continue
[Time Stamp Field with Time Stamp Type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong.htm)
[Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm)