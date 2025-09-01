  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) → 

Selection Screens - Overview

-   [Selection Screens as Dynpros](#abenselection-screen-overview-1--------selection-screen-tasks---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_2)

-   [GUI Status of Selection Screens](#abenselection-screen-overview-3--------selection-screen-events---@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_4)

-   [Selection Screens and Logical Databases](#@@ITOC@@ABENSELECTION_SCREEN_OVERVIEW_5)

Selection Screens as Dynpros

Selection screens are special [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") that can be defined in executable programs, function groups, and module pools. Selection screens are defined in the global declaration part of the specified ABAP programs with the statements SELECT-OPTIONS, SELECTION-SCREEN and PARAMETERS without using Screen Painter. The [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of selection screens can contain a subset of the screen elements of general dynpros.

Selection screens lie in the same namespace as the dynpros of the program. Additionally, [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") 1000 is reserved for a standard selection screen. Apart from the standard selection screen, standalone selection screens can also be defined. Standalone selection screens can only be defined in function groups and module pools.

When an ABAP program is activated, the components of the program selection screen, i.e. screens with screen elements and [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"), are generated automatically.

Note

The generated dynpros cannot be edited directly, which also means that certain predefined settings cannot be disabled. For example, input fields are always templates in which certain characters ("!", "=", "\_") have special [functions](javascript:call_link\('abenabap_dynpros_fields.htm'\)).

Selection Screen Tasks

Selection screens essentially have two tasks:

-   They enable users to input parameters (single values) and selection criteria (interval selections in tabular form).

-   they represent the interface of executable programs, whose input fields can be supplied by the calling program with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

GUI Status of Selection Screens

The ABAP runtime environment sets a default GUI status and a default title for a selection screen. There is no guarantee that the statement [SET PF-STATUS](javascript:call_link\('abapset_pf-status_dynpro.htm'\)) works at [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") for the selection screen. To define a separate GUI status for a selection screen or to deactivate the functions of the screen generated, one of the function modules RS\_SET\_SELSCREEN\_STATUS or RS\_EXTERNAL\_SELSCREEN\_STATUS can be used (in exceptional cases).

The default title in the title bar of selection screens is the title of the program defined in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"). This title can be overwritten as follows:

-   With the addition TITLE in the case of selection screens defined using [SELECTION-SCREEN BEGIN OF SCREEN](javascript:call_link\('abapselection-screen_definition.htm'\)).

-   With the statement [SET TITLEBAR](javascript:call_link\('abapset_titlebar_dynpro.htm'\)) at PBO in the case of standard selection screens.

Selection Screen Events

No dialog modules for selection screens can be defined in the ABAP program. Instead, the runtime environment triggers specific events during PBO and [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing of the dynpro, which can be handled in corresponding event blocks during [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Selection Screens and Logical Databases

A standard selection screen can also be defined in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). If an executable program is associated with a logical database, its standard selection screen is composed of the logical database and its own database.

Continue
![Example](exa.gif "Example") [Selection Screens, Changing the Default GUI Status](javascript:call_link\('abensel_screen_gui_status_abexa.htm'\))