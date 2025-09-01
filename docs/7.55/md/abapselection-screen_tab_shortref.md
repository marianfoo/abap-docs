---
title: "SELECTION-SCREEN TAB - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_tabbed.htm) Syntax SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode DEFAULT PROGRAM prog SCREEN dynnr MODIF ID modid FOR TABLENODE node ID id. Effect Defines
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_tab_shortref.htm"
abapFile: "abapselection-screen_tab_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "tab", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN TAB - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_tabbed.htm)

Syntax

SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode
                *\[*DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr*\]*
                *\[*MODIF ID modid*\]*
                *\[*FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]**\]*.

Effect

Defines a [tab title](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentab_title_glosry.htm "Glossary Entry") with the name tab, the length len, and the [function code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_code_glosry.htm "Glossary Entry") fcode in a [tabstrip](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentabstrip_control_glosry.htm "Glossary Entry") area.

Addition

-   DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr
    Assigns the tab title a [subscreen dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") dynnr in the program prog.

-   [MODIF ID modid](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_modif_id.htm)
    Assigns the screen element to the [modification group](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.
    

-   [FOR *{*TABLE*|*NODE*}* node](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_ldb_additions.htm)
    Assigns the screen element in a [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") to a node node of the associated structure.
    

-   [ID id](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselection-screen_ldb_additions.htm)
    Defines a maximum three-character ID id for the screen element in a logical database.