---
title: "Syntax Forms"
description: |
  Blank lines(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_skip.htm) 1. SELECTION-SCREEN SKIP n ldb_additions. Horizontal lines(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_uline.htm) 2. SELECTION-SCREEN ULINE
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_layout.htm"
abapFile: "abapselection-screen_layout.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapselection", "screen", "layout"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm) → 

SELECTION-SCREEN - screen\_elements

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_shortref.htm)

Syntax Forms

[Blank lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_skip.htm)
1\. SELECTION-SCREEN SKIP *\[*n*\]* *\[*ldb\_additions*\]*.
[Horizontal lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_uline.htm)
2\. SELECTION-SCREEN ULINE *\[**\[*/*\]**\[*pos*\]*(len)*\]* *\[*MODIF ID modid*\]*
                         *\[*ldb\_additions*\]*.
[Output fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_comment.htm)
3\. SELECTION-SCREEN COMMENT *\[*/*\]**\[*pos*\]*(len)
                           *{*text*|**{**\[*text*\]* FOR FIELD sel*}**}*
                           *\[*VISIBLE LENGTH vlen*\]*
                           *\[*MODIF ID modid*\]*
                           *\[*ldb\_additions*\]*.
[Pushbuttons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_pushbutton.htm)
4\. SELECTION-SCREEN PUSHBUTTON *\[*/*\]**\[*pos*\]*(len) button\_text
                              USER-COMMAND ucom
                              *\[*VISIBLE LENGTH vlen*\]*
                              *\[*MODIF ID modid*\]*
                              *\[*ldb\_additions*\]*.
[Lines with multiple elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_line.htm)
5\. SELECTION-SCREEN BEGIN OF LINE.
  ...
  *\[*SELECTION-SCREEN POSITION pos *\[*ldb\_additions*\]**\]*.
  ...
  SELECTION-SCREEN END OF LINE.
[Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_block.htm)
6\. SELECTION-SCREEN BEGIN OF BLOCK block
                                  *\[*WITH FRAME *\[*TITLE title*\]**\]*
                                  *\[*NO INTERVALS*\]*.
  ...
  SELECTION-SCREEN END OF BLOCK block.
[Tabstrips](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_tabbed.htm)
7\. SELECTION-SCREEN BEGIN OF TABBED BLOCK tblock FOR n LINES.
  ...
  SELECTION-SCREEN TAB (len) tab USER-COMMAND ucom
                   *\[*DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr*\]*.
  ...
  SELECTION-SCREEN END OF BLOCK tblock.
[Pushbuttons in the application toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_functionkey.htm)
8\. SELECTION-SCREEN FUNCTION KEY n *\[*ldb\_additions*\]*.

Effect

The [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") input fields are created using the commands [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm) and [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect-options.htm). By default, each of these commands creates its own row on the selection screen. The variants of the command SELECTION-SCREEN shown above allow selection screens to be created differently. Other screen elements can be defined and the order of elements on the screen modified.

The above commands can be executed within the definition of a selection screen in the global declaration part of [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), function groups and [module pools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodul_pool_glosry.htm "Glossary Entry").

Notes

-   The maximum width of a selection screen is 83. If this width is exceeded, the screen will be cut off or will not be generated. In the case of blocks with a frame, the maximum width is reduced by the width of the frame.
    
-   All screen elements that can be created using the command SELECTION-SCREEN are located in a namespace. This is the case even if the elements were created in different selection screens. In the case of selection screen elements, where a global data object is generated when the objects are created, the namespace of the program data object must also be respected. If an element or a data object is to be used in multiple selection screens, the addition [INCLUDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_include.htm) of the statement SELECTION-SCREEN can be used.
    
-   The selection screen elements must be positioned so that they do not overlap. If not, an error is produced when the selection screen is generated.
    
-   Shared namespaces particularly apply to a [standard selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry"), which consists of the selection screens of a logical database and the program itself. The elements defined in a program cannot be allowed to conflict with the elements in the logical database.
    

Continue
[SELECTION-SCREEN - SKIP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_skip.htm)
[SELECTION-SCREEN - ULINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_uline.htm)
[SELECTION-SCREEN - COMMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_comment.htm)
[SELECTION-SCREEN - PUSHBUTTON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_pushbutton.htm)
[SELECTION-SCREEN - LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_line.htm)
[SELECTION-SCREEN - BLOCK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_block.htm)
[SELECTION-SCREEN - TABBED BLOCK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_tabbed.htm)
[SELECTION-SCREEN - FUNCTION KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_functionkey.htm)
[SELECTION-SCREEN - MODIF ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_modif_id.htm)