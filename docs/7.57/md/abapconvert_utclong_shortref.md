  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONVERT UTCLONG, ABAPCONVERT_UTCLONG_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

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