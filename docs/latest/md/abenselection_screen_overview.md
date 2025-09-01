---
title: "Selection Screens - Overview"
description: |
  -   Selection Screens as Dynpros(#abenselection-screen-overview-1-------selection-screen-tasks---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_2) -   GUI Status of Selection Screens(#abenselection-screen-overview-3-------selection-screen-events---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_4) -   Selection Scr
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_overview.htm"
abapFile: "abenselection_screen_overview.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abenselection", "screen", "overview"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Overview%2C%20ABENSELECTION_SCREEN_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Overview

-   [Selection Screens as Dynpros](#abenselection-screen-overview-1-------selection-screen-tasks---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_2)
-   [GUI Status of Selection Screens](#abenselection-screen-overview-3-------selection-screen-events---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_4)
-   [Selection Screens and Logical Databases](#@@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_5)

Selection Screens as Dynpros   

Selection screens are special [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") that can be defined in executable programs, function pools, and module pools. Selection screens are defined in the global declaration part of the specified ABAP programs with the statements SELECT-OPTIONS, SELECTION-SCREEN and PARAMETERS without using the Screen Painter. The [screen layouts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") of selection screens can contain a subset of the screen elements of general dynpros.

Selection screens are in the same namespace as the dynpros of the program. In executable programs, [dynpro number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_number_glosry.htm "Glossary Entry") 1000 is reserved for a standard selection screen. In addition to the standard selection screen, standalone selection screens can also be defined. Standalone selection screens can only be defined in function pools and module pools.

When an ABAP program is activated, the components of the program selection screen, that is, screens with screen elements and [dynpro flow logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry"), are generated automatically.

Hint

The generated dynpros cannot be edited directly, which also means that certain default settings cannot be disabled. For example, input fields are always templates in which certain characters (!, \=, \_) have special [functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_fields.htm).

Selection Screen Tasks   

Selection screens essentially have two tasks:

-   They enable users to input selection parameters (single values) and selection criteria (interval selections in tabular form).
-   they represent the interface of executable programs whose input fields can be supplied by the calling program with [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm).

GUI Status of Selection Screens   

The ABAP runtime framework sets a default GUI status and a default title for a selection screen. There is no guarantee that the statement [SET PF-STATUS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_dynpro.htm) works at [PBO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpbo_glosry.htm "Glossary Entry") for the selection screen. To define a separate GUI status for a selection screen or to deactivate the functions of the screen generated, one of the function modules RS\_SET\_SELSCREEN\_STATUS or RS\_EXTERNAL\_SELSCREEN\_STATUS can be used in exceptional cases.

The default title in the title bar of selection screens is the title of the program defined in the [program properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_property_glosry.htm "Glossary Entry"). This title can be overwritten as follows:

-   With the addition TITLE in the case of selection screens defined using [SELECTION-SCREEN BEGIN OF SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_definition.htm).
-   With the statement [SET TITLEBAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_titlebar_dynpro.htm) at PBO in the case of standard selection screens.

Selection Screen Events   

No dialog modules for selection screens can be defined in the ABAP program. Instead, the runtime framework raises specific events during PBO and [PAI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpai_glosry.htm "Glossary Entry") processing of the dynpro, which can be handled in corresponding event blocks during [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Selection Screens and Logical Databases   

A standard selection screen can also be defined in a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). If an executable program is linked with a logical database, its standard selection screen is composed of the logical database and its own database.

Continue
![Example](exa.gif "Example") [Selection Screens - Change Standard GUI Status](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensel_screen_gui_status_abexa.htm)