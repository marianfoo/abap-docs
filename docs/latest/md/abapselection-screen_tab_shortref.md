---
title: "SELECTION-SCREEN TAB - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_tabbed.htm) Syntax SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode DEFAULT PROGRAM prog SCREEN dynnr MODIF ID modid FOR TABLENODE node ID id. Effect Def
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_tab_shortref.htm"
abapFile: "abapselection-screen_tab_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "tab", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20TAB%2C%20ABAPSELECTION-SCREEN_TAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN TAB - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_tabbed.htm)

Syntax

SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode
                *\[*DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr*\]*
                *\[*MODIF ID modid*\]*
                *\[*FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]**\]*.

Effect

Defines a [tab title](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentab_title_glosry.htm "Glossary Entry") with the name tab, the length len, and the [function code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_code_glosry.htm "Glossary Entry") fcode in a [tabstrip](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentabstrip_control_glosry.htm "Glossary Entry") area.

Addition  

-   DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr
    Assigns the tab title a [subscreen dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") dynnr in the program prog.
-   [MODIF ID modid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_modif_id.htm)
    Assigns the screen element to the [modification group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.
-   [FOR *{*TABLE*|*NODE*}* node](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm)
    Assigns the screen element in a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") to a node node of the associated structure.
-   [ID id](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm)
    Defines a maximum three-character ID id for the screen element in a logical database.