  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_include.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20INCLUDE%20SELECT-OPTIONS%2C%20ABAPSELECTION-SCREEN_INCLUDE_SELOP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

SELECTION-SCREEN INCLUDE SELECT-OPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit
                                        *\[*OBLIGATORY *\[*OFF*\]**\]*
                                        *\[*NO INTERVALS *\[*OFF*\]**\]*
                                        *\[*NO-EXTENSION *\[*OFF*\]**\]*
                                        *\[*MODIF ID modid*\]*
                                        *\[*ID id*\]*.

Effect

The addition SELECT-OPTIONS is used to create the screen elements for the [selection criterion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit on the current [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry"). selcrit expects a selection criterion that was already declared using the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options.htm) on a previous selection screen. All properties of the selection criterion are taken from the original selection screen.

The additions OBLIGATORY, NO INTERVALSNO-EXTENSION, and MODIF ID have the same meaning as in the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_screen.htm) and overwrite the corresponding properties taken from the original selection screen. If the selection criterion was declared using the additions OBLIGATORY or NO INTERVALS on the original selection screen, these properties can be deactivated on the current selection screen by specifying OFF.

The addition [ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the [selection table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit can be filled with values from multiple selection screens at the same time.