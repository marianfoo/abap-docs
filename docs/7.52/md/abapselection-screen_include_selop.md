---
title: "SELECTION-SCREEN INCLUDE SELECT-OPTIONS"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_incl_shortref.htm) Syntax SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit OBLIGATORY OFF NO INTERVALS OFF NO-EXTENSION OFF MODIF ID modid ID i
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include_selop.htm"
abapFile: "abapselection-screen_include_selop.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "include", "selop"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN INCLUDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_include.htm) → 

SELECTION-SCREEN INCLUDE SELECT-OPTIONS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_incl_shortref.htm)

Syntax

SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit
                                        *\[*OBLIGATORY *\[*OFF*\]**\]*
                                        *\[*NO INTERVALS *\[*OFF*\]**\]*
                                        *\[*NO-EXTENSION *\[*OFF*\]**\]*
                                        *\[*MODIF ID modid*\]*
                                        *\[*ID id*\]*.

Effect

The addition SELECT-OPTIONS creates the screen elements for the [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit on the current [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry"). selcrit expects a selection criterion already declared using the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options.htm) on a previous selection screen. All the properties of the selection criterion are taken from the original selection screen.

The additions OBLIGATORY, NO INTERVALSNO-EXTENSION, and MODIF ID have the same meaning as in the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_screen.htm) and overwrite the corresponding properties taken from the original selection screen. If the selection criterion was declared using the additions OBLIGATORY or NO INTERVALS on the original selection screen, these properties can be deactivated on the current selection screen by specifying OFF.

The addition [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm) can only be used in a selection include for a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that the [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") selcrit can be filled with values from multiple selection screens at the same time.