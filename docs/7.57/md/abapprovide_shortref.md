  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PROVIDE, ABAPPROVIDE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

PROVIDE - Short Reference

[Reference](javascript:call_link\('abapprovide.htm'\))

Syntax

PROVIDE FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab1 INTO wa1 VALID flag1 ...
               BOUNDS intliml1 AND intlimu1
               *\[*WHERE [log\_exp1](javascript:call_link\('abenlog_exp_shortref.htm'\))*\]*
        FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab2 INTO wa2 VALID flag2
               BOUNDS intliml2 AND intlimu2
               *\[*WHERE [log\_exp2](javascript:call_link\('abenlog_exp_shortref.htm'\))*\]*
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