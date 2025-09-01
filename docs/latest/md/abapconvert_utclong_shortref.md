---
title: "CONVERT UTCLONG - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_utclong.htm) Syntax CONVERT  UTCLONG time_stamp INTO DATE dat TIME tim FRACTIONAL SECONDS fs DAYLIGHT SAVING TIME dst TIME ZONE tz    DATE dat TIME tim FRACTIONAL
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_utclong_shortref.htm"
abapFile: "abapconvert_utclong_shortref.htm"
keywords: ["do", "if", "case", "try", "abapconvert", "utclong", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONVERT%20UTCLONG%2C%20ABAPCONVERT_UTCLONG_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONVERT UTCLONG - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_utclong.htm)

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

Converts either a [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a [time stamp field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp to dates and times and returns the results in dat, tim, and fs or converts a date or time in dat, tim, and fs to a [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") with respect to a time zone tz and returns the result in a [time stamp field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp.

Addition  

-   DAYLIGHT SAVING TIME dst
    For CONVERT UTCLONG, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO UTCLONG, specifies whether the time is in daylight saving time.