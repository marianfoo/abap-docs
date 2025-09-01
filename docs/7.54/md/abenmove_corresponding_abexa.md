---
title: "MOVE-CORRESPONDING for Internal Tables"
description: |
  This example demonstrates the statement MOVE-CORRESPONDING(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm) for internal tables. Source Code REPORT demo_move_corresponding_itab. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYP
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmove_corresponding_abexa.htm"
abapFile: "abenmove_corresponding_abexa.htm"
keywords: ["select", "delete", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenmove", "corresponding", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding.htm) →  [Assigning Components: Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_abexas.htm) → 

MOVE-CORRESPONDING for Internal Tables

This example demonstrates the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm) for internal tables.

Source Code

REPORT demo\_move\_corresponding\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      c3 TYPE c LENGTH 3,
      BEGIN OF iline1,
        col1 TYPE c3,
        col2 TYPE c3,
      END OF iline1,
      BEGIN OF iline2,
        col2 TYPE c3,
        col3 TYPE c3,
      END OF iline2,
      BEGIN OF line1,
        col1 TYPE                   c3,
        col2 TYPE                   c3,
        col3 TYPE STANDARD TABLE OF iline1 WITH EMPTY KEY,
      END OF line1,
      BEGIN OF line2,
        col2 TYPE                   c3,
        col3 TYPE STANDARD TABLE OF iline2 WITH EMPTY KEY,
        col4 TYPE                   c3,
      END OF line2.
    CLASS-DATA:
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY,
      out   TYPE REF TO            if\_demo\_output.
    CLASS-METHODS:
      fill\_tables,
      display\_table1,
      display\_table2.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA buffer LIKE itab2.
    out = cl\_demo\_output=>new( ).
    fill\_tables( ).
    out->begin\_section( \`itab1\` ).
    display\_table1( ).
    out->next\_section( \`itab2\` ).
    display\_table2( ).
    buffer = itab2.
    out->begin\_section(
      \`MOVE-CORRESPONDING\` ).
    MOVE-CORRESPONDING itab1 TO itab2.
    display\_table2( ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING KEEPING TARGET LINES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 KEEPING TARGET LINES.
    display\_table2( ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 EXPANDING NESTED TABLES.
    display\_table2( ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES \` &&
      \`KEEPING TARGET LINES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 EXPANDING NESTED TABLES
                                      KEEPING TARGET LINES.
    display\_table2( ).
    out->display( ).  ENDMETHOD.
  METHOD fill\_tables.
    itab1 = VALUE #(
      ( col1 = 'a11'
        col2 = 'a12'
        col3 = VALUE #( ( col1 = 'a11'  col2 = 'a12' )
                        ( col1 = 'a21'  col2 = 'a22' ) ) )
      ( col1 = 'b21'
        col2 = 'b22'
        col3 = VALUE #( ( col1 = 'b11'  col2 = 'b12' )
                        ( col1 = 'b21'  col2 = 'b22' ) ) )
      ( col1 = 'c31'
        col2 = 'c32'
        col3 = VALUE #( ( col1 = 'c11'  col2 = 'c12' )
                        ( col1 = 'c21'  col2 = 'c22' ) ) ) ).
    itab2 = VALUE #(
      ( col2 = 'x11'
        col3 = VALUE #( ( col2 = 'x11'  col3 = 'x12' )
                        ( col2 = 'x21'  col3 = 'x22' )
                        ( col2 = 'x31'  col3 = 'x32' ) )
        col4 = 'x12' )
      ( col2 = 'y21'
        col3 = VALUE #( ( col2 = 'y11'  col3 = 'y12' )
                        ( col2 = 'y21'  col3 = 'y22' )
                        ( col2 = 'y31'  col3 = 'y32' ) )
        col4 = 'y22' ) ).
  ENDMETHOD.
  METHOD display\_table1.
    DATA:
      BEGIN OF outl,
        col1  TYPE c3,
        col2  TYPE c3,
        col31 TYPE c3,
        col32 TYPE c3,
      END OF outl.
    DATA output LIKE STANDARD TABLE OF outl WITH EMPTY KEY.
    LOOP AT itab1 ASSIGNING FIELD-SYMBOL(<wa>).
      outl-col1 = <wa>-col1.
      outl-col2 = <wa>-col2.
      LOOP AT <wa>-col3 ASSIGNING FIELD-SYMBOL(<col3>).
        outl-col31 = <col3>-col1.
        outl-col32 = <col3>-col2.
        IF sy-tabix > 1.
          CLEAR outl-col1.
          CLEAR outl-col2.
        ENDIF.
        APPEND outl TO output.
      ENDLOOP.
    ENDLOOP.
    out->write( output ).
  ENDMETHOD.
  METHOD display\_table2.
    DATA:
      BEGIN OF outl,
        col2  TYPE c3,
        col32 TYPE c3,
        col33 TYPE c3,
        col4  TYPE c3,
      END OF outl.
    DATA output LIKE STANDARD TABLE OF outl WITH EMPTY KEY.
    LOOP AT itab2 ASSIGNING FIELD-SYMBOL(<wa>).
      outl-col2 = <wa>-col2.
      outl-col4 = <wa>-col4.
      LOOP AT <wa>-col3 ASSIGNING FIELD-SYMBOL(<col3>).
        outl-col32 = <col3>-col2.
        outl-col33 = <col3>-col3.
        IF sy-tabix > 1.
          CLEAR outl-col2.
          CLEAR outl-col4.
        ENDIF.
        APPEND outl TO output.
      ENDLOOP.
    ENDLOOP.
    out->write( output ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding_itab.htm) and the available additions are used to declare two internal tables, itab1 and itab2, and assign them to each other.

-   itab1 contains two elementary components, col1 and col2, and a tabular component col3 with the components col1 and col2.

-   itab2 contains two elementary components, col2 and col4, and a tabular component col3 with the components col2 and col3.

The internal tables are filled with values. For the output, the structured components are resolved to elementary components of an output table, output.

The statement MOVE-CORRESPONDING finds the identically named components col2 and col3 in itab1 and itab2 and the assignments work as followst:

-   MOVE-CORRESPONDING

The original content of itab2 is deleted. After the assignment, the columns col2 and col3 have the same content as in itab1, whereas col4 remains initial.

-   MOVE-CORRESPONDING KEEPING TARGET LINES

The original content of itab2 is preserved. Three new rows are added in which the columns col2 and col3 have the same content as in itab1, whereas col4 remains initial.

-   MOVE-CORRESPONDING EXPANDING NESTED TABLES

The original content of itab2 is deleted. After the assignment, the column col2 has the same content as in itab1 and col4 remains initial. The tabular component col3 is resolved and the identically named component col2 found there. The original content of itab2-col3 is deleted. After the assignment, the column col2 has the same content as in itab1-col3, whereas the column col3 remains initial.

-   MOVE-CORRESPONDING EXPANDING NESTED TABLES KEEPING TARGET LINES

The original content of itab2 is preserved. Three new rows are added, to which the same applies as to the results of the previous assignment.