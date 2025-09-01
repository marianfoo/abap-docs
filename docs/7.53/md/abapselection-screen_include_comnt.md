  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_include.htm) → 

SELECTION-SCREEN INCLUDE COMMENT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE COMMENT *\[*/*\]**\[*pos*\]*(len) text
                                 *\[*FOR FIELD sel*\]*
                                 *\[*MODIF ID modid*\]*
                                 *\[*ID id*\]*.

Effect

The addition COMMENT creates an output field on the current [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry"). text expects a name already used in a previous selection screen to create an output field using the statement [SELECTION-SCREEN COMMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_comment.htm) . The name of a text symbol cannot be specified. The new output field represents the content of the global text variables already generated for the original selection screen.

The additions have the same meaning as in the statement SELECTION-SCREEN COMMENT. If FOR FIELD is not specified, the assignment of the original selection screen is applied.

The addition [ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that the global variable text can be used by multiple selection screens at the same time.