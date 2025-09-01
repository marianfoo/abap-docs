  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)) → 

SELECTION-SCREEN INCLUDE SELECT-OPTIONS

[Short Reference](javascript:call_link\('abapselection-screen_incl_shortref.htm'\))

Syntax

SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit
                                        *\[*OBLIGATORY *\[*OFF*\]**\]*
                                        *\[*NO INTERVALS *\[*OFF*\]**\]*
                                        *\[*NO-EXTENSION *\[*OFF*\]**\]*
                                        *\[*MODIF ID modid*\]*
                                        *\[*ID id*\]*.

Effect

The addition SELECT-OPTIONS creates the screen elements for the [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). selcrit expects a selection criterion already declared using the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) on a previous selection screen. All the properties of the selection criterion are taken from the original selection screen.

The additions OBLIGATORY, NO INTERVALSNO-EXTENSION, and MODIF ID have the same meaning as in the statement [SELECT-OPTIONS](javascript:call_link\('abapselect-options_screen.htm'\)) and overwrite the corresponding properties taken from the original selection screen. If the selection criterion was declared using the additions OBLIGATORY or NO INTERVALS on the original selection screen, these properties can be deactivated on the current selection screen by specifying OFF.

The addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") selcrit can be filled with values from multiple selection screens at the same time.