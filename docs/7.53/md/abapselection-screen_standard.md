  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN - BEGIN OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_definition.htm) → 

SELECTION-SCREEN - Standard Selection Screens

Each [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") contains a standard selection screen with the [dynpro number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") 1000. The screen elements on the standard selection screen are defined by all [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm), [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm), and [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) statements that are not within the definition of a standalone selection screen, in other words, that are not defined between the following statements:
SELECTION-SCREEN BEGIN OF SCREEN ...
...
SELECTION-SCREEN END OF SCREEN ...

In cases where a standard selection screen is built from the screen of the executable program or from the screen of a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the screen elements of the executable program are arranged below the elements of the logical database.

Function groups and [module pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodul_pool_glosry.htm "Glossary Entry") do not have a standard selection screen. Here, the three statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN must be placed within the definition of the standalone selection screen.

Note

It is advisable to group all the statements that define the standard selection screen and list them in the global declaration part together with the definitions of standalone selection screens.