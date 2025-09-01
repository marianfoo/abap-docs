  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

READ REPORT - Short Reference

[Reference](javascript:call_link\('abapread_report.htm'\))

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Effect

Imports the source code of the ABAP program prog into the internal table itab.

Addition

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest imported source code line in wid.