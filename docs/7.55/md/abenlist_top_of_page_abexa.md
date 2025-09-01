---
title: "Lists - Page Header"
description: |
  The example shows how to define the page header at the TOP-OF-PAGE event. Source Code REPORT demo_list_top_of_page NO STANDARD PAGE HEADING LINE-SIZE 80 LINE-COUNT 7. DATA: h1(10) TYPE c VALUE '    Number', h2(10) TYPE c VALUE '    Square', h3(10) TYPE c VALUE '      Cube', n1 TYPE i, n2 TYPE i,
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_top_of_page_abexa.htm"
abapFile: "abenlist_top_of_page_abexa.htm"
keywords: ["select", "do", "if", "class", "data", "abenlist", "top", "page", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists_interactive.htm) →  [TOP-OF-PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptop-of-page.htm) → 

Lists - Page Header

The example shows how to define the page header at the TOP-OF-PAGE event.

Source Code

REPORT demo\_list\_top\_of\_page NO STANDARD PAGE HEADING
                             LINE-SIZE 80 LINE-COUNT 7.
DATA: h1(10) TYPE c VALUE '    Number',
      h2(10) TYPE c VALUE '    Square',
      h3(10) TYPE c VALUE '      Cube',
      n1 TYPE i, n2 TYPE i, n3 TYPE i,
      x TYPE i.
TOP-OF-PAGE.
  x = sy-colno + 8.  POSITION x. WRITE h1.
  x = sy-colno + 8.  POSITION x. WRITE h2.
  x = sy-colno + 8.  POSITION x. WRITE h3.
  x = sy-colno + 16. POSITION x. WRITE sy-pagno.
  ULINE.
START-OF-SELECTION.
  DO 10 TIMES.
    n1 = sy-index. n2 = sy-index \*\* 2. n3 = sy-index \*\* 3.
    NEW-LINE.
    WRITE: n1 UNDER h1,
           n2 UNDER h2,
           n3 UNDER h3.
  ENDDO.

Description

This program creates a two-page list. In the user-defined page header, column titles are placed in relative position to each other using the system field sy-colno and the POSITION statement. The actual list output is positioned under the fields of the header line using the addition UNDER of the WRITE statement. The line feeds are made using NEW-LINE.

The different output positions of the individual fields result from the ABAP default of representing character strings as left-aligned and numeric fields as right-aligned. The alignment can be adjusted using the formatting options LEFT-JUSTIFIED, RIGHT-JUSTIFIED, and CENTERED of the WRITE statement (see [WRITE - format\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm)).