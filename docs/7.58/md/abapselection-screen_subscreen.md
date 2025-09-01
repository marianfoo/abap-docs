---
title: "SELECTION-SCREEN, AS SUBSCREEN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_bos_shortref.htm) Syntax SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN NO INTERVALS NESTING LEVEL n. ... SELECTION-SCREEN END OF SCREEN dynnr. Additions: 1. ... NO INTERVALS(#!A
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_subscreen.htm"
abapFile: "abapselection-screen_subscreen.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapselection", "screen", "subscreen"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, BEGIN OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_definition.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20AS%20SUBSCREEN%2C%20ABAPSELECTION-SCREEN_SUBSCREEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, AS SUBSCREEN

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_bos_shortref.htm)

Syntax

SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN
                                       *\[*NO INTERVALS*\]*
                                       *\[*NESTING LEVEL n*\]*.
...
SELECTION-SCREEN END OF SCREEN dynnr.

Additions:

[1\. ... NO INTERVALS](#!ABAP_ADDITION_1@1@)
[2\. ... NESTING LEVEL n](#!ABAP_ADDITION_2@2@)

Effect

These statements have the same function as the [statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_normal.htm) for creating [selection screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry") as regular dynpros, but here the selection screen is defined as a [subscreen dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry").

Like all subscreen dynpros, selection screens defined as subscreen dynpros can be included in other dynpros or selection screens, or in subscreen areas or tab pages. However, they cannot be called using [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_selection_screen.htm). Subscreen dynpros are included in selection screens using the addition [TABBED BLOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_tabbed.htm) of the statement SELECTION-SCREEN. This addition enables an individual subscreen area to be defined without tab titles as a special tabstrip control.

A selection screen defined as a subscreen dynpro cannot contain any tabstrip controls defined using [TABBED BLOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_tabbed.htm).

Hint

If selection screens defined as [subscreens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubscreen_glosry.htm "Glossary Entry") are included in dynpros, it should be noted that, as is the case with regular subscreen dynpros, the statement [CALL SUBSCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpcall.htm) in the [dynpro flow logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") must be executed at [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") and [PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") so that the data is transported between the selection screen and the ABAP program. User actions on selection screens defined as subscreens raise regular [selection screen processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"), even if they are included in dynpros.

Addition 1   

... NO INTERVALS

Effect

If NO INTERVALS is specified, the identically named addition NO INTERVALS is used implicitly in the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options.htm) when defining all the selection criteria for this selection screen, and the subscreen is made narrower accordingly.

Addition 2   

... NESTING LEVEL n

Effect

The addition NESTING LEVEL allows the width of the subscreen to be adjusted if it is included in one or more frames in a [tabstrip control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentabstrip_control_glosry.htm "Glossary Entry"). n must be specified directly as a number between 0 and 4. To ensure that the width is adjusted correctly, the number n must be the same as the number of frames that surround the tabstrip control. If the tabstrip control is not in a frame, the addition can be specified with the number 0 or omitted.

Example

Defines the selection screens 100 and 200 as subscreen dynpros and includes them in a tabstrip control on the [standard selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") in an executable program.

REPORT ...
SELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN.
PARAMETERS: p1 TYPE c LENGTH 10,
            p2 TYPE c LENGTH 10,
            p3 TYPE c LENGTH 10.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN.
PARAMETERS: q1 TYPE c LENGTH 10,
            q2 TYPE c LENGTH 10,
            q3 TYPE c LENGTH 10.
SELECTION-SCREEN END OF SCREEN 200.
SELECTION-SCREEN: BEGIN OF TABBED BLOCK mytab FOR 10 LINES,
                  TAB (20) button1 USER-COMMAND push1
                                   DEFAULT SCREEN 100,
                  TAB (20) button2 USER-COMMAND push2
                                   DEFAULT SCREEN 200,
                  END OF BLOCK mytab.
INITIALIZATION.
  button1 = 'Selection Screen 1'.
  button2 = 'Selection Screen 2'.

Continue
![Example](exa.gif "Example") [Selection Screens - Subscreens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensel_screen_subscreen_abexa.htm)
![Example](exa.gif "Example") [Selection Screens - Tabstrips](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensel_screen_tabstrip_abexa.htm)