  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_layout.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20BLOCK%2C%20ABAPSELECTION-SCREEN_BLOCK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, BLOCK

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_bob_shortref.htm)

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

These statements define a block with the name block on the current [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The name block must be specified directly and it must contain a maximum of 20 characters.

All screen elements on the selection screen defined by the statements [PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapparameters.htm), [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options.htm), and [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) between these statements are part of the block block. Additional blocks can be created within the definition of a block.

Hint

Each block is assigned a selection screen event [AT SELECTION-SCREEN ON BLOCK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen.htm), in which the user entries within the block can be processed together.

Addition 1   

... WITH FRAME *\[*TITLE title*\]*

Effect

The addition WITH FRAME draws a frame around a block that is not empty. A maximum of five blocks can be nested. A standard width of 120 columns is defined for the outer frame. The frame of each nested block is narrower by 4 columns.

The addition TITLE can be specified to define a title for a block with a frame. The title can either be a freely definable name with a maximum of eight characters or the name of a text symbol from the program in the form text-idf, where idf is the three-character ID of the text symbol. If a freely definable name is chosen, the runtime framework generates a global variable of the same name of type c with a length of 70. When the selection screen is displayed, the content of the text symbol or the global variable is positioned at the top left corner of the frame. If the specified text symbol is not found, the system does not create a title.

Addition 2   

... NO INTERVALS

Effect

If NO INTERVALS is specified, the addition NO INTERVALS is used implicitly in the statement SELECT-OPTIONS when all the [selection criteria](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_criterion_glosry.htm "Glossary Entry") are defined for this block, and the block is narrowed accordingly. If the block has a frame, the blocks nested within it also inherit the addition NO INTERVALS.

Example

Grouping of radio buttons into a block with a frame and title on the [standard selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") for an executable program.

SELECTION-SCREEN BEGIN OF BLOCK rad1
                          WITH FRAME TITLE title.
PARAMETERS: r1 RADIOBUTTON GROUP gr1,
            r2 RADIOBUTTON GROUP gr1,
            r3 RADIOBUTTON GROUP gr1.
SELECTION-SCREEN END OF BLOCK rad1.
INITIALIZATION.
  title = 'Selection'.