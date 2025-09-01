  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20TABBED%20BLOCK%2C%20ABAPSELECTION-SCREEN_BOTB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

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