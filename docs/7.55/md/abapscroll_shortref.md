---
title: "SCROLL - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll.htm) Syntax SCROLL LIST   TO COLUMN col    LEFTRIGHT BY n PLACES     TO  FIRST PAGE  LAST PAGE  PAGE pag  LINE lin    FOR
version: "7.55"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll_shortref.htm"
abapFile: "abapscroll_shortref.htm"
keywords: ["do", "if", "abapscroll", "shortref"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

SCROLL - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll.htm)

Syntax

SCROLL LIST *\[* *{* TO COLUMN col *}*
            *|* *{* *{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]* *}* *\]*
            *\[* *{* TO *{* *{*FIRST PAGE*}*
                   *|* *{*LAST PAGE*}*
                   *|* *{*PAGE pag*}* *}*
                   *\[*LINE lin*\]* *}*
              *|* *{* *{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]* *}* *\]*
            *\[*INDEX idx*\]*.

Effect

Moves the display area of a list stored in the list buffer.

Additions

-   [TO COLUMN col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll_list_horizontal.htm)
    Moves the area horizontally to the column col.
    

-   [*{*LEFT*|*RIGHT*}* *\[*BY n PLACES*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll_list_horizontal.htm)
    Moves the display area left or right either by the line width or by n places.
    

-   [TO *{* *{*FIRST PAGE*}* *|* *{*LAST PAGE *}* *|* *{*PAGE pag*}* *\[*LINE lin*\]* *}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll_list_vertical.htm)
    Moves the display area vertically to the first or last page or to the page specified in pag. Here, the top line lin can be specified.
    

-   [*{*FORWARD*|*BACKWARD*}* *\[*n PAGES*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll_list_vertical.htm)
    Moves the display area up or down, either by one page or by pag pages.
    

-   [INDEX idx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscroll.htm)
    Specifies the list index in idx. If not specified, the list level is used on which a list event occurred.