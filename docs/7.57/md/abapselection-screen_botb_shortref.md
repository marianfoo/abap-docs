  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, TABBED BLOCK, ABAPSELECTION-SCREEN_BOTB_SHORTREF, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, TABBED BLOCK - Short Reference

[Reference](javascript:call_link\('abapselection-screen_tabbed.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK tblock.

Effect

Defines a [tabstrip](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") control or [subscreen](javascript:call_link\('abensubscreen_arrea_glosry.htm'\) "Glossary Entry") area named tblock on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Addition  

-   FOR n LINES
    Defines the number of lines in the tabstrip control in n.
-   NO INTERVALS
    Creates a narrower area.