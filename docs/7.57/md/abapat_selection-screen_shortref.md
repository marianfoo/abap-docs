---
title: "AT SELECTION-SCREEN - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) Syntax AT SELECTION-SCREEN  OUTPUT  ON parselcrit  ON END OF selcrit  ON BLOCK block  ON RADIOBUTTON GROUP group  ON HELP-REQUESTVALUE-REQU
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_shortref.htm"
abapFile: "abapat_selection-screen_shortref.htm"
keywords: ["select", "do", "if", "try", "abapat", "selection", "screen", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT SELECTION-SCREEN, ABAPAT_SELECTION-SCREEN_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

AT SELECTION-SCREEN - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm)

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

Introduces event blocks whose events are raised at certain times in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). Without an addition, the event is raised when selection screen processing is completed.

Additions   

-   [OUTPUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") event of the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry").
-   [ON *{*par*|*selcrit*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Passes single parameters par or single fields from selection criteria selcrit.
-   [ON END OF selcrit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Passes a [selection table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit.
-   [ON BLOCK block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Passes a block block.
-   [ON RADIOBUTTON GROUP group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Passes a radio button group group.
-   [ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
    FOR *{*par*|*selcrit-low*|*selcrit-high*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Requests the [field help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfield_help_glosry.htm "Glossary Entry") or [input help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_glosry.htm "Glossary Entry") for the input fields of parameters par or selection criteria selcrit.
-   [ON EXIT-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm)
    Cancels selection screen processing.