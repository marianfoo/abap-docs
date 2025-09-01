  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) →  [WRITE - list\_elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_list_elements.htm) → 

Lists, Line Elements

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
      x = x + 1. pos( ).
      ULINE AT x(i).
      x = x + i. pos( ).
      WRITE line\_bottom\_right\_corner AS LINE.
      y = y - 1. pos( ).
      DO i TIMES.
        WRITE '|'.
        y = y - 1. pos( ).
      ENDDO.
      WRITE line\_top\_right\_corner AS LINE.
      i = i + 1.
      x = x - i. pos( ).
      ULINE AT x(i).
      x = x - 1. pos( ).
      WRITE line\_top\_left\_corner AS LINE.
      y = y + 1. pos( ).
      DO i TIMES.
        WRITE '|'.
        y = y + 1. pos( ).
      ENDDO.
      i = i + 1.
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