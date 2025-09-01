  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20INCLUDE%20PARAMETERS%2C%20ABAPSELECTION-SCREEN_INCLUDE_PARAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

SELECTION-SCREEN INCLUDE PARAMETERS

[Short Reference](javascript:call_link\('abapselection-screen_incl_shortref.htm'\))

Syntax

SELECTION-SCREEN INCLUDE PARAMETERS para
                                    *\[*OBLIGATORY *\[*OFF*\]**\]*
                                    *\[*MODIF ID modid*\]*
                                    *\[*ID id*\]*.

Effect

The addition PARAMETERS is used to create the screen elements for the selection parameter para on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). para expects a selection parameter that was already declared using the statement [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) in a previous selection screen. All properties of the selection parameter are taken from the original selection screen.

The additions OBLIGATORY and MODIF ID have the same meaning as in the statement PARAMETERS and overwrite the corresponding properties taken from the original selection screen. If the selection parameter on the original selection screen is declared using the addition OBLIGATORY, this property can be deactivated on the current selection screen by specifying OFF.

The addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the global variant para can be filled with values by multiple selection screens at the same time.