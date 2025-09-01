---
title: "Lists - Line Elements"
description: |
  This example demonstrates line elements on lists. Source Code REPORT demo_list_line_elements NO STANDARD PAGE HEADING LINE-SIZE 60. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-DATA: x TYPE i, y TYPE i. CLASS-METHODS pos. ENDCLASS. CLASS demo IMPLEMENTATION. M
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_line_elements_abexa.htm"
abapFile: "abenlist_line_elements_abexa.htm"
keywords: ["select", "do", "while", "if", "method", "class", "data", "abenlist", "line", "elements", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_list.htm) →  [Lists - Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) →  [WRITE, list\_elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_list_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Line%20Elements%2C%20ABENLIST_LINE_ELEMENTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Line Elements

This example demonstrates line elements on lists.

Source Code   

REPORT demo\_list\_line\_elements NO STANDARD PAGE HEADING LINE-SIZE 60.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: x TYPE i,
                y TYPE i.
    CLASS-METHODS pos.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: x0 TYPE i VALUE 10,
          y0 TYPE i VALUE 10,
          n  TYPE i VALUE 16,
          i  TYPE i VALUE 0.
    x = x0.
    y = y0.
    pos( ).
    WHILE i LE n.
      WRITE line\_bottom\_left\_corner AS LINE.
      x += 1. pos( ).
      ULINE AT x(i).
      x += i. pos( ).
      WRITE line\_bottom\_right\_corner AS LINE.
      y -= 1. pos( ).
      DO i TIMES.
        WRITE '|'.
        y -= 1. pos( ).
      ENDDO.
      WRITE line\_top\_right\_corner AS LINE.
      i += 1.
      x -= i. pos( ).
      ULINE AT x(i).
      x -= 1. pos( ).
      WRITE line\_top\_left\_corner AS LINE.
      y += 1. pos( ).
      DO i TIMES.
        WRITE '|'.
        y += 1. pos( ).
      ENDDO.
      i += 1.
    ENDWHILE.  ENDMETHOD.
  METHOD pos.
    SKIP TO LINE y.
    POSITION x.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Displays a spiral using line elements and links these automatically in a list.