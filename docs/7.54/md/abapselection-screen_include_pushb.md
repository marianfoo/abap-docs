  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include.htm) → 

SELECTION-SCREEN INCLUDE PUSHBUTTON

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                                    *\[*USER-COMMAND fcode*\]*
                                    *\[*MODIF ID modid*\]*
                                    *\[*ID id*\]*.

Effect

The addition PUSHBUTTON creates a [pushbutton](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpushbutton_glosry.htm "Glossary Entry") on the current [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry"). button\_text expects a name already used to create a pushbutton using the statement [SELECTION-SCREEN PUSHBUTTON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_pushbutton.htm) on a previous selection screen. The name of a text symbol cannot be specified. The content of the global variable button\_text that was generated for the original selection screen is used as the text for the new pushbutton.

The additions have the same meaning as in the statement SELECTION-SCREEN PUSHBUTTON. If USER-COMMAND is not specified, the function code from the original selection screen is applied.

The addition [ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that the global variable button\_text can be used by multiple selection screens at the same time.