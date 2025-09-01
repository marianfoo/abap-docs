  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN - screen\_elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_layout.htm) → 

SELECTION-SCREEN - SKIP

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_shortref.htm)

Syntax

SELECTION-SCREEN SKIP *\[*n*\]* *\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_additions.htm)*\]*.

Effect

This statement creates n blank lines on the current [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") among the lines already filled. The value n must be specified directly as a single-digit positive number. If n is not specified, a single blank line is created.

The additions [ldb\_additions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").