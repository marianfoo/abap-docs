---
title: "SET LEFT SCROLL-BOUNDARY"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_left_scroll_bound_shortref.htm) Syntax SET LEFT SCROLL-BOUNDARY COLUMN col. Addition: ... COLUMN col(#!ABAP_ONE_ADD@1@) Effect This statement sets the left boundary of the horizontally movable area of the
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_scroll-boundary.htm"
abapFile: "abapset_scroll-boundary.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapset", "scroll", "boundary"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_lists.htm) → 

SET LEFT SCROLL-BOUNDARY

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_left_scroll_bound_shortref.htm)

Syntax

SET LEFT SCROLL-BOUNDARY *\[*COLUMN col*\]*.

Addition:

[... COLUMN col](#!ABAP_ONE_ADD@1@)

Effect

This statement sets the left boundary of the horizontally movable area of the current page. This applies to both user-activated scrolling through the list displayed on-screen and to scrolling activated by the [SCROLL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapscroll.htm) statement. For the statement to work properly, the [list cursor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_cursor_glosry.htm "Glossary Entry") must be positioned on a page with an output statement or with [SKIP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapskip.htm). The statement works only on this page. If the statement is executed multiple times for one page, the last statement takes effect.

If the addition COLUMN is not specified, all places on the current page that are located to the left of the current position of the list cursor (sy-colno) are excluded from horizontal scrolling.

Addition   

... COLUMN col

Effect

If the addition COLUMN is specified, this applies to all columns in the current page that are located to the left of the position specified in col. Here col refers to the columns in the list displayed. col expects a data object of the type i. If the value in col is less than or equal to 0, or greater than the current list width, the statement is ignored.

Hints

-   Only the lower or upper limit of output data objects should be used as the edge of a movable area, because only the position of Unicode characters in the list buffer and in the displayed list is guaranteed to match these limits.
-   To prevent an entire line from being horizontally movable, the [NEW-LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-line.htm) NO-SCROLLING statement should be used.

Example

Output of a tabular list of airlines from the database table SCARR, in which the area for output from the key field is fixed.

DATA scarr\_wa TYPE scarr.
SELECT \*
       FROM scarr
       INTO @scarr\_wa.
  WRITE: / scarr\_wa-carrid COLOR COL\_KEY.
  SET LEFT SCROLL-BOUNDARY.
  WRITE: scarr\_wa-carrname,
         scarr\_wa-currcode,
         (40) scarr\_wa-url.
ENDSELECT.