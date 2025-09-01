  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CALL SELECTION-SCREEN - Quick reference

[Reference](javascript:call_link\('abapcall_selection_screen.htm'\))

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Effect

Calls the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of the number specified in dynnr and starts [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Additions

-   STARTING AT col1 lin1
    Opens a modal dialog window at the position specified in col1 and lin1.
    

-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog window at the position specified in col2 and lin2.
    

-   USING SELECTION-SET variant
    Specifies a [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry") from which the default values are taken.