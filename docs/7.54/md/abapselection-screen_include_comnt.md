  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)) → 

SELECTION-SCREEN INCLUDE COMMENT

[Quick Reference](javascript:call_link\('abapselection-screen_incl_shortref.htm'\))

Syntax

SELECTION-SCREEN INCLUDE COMMENT *\[*/*\]**\[*pos*\]*(len) text
                                 *\[*FOR FIELD sel*\]*
                                 *\[*MODIF ID modid*\]*
                                 *\[*ID id*\]*.

Effect

The addition COMMENT creates an output field on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). text expects a name already used in a previous selection screen to create an output field using the statement [SELECTION-SCREEN COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\)) . The name of a text symbol cannot be specified. The new output field represents the content of the global text variables already generated for the original selection screen.

The additions have the same meaning as in the statement SELECTION-SCREEN COMMENT. If FOR FIELD is not specified, the assignment of the original selection screen is applied.

The addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that the global variable text can be used by multiple selection screens at the same time.