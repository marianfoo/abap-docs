  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

SELECTION-SCREEN, BLOCK

[Short Reference](javascript:call_link\('abapselection-screen_bob_shortref.htm'\))

Syntax

SELECTION-SCREEN BEGIN OF BLOCK block
                                *\[*WITH FRAME *\[*TITLE title*\]**\]*
                                *\[*NO INTERVALS*\]*.
...
SELECTION-SCREEN END OF BLOCK block.

Additions:

[1\. ... WITH FRAME *\[*TITLE title*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... NO INTERVALS](#!ABAP_ADDITION_2@2@)

Effect

These statements define a block with the name block on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). The name block must be specified directly and it must contain a maximum of 20 characters.

All screen elements on the selection screen defined by the statements [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)), and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) between these statements are part of the block block. Additional blocks can be created within the definition of a block.

Hint

Each block is assigned a selection screen event [AT SELECTION-SCREEN ON BLOCK](javascript:call_link\('abapat_selection-screen.htm'\)), in which the user entries within the block can be processed together.

Addition 1

... WITH FRAME *\[*TITLE title*\]*

Effect

The addition WITH FRAME draws a frame around a block that is not empty. A maximum of five blocks can be nested. A standard width of 120 columns has been defined for the outer frame. The frame of each nested block has been shortened by 4 columns.

The addition TITLE can be specified to define a title for a block with a frame. The title can either be a free name with a maximum of eight characters or the name of a text symbol from the program in the form text-idf, where idf is the three-character ID of the text symbol. If a free name is chosen, the runtime environment generates a global variable of the same name, belonging to type c with a length of 70. When the selection screen is displayed, the content of the text symbol or the global variables is positioned at the top left corner of the frame. If the specified text symbol is not found, the system does not create a title.

Addition 2

... NO INTERVALS

Effect

If NO INTERVALS is specified, the addition NO INTERVALS is used implicitly in the statement SELECT-OPTIONS when all the [selection criteria](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") are defined for this block, and the block is narrowed accordingly. If the block has a frame, the blocks nested within it also inherit the addition NO INTERVALS.

Example

Groups radio buttons in a block with a frame and title on the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") for an executable program.

SELECTION-SCREEN BEGIN OF BLOCK rad1
                          WITH FRAME TITLE title.
PARAMETERS: r1 RADIOBUTTON GROUP gr1,
            r2 RADIOBUTTON GROUP gr1,
            r3 RADIOBUTTON GROUP gr1.
SELECTION-SCREEN END OF BLOCK rad1.
INITIALIZATION.
  title = 'Selection'.