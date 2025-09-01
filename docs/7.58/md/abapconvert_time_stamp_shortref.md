  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONVERT%20TIME%20STAMP%2C%20ABAPCONVERT_TIME_STAMP_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONVERT TIME STAMP - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_time-stamp.htm)

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Converts either a [UTC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") represented as a packed number in time\_stamp to date/time information and passes the result to dat and tim, or converts date/time information in dat and tim with regard to a time zone tz to a [UTC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamp_glosry.htm "Glossary Entry") and passes the result to time\_stamp.

Addition  

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO TIME STAMP, specifies whether the time is in daylight savings time.