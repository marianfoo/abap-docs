  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN, screen\_elements](javascript:call_link\('abapselection-screen_layout.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%2C%20COMMENT%2C%20ABAPSELECTION-SCREEN_COMMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN, COMMENT

[Short Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Syntax

SELECTION-SCREEN COMMENT *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)
                         *{*text*|**{**\[*text*\]* FOR FIELD sel*}**}*
                         *\[*VISIBLE LENGTH vlen*\]*
*\[* [MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))*\]*
*\[*[ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))*\]*.

Additions:

[1\. ... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)](#!ABAP_ADDITION_1@1@)
[2\. ... FOR FIELD sel](#!ABAP_ADDITION_2@2@)
[3\. ... VISIBLE LENGTH vlen](#!ABAP_ADDITION_3@3@)

Effect

This statement creates an output field on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and produces the content of text as output in this field. text expects either the name of a text symbol of the program that can be specified in the form text-idf, where idf is the three-character ID for the text symbol, or a freely definable name with a maximum of eight characters. If a user-defined name is entered, the runtime framework generates an identically named global variable with type c and length 83. If the specified text symbol is not found, no text is produced as output field. The [MODIF ID](javascript:call_link\('abapselection-screen_modif_id.htm'\)) addition assigns the output field to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.

The [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Addition 1   

... *\[*/*\]**\[*pos*|*POS\_LOW*|*POS\_HIGH*\]*(len)

Effect

The position of the output field must be specified with this addition. The syntax and the meaning are the same as when creating [horizontal lines](javascript:call_link\('abapselection-screen_uline.htm'\)). In this case, len defines the length of the output field in the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the selection screen. If an output field extends beyond position 83 or a [block](javascript:call_link\('abapselection-screen_block.htm'\)) with a frame, the visible length is shortened accordingly and the content is displayed in the visible length.

Addition 2   

... FOR FIELD sel

Effect

If the addition FOR FIELD is used, the output field is linked with a [selection parameter](javascript:call_link\('abenselpar_glosry.htm'\) "Glossary Entry") or [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") sel of the same program defined using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) or [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)). The name sel must be specified directly. When this link is made, the field help or input help for sel is displayed when the user selects the output field using the function keys F1 and F4. It also means that the output field is assigned to the same [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry"). The output field is also hidden if sel is made invisible using a [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry"). If FOR FIELD is specified, text does not have to be specified. The output field is then filled either with the specified name sel, or, if it exists in the current [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), with the corresponding selection text.

Hints

-   The addition FOR FIELD causes the output field output field to behave in exactly the same way as the output fields generated automatically by PARAMETERS or SELECT-OPTIONS in response to selection parameters or selection criteria. Automatically generated fields are not displayed in a line if multiple elements are included in the output and can thus be replaced by associated user-defined output fields.
-   The FOR FIELD addition is also important for creating accessible selection screens, since it assigns an accessible descriptor to an input field.

Addition 3   

... VISIBLE LENGTH vlen

Effect

The addition VISIBLE LENGTH defines the visible length vlen of the output field. vlen must be specified directly as a positive integer. If vlen is greater than len, the visible length is set to len. If vlen is less than len, the output field is displayed in the length of vlen with movable content and a [tooltip](javascript:call_link\('abentool_tip_glosry.htm'\) "Glossary Entry") of the whole content.

Example

Output fields, horizontal lines, and empty lines on the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of an executable program. The first output field is highlighted in the display.

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