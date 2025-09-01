  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN - BEGIN OF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_definition.htm)

Syntax

SELECTION-SCREEN BEGIN OF SCREEN dynnr *{* *{* *\[*TITLE title*\]*
                                           *\[*AS WINDOW*\]* *}*
                                       *|* *{* AS SUBSCREEN
                                           *\[*NO INTERVALS*\]*
                                           *\[*NESTING LEVEL n*\]* *}* *}*.
...
SELECTION-SCREEN END OF SCREEN dynnr.

Effect

Defines a standalone [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_number_glosry.htm "Glossary Entry") dynnr. The elements of the selection screen are defined between the two statements. Any selection screen elements declared outside of these statements are part of the standard selection screen with the dynpro number 1000.

Additions

-   [TITLE title](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_normal.htm)
    Specifies a title title in the title bar.
    
-   [AS WINDOW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_normal.htm)
    Defines a selection screen for a modal dialog window.
    
-   [AS SUBSCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_subscreen.htm)
    Defines a selection screen as a [subscreen dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry").
    
-   [NO INTERVALS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_subscreen.htm)
    Sets the addition NO INTERVALS for all selection criteria of the selection screen.
    
-   [NESTING LEVEL n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_subscreen.htm)
    Adjusts the width of the [subscreens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubscreen_glosry.htm "Glossary Entry") within [tabstrips](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentabstrip_control_glosry.htm "Glossary Entry").