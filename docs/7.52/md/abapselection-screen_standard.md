  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - BEGIN OF](javascript:call_link\('abapselection-screen_definition.htm'\)) → 

SELECTION-SCREEN - Standard Selection Screens

Each [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") contains a standard selection screen with the [screen number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") 1000. The screen elements on the standard selection screen are defined by all [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)), and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) statements that are not within the definition of a stand-alone selection screen, in other words, that are not defined between the following statements:
SELECTION-SCREEN BEGIN OF SCREEN ...
...
SELECTION-SCREEN END OF SCREEN ...

If a standard selection screen comprises the screen for the executable program and the screen for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the screen elements for the executable program are listed below those for the logical database.

Function groups and [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry") do not have a standard selection screen. Here, you must place the three statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN within the definition of the stand-alone selection screen.

Note

It is advisable to group all the statements that define the standard selection screen and list them in the global declaration section together with the definitions of stand-alone selection screens.