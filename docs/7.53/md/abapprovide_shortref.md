---
title: "PROVIDE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprovide.htm) Syntax PROVIDE FIELDS comp1 comp2 ... FROM itab1 INTO wa1 VALID flag1 ... BOUNDS intliml1 AND intlimu1 WHERE log_exp1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprovide_shortref.htm"
abapFile: "abapprovide_shortref.htm"
keywords: ["loop", "do", "if", "internal-table", "abapprovide", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  P

PROVIDE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprovide.htm)

Syntax

PROVIDE FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab1 INTO wa1 VALID flag1 ...
               BOUNDS intliml1 AND intlimu1
               *\[*WHERE [log\_exp1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm)*\]*
        FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab2 INTO wa2 VALID flag2
               BOUNDS intliml2 AND intlimu2
               *\[*WHERE [log\_exp2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlog_exp_shortref.htm)*\]*
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
    
-   WHERE log\_exp1 ... WHERE log\_exp2 ...
    Specifies conditions using logical expressions: log\_exp1, log\_exp2, ... and so on.
    
-   BETWEEN extliml AND extlimu
    Specifies an outer interval.
    
-   INCLUDING GAPS
    Runs the loop for non-overlapping intervals as well.