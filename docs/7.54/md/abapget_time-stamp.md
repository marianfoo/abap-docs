  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) → 

GET TIME STAMP

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_time_stamp_shortref.htm)

Syntax

GET TIME STAMP FIELD time\_stamp.

Effect

This statement uses the [system time](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_time_glosry.htm "Glossary Entry") and [system date](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_date_glosry.htm "Glossary Entry") of the AS ABAP to generate a [UTC time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") according to the [POSIX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") standard and assigns it to the variable time\_stamp of type p as a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm).

The following can be specified for time\_stamp:

-   An existing variable of the data type TIMESTAMP or TIMESTAMPL from ABAP Dictionary, in accordance with ABAP type p with length 8 or p with length 11, with seven decimal places. Depending on the data type, the time stamp is generated either in the [short form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) or in the [long form](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm).
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of type TIMESTAMP is declared.
    

Notes

-   The precision of the decimal places of the long form depends on the hardware (processor) of the current [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") [host computer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry"). The maximum resolution of 100 ns is not always reached. A resolution of a single-figure or two-figure number of microseconds is realistic.
    
-   A time stamp in its short form is the integer part of a time stamp in its long form. A long form time stamp cannot be used to generate the associated short form time stamp simply by making an assignment, since this would involve commercial rounding. The method MOVE of the system class [CL\_ABAP\_TSTMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_tstmp.htm) can be used instead.
    

Example

Generates two time stamps. An existing variable of the type TIMESTAMPL must be used for the long form. An inline declaration can be used for the short form. The time stamps must be given a special format for the output, since otherwise only numbers of type p would be displayed.

DATA tsl TYPE timestampl.
GET TIME STAMP FIELD DATA(ts).
GET TIME STAMP FIELD tsl.
cl\_demo\_output=>new(
  )->write( |{ ts  TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->write( |{ tsl TIMESTAMP = ISO
                   TIMEZONE = 'UTC' }|
  )->display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: The target field differs from TIMESTAMP or TIMESTAMPL with respect to type, length, and decimal places.
    Runtime error: GET\_TIMESTAMP\_FORMAT