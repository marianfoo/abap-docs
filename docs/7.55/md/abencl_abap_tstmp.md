---
title: "System Class for Time Stamps in Packed Numbers"
description: |
  The class CL_ABAP_TSTMP is used to calculate and convert time stamps in packed numbers(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm). Important methods include: -   The method ADD or SUBTRACTSECS adds or subtracts seconds from time stamps. -   The method
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_tstmp.htm"
abapFile: "abencl_abap_tstmp.htm"
keywords: ["do", "if", "method", "class", "data", "abencl", "abap", "tstmp"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm) → 

System Class for Time Stamps in Packed Numbers

The class CL\_ABAP\_TSTMP is used to calculate and convert [time stamps in packed numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamps_packed.htm). Important methods include:

-   The method ADD or SUBTRACTSECS adds or subtracts seconds from time stamps.

-   The method TD\_SUBTRACT calculates the difference between two time stamps.

-   The method MOVE converts the long form of time stamps to the short form and vice versa, avoiding unwanted rounding effects.

-   The method NORMALIZE normalizes time stamps. Invalid time stamps are converted into valid time stamps.

-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG convert the content of time stamp fields to representation in packed numbers and vice versa.

Hint

Conversions between time stamp fields and packed numbers are necessary if time stamp fields are used in new programs, but existing repositories or interfaces need to be accessed at the same time.

Example

Creation of a one hour earlier time stamp by subtracting 3600 seconds.

GET TIME STAMP FIELD DATA(ts1).
DATA(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1
                                         secs  = 3600 ).
cl\_demo\_output=>display( |{ ts1 TIMESTAMP = ISO
                       }\\n{ ts2 TIMESTAMP = ISO }| ).

Example

Conversion of a time stamp field to time stamps in packed numbers. In formatting using string templates, the formatting option [TIMESTAMP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string_format_options.htm) must be specified for the packed numbers to define a representation as time stamps.

DATA(ts) = utclong\_current( ).
cl\_demo\_output=>display(
  |{ ts }\\n{
     cl\_abap\_tstmp=>utclong2tstmp( ts ) TIMESTAMP = ISO }\\n{
     cl\_abap\_tstmp=>utclong2tstmp\_short( ts ) TIMESTAMP = ISO }| ).