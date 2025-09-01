  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CONVERT UTCLONG - Short Reference

[Reference](javascript:call_link\('abapconvert_utclong.htm'\))

Syntax

CONVERT *{* UTCLONG time\_stamp
          INTO *\[*DATE dat*\]*
               *\[*TIME tim *\[*FRACTIONAL SECONDS fs*\]**\]*
               *\[*DAYLIGHT SAVING TIME dst*\]*
               TIME ZONE tz *}*
      *|* *{* DATE dat
          TIME tim *\[*FRACTIONAL SECONDS fs*\]*
          *\[*DAYLIGHT SAVING TIME dst*\]*
          TIME ZONE tz
          INTO UTCLONG time\_stamp *}*.

Effect

Converts either a [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") in a [time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") time\_stamp to dates and times and returns the results in dat, tim, and fs or converts a date or time in dat, tim, and fs to a [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") with respect to a time zone tz and returns the result in a [time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry") time\_stamp.

Addition

-   DAYLIGHT SAVING TIME dst
    For CONVERT UTCLONG, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO UTCLONG, specifies whether the time is in daylight saving time.