  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen.htm) → 

SELECTION-SCREEN - BEGIN OF

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_bos_shortref.htm)

Syntax Forms

[Selection screens as regular dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_normal.htm)
1\. SELECTION-SCREEN BEGIN OF SCREEN dynnr *\[*TITLE title*\]*
                                         *\[*AS WINDOW*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.
[Selection screens as subscreen dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_subscreen.htm)
2\. SELECTION-SCREEN BEGIN OF SCREEN dynnr AS SUBSCREEN
                                        *\[*NO INTERVALS*\]*
                                        *\[*NESTING LEVEL n*\]*.
  ...
  SELECTION-SCREEN END OF SCREEN dynnr.

Effect

These variants of the statement SELECTION-SCREEN create selection screens. Selection screens can be created as regular [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") or as [subscreen dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry").

The [standard selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_standard.htm) for executable programs is created automatically.

Continue
[SELECTION-SCREEN - SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_normal.htm)
[SELECTION-SCREEN - AS SUBSCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_subscreen.htm)
[SELECTION-SCREEN - Standard Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_standard.htm)