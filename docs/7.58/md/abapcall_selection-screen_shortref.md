---
title: "CALL SELECTION-SCREEN - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_selection_screen.htm) Syntax CALL SELECTION-SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2 USING SELECTION-SET variant. Effect Calls the selection screen(https://help.sap.com/doc/abapd
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_selection-screen_shortref.htm"
abapFile: "abapcall_selection-screen_shortref.htm"
keywords: ["select", "do", "if", "try", "abapcall", "selection", "screen", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20SELECTION-SCREEN%2C%20ABAPCALL_SELECTION-SCREEN_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL SELECTION-SCREEN - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_selection_screen.htm)

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Effect

Calls the [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the number specified in dynnr and starts [selection screen processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Additions   

-   STARTING AT col1 lin1
    Opens a modal dialog box at the position specified in col1 and lin1.
-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog box at the position specified in col2 and lin2.
-   USING SELECTION-SET variant
    Specifies a [selection screen variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvariant_glosry.htm "Glossary Entry") from which the default values are taken.