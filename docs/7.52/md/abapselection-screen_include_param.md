  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include.htm) → 

SELECTION-SCREEN INCLUDE PARAMETERS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE PARAMETERS para
                                    *\[*OBLIGATORY *\[*OFF*\]**\]*
                                    *\[*MODIF ID modid*\]*
                                    *\[*ID id*\]*.

Effect

The addition PARAMETERS creates the screen elements for the parameter para on the current [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry"). para expects a parameter already declared using the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm) previous selection screen. All the properties of the parameter are taken from the original selection screen.

The additions OBLIGATORY and MODIF ID have the same meaning as in the statement PARAMETERS and overwrite the corresponding properties taken from the original selection screen. If the parameter on the original selection screen is declared using the addition OBLIGATORY, this property can be deactivated on the current selection screen by specifying OFF.

The addition [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that the global variant para can be filled with values by multiple selection screens at the same time.