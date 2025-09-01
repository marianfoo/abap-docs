---
title: "SELECTION-SCREEN, COMMENT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm) Syntax SELECTION-SCREEN COMMENT /posPOS_LOWPOS_HIGH(len) texttext FOR FIELD sel VISIBLE LENGTH vlen  MODIF ID modid(https://hel
version: "7.57"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm"
abapFile: "abapselection-screen_comment.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "abapselection", "screen", "comment"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_layout.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, COMMENT, ABAPSELECTION-SCREEN_COMMENT, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, COMMENT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm)

Syntax

SELECTION-SCREEN COMMENT *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                         *{*text*|**{**\[*text*\]* FOR FIELD sel*}**}*
                         *\[*VISIBLE LENGTH vlen*\]*
*\[* [MODIF ID modid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm)*\]*
*\[*[ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm)*\]*.

Additions:

[1\. ... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](#!ABAP_ADDITION_1@1@)
[2\. ... FOR FIELD sel](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)

Effect

This statement creates an output field on the current [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") and produces the content of text as output in this field. text expects either the name of a text symbol of the program that can be specified in the form text-idf, where idf is the three-character ID for the text symbol, or a freely definable name with a maximum of eight characters. If a user-defined name is entered, the runtime framework generates an identically named global variable with type c and length 83. If the specified text symbol is not found, no text is produced as output field. The [MODIF ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_modif_id.htm) addition assigns the output field to the [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry") modid.

The [ldb\_additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_additions.htm) can only be used in the selection include of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Addition 1   

... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)

Effect

The position of the output field must be specified with this addition. The syntax and the meaning are the same as when creating [horizontal lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_uline.htm). In this case, len defines the length of the output field in the [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") of the selection screen. If an output field extends beyond position 83 or a [block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_block.htm) with a frame, the visible length is shortened accordingly and the content is displayed in the visible length.

Addition 2   

... FOR FIELD sel

Effect

If the addition FOR FIELD is used, the output field is linked with a parameter or sel [selection criterion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_criterion_glosry.htm "Glossary Entry") of the same program defined using [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm) or [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm). The name sel must be specified directly. When this link is made, the field help or input help for sel is displayed when the user selects the output field using the function keys F1 and F4. It also means that the output field is assigned to the same [modification group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodification_group_glosry.htm "Glossary Entry"). The output field is also hidden if sel is made invisible using a [selection screen variant](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvariant_glosry.htm "Glossary Entry"). If FOR FIELD is specified, text does not have to be specified. The output field is then filled either with the specified name sel, or, if it exists in the current [text pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_pool_glosry.htm "Glossary Entry"), with the corresponding selection text.

Hints

-   The addition FOR FIELD causes the output field output field to behave in exactly the same way as the output fields generated automatically by PARAMETERS or SELECT-OPTIONS in response to parameters or selection criteria. Automatically generated fields are not displayed in a line if multiple elements are included in the output and can thus be replaced by associated user-defined output fields.
-   The FOR FIELD addition is also important for creating accessible selection screens, since it assigns an accessible descriptor to an input field.

Addition 3   

... VISIBLE LENGTH vlen

Effect

The addition VISIBLE LENGTH defines the visible length vlen of the output field. vlen must be specified directly as a positive integer. If vlen is greater than len, the visible length is set to len. If vlen is less than len, the output field is displayed in the length of vlen with movable content and a [tooltip](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentool_tip_glosry.htm "Glossary Entry") of the whole content.

Example

Output fields, horizontal lines, and empty lines on the [standard selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") of an executable program. The first output field is highlighted in the display.

SELECTION-SCREEN COMMENT /1(50) comm1 MODIF ID mg1.
SELECTION-SCREEN ULINE.
SELECTION-SCREEN SKIP.
SELECTION-SCREEN COMMENT /1(30) comm2.
SELECTION-SCREEN ULINE /1(50).
PARAMETERS: r1 RADIOBUTTON GROUP rad1,
            r2 RADIOBUTTON GROUP rad1,
            r3 RADIOBUTTON GROUP rad1.
SELECTION-SCREEN ULINE /1(50).
AT SELECTION-SCREEN OUTPUT.
  comm1 = 'Selection Screen'.
  comm2 = 'Select one'.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MG1'.
       screen\_wa-intensified = '1'.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.