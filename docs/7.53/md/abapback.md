---
title: "BACK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapback_shortref.htm) Syntax BACK. Effect This statement positions the list cursor(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_cursor_glosry.htm 'Glossary Entry') on the first place of the first l
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapback.htm"
abapFile: "abapback.htm"
keywords: ["do", "if", "try", "class", "data", "abapback"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm) → 

BACK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapback_shortref.htm)

Syntax

BACK.

Effect

This statement positions the [list cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_cursor_glosry.htm "Glossary Entry") on the first place of the first line in a logical unit. A list contains the following logical units:

-   A line block defined using [RESERVE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreserve.htm).
    If BACK is executed after the statement RESERVE, the list cursor is placed in the first line of the current line block.
    
-   The lines within a self-defined [page header](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpage_header_glosry.htm "Glossary Entry").
    If BACK is executed within the event block for [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptop-of-page.htm) and is not placed after RESERVE, the list cursor is positioned in the first line below the standard page header.
    
-   The lines of a page below the page header.
    If BACK is executed outside of the event block for TOP-OF-PAGE and not after RESERVE, the list cursor is positioned in the first line below the page header.
    

Example

Displays a small input mask. The input fields are positioned after the description.

DATA: title TYPE c LENGTH 3,
      sname TYPE c LENGTH 20,
      fname TYPE c LENGTH 20.
SKIP 5.
RESERVE 3 LINES.
WRITE: / 'Title',
       / 'Second name',
       / 'First name'.
BACK.
WRITE: /14 title INPUT,
       /14 sname INPUT,
       /14 fname INPUT.