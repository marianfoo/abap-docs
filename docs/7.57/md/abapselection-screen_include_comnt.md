  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_include.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN INCLUDE COMMENT, ABAPSELECTION-SCREEN_INCLUDE_COMNT, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN INCLUDE COMMENT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE COMMENT *\[*/*\]**\[*pos*\]*(len) text
                                 *\[*FOR FIELD sel*\]*
                                 *\[*MODIF ID modid*\]*
                                 *\[*ID id*\]*.

Effect

The addition COMMENT is used to create an output field on the current [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). text expects a name that was already used in a previous selection screen to create an output field using the statement [SELECTION-SCREEN COMMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm). The name of a text symbol cannot be specified. The new output field represents the content of the global text variable that was already generated for the original selection screen.

The additions have the same meaning as in the statement SELECTION-SCREEN COMMENT. If FOR FIELD is not specified, the assignment of the original selection screen is applied.

The addition [ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the global variable text can be used by multiple selection screens at the same time.