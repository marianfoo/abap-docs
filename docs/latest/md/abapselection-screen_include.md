  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20INCLUDE%2C%20ABAPSELECTION-SCREEN_INCLUDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN INCLUDE

[Short Reference](javascript:call_link\('abapselection-screen_incl_shortref.htm'\))

Syntax Forms

[Include Parameters](javascript:call_link\('abapselection-screen_include_param.htm'\))

1\. SELECTION-SCREEN INCLUDE PARAMETERS para
                                      *\[*OBLIGATORY *\[*OFF*\]**\]*
                                      *\[*MODIF ID modid*\]*
                                      *\[*ID id*\]*.

[Include Selection Criteria](javascript:call_link\('abapselection-screen_include_selop.htm'\))

2\. SELECTION-SCREEN INCLUDE SELECT-OPTIONS selcrit
                                          *\[*OBLIGATORY *\[*OFF*\]**\]*
                                          *\[*NO INTERVALS *\[*OFF*\]**\]*
                                          *\[*MODIF ID modid*\]*
                                          *\[*ID id*\]*.

[Include Output Field](javascript:call_link\('abapselection-screen_include_comnt.htm'\))

3\. SELECTION-SCREEN INCLUDE COMMENT *\[*/*\]**\[*pos*\]*(len) text
                                   *\[*FOR FIELD sel*\]*
                                   *\[*MODIF ID modid*\]*
                                   *\[*ID id*\]*.

[Include Pushbutton](javascript:call_link\('abapselection-screen_include_pushb.htm'\))

4\. SELECTION-SCREEN INCLUDE PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                                      *\[*USER-COMMAND ucom*\]*
                                      *\[*MODIF ID modid*\]*
                                      *\[*ID id*\]*.

[Include Blocks](javascript:call_link\('abapselection-screen_include_block.htm'\))

5\. SELECTION-SCREEN INCLUDE BLOCKS block *\[*ID id*\]*.

Effect

These variants of the statement SELECTION-SCREEN enable elements that have already been created in other [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of the same program to be included in a selection screen. Either selection parameters, selection criteria, output fields, pushbuttons, or entire blocks can be included. They can be included in all and from all selection screens of the elements of the program. No elements can be included within the same selection screen. An element cannot be used more than once in the same selection screen. The definition of the selection screen from which the elements are included must be arranged in front of the current selection screen.

Example

Reusing a block of the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of an executable program in a [standalone selection screen](javascript:call_link\('abenstand-alone_sel_screen_glosry.htm'\) "Glossary Entry") that has the number 500.

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
[SELECTION-SCREEN INCLUDE PARAMETERS](javascript:call_link\('abapselection-screen_include_param.htm'\))
[SELECTION-SCREEN INCLUDE SELECT-OPTIONS](javascript:call_link\('abapselection-screen_include_selop.htm'\))
[SELECTION-SCREEN INCLUDE COMMENT](javascript:call_link\('abapselection-screen_include_comnt.htm'\))
[SELECTION-SCREEN INCLUDE PUSHBUTTON](javascript:call_link\('abapselection-screen_include_pushb.htm'\))
[SELECTION-SCREEN INCLUDE BLOCKS](javascript:call_link\('abapselection-screen_include_block.htm'\))