---
title: "Component Operator for Internal Tables"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) for internal tables. Source Code REPORT demo_corresponding_itab. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES:
version: "7.55"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_itab_abexa.htm"
abapFile: "abencorresponding_itab_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abencorresponding", "itab", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_abexas.htm) → 

Component Operator for Internal Tables

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm) for internal tables.

Source Code

REPORT demo\_corresponding\_itab.
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
    out = cl\_demo\_output=>new( ).
    fill\_tables( ).
    out->begin\_section( \`itab1\` ).
    display\_table1( ).
    out->next\_section( \`itab2\` ).
    display\_table2( ).
    DATA(base) = itab2.
    out->begin\_section(
      \`CORRESPONDING itab2( itab1 )\` ).
    itab2 = CORRESPONDING #( itab1 ).
    display\_table2( ).
    out->next\_section(
      \`CORRESPONDING itab2( BASE ( itab2 ) itab1 )\` ).
    itab2 = CORRESPONDING #( BASE ( base ) itab1 ).
    display\_table2( ).
    out->next\_section(
      \`CORRESPONDING itab2( DEEP itab1 )\` ).
    itab2 = CORRESPONDING #( DEEP itab1 ).
    display\_table2( ).
    out->next\_section(
      \`CORRESPONDING itab2( DEEP BASE ( itab2 ) itab1 )\` ).
    itab2 = CORRESPONDING #( DEEP BASE ( base ) itab1 ).
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

This example uses the same internal tables as the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_corresponding_abexa.htm) for MOVE-CORRESPONDING. Here, the source table itab1 is used as a parameter of a constructor expression with the component operator CORRESPONDING and the result is assigned to the target table itab2. The source table itab1 is assigned to the result with the type of itab2 with and without the addition DEEP. If the addition BASE is used, the result is given the original value of itab2 as the start value and otherwise stays initial. The assignment is made exactly as described in the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_corresponding_abexa.htm) for MOVE-CORRESPONDING with or without EXPANDING NESTED TABLES. The use of the component selector with the addition BASE has the same effect as using MOVE-CORRESPONDING with the addition KEEPING TARGET LINES. If DEEP is used the name comparison is made for the components of the substructure col3, which means that fewer assignments are made than when omitting DEEP.

The uninvolved component col4 keeps its initial value in the new lines in both examples. The result is assigned to the target table itab2. Unlike in the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_struct_abexa.htm) for structures, the final results for MOVE-CORRESPONDING and the component selector CORRESPONDING are the same, since assignments are made to initial new lines in both cases.