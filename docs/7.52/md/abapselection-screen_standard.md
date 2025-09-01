---
title: "SELECTION-SCREEN - Standard Selection Screens"
description: |
  Each executable program(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm 'Glossary Entry') contains a standard selection screen with the screen number(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_number_glosry.htm 'Glossary Ent
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_standard.htm"
abapFile: "abapselection-screen_standard.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "standard"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN - BEGIN OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_definition.htm) → 

SELECTION-SCREEN - Standard Selection Screens

Each [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") contains a standard selection screen with the [screen number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_number_glosry.htm "Glossary Entry") 1000. The screen elements on the standard selection screen are defined by all [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm), [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm), and [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) statements that are not within the definition of a stand-alone selection screen, in other words, that are not defined between the following statements:
SELECTION-SCREEN BEGIN OF SCREEN ...
...
SELECTION-SCREEN END OF SCREEN ...

If a standard selection screen comprises the screen for the executable program and the screen for a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the screen elements for the executable program are listed below those for the logical database.

Function groups and [module pools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodul_pool_glosry.htm "Glossary Entry") do not have a standard selection screen. Here, you must place the three statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN within the definition of the stand-alone selection screen.

Note

It is advisable to group all the statements that define the standard selection screen and list them in the global declaration section together with the definitions of stand-alone selection screens.