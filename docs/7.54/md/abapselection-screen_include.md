  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen.htm) → 

SELECTION-SCREEN INCLUDE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_incl_shortref.htm)

Syntax Forms

[Include parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_param.htm)
1\. SELECTION-SCREEN INCLUDE PARAMETERS para
                                      *\[*OBLIGATORY *\[*OFF*\]**\]*
                                      *\[*MODIF ID modid*\]*
                                      *\[*ID id*\]*.
[Include selection criteria](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_selop.htm)
2\. SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit
                                          *\[*OBLIGATORY *\[*OFF*\]**\]*
                                          *\[*NO INTERVALS *\[*OFF*\]**\]*
                                          *\[*MODIF ID modid*\]*
                                          *\[*ID id*\]*.
[Include output field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_comnt.htm)
3\. SELECTION-SCREEN INCLUDE COMMENT *\[*/*\]**\[*pos*\]*(len) text
                                   *\[*FOR FIELD sel*\]*
                                   *\[*MODIF ID modid*\]*
                                   *\[*ID id*\]*.
[Include pushbutton](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_pushb.htm)
4\. SELECTION-SCREEN INCLUDE PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                                      *\[*USER-COMMAND ucom*\]*
                                      *\[*MODIF ID modid*\]*
                                      *\[*ID id*\]*.
[Include blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_block.htm)
5\. SELECTION-SCREEN INCLUDE BLOCKS block *\[*ID id*\]*.

Effect

These variants of the statement SELECTION-SCREEN enable elements that have already been created in other [selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the same program to be included in a selection screen. Either parameters, selection criteria, output fields, pushbuttons, or whole blocks can be included. They can be included in all and from all selection screens of the elements of the program. No elements can be included within the same selection screen. An element cannot be used more than once in the same selection screen. The definition of the selection screen from which the elements are included must be arranged before the current selection screen.

Example

Reusing a block of the [standard selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") of an executable program in a [standalone selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstand-alone_sel_screen_glosry.htm "Glossary Entry") that has the number 500.

SELECTION-SCREEN: BEGIN OF BLOCK block,
                  COMMENT /1(40) text,
                  ULINE.
PARAMETERS: p1(10) TYPE c,
            p2(10) TYPE c,
            p3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK block.
SELECTION-SCREEN: BEGIN OF SCREEN 500 AS WINDOW,
                  INCLUDE BLOCKS block,
                  END OF SCREEN 500.
INITIALIZATION.
  text = 'Standard Selection'.
START-OF-SELECTION.
  ...
  CALL SELECTION-SCREEN '0500' STARTING AT 10 10.

Continue
[SELECTION-SCREEN INCLUDE PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_param.htm)
[SELECTION-SCREEN INCLUDE SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_selop.htm)
[SELECTION-SCREEN INCLUDE COMMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_comnt.htm)
[SELECTION-SCREEN INCLUDE PUSHBUTTON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_pushb.htm)
[SELECTION-SCREEN INCLUDE BLOCKS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_include_block.htm)