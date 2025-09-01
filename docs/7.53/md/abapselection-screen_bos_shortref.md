  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SELECTION-SCREEN - BEGIN OF - Quick reference

[Reference](javascript:call_link\('abapselection-screen_definition.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF SCREEN dynnr *{* *{* *\[*TITLE title*\]*
                                           *\[*AS WINDOW*\]* *}*
                                       *|* *{* AS SUBSCREEN
                                           *\[*NO INTERVALS*\]*
                                           *\[*NESTING LEVEL n*\]* *}* *}*.
...
SELECTION-SCREEN END OF SCREEN dynnr.

Effect

Defines a standalone [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") dynnr. The elements of the selection screen are defined between the two statements. Any selection screen elements declared outside of these statements are part of the standard selection screen with the dynpro number 1000.

Additions

-   [TITLE title](javascript:call_link\('abapselection-screen_normal.htm'\))
    Specifies a title title in the title bar.
    
-   [AS WINDOW](javascript:call_link\('abapselection-screen_normal.htm'\))
    Defines a selection screen for a modal dialog window.
    
-   [AS SUBSCREEN](javascript:call_link\('abapselection-screen_subscreen.htm'\))
    Defines a selection screen as a [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry").
    
-   [NO INTERVALS](javascript:call_link\('abapselection-screen_subscreen.htm'\))
    Sets the addition NO INTERVALS for all selection criteria of the selection screen.
    
-   [NESTING LEVEL n](javascript:call_link\('abapselection-screen_subscreen.htm'\))
    Adjusts the width of the [subscreens](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") within [tabstrips](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry").