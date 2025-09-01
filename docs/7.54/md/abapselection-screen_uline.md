  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN - screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

SELECTION-SCREEN - ULINE

[Quick Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

SELECTION-SCREEN ULINE *\[**\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)*\]*
                       *\[*[MODIF IDmodid](javascript:call_link\('abapselection-screen_modif_id.htm'\))*\]*
                       *\[*[ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]*.

Addition:

[... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](#!ABAP_ONE_ADD@1@)

Effect

This statement creates a horizontal line on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). If *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len) is not specified, the system creates a new line across the width of the selection screen beneath the lines already filled. The maximum length of this line is 83. The [MODIF ID](javascript:call_link\('abapselection-screen_modif_id.htm'\)) addition assigns the line to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.

The additions [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Addition

... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)

Effect

If specified, this formatting is used to position the line on the selection screen. len specifies the length of the line. The other information describes the column from which the line is drawn (starting point of line). Only if multiple elements are specified in a line can this position not be specified and the line drawn starting from the current position. If a forward slash symbol (/) is specified, a length must be specified and the line is drawn in a new line; otherwise, it is drawn in the current line. If multiple elements are specified in a line, the slash character (/) can be skipped. If there are conflicts with existing screen elements, the selection screen cannot be generated.

The length len must be specified directly as a positive number with a maximum of two digits. If a line is too long, it is truncated outside [blocks](javascript:call_link\('abapselection-screen_block.htm'\)) with frames at position 83 and at the right margin of the block inside a block with a frame. The position can be either a number pos between 1 and 83, POS\_LOW, or POS\_HIGH. POS\_LOW specifies the position where the input field for a parameter or the first input field for a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") is displayed. POS\_HIGH specifies the position where the second input field for a selection criterion is displayed. If the statement is part of a block with a frame, a number specified for pos is interpreted with respect to the frame.