---
title: "SELECTION-SCREEN - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) Syntax SELECTION-SCREEN    COMMENT /posPOS_LOWPOS_HIGH(len)  text  text FOR FIELD sel  VISIBLE LENGTH vlen MODIF ID modid
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_shortref.htm"
abapFile: "abapselection-screen_shortref.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

SELECTION-SCREEN - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm)

Syntax

SELECTION-SCREEN  *{* *{* COMMENT *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                      *{* text *|* *{**\[*text*\]* FOR FIELD sel*}* *}*
                      *\[*VISIBLE LENGTH vlen*\]*
                      *\[*MODIF ID modid*\]* *}*
                  *|* *{* FUNCTION KEY n *}*
                  *|* *{* POSITION *{*pos*|*POS\_LOW*|*POS\_HIGH*}* *}*
                  *|* *{* PUSHBUTTON *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                      button\_text USER-COMMAND fcode
                      *\[*VISIBLE LENGTH vlen*\]*
                      *\[*MODIF ID modid*\]* *}*
                  *|* *{* SKIP *\[*n*\]* *}*
                  *|* *{* ULINE *\[**\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)*\]*
                      *\[*MODIF ID modid*\]* *}* *}*
                  *\[*FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]**\]*.

Effect

Creates basic screen elements on the current [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry").

Additions

-   [COMMENT text *|* *{**\[*text*\]* FOR FIELD sel*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_comment.htm)
    Creates an output field with the text text that can be assigned to a parameter or a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") sel.
    
-   [FUNCTION KEY n](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_functionkey.htm)
    Activates one of the predefined pushbuttons with the [function codes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_code_glosry.htm "Glossary Entry") "FC01" to "FC05" in the [application toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_toolbar_glosry.htm "Glossary Entry").
    
-   [POSITION *{*pos*|*POS\_LOW*|*POS\_HIGH*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_line.htm)
    Positions the following screen element within a line.
    
-   [PUSHBUTTON button\_text USER-COMMAND fcode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_pushbutton.htm)
    Creates a pushbutton with the text button\_text and the function code fcode.
    
-   [SKIP *\[*n*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_skip.htm)
    Creates one or n blank lines.
    
-   [ULINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_uline.htm)
    Creates a horizontal line.
    
-   [*\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_uline.htm)
    Specifies the position of the screen element.
    
-   VISIBLE LENGTH vlen
    Defines the visible length of the screen element as vlen.
    
-   [MODIF ID modid](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_modif_id.htm)
    Assigns the screen element to the [modifiation group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.
    
-   [FOR *{*TABLE*|*NODE*}* node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_additions.htm)
    Obsolete: Assigns the screen element in a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") to a node node of the associated structure.
    
-   [ID id](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_additions.htm)
    Obsolete: Defines a maximal three-figure identification ID for the screen element in a logical database.