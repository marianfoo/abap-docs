---
title: "SELECTION-SCREEN, TABBED BLOCK"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_botb_shortref.htm) Syntax SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES NO INTERVALS. ... SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode DEFAULT PROGRAM prog SCREE
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm"
abapFile: "abapselection-screen_tabbed.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "data", "abapselection", "screen", "tabbed"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_layout.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, TABBED BLOCK, ABAPSELECTION-SCREEN_TABBED, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, TABBED BLOCK

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_botb_shortref.htm)

Syntax

SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES *\[*NO INTERVALS*\]*.
...
*\[*SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode
                  *\[*DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr*\]*
                  *\[*[MODIF ID modid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm)*\]*
                  *\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm)*\]*.*\]*
...
SELECTION-SCREEN END OF BLOCK tblock.

Additions:

[1\. ... NO INTERVALS](#!ABAP_ADDITION_1@1@)
[2\. ... USER-COMMAND fcode](#!ABAP_ADDITION_2@2@)
[3\. ... DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr](#!ABAP_ADDITION_3@3@)

Effect

The first and last statements define a [tabstrip](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentabstrip_control_glosry.htm "Glossary Entry") area with the name tblock on the current [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The name tblock must be specified directly and can contain a maximum of 16 characters. The number of lines in the tabstrip area is determined by a number n, which must be specified directly and can contain a maximum of three characters but must not exceed 197. The current selection screen cannot be defined as a [subscreen dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") using [AS SUBSCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_subscreen.htm).

Within the statements defining a tabstrip area, there can only be SELECTION-SCREEN statements with a TAB addition, and these can only be used here. These statements define [tab titles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentab_title_glosry.htm "Glossary Entry") with the name tab and a length of len. The names tab must be specified directly and can contain a maximum of 8 characters. The lengths len must be specified directly as positive numbers with a maximum of two digits and a value of no more than 79. If the width of all tab titles is greater than the width of this area, a scroll bar is configured automatically so that all pages can be accessed.

The system automatically creates an identically named global variable with type c and with a length of 83 for each tab title. The content of the variables is displayed as the label for the tab title on the selection screen. The addition [MODIF ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm) assigns the tab title to the [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid. The [ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

If no SELECTION-SCREEN statement with the addition TAB is included within the statements for the definition of a tab area, a tab area is defined without a tab title. This special case acts as the definition of a [subscreen area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_arrea_glosry.htm "Glossary Entry") for the integration of a single [subscreen dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") on the selection screen. The subscreen dynpro is assigned dynamically (see below).

Addition 1   

... NO INTERVALS

Effect

The tabstrip area is created narrow enough that a [subscreen dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") created using the addition NO INTERVALS of [AS SUBSCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_subscreen.htm) can fit in it.

Hint

The addition NO INTERVALS of TABBED BLOCK has no effect on the [selection criteria](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") of selection screens, which are integrated as subscreen dynpros in the tab area.

Addition 2   

... USER-COMMAND fcode

Effect

Each tab title must be assigned a function code fcode using the addition USER-COMMAND. The function codes fcode must be specified directly and can contain a maximum of 20 characters. When the user selects a tab, the associated function code can be taken from the component ucomm of the structure sscrfields after the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm). For this purpose, this component must be declared as an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") with reference to the structure SSCRFIELDS using the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm).

Hints

-   If a function code used in the GUI status of the selection screen is specified for fcode, the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_events.htm) is affected accordingly.
-   It is not recommended that the system field sy-ucomm instead of sscrfields-ucomm is evaluated, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Addition 3   

... DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr

Effect

Each tab title must be assigned a [subscreen dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") whose [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") is displayed as a tab page when the tab title is selected. If this assignment is missing or incorrect when the selection screen is sent, an uncatchable exception is raised.

Dynamic Assignment

For each tabstrip area, an identically named global structure is created in the current program. This structure has the following three components: prog of type c with length 40, dynnr of type c and length 4, and activetab of type c with length 132. If the addition DEFAULT is not specified, the name of the ABAP program in which the required subscreen dynpro is defined, the number of the subscreen dynpro, and the function code of the tab title must be assigned to these components before the selection screen is sent. An assignment to the component activetab at the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) is ignored. Instead, this is automatically overwritten with the function code of the selected tab title before the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen_events.htm) of the current selection screen.

For a pure subscreen area, that is, a tabstrip area without a tab title, dynamic assignment must be used. Before the selection screen is sent, the program name must be assigned to the component prog and the dynpro number of the subscreen dynpro must be assigned to the component dynnr (for an example, see the program DEMO\_SEL\_SCREEN\_WITH\_SUBSCREEN).

Static Assignment

If the addition DEFAULT is specified, the tab title is assigned the subscreen dynpro for the [number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_number_glosry.htm "Glossary Entry") dynnr of the program prog. The dynpro number and program must be specified directly. If the addition PROGRAM is not specified, the subscreen dynpro is searched for in the current program. A subscreen dynpro that is assigned statically with DEFAULT can also be overwritten dynamically.

If the DEFAULT addition is specified, it is possible to define that the screen element for a tab page is displayed when the selection screen is sent by assigning the name of the tab title to the component activetab. The other components are filled with the values specified for DEFAULT when the selection screen is sent. The first page is displayed as standard.

Hint

If an assigned subscreen screen is not a selection screen, the dialog modules that are accessed during its flow logic must be defined in the current program. If an assigned subscreen dynpro is a selection screen, user actions on the [subscreen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubscreen_glosry.htm "Glossary Entry") produce the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm). This includes the selection of a tab title. The event AT SELECTION-SCREEN is executed first for the included subscreen in the selection screen and then for the including selection screen.

Example

Defines a tabstrip control mytab on the [standard selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") and includes the selection screens 100 and 200, which are defined as subscreen dynpros, in an executable program. The assignment of the subscreen screens to the tab titles takes place dynamically. For an example of a static assignment with the addition DEFAULT, refer to [SELECTION-SCREEN - AS SUBSCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_subscreen.htm).

TABLES sscrfields.
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
                  TAB (20) button1 USER-COMMAND push1,
                  TAB (20) button2 USER-COMMAND push2,
                  END OF BLOCK mytab.
INITIALIZATION.
  button1 = 'Selection Screen 1'.
  button2 = 'Selection Screen 2'.
  mytab-prog = sy-repid.
  mytab-dynnr = 100.
  mytab-activetab = 'PUSH1'.
AT SELECTION-SCREEN.
  CASE sy-dynnr.
    WHEN 1000.
      CASE sscrfields-ucomm.
        WHEN 'PUSH1'.
          mytab-dynnr = 100.
        WHEN 'PUSH2'.
          mytab-dynnr = 200.
        WHEN OTHERS.
        ...
      ENDCASE.
      ...
  ENDCASE.

Continue
![Example](exa.gif "Example") [Selection Screens -Tabstrips](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_with_tabstrip_abexa.htm)
![Example](exa.gif "Example") [Selection Screens -Subscreens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_with_subscr_abexa.htm)