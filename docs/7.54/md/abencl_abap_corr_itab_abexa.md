---
title: "Source Code"
description: |
  REPORT demo_corresponding_class_tb. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, END OF line1, BEGIN OF line2, col2 TYPE i, col3 TYPE i, END OF line2. DATA: itab1 TYPE TABLE OF line1 W
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_corr_itab_abexa.htm"
abapFile: "abencl_abap_corr_itab_abexa.htm"
keywords: ["select", "do", "method", "class", "data", "types", "internal-table", "abencl", "abap", "corr", "itab", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding.htm) →  [Assigning Components: Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_abexas.htm) → 

CL\_ABAP\_CORRESPONDING for Internal Tables

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_corresponding.htm) for internal tables.

Source Code

REPORT demo\_corresponding\_class\_tb.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF line1,
             col1 TYPE i,
             col2 TYPE i,
           END OF line1,
           BEGIN OF line2,
             col2 TYPE i,
             col3 TYPE i,
           END OF line2.
    DATA: itab1 TYPE TABLE OF line1 WITH EMPTY KEY,
          itab2 TYPE TABLE OF line2 WITH EMPTY KEY.
    DATA(out) = cl\_demo\_output=>new( ).
    itab1 = VALUE #(
      ( col1 = 11 col2 = 12 )
      ( col1 = 21 col2 = 22 ) ).
    itab2 = VALUE #(
      ( col2 = 212 col3 = 312 )
      ( col2 = 222 col3 = 322 ) ).
   cl\_abap\_corresponding=>create(
      source            = itab1
      destination       = itab2
      mapping           = VALUE cl\_abap\_corresponding=>mapping\_table(  )
      )->execute( EXPORTING source      = itab1
                  CHANGING  destination = itab2 ).
    out->write( itab2 ).
    cl\_abap\_corresponding=>create(
      source            = itab1
      destination       = itab2
      mapping           = VALUE cl\_abap\_corresponding=>mapping\_table(
       ( level = 0 kind = 1 srcname = 'col1' dstname = 'col2' )
       ( level = 0 kind = 1 srcname = 'col2' dstname = 'col3' ) )
      )->execute( EXPORTING source      = itab1
                  CHANGING  destination = itab2 ).
    out->write( itab2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The components of the internal table itab1 are assigned to the internal table itab2 using the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_corresponding.htm).

-   The mapping table is empty in the first assignment. The assignment is made as in [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm) using matching names and the column col3 of the target table is not filled.

-   In the second assignment, a mapping table is passed that assigns all columns of the source table to a column in the target table regardless of their names.