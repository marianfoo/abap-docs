---
title: "CALL SELECTION-SCREEN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_selection-screen_shortref.htm) Syntax CALL SELECTION-SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2 USING SELECTION-SET variant. Additions: 1. ... STARTING AT col1 lin1 ENDIN
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_selection_screen.htm"
abapFile: "abapcall_selection_screen.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "data", "abapcall", "selection", "screen"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen.htm) →  [Selection Screens - Calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_call.htm) → 

CALL SELECTION-SCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_selection-screen_shortref.htm)

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Additions:

[1\. ... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_2@2@)

Effect

This statement calls the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_number_glosry.htm "Glossary Entry") specified in dynnr and starts its [selection screen processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). dynnr expects a data object of the type n and the length 4.

The statement CALL SELECTION-SCREEN accesses the selection screens of the respective [main program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current program group. These selection screens work with the parameters and selection criteria of the main program and raise the selection screen processing in the main program. The main program is generally the current program, except when calling a selection screen in an externally called subroutine. An uncatchable exception is raised if the specified selection screen is not contained in the main program of the program group.

Any selection screen of the main program can be called, in particular the standard selection screen. The default setting is the display of the selection screen in the GUI window of the preceding dynpro.

System Fields

sy-subrc

Meaning

0

The user selected the function Execute or Execute + Print on the selection screen.

4

The user selected Back, Exit, or Cancel on the selection screen.

Hints

-   The statement [CALL SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_screen.htm) cannot be used to call selection screens, since otherwise the proper execution of the selection screen processing cannot be guaranteed.
-   If the called selection screen is displayed in a dialog box, it is advisable to use the addition AS WINDOW when specifying the selection screen.

Addition 1   

... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*

Effect

The addition STARTING AT creates a modal dialog box and displays the selection screen. The upper left corner of the dialog box is determined by the values in col1 and lin1 for column and line. These values refer to the GUI window with the [popup level](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpop-up_level_glosry.htm "Glossary Entry") 0. The bottom right corner is either set automatically or it can be specified in col2 and lin2 after ENDING AT. col1, lin1, col2, and lin2 expect data objects of the type i. The values of col1, lin1 should be less than col2, lin2, otherwise the behavior will be undefined.

Addition 2   

... USING SELECTION-SET variant

Effect

The addition USING SELECTION-SET fills the parameters and selection criteria of the selection screen with the values of a [selection screen variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariant_glosry.htm "Glossary Entry") specified in variant. The values are passed to the associated data objects of the program immediately before the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapat_selection-screen.htm). variant expects a [character-like data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") which, when the statement is executed, contains the name of a [selection screen variant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvariant_glosry.htm "Glossary Entry") of the main program stored for the selection screen in uppercase letters. If a nonexistent variant or a variant of another selection screen of the main program is specified, the addition is ignored.

Example

See the example in [SELECTION-SCREEN BEGIN OF SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_normal.htm).

Continue
![Example](exa.gif "Example") [Selection Screens - Calling Standalone Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensel_screen_call_sel_scr_abexa.htm)