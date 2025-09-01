---
title: "CONVERT UTCLONG - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong.htm) Syntax CONVERT  UTCLONG time_stamp INTO DATE dat TIME tim FRACTIONAL SECONDS fs DAYLIGHT SAVING TIME dst TIME ZONE tz    DATE dat TIME tim FRACTIONAL SECON
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong_shortref.htm"
abapFile: "abapconvert_utclong_shortref.htm"
keywords: ["do", "if", "case", "try", "abapconvert", "utclong", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CONVERT UTCLONG - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapconvert_utclong.htm)

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

Converts either a [UTC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamp_glosry.htm "Glossary Entry") in a [time stamp field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp to dates and times and returns the results in dat, tim, and fs or converts a date or time in dat, tim, and fs to a [UTC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_glosry.htm "Glossary Entry") [time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamp_glosry.htm "Glossary Entry") with respect to a time zone tz and returns the result in a [time stamp field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentimestamp_field_glosry.htm "Glossary Entry") time\_stamp.

Addition

-   DAYLIGHT SAVING TIME dst
    For CONVERT UTCLONG, specifies whether the time stamp is in daylight saving time. In the case of CONVERT INTO UTCLONG, specifies whether the time is in daylight saving time.