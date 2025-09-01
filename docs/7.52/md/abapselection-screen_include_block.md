  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) →  [SELECTION-SCREEN INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)) → 

SELECTION-SCREEN INCLUDE BLOCKS

[Quick Reference](javascript:call_link\('abapselection-screen_incl_shortref.htm'\))

Syntax

SELECTION-SCREEN INCLUDE BLOCKS block *\[*ID id*\]*.

Effect

The addition BLOCKS creates a block block on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). block expects a block that must have already been created on a previous selection screen using the statement [SELECTION-SCREEN BEGIN OF BLOCK](javascript:call_link\('abapselection-screen_block.htm'\)) or [SELECTION-SCREEN BEGIN OF *\[*TABBED*\]* BLOCK](javascript:call_link\('abapselection-screen_tabbed.htm'\)).

The new block has exactly the same structure as the original block and contains the same screen elements. The properties of all the parameters, selection criteria, output fields, and pushbuttons in the new block are taken from the corresponding elements in the original block as if they were taken individually using the statement SELECTION-SCREEN INCLUDE.

If a block is added within a block with a frame, the width of the original block is adjusted to fit the area within the frame. The original block cannot contain any elements outside this area.

The addition [ID](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)) can only be used in a selection include for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Note

The addition INCLUDE in this variant ensures that once a block structure has been defined, the structure and the corresponding global variables can be used by multiple selection screens at the same time.

Example

Reuses a block from the standard selection screen of an executable program in a separate selection screen with the number 500.

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