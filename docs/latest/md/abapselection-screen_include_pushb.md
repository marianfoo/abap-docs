---
title: "SELECTION-SCREEN INCLUDE PUSHBUTTON"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_incl_shortref.htm) Syntax SELECTION-SCREEN INCLUDE PUSHBUTTON /pos(len) button_text USER-COMMAND fcode MODIF ID modid ID id. Effect The addition PUSHBUTTON
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_include_pushb.htm"
abapFile: "abapselection-screen_include_pushb.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "include", "pushb"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_include.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20INCLUDE%20PUSHBUTTON%2C%20ABAPSELECTION-SCREEN_INCLUDE_PUSHB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

SELECTION-SCREEN INCLUDE PUSHBUTTON

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                                    *\[*USER-COMMAND fcode*\]*
                                    *\[*MODIF ID modid*\]*
                                    *\[*ID id*\]*.

Effect

The addition PUSHBUTTON is used to create a [pushbutton](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpushbutton_glosry.htm "Glossary Entry") on the current [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry"). button\_text expects a name already used to create a pushbutton using the statement [SELECTION-SCREEN PUSHBUTTON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_pushbutton.htm) on a previous selection screen. The name of a text symbol cannot be specified. The content of the global variable button\_text that was generated for the original selection screen is used as the text for the new pushbutton.

The additions have the same meaning as in the statement SELECTION-SCREEN PUSHBUTTON. If USER-COMMAND is not specified, the function code from the original selection screen is applied.

The addition [ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Hint

The addition INCLUDE in this variant ensures that the global variable button\_text can be used by multiple selection screens at the same time.