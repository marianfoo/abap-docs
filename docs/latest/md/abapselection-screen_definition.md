  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20BEGIN%20OF%2C%20ABAPSELECTION-SCREEN_DEFINITION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, BEGIN OF

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_bos_shortref.htm)

Syntax Forms

[Selection Screens as Regular Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_normal.htm)

1\. SELECTION-SCREEN BEGIN OF SCREEN dynnr *\[*TITLE title*\]*
                                         *\[*AS WINDOW*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.

[Selection Screens as Subscreen Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_subscreen.htm)

2\. SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN
                                        *\[*NO INTERVALS*\]*
                                        *\[*NESTING LEVEL n*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.

Effect

These variants of the statement SELECTION-SCREEN create selection screens. Selection screens can be created as regular [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") or as [subscreen dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry").

The [standard selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_standard.htm) for executable programs is created automatically.

Continue
[SELECTION-SCREEN, SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_normal.htm)
[SELECTION-SCREEN, AS SUBSCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_subscreen.htm)
[SELECTION-SCREEN, Standard Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_standard.htm)