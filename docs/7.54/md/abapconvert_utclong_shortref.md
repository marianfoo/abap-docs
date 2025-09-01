  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CONVERT UTCLONG - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_utclong.htm)

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

Converts either a [UTC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a [time stamp field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp to dates and times and returns the results in dat, tim, and fs or converts a date or time in dat, tim, and fs to a [UTC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamp_glosry.htm "Glossary Entry") with respect to a time zone tz and returns the result in a [time stamp field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp.

Addition

-   DAYLIGHT SAVING TIME dst
    For CONVERT UTCLONG, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO UTCLONG, specifies whether the time is in daylight saving time.