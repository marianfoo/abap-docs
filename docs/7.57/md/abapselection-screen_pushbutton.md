  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_layout.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, PUSHBUTTON, ABAPSELECTION-SCREEN_PUSHBUTTON, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, PUSHBUTTON

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm)

Syntax

SELECTION-SCREEN PUSHBUTTON *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len) button\_text
                            USER-COMMAND fcode
                            *\[*VISIBLE LENGTH vlen*\]*
                            *\[* [MODIF ID modid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm)*\]*
*\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm)*\]*.

Additions:

[1\. ... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](#!ABAP_ADDITION_1@1@)
[2\. ... USER-COMMAND fcode](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)

Effect

This statement creates a [pushbutton](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpushbutton_glosry.htm "Glossary Entry") on the current [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The text on the pushbutton is determined by the content of button\_text. The rules that apply to text in the addition [COMMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm) also apply to button\_text. The addition [MODIF ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm) assigns the pushbutton to the [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.

The [ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Hints

-   The function module ICON\_CREATE can be used to assign an icon, a [tooltip](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentool_tip_glosry.htm "Glossary Entry"), and a text to a pushbutton. The length len of a pushbutton for the internal display of the icon must be set to a sufficient length and the visible length must be modified using VISIBLE LENGTH.
-   Once the event block in AT SELECTION-SCREEN has been processed, the system usually returns to displaying the selection screen. To exit [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") and continue executing the program, either Execute or Cancel must be chosen. This means pushbuttons on selection screens are intended primarily for use for dynamic modifications to the selection screen rather than to control the program.

Addition 1   

... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)

Effect

The position of the pushbutton must be specified using this addition. The syntax and meaning are the same as when creating [horizontal lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_uline.htm), although in this case len defines the length of the pushbutton in the dynpro of the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry"). If a pushbutton extends beyond position 83 or a [block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_block.htm) with a frame, it is truncated on the right.

Addition 2   

... USER-COMMAND fcode

Effect

If the addition USER-COMMAND is specified, the pushbutton must be assigned a function code fcode. The function code fcode must be specified directly and can only contain a maximum of 20 characters.

To enable the pushbutton, the statement [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) must be used to declare an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") of the structure SSCRFIELDS from the ABAP Dictionary.

If the user selects the pushbutton on the selection screen, the runtime framework raises the event [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm) and the function code fcode is passed to the component ucomm in the interface work area sscrfields.

Hints

-   If the function code of a pushbutton corresponds to a function code used in the GUI status of the selection screen, the [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") is affected accordingly.
-   It is not recommended that the system field sy-ucomm is evaluated instead of sscrfields-ucomm, since this does not guarantee that sy-ucomm is always given the correct value in [selection screen processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Addition 3   

... VISIBLE LENGTH vlen

Effect

The addition VISIBLE LENGTH defines the visible length vlen of the pushbutton and its text. The syntax and meaning of this addition are the same as when creating [output fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm), although a pushbutton is never displayed shorter than the text defined for it.

Example

Defines and accesses a [standalone selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstand-alone_sel_screen_glosry.htm "Glossary Entry") 500 with two pushbuttons in an executable program. An icon and a tooltip are created for the second pushbutton.

TABLES sscrfields.
SELECTION-SCREEN:
  BEGIN OF SCREEN 500 AS WINDOW TITLE title,
    PUSHBUTTON 2(10)  but1 USER-COMMAND cli1,
    PUSHBUTTON 12(30) but2 USER-COMMAND cli2
                           VISIBLE LENGTH 10,
  END OF SCREEN 500.
AT SELECTION-SCREEN.
  CASE sscrfields.
    WHEN 'CLI1'.
      ...
    WHEN 'CLI2'.
      ...
  ENDCASE.
START-OF-SELECTION.
  title  = 'Push button'.
  but1 = 'Button 1'.
  CALL FUNCTION 'ICON\_CREATE'
    EXPORTING
      name   = icon\_information
      text   = 'Button 2'
      info   = 'My quick info'
    IMPORTING
      RESULT = but2
    EXCEPTIONS
      OTHERS = 0.
  CALL SELECTION-SCREEN '0500' STARTING AT 10 10.

Continue
![Example](exa.gif "Example") [Selection Screens - Pushbuttons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensel_screen_button_abexa.htm)