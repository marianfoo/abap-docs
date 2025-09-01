  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CONVERT TIME STAMP - Short Reference

[Reference](javascript:call_link\('abapconvert_time-stamp.htm'\))

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Converts either a [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") represented as a packed number in time\_stamp to date/time information and passes the result to dat and tim, or converts date/time information in dat and tim with regard to a time zone tz to a [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") and passes the result to time\_stamp.

Addition

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO TIME STAMP, specifies whether the time is in daylight savings time.