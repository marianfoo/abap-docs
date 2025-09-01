  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONVERT TIME STAMP, ABAPCONVERT_TIME_STAMP_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

CONVERT TIME STAMP - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm)

Syntax

CONVERT *{* TIME STAMP time\_stamp TIME ZONE tz
          INTO *\[*DATE dat*\]* *\[*TIME tim*\]* *\[*DAYLIGHT SAVING TIME dst*\]* *}*
      *|* *{* DATE dat *\[*TIME tim *\[*DAYLIGHT SAVING TIME dst*\]**\]*
          INTO TIME STAMP time\_stamp TIME ZONE tz *}*.

Effect

Converts either a [UTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") represented as a packed number in time\_stamp to date/time information and passes the result to dat and tim, or converts date/time information in dat and tim with regard to a time zone tz to a [UTC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") and passes the result to time\_stamp.

Addition  

-   DAYLIGHT SAVING TIME dst
    In the case of CONVERT TIME STAMP, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO TIME STAMP, specifies whether the time is in daylight savings time.