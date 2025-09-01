---
title: "SELECTION-SCREEN, MODIF ID"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm) Syntax ... MODIF ID modid ... Effect After the MODIF ID addition, a modid identifier can be specified to assign a screen element of a selection screen to a modification group(https://hel
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm"
abapFile: "abapselection-screen_modif_id.htm"
keywords: ["select", "loop", "do", "if", "try", "data", "abapselection", "screen", "modif"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_layout.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, MODIF ID, ABAPSELECTION-SCREEN_MODIF_ID, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, MODIF ID

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm)

Syntax

... MODIF ID modid ...

Effect

After the MODIF ID addition, a modid identifier can be specified to assign a screen element of a selection screen to a [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry"). The MODIF ID addition can be specified for the following statements:

-   [SELECTION-SCREEN - COMMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm)
-   [SELECTION-SCREEN - PUSHBUTTON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_pushbutton.htm)
-   [SELECTION-SCREEN - TAB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm)
-   [SELECTION-SCREEN - ULINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_uline.htm)
-   [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm)
-   [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm)

The name of the modid modification group must be specified directly and can have no more than three characters. When generating a selection screen, modid is entered for the properties of the screen elements created using the above statement in the group that is assigned to the component group1 of the structure [SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen.htm). All screen elements of a group can be modified before displaying the selection screen together with the [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm) statement.

Hint

The modification groups that are assigned to the group2 and group3 columns of the structure [SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen.htm), are set by the system when generating a selection screen.

-   group2 contains the value DBS for screen elements defined in a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
-   group3 can contain values from the following table.
-   group4 is only intended for internal use.

Possible values in group3:

Key

Meaning of the screen element

BLK

Frame or title of a block

COF

Output field that is linked with a parameter or [selection criterion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") using the addition FOR FIELD.

COM

Output field that is not linked with a parameter or a selection criterion.

HGH

Input field for the upper interval limit of a selection criterion

ISX

Input field for a parameter that is linked with a search help using the addition AS SEARCH PATTERN.

LOW

Input field for the lower interval limit of a selection criterion

OPU

Icon for the selection options of a selection criterion

PAR

Input field of a parameter

PBU

[Pushbutton](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpushbutton_glosry.htm "Glossary Entry")

TAB

[Tab title](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentab_title_glosry.htm "Glossary Entry")

TOT

Output field for text in front of the input field of the upper interval limit of a selection criterion

TST

[Tabstrip](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentabstrip_control_glosry.htm "Glossary Entry")

TXT

Output field for text in front of the input field of a parameter or the lower interval limit of a selection criteria

ULI

Horizontal line

VPU

Pushbutton for multiple selection of a selection criterion

Example

The elements of the b2 block are assigned to the bl2 modification group. The show\_all checkbox enables the option of displaying these elements. The change in the display takes place immediately, since the event AT SELECTION-SCREEN is raised when the checkbox is selected. The function code is not needed. Instead, the content of show\_all is evaluated at [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry").

PARAMETERS show\_all AS CHECKBOX USER-COMMAND flag.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME.
PARAMETERS: p1 TYPE c LENGTH 10,
            p2 TYPE c LENGTH 10,
            p3 TYPE c LENGTH 10.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME.
PARAMETERS: p4 TYPE c LENGTH 10 MODIF ID bl2,
            p5 TYPE c LENGTH 10 MODIF ID bl2,
            p6 TYPE c LENGTH 10 MODIF ID bl2.
SELECTION-SCREEN END OF BLOCK b2.
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF show\_all <> 'X' AND
       screen\_wa-group1 = 'BL2'.
       screen\_wa-active = '0'.
    ENDIF.
    MODIFY SCREEN FROM screen\_wa.
  ENDLOOP.