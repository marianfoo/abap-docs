  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CONVERT TIME STAMP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_time-stamp.htm)

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Converts either a [UTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") represented as a packed number in time\_stamp to date/time information and passes the result to dat and tim, or converts date/time information in dat and tim with regard to a time zone tz to a [UTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") and passes the result to time\_stamp.

Addition

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO TIME STAMP, specifies whether the time is in daylight savings time.