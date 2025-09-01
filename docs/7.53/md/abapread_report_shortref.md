  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

READ REPORT - Quick reference

[Reference](javascript:call_link\('abapread_report.htm'\))

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Effect

Imports the source code of the ABAP program prog into the internal table itab.

Addition

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest imported source code line in wid.