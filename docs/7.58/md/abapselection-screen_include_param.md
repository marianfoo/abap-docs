  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_include.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20INCLUDE%20PARAMETERS%2C%20ABAPSELECTION-SCREEN_INCLUDE_PARAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

SELECTION-SCREEN INCLUDE PARAMETERS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE PARAMETERS para
                                    *\[*OBLIGATORY *\[*OFF*\]**\]*
                                    *\[*MODIF ID modid*\]*
                                    *\[*ID id*\]*.

Effect

The addition PARAMETERS is used to create the screen elements for the selection parameter para on the current [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry"). para expects a selection parameter that was already declared using the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapparameters.htm) in a previous selection screen. All properties of the selection parameter are taken from the original selection screen.

The additions OBLIGATORY and MODIF ID have the same meaning as in the statement PARAMETERS and overwrite the corresponding properties taken from the original selection screen. If the selection parameter on the original selection screen is declared using the addition OBLIGATORY, this property can be deactivated on the current selection screen by specifying OFF.

The addition [ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the global variant para can be filled with values by multiple selection screens at the same time.