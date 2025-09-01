---
title: "PROVIDE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide.htm) Syntax PROVIDE FIELDS comp1 comp2 ... FROM itab1 INTO wa1 VALID flag1 ... BOUNDS intliml1 AND intlimu1 WHERE log_exp1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/a
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide_shortref.htm"
abapFile: "abapprovide_shortref.htm"
keywords: ["loop", "do", "if", "internal-table", "abapprovide", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  P

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PROVIDE%2C%20ABAPPROVIDE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PROVIDE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide.htm)

Syntax

PROVIDE FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab1 INTO wa1 VALID flag1 ...
               BOUNDS intliml1 AND intlimu1
               *\[*WHERE [log\_exp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm)*\]*
        FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab2 INTO wa2 VALID flag2
               BOUNDS intliml2 AND intlimu2
               *\[*WHERE [log\_exp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm)*\]*
               ...
        BETWEEN extliml AND extlimu
        *\[*INCLUDING GAPS*\]*.
  ...
ENDPROVIDE.

Effect

Evaluates a join of special internal tables in a loop. The join is based on overlapping value intervals in the internal tables involved.

Additions   

-   FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
    Specifies the columns to be read.
-   FROM itab1 ... FROM itab2 ...
    Specifies the internal tables involved.
-   INTO wa1 ... INTO wa2 ...
    Specifies work areas for the results.
-   VALID flag1 ... VALID flag2 ...
    Specifies whether the intervals of the internal tables in the current loop overlap or not.
-   BOUNDS intliml1 AND intlimu1 ... BOUNDS intliml2 AND intlimu2 ...
    Specifies two special columns for every internal table, whose values must be interpreted as limits of closed intervals.
-   WHERE log\_exp1 ... WHERE log\_exp2  ...
    Specifies conditions using logical expressions: log\_exp1, log\_exp2, ... and so on.
-   BETWEEN extliml AND extlimu
    Specifies an outer interval.
-   INCLUDING GAPS
    Runs the loop for non-overlapping intervals as well.