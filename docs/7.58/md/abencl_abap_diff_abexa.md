---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_itab_diff DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . PRIVATE SECTION. METHODS diff IMPORTING !itab1 TYPE INDEX TABLE !itab2 TYPE INDEX TABLE update TYPE abap_bool OPTIONAL. METHODS diff
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff_abexa.htm"
abapFile: "abencl_abap_diff_abexa.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencl", "abap", "diff", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - System Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_system_classes.htm) →  [itab - System Class CL\_ABAP\_DIFF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_diff.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Using%20CL_ABAP_DIFF%2C%20ABENCL_ABAP_DIFF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Using CL\_ABAP\_DIFF

This example demonstrates class CL\_ABAP\_DIFF.

Source Code   

\* Public class definition
CLASS cl\_demo\_itab\_diff DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
        REDEFINITION .
  PRIVATE SECTION.
    METHODS diff
      IMPORTING
        !itab1 TYPE INDEX TABLE
        !itab2 TYPE INDEX TABLE
        update TYPE abap\_bool OPTIONAL.
    METHODS diff\_with\_line\_ref
      IMPORTING
        !itab1 TYPE INDEX TABLE
        !itab2 TYPE INDEX TABLE
        update TYPE abap\_bool OPTIONAL.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_itab\_diff IMPLEMENTATION.
  METHOD main.
    DATA:
      itab1 TYPE TABLE OF i,
      itab2 TYPE TABLE OF string,
      itab3 TYPE TABLE OF i,
      BEGIN OF line,
        col1 TYPE i,
        col2 LIKE itab1,
      END OF line,
      itab4 LIKE TABLE OF line,
      itab5 LIKE TABLE OF line.
    out->next\_section( \`Incompatible Type, Same Values\` ).
    itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
    itab2 = VALUE #( ( \`1\` ) ( \`2\` ) ( \`3\` ) ).
    diff( itab1 = itab1
          itab2 = itab2 ).
    out->next\_section( \`Compatible Type, Same Values\` ).
    itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
    itab3 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
    diff( itab1 = itab1
          itab2 = itab3 ).
    out->next\_section( \`Compatible Type, Different Values\` ).
    itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
    itab3 = VALUE #( ( 1 ) ( 4 ) ( 3 ) ).
    diff( itab1 = itab1
          itab2 = itab3 ).
    diff( itab1 = itab1
          itab2 = itab3 update = 'X' ).
    diff\_with\_line\_ref( itab1 = itab1
                        itab2 = itab3 ).
    diff\_with\_line\_ref( itab1 = itab1
                        itab2 = itab3 update = 'X' ).
    out->next\_section( \`Nested Type, Same Values\` ).
    itab4 = VALUE #(
      ( col1 = 1 col2 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ) )
      ( col1 = 2 col2 = VALUE #( ( 4 ) ( 5 ) ( 6 ) ) ) ).
    itab5 = itab4.
    diff( itab1 = itab4
          itab2 = itab5 ).
    out->next\_section( \`Nested Type, Same Values\` ).
    itab4 = VALUE #(
      ( col1 = 1 col2 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ) )
      ( col1 = 2 col2 = VALUE #( ( 4 ) ( 5 ) ( 6 ) ) ) ).
    itab5\[ 1 \]-col2\[ 3 \] = 10.
    diff( itab1 = itab4
          itab2 = itab5 ).
    diff( itab1 = itab4
          itab2 = itab5 update = 'X' ).
    diff\_with\_line\_ref( itab1 = itab4
                        itab2 = itab5 ).
    diff\_with\_line\_ref( itab1 = itab4
                        itab2 = itab5 update = 'X' ).
  ENDMETHOD.
  METHOD diff.
    DATA flag\_identical TYPE abap\_bool.
    FINAL(diff) = cl\_abap\_diff=>create(
      output\_mode = COND #(
        WHEN update IS NOT INITIAL
             THEN cl\_abap\_diff=>s\_output-generate\_update ) ).
    TRY.
        DATA(diff\_result) =  diff->diff(
           EXPORTING
             target         = itab1
             source         = itab2
        IMPORTING
          flag\_identical = flag\_identical ).
        IF flag\_identical IS NOT INITIAL.
          out->write\_data( flag\_identical ).
        ELSE.
          out->write( diff\_result ).
        ENDIF.
      CATCH cx\_abap\_diff INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
  METHOD diff\_with\_line\_ref.
    DATA flag\_identical TYPE abap\_bool.
    FINAL(diff) = cl\_abap\_diff=>create(
      output\_mode = COND #(
        WHEN update IS NOT INITIAL
             THEN cl\_abap\_diff=>s\_output-generate\_update ) ).
    TRY.
        DATA(diff\_with\_line\_ref\_result) =  diff->diff\_with\_line\_ref(
           EXPORTING
             target         = itab1
             source         = itab2
        IMPORTING
          flag\_identical = flag\_identical ).
        IF flag\_identical IS NOT INITIAL.
          out->write\_data( flag\_identical ).
        ELSE.
          out->write( diff\_with\_line\_ref\_result ).
        ENDIF.
      CATCH cx\_abap\_diff INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

Some internal tables are filled with values and compared with methods DIFF and DIFF\_WITH\_LINE\_REF of class CL\_ABAP\_DIFF. The results are shown for insert/delete as well as for insert/delete/update modes.