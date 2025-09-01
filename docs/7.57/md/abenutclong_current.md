  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamp Fields with Time Stamp Type](javascript:call_link\('abenutclong.htm'\)) →  [Time Stamp Functions (ts\_func)](javascript:call_link\('abentimestamp_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ts_func - utclong_current, ABENUTCLONG_CURRENT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

ts\_func - utclong\_current

Syntax

... utclong\_current( ) ...

Effect

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) creates a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of an AS ABAP in accordance with [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry"). The return value has the data type [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)).

Hint

The precision of the decimal places of the created time stamp depends on the hardware (processor) of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). Resolutions in the one-digit or two-digit microsecond range are realistic.

Example

Creation of a table of time stamps. Unlike the example [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)), the time stamps do not need to be formatted differently in the output to be recognizable as such.

DATA time\_stamps TYPE TABLE OF utclong WITH EMPTY KEY.
time\_stamps = VALUE #( FOR i = 1 UNTIL i > 100
                         ( utclong\_current( ) ) ).
cl\_demo\_output=>display( time\_stamps ).