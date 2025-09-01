---
title: "CALL SELECTION-SCREEN - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_selection_screen.htm) Syntax CALL SELECTION-SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2 USING SELECTION-SET variant. Effect Calls the selection screen(https://help.sap.com/doc/abapd
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_selection-screen_shortref.htm"
abapFile: "abapcall_selection-screen_shortref.htm"
keywords: ["select", "do", "if", "try", "abapcall", "selection", "screen", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CALL SELECTION-SCREEN - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_selection_screen.htm)

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Effect

Calls the [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the number specified in dynnr and starts [selection screen processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Additions

-   STARTING AT col1 lin1
    Opens a modal dialog window at the position specified in col1 and lin1.
    

-   ENDING AT col2 lin2
    Defines the lower right corner of the modal dialog window at the position specified in col2 and lin2.
    

-   USING SELECTION-SET variant
    Specifies a [selection screen variant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariant_glosry.htm "Glossary Entry") from which the default values are taken.