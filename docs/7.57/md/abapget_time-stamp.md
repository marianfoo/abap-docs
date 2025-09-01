  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET TIME STAMP, ABAPGET_TIME-STAMP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

GET TIME STAMP

[Short Reference](javascript:call_link\('abapget_time_stamp_shortref.htm'\))

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement uses the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of the AS ABAP to create a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") according to the [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") standard and assigns it to the variable time\_stamp of type p as a [time stamp in a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)).

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from the ABAP Dictionary, in accordance with the ABAP type p with length 8 or p with length 11 and seven decimal places. Depending on the data type, the time stamp is created either in the [short form](javascript:call_link\('abentime_stamps_packed.htm'\)) or in the [long form](javascript:call_link\('abentime_stamps_packed.htm'\)).
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)) or [FINAL(var)](javascript:call_link\('abenfinal_inline.htm'\)), where a variable of type TIMESTAMP is declared.

Hints

-   The precision of the decimal places of the generated time stamp depends on the hardware (processor) of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). Resolutions in the one-digit or two-digit microsecond range are realistic.
-   A time stamp in its short form is the integer part of a time stamp in its long form. A long form time stamp cannot be used to create the associated short form time stamp using a simple assignment, since this would involve commercial rounding. The method MOVE of the system class [CL\_ABAP\_TSTMP](javascript:call_link\('abencl_abap_tstmp.htm'\)) can be used instead.

Example

Creation of two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be formatted specially for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD FINAL(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT