  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

AT SELECTION-SCREEN - Short Reference

[Reference](javascript:call_link\('abapat_selection-screen.htm'\))

Syntax

AT SELECTION-SCREEN *\[* OUTPUT
                    *|* *{*ON *{*par*|*selcrit*}**}*
                    *|* *{*ON END OF selcrit*}*
                    *|* *{*ON BLOCK block*}*
                    *|* *{*ON RADIOBUTTON GROUP group*}*
                    *|* *{*ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
                       FOR *{*par*|*selcrit-low*|*selcrit-high*}**}*
                    *|* *{*ON EXIT-COMMAND*}* *\]*.

Effect

Introduces event blocks whose events are raised at certain times in [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry"). Without an addition, the event is raised when selection screen processing is completed.

Additions

-   [OUTPUT](javascript:call_link\('abapat_selection-screen_events.htm'\))
    [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") event of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").
-   [ON *{*par*|*selcrit*}*](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Passes single parameters par or single fields from selection criteria selcrit.
-   [ON END OF selcrit](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Passes a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") selcrit.
-   [ON BLOCK block](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Passes a block block.
-   [ON RADIOBUTTON GROUP group](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Passes a radio button group group.
-   [ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
    FOR *{*par*|*selcrit-low*|*selcrit-high*}*](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Requests the [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") or [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") for the input fields of parameters par or selection criteria selcrit.
-   [ON EXIT-COMMAND](javascript:call_link\('abapat_selection-screen_events.htm'\))
    Cancels selection screen processing.