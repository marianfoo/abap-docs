  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Create](javascript:call_link\('abenabap_lists.htm'\)) →  [WRITE](javascript:call_link\('abapwrite-.htm'\)) →  [WRITE, list\_elements](javascript:call_link\('abapwrite_list_elements.htm'\)) → 

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

Displays a spiral using line elements and joins these automatically in a list.