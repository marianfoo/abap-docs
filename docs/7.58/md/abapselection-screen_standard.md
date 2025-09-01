  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, BEGIN OF](javascript:call_link\('abapselection-screen_definition.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20Standard%20Selection%20Screens%2C%20ABAPSELECTION-SCREEN_STANDARD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

SELECTION-SCREEN, Standard Selection Screens

Each [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") contains a standard selection screen with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") 1000. The screen elements on the standard selection screen are defined by all [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)), and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) statements that are not within the definition of a standalone selection screen, in other words, that are not defined between the following statements:

SELECTION-SCREEN BEGIN OF SCREEN ...
...
SELECTION-SCREEN END OF SCREEN ...

In cases where a standard selection screen combines the screen of the executable program and the screen of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the screen elements of the executable program are arranged below the elements of the logical database.

Function pools and [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry") do not have a standard selection screen. Here, the three statements PARAMETERS, SELECT-OPTIONS, and SELECTION-SCREEN must be within the definition of the standalone selection screen.

Hint

It is advisable to group all the statements that define the standard selection screen and list them in the global declaration part together with the definitions of standalone selection screens.