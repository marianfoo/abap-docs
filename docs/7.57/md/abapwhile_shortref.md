  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  W

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WHILE, ABAPWHILE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

WHILE - Short Reference

[Reference](javascript:call_link\('abapwhile.htm'\))

Syntax

WHILE [log\_exp](javascript:call_link\('abenlog_exp_shortref.htm'\))
      *\[*VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
      *\[*VARY ...*\]**\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Executes the statement block statement\_block in a loop as long as the logical expression log\_exp is true.

Addition  

-   VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.