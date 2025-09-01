  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamp](javascript:call_link\('abentime_stamps.htm'\)) → 

GET TIME STAMP

[Quick Reference](javascript:call_link\('abapget_time_stamp_shortref.htm'\))

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement creates a [](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry")[POSIX](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") UTC time stamp from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") in AS ABAP and assigns it to the variable time\_stamp.

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. Depending on the data type, the time stamp is created either in the [short form](javascript:call_link\('abentime_stamp_oview.htm'\)) or in the [long form](javascript:call_link\('abentime_stamp_oview.htm'\)).
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type TIMESTAMP is declared.
    

Notes

-   The precision of the decimal places of the long form depends on the hardware (processor) of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry"). The maximum resolution of 100 ns is not always reached. On some platforms, only a resolution of milliseconds can be reached.
    
-   A time stamp in its short form is the integer part of a time stamp in its long form. A long form time stamp cannot be used to create the associated short form time stamp simply by making an assignment, since this would involve commercial rounding. The method MOVE of the system class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) can be used instead.
    

Example

Creates two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be given a special format for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD DATA(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT