  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps.htm) →  [Time Stamp Fields with Time Stamp Type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutclong.htm) →  [Time Stamp Functions (ts\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ts_func - utclong_add, ABENUTCLONG_ADD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

ts\_func - utclong\_add

Syntax

... utclong\_add( val  = time\_stamp \[days = days\]
                                   \[hours = hours\]
                                   \[minutes = minutes\]
                                   \[seconds = seconds\] ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) adds the values passed to the optional parameters as a [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") specified after val. The type of the return value is [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm).

A time stamp field of the type utclong that contains a valid time stamp must be passed to the argument val. time\_stamp is a [time-stamp-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_like_expr_pos_glosry.htm "Glossary Entry"). An initial time stamp is handled like the smallest possible value of a time stamp.

The values to be added are passed in the following parameters, of which at least one must be specified:

-   days expects a number of days as a number of the type i.
-   hours expects a number of hours as a number of the type i.
-   minutes expects a number of minutes as a number of the type int8.
-   seconds expects a number of seconds as a number of the type decfloat34.

Each parameter can be passed data objects that can be converted to the expected type. Positive and negative numbers can be passed. These are [numeric expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry"). Internally, the passed values are transformed to the corresponding number of seconds, whereby the value passed to seconds is rounded to seven decimal places. First, the days, hours, and minutes, and then seconds are added to or subtracted from the value of the time stamp. If an invalid time stamp value is produced by one of the intermediate steps, a catchable exception of the class CX\_SY\_ARITHMETIC\_OVERFLOW is raised.

Hints

-   utclong\_subtract is not available, since its function is achieved by passing negative numbers to the parameter utclong\_add.
-   There are no parameters for years and months, since they do not correspond to a fixed number of seconds.
-   The result of the function utclong\_add is never the initial value of a time stamp. It is either a valid time stamp value or an exception is raised.

Example

This example demonstrates how the function utclong\_add works. The corresponding number of seconds is subtracted from a time stamp field ts\_new, which itself is produced by adding days, hours, and minutes. The statement [ASSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapassert.htm) demonstrates how this produces the original time stamp again.

FINAL(ts) = utclong\_current( ).
FINAL(ts\_new) =
  utclong\_add( val     = ts
               days    = 1000
               hours   = 100
               minutes = 10 ).
ASSERT ts =
  utclong\_add( val     = ts\_new
               seconds = - ( 1000 \* 86400 + 100 \* 3600 + 10 \* 60 ) ).
cl\_demo\_output=>display( |{ ts }\\n{ ts\_new }| ).

Example

This example demonstrates how the initial value is handled. One second is added to a time stamp ts\_ini passed as an initial value and one second is subtracted from the result in ts\_1. The result ts\_0 is the smallest valid time stamp value and not the initial value.

FINAL(o) = cl\_demo\_output=>new( ).
DATA ts\_ini TYPE utclong.
IF ts\_ini IS INITIAL.
  o->write( 'ts\_ini is initial' ).
ENDIF.
o->write( ts\_ini ).
FINAL(ts\_1) =
  utclong\_add( val     = ts\_ini
               seconds = 1 ).
o->write( ts\_1 ).
FINAL(ts\_0) =
  utclong\_add( val     = ts\_1
               seconds = -1 ).
IF ts\_0 IS NOT INITIAL AND
   ts\_0 <> ts\_ini.
  o->write( 'ts\_0 is neither initial nor equal to ts\_ini' ).
ENDIF.
o->write( ts\_0 ).
o->display( ).

Example

This example shows how missing days due to the switch from the Julian to the Gregorian calendar are handled. Adding 100 ns to the time stamp "1582-10-04 23:59:59.9999999" produces the time stamp "1582-10-15T00:00:00.0000000".

FINAL(ts) = conv utclong( '1582-10-04 23:59:59,9999999' ).
FINAL(ts\_new) =
  utclong\_add( val     = ts
               seconds    = '0.0000001' ).
cl\_demo\_output=>display( |{ ts }\\n{ ts\_new }| ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_DATE\_TIME

-   Cause: The time stamp specified for val is invalid.
    Runtime error: INVALID\_UTCLONG

CX\_SY\_CONVERSION\_ERROR

-   Cause: A passed parameter cannot be converted to the expected type.
    Runtime error: CONVT\_OVERFLOW, BCD\_OVERFLOW

CX\_SY\_ARITHMETIC\_OVERFLOW

-   Cause: The parameters passed produce an invalid time stamp.
    Runtime error: UTCLONG\_ADD\_OVERFLOW

Uncatchable Exceptions

-   Cause: An argument without a time stamp type is bound to val.
    Runtime error: TCHK\_TYPE\_LOAD