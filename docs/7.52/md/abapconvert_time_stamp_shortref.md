  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  C

CONVERT TIME STAMP - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm)

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Either converts a specified date and time to dat and tim with reference to a time zone tz to a [UTC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_glosry.htm "Glossary Entry") and returns the result in time\_stamp or converts a UTC time stamp in time\_stamp to a date and time and returns the results in dat and tim.

Addition

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT DATE, specifies whether the time is specified in daylight saving time. In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time.