  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

SELECTION-SCREEN, LINE

[Short Reference](javascript:call_link\('abapselection-screen_bol_shortref.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF LINE.
...
*\[*SELECTION-SCREEN POSITION *{*pos*|*POS\_LOW*|*POS\_HIGH*}* *\[* [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]**\]*.
...
SELECTION-SCREEN END OF LINE.

Effect

The first and last statements define a new line below the existing elements on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). All the screen elements within these statements that are defined using the statements [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) are placed in this line one after the other without spaces.

Multiple SELECTION-SCREEN POSITION statements can be specified within the definition of a line. The statement SELECTION-SCREEN POSITION can be used to define the output position for the following screen element. The position pos can either be specified directly as a number between 1 and 83 or using POS\_LOW or POS\_HIGH expressions. The expression POS\_LOW specifies the position in which the input field for a parameter or the first input field for a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") is displayed by default. POS\_HIGH specifies the position in which the second input field for a selection criterion is displayed by default. If a different position is specified in the statement defining the following element, this is respected. The statement SELECTION-SCREEN POSITION is only possible within the definition of a line. If there are conflicts with existing screen elements, the selection screen cannot be generated.

The additions [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

The following applies in the definition of a line:

-   Output fields are not created for selection texts for the parameters and selection criteria displayed in these kinds of lines. Instead, these can be created by specifying a [SELECTION-SCREEN COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\)).
-   Further lines cannot be defined using SELECTION-SCREEN BEGIN OF LINE.
-   It is not possible to define blocks or [tabstrip controls](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") using [SELECTION-SCREEN BEGIN OF *\[*TABBED*\]* BLOCK](javascript:call_link\('abapselection-screen_tabbed.htm'\)).
-   Within a line, only one selection criterion should be defined with [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) whose description can be specified in advance using [SELECTION-SCREEN COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\)). Other combinations, especially definitions of elements according to the selection criteria, can produce undefined behavior.
-   Backslashes (/) are not allowed in format specifications.
-   The position specification pos can be omitted in formatting specifications.

Hint

If a screen element is assigned a position greater than 83 or is positioned outside a [block](javascript:call_link\('abapselection-screen_block.htm'\)) with a frame, the selection screen is not generated. In the case of input and output fields that were positioned beforehand but have a length that extends beyond the end of the line, the visible length is shortened accordingly, and the content is displayed as scrollable in the visible length. In this case, pushbuttons and horizontal lines are cut off at position 83 or where the frame of the block ends.

Example

A pushbutton, an input field, and an output field in a line in the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") for an executable program.

SELECTION-SCREEN: BEGIN OF LINE,
                  PUSHBUTTON 2(10) push USER-COMMAND fcode,
                  POSITION 16.
PARAMETERS para TYPE c LENGTH 20.
SELECTION-SCREEN: COMMENT 40(40) text,
                  END OF LINE.
INITIALIZATION.
  push = 'Push'.
  text = '<--- Fill field, then push button!'.