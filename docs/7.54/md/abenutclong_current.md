  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamp Field with Time Stamp Type](javascript:call_link\('abenutclong.htm'\)) →  [Time Stamp Functions](javascript:call_link\('abentimestamp_functions.htm'\)) → 

utclong\_current - Time Stamp Function

Syntax

... utclong\_current( ) ...

Effect

This function takes the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") in AS ABAP and uses them to produce a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") in accordance with [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry"). The return value has the data type [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)).

Note

The precision of the decimal places of the new time stamp depends on the hardware (processor) of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). A resolution of a single-figure or two-figure number of microseconds is realistic.

Example

Creates a table of time stamps. Unlike the example [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)), the time stamps do not need to be formatted differently in the output to make them visible as time stamps.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY.
time\_stamps = VALUE #( FOR i = 1 UNTIL i > 100
                         ( utclong\_current( ) ) ).
cl\_demo\_output=>display( time\_stamps ).