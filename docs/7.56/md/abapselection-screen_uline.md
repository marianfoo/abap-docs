---
title: "SELECTION-SCREEN, ULINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_shortref.htm) Syntax SELECTION-SCREEN ULINE /posPOS_LOWPOS_HIGH(len) MODIF ID modid(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_uline.htm"
abapFile: "abapselection-screen_uline.htm"
keywords: ["select", "do", "if", "try", "data", "abapselection", "screen", "uline"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_layout.htm) → 

SELECTION-SCREEN, ULINE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_shortref.htm)

Syntax

SELECTION-SCREEN ULINE *\[**\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)*\]*
                       *\[*[MODIF ID modid](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_modif_id.htm)*\]*
*\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_additions.htm)*\]*.

Addition:

[... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](#!ABAP_ONE_ADD@1@)

Effect

This statement creates a horizontal line on the current [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry"). If the formatting specification *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len) is not made, the system creates a new line across the width of the selection screen below the lines already filled. The maximum length of this line is 83. The [MODIF ID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_modif_id.htm) addition assigns the line to the [modification group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.

The [ldb\_additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Addition   

... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)

Effect

This formatting specification is used to position the line on the selection screen. len specifies the length of the line. The other information describes the column from which the line is drawn (starting point of line). Only if multiple elements are specified in a line can this position be omitted and the line drawn starting from the current position. If a forward slash symbol (/) is specified, a length must be specified and the line is drawn in a new line, otherwise, it is drawn in the current line. If multiple elements are specified in a line, the slash character (/) cannot be specified. If there are conflicts with existing screen elements, the selection screen cannot be generated.

The length len must be specified directly as a positive number with a maximum of two digits. If a line is too long, it is truncated outside [blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_block.htm) with frames at position 83 and at the right margin of the block inside a block with a frame. The position can be either a number pos between 1 and 83, POS\_LOW, or POS\_HIGH. POS\_LOW specifies the position where the input field for a parameter or the first input field for a [selection criterion](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_criterion_glosry.htm "Glossary Entry") is displayed. POS\_HIGH specifies the position at which the second input field for a selection criterion is displayed. If the statement is part of a block with a frame, a number specified for pos is interpreted with respect to the frame.