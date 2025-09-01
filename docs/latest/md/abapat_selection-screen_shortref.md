  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20AT%20SELECTION-SCREEN%2C%20ABAPAT_SELECTION-SCREEN_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

AT SELECTION-SCREEN - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen.htm)

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

Introduces event blocks whose events are raised at certain times in [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). Without an addition, the event is raised when selection screen processing is completed.

Additions   

-   [OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") event of the [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry").
-   [ON *{*par*|*selcrit*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Passes single parameters par or single fields from selection criteria selcrit.
-   [ON END OF selcrit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Passes a [selection table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit.
-   [ON BLOCK block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Passes a block block.
-   [ON RADIOBUTTON GROUP group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Passes a radio button group group.
-   [ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
    FOR *{*par*|*selcrit-low*|*selcrit-high*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Requests the [field help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_help_glosry.htm "Glossary Entry") or [input help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_help_glosry.htm "Glossary Entry") for the input fields of parameters par or selection criteria selcrit.
-   [ON EXIT-COMMAND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen_events.htm)
    Cancels selection screen processing.