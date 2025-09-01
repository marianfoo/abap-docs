  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamp Field with Time Stamp Type](javascript:call_link\('abenutclong.htm'\)) → 

System Class for Time Stamp Fields

The Class Library contains the following system class for handling time stamps in [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry"):

-   CL\_ABAP\_UTCLONG

This class provides the following methods:

-   DIFF for calculating time differences.

-   READ for reading a time stamp from a string.

The attributes MIN and MAX contain the minimum and maximum values of the [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry") utclong.

Note

An initial time stamp passed to the method DIFF is handled here like the lowest possible value of a time stamp.

Example

Compares the method DIFF with the built-in function [utclong\_diff](javascript:call_link\('abenutclong_diff.htm'\)).

DATA(ts\_low)  = utclong\_current( ).
DATA(ts\_high) = utclong\_add( val     = ts\_low
                             seconds = 100000 ).
DATA(diff) = utclong\_diff( high = ts\_high
                           low  = ts\_low ).
cl\_abap\_utclong=>diff( EXPORTING high     = ts\_high
                                 low      = ts\_low
                       IMPORTING days    = DATA(days)
                                 hours   = DATA(hours)
                                 minutes = DATA(minutes)
                                 seconds = DATA(seconds) ).
ASSERT diff = 100000.
ASSERT diff = 86400 \* days + 3600 \* hours + 60 \* minutes + seconds.

Executable Example

[Read Time Stamp from String](javascript:call_link\('abencl_utclong_read_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Read Time Stamp from String](javascript:call_link\('abencl_utclong_read_abexa.htm'\))