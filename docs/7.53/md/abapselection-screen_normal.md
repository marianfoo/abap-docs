  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Creating Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - BEGIN OF](javascript:call_link\('abapselection-screen_definition.htm'\)) → 

SELECTION-SCREEN - SCREEN

[Quick Reference](javascript:call_link\('abapselection-screen_bos_shortref.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF SCREEN dynnr *\[*TITLE title*\]*
                                       *\[*AS WINDOW*\]*.
...
SELECTION-SCREEN END OF SCREEN dynnr.

Extras:

[1\. ... TITLE title](#!ABAP_ADDITION_1@1@)
[2\. ... AS WINDOW](#!ABAP_ADDITION_2@2@)

Effect

These statements can be specified in the global declaration part of executable programs, function groups, and module pools. They create a standalone [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") dynnr. The dynpro number must be specified directly and can have a maximum of four digits.

All the [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)), and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) statements that are executed within these statements define the screen elements for the standalone selection screen. No further selection screens can be defined within the definition of a selection screen.

Addition 1

... TITLE title

Effect

The addition TITLE can be used to define a title for the title bar of a standalone selection screen. The title can either be a free name with a maximum of eight characters or the name of a text symbol from the program in the form text-idf, where idf is the three-character ID of the text symbol. If a name is chosen freely, the runtime environment generates a type c global variant of the same name and 70 characters in length. When the selection screen is displayed, the first 70 characters of the text symbol or global variants are displayed in the title bar. If the specified text symbol is not found, the name of the text symbol is displayed as the title in the form "TEXT-idf". If the addition TITLE is not specified, the system uses the title of the program defined in the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry").

Addition 2

... AS WINDOW

Effect

The addition AS WINDOW can be used to define a standalone selection screen displayed in a modal dialog box. The actual shape of the GUI window is not defined until it is accessed using [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\)). The addition AS WINDOW also displays [warnings](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") and [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") that occur during processing of a [selection screen event](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") as a modal dialog box.

Note

The specified dynpro number dynnr must not already be assigned to existing dynpros or selection screens. Also note that the number 1000 for the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") cannot be used for a standalone selection screen in an executable program.

Example

Defines and calls a selection screen as a modal dialog box.

SELECTION-SCREEN BEGIN OF SCREEN 500 TITLE title
                                     AS WINDOW.
PARAMETERS name TYPE sy-uname.
SELECTION-SCREEN END OF SCREEN 500.
title = 'Input name'.
CALL SELECTION-SCREEN '0500' STARTING AT 10 10.