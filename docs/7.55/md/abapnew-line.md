---
title: "NEW-LINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-line_shortref.htm) Syntax NEW-LINE NO-SCROLLINGSCROLLING. Additions: 1. ... NO-SCROLLING(#!ABAP_ADDITION_1@1@) 2. ... SCROLLING(#!ABAP_ADDITION_2@2@) Effect This statement sets the list cursor(htt
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-line.htm"
abapFile: "abapnew-line.htm"
keywords: ["do", "if", "try", "class", "abapnew", "line"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists.htm) → 

NEW-LINE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-line_shortref.htm)

Syntax

NEW-LINE *\[*NO-SCROLLING*|*SCROLLING*\]*.

Additions:

[1\. ... NO-SCROLLING](#!ABAP_ADDITION_1@1@)
[2\. ... SCROLLING](#!ABAP_ADDITION_2@2@)

Effect

This statement sets the [list cursor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_cursor_glosry.htm "Glossary Entry") at the first position of the next line after the current line, if the current position of the list cursor was produced by a previous output statement. In the first line of a new page and if the current list cursor was set to the list line using the statements [SKIP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapskip.htm), NEW-LINE, [NEW-PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapnew-page.htm) or [BACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapback.htm), NEW-LINE is ignored by the list cursor.

Hint

The statement NEW-LINE is executed implicitly at the end of an [event block](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_block_glosry.htm "Glossary Entry").

Addition 1

... NO-SCROLLING

Effect

The addition NO-SCROLLING has the effect that the first line of the current list level written after the statement NEW-LINE using an output statement ( [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapuline.htm)) cannot be moved horizontally. This applies to scrolling in the list displayed on the screen by the user and also to scrolling using the statement [SCROLL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll.htm). Vertical moves are not affected.

Hint

To freeze an area that covers multiple lines, the statement [SET LEFT SCROLL-BOUNDARY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_scroll-boundary.htm) can be used.

Example

The line with the output "Fixed Line" is not moved by horizontal scrolling.

WRITE / 'Scrollable Line'.
NEW-LINE NO-SCROLLING.
WRITE: / 'Fixed Line',
       / 'Scrollable Line'.

Addition 2

... SCROLLING

Effect

The addition SCROLLING undoes the addition NO-SCROLLING (default setting). The addition NO-SCROLLING can only be undone before an output statement is executed. Once a line has been frozen, this state can no longer be undone.