---
title: "Syntax"
description: |
  ... VALUE val LENGTH len DISPLAYMEMORY OFFSET off. Additions: 1. ... VALUE val(#!ABAP_ADDITION_1@1@) 2. ... LENGTH len(#!ABAP_ADDITION_2@2@) 3. ... DISPLAYMEMORY OFFSET off(#!ABAP_ADDITION_3@3@) Effect Using these additions, further information
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_cursor_list_line.htm"
abapFile: "abapget_cursor_list_line.htm"
keywords: ["do", "if", "class", "data", "abapget", "cursor", "list", "line"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Display](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlists_displayed.htm) →  [GET CURSOR, List](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_cursor_list.htm) → 

GET CURSOR, line\_properties

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_cursor_shortref.htm)

Syntax

... *\[*VALUE val*\]* *\[*LENGTH len*\]* *\[**\[*DISPLAY*|*MEMORY*\]* OFFSET off*\]*.

Additions:

[1\. ... VALUE val](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH len](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*DISPLAY*|*MEMORY*\]* OFFSET off](#!ABAP_ADDITION_3@3@)

Effect

Using these additions, further information about the cursor position can be read using the addition LINE of the statement [GET CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_cursor_list.htm).

Addition 1   

... VALUE val

Effect

The addition VALUE assigns the formatted content of the list line on which the cursor is positioned to the data object val. val expects a character-like variable.

Addition 2   

... LENGTH len

Effect

The addition LENGTH assigns the line length of the line on which the cursor is positioned, set using the addition LINE-SIZE of the program-initiating statement or using NEW-PAGE to the data object len. len expects a variable of the type i.

Addition 3   

... *\[*DISPLAY*|*MEMORY*\]* OFFSET off

Effect

The addition OFFSET without an addition or with the addition DISPLAY assigns the position of the cursor in the displayed line on which it is positioned to the data object off. off expects a variable of the type i.

The addition OFFSET with the addition MEMORY assigns the position of the character in the list buffer line on whose output the cursor is currently positioned to the data object off. If the cursor is on one of the characters < or > for characters cut off in the display, the position of the character in the list buffer that is overwritten by the character is assigned. off expects a variable of the type i.