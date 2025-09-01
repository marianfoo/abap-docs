  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ REPORT, ABAPREAD_REPORT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

READ REPORT - Short Reference

[Reference](javascript:call_link\('abapread_report.htm'\))

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Effect

Imports the source code of the ABAP program prog into the internal table itab.

Addition  

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest imported source code line in wid.