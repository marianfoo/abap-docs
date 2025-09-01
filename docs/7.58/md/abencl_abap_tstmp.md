  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20for%20Time%20Stamps%20in%20Packed%20Numbers%2C%20ABENCL_ABAP_TSTMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

System Class for Time Stamps in Packed Numbers

The class CL\_ABAP\_TSTMP is used to calculate and convert [time stamps in packed numbers](javascript:call_link\('abentime_stamps_packed.htm'\)). Important methods include:

-   The methods ADD, SUBTRACTSECS, ADD\_TO\_SHORT, ADD\_TO\_SHORT\_TRUNC, SUBTRACTSECS\_TO\_SHORT and SUBTRACTSECS\_TO\_SHORT\_TRUNC add or subtract seconds from time stamps and avoid invalid values. ADD\_TO\_SHORT and ADD\_TO\_SHORT\_TRUNC round commercially. SUBTRACTSECS\_TO\_SHORT and SUBTRACTSECS\_TO\_SHORT\_TRUNC round down.
-   The method TD\_SUBTRACT calculates the difference between two time stamps.
-   The methods MOVE\_TO\_SHORT and MOVE\_TO\_SHORT\_TRUNC convert the long form of time stamps to the short form, avoiding invalid values. MOVE\_TO\_SHORT rounds commercially. MOVE\_TO\_SHORT\_TRUNC rounds down.
-   The methods MOVE and MOVE\_TRUNC convert the long form of time stamps to the short form and vice versa, avoiding invalid values. MOVE rounds commercially. MOVE\_TRUNC rounds down.
-   The method NORMALIZE normalizes time stamps. Invalid time stamps are converted into valid time stamps.
-   The methods UTCLONG2TSTMP, UTCLONG2TSTMP\_SHORT, and TSTMP2UTCLONG convert the content of time stamp fields to representation in packed numbers and vice versa.

Hints

-   Conversions between time stamp fields and packed numbers are necessary if time stamp fields are used in new programs, but existing repositories or interfaces need to be accessed at the same time.
-   The methods MOVE, MOVE\_TO\_SHORT, ADD\_TO\_SHORT and SUBTRACTSECS\_TO\_SHORT can be used for converting long time stamps to short time stamps. These methods avoid invalid values but round the fractional seconds of long time stamps commercially. That might be unexpected. In order to preserve the integer part of a long time stamp it must be rounded down. For that the methods MOVE\_TRUNC, MOVE\_TO\_SHORT\_TRUNC, ADD\_TO\_SHORT\_TRUNC and SUBTRACTSECS\_TO\_SHORT\_TRUNC can be used. See also executable example [Rounding Time Stamps in Packed Numbers](javascript:call_link\('abenround_time_stamp_abexa.htm'\)).

Example

Creation of a one hour earlier time stamp by subtracting 3600 seconds.

GET TIME STAMP FIELD FINAL(ts1).
FINAL(ts2) = cl\_abap\_tstmp=>subtractsecs( tstmp = ts1
                                          secs  = 3600 ).
cl\_demo\_output=>display( |{ ts1 TIMESTAMP = ISO
                       }\\n{ ts2 TIMESTAMP = ISO }| ).

Example

Conversion of a time stamp field to time stamps in packed numbers. In formatting using string templates, the formatting option [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) must be specified for the packed numbers to define a representation as time stamps.

FINAL(ts) = utclong\_current( ).
cl\_demo\_output=>display(
  |{ ts }\\n{
     cl\_abap\_tstmp=>utclong2tstmp( ts ) TIMESTAMP = ISO }\\n{
     cl\_abap\_tstmp=>utclong2tstmp\_short( ts ) TIMESTAMP = ISO }| ).