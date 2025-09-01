  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CONVERT TIME STAMP - Quick reference

[Reference](javascript:call_link\('abapconvert_time-stamp.htm'\))

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Either converts a specified date and time to dat and tim with reference to a time zone tz to a [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") and returns the result in time\_stamp or converts a UTC time stamp in time\_stamp to a date and time and returns the results in dat and tim.

Addition

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT DATE, specifies whether the time is specified in daylight saving time. In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time.