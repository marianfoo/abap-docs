---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_crrspndng_class_lkup DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. TYPES: BEGIN OF struct1, a1 TYPE string, a2 TYPE string, b1 TYPE string, b2 TYPE stri
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_corr_lookup_abexa.htm"
abapFile: "abencl_abap_corr_lookup_abexa.htm"
keywords: ["do", "if", "case", "method", "class", "data", "types", "abencl", "abap", "corr", "lookup", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_CORRESPONDING%20with%20Lookup%20Table%2C%20ABENCL_ABAP_CORR_LOOKUP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CL\_ABAP\_CORRESPONDING with Lookup Table

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_corresponding.htm) with a lookup table

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_class\_lkup DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct1,
        a1 TYPE string,
        a2 TYPE string,
        b1 TYPE string,
        b2 TYPE string,
        c1 TYPE string,
        c2 TYPE string,
      END OF struct1,
      BEGIN OF struct2,
        a1 TYPE string,
        a2 TYPE string,
        b1 TYPE string,
        b2 TYPE string,
        c1 TYPE string,
        d2 TYPE string,
      END OF struct2.
    DATA:
      itab       TYPE STANDARD TABLE OF struct1,
      lookup\_tab TYPE SORTED TABLE OF struct2
                 WITH NON-UNIQUE KEY  b1 b2.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_class\_lkup IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`itab\`
      )->write( itab ).
    out->next\_section(
      \`lookup\_tab\`
      )->write( lookup\_tab ).
    DATA(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table(
      ( level = 0 kind = 4 srcname = 'PRIMARY\_KEY' )
      ( level = 0 kind = 5 srcname = 'B1' dstname = 'A1' )
      ( level = 0 kind = 5 srcname = 'B2' dstname = 'A2' ) ).
    cl\_abap\_corresponding=>create\_using(
      destination       = itab
      using             = lookup\_tab
      mapping           = mapping\_tab
      )->execute\_using( EXPORTING using       = lookup\_tab
                        CHANGING  destination = itab ).
    out->next\_section(
      \`CL\_ABAP\_CORRESPONDING=>EXECUTE\_USING without mapping\`
      )->write( itab ).
    mapping\_tab = VALUE cl\_abap\_corresponding=>mapping\_table(
       ( level = 0 kind = 4 srcname = 'PRIMARY\_KEY' )
       ( level = 0 kind = 5 srcname = 'B1' dstname = 'A1' )
       ( level = 0 kind = 5 srcname = 'B2' dstname = 'A2' )
       ( level = 0 kind = 1 srcname = 'A1' dstname = 'A1' )
       ( level = 0 kind = 1 srcname = 'A2' dstname = 'A2' )
       ( level = 0 kind = 1 srcname = 'B1' dstname = 'B1' )
       ( level = 0 kind = 1 srcname = 'B2' dstname = 'B2' )
       ( level = 0 kind = 1 srcname = 'D2' dstname = 'C2' )  ).
    cl\_abap\_corresponding=>create\_using(
      destination       = itab
      using             = lookup\_tab
      mapping           = mapping\_tab
      )->execute\_using( EXPORTING using       = lookup\_tab
                        CHANGING  destination = itab ).
    out->next\_section(
    \`CL\_ABAP\_CORRESPONDING=>EXECUTE\_USING with mapping\`
      )->write( itab ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #(
      ( a1 = \`id1\_1\` a2 = \`id2\_1\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` )
      ( a1 = \`id1\_2\` a2 = \`id2\_2\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` )
      ( a1 = \`id1\_3\` a2 = \`id2\_3\`
        b1 = \`000\`   b2 = \`000\`
        c1 = \`000\`   c2 = \`000\` ) ).
    lookup\_tab = VALUE #(
      ( a1 = \`a\_11\`  a2 = \`a\_12\`
        b1 = \`id1\_1\` b2 = \`id2\_1\`
        c1 = \`c\_11\`  d2 = \`d\_12\` )
      ( a1 = \`a\_21\`  a2 = \`a\_22\`
        b1 = \`id1\_3\` b2 = \`id2\_3\`
        c1 = \`c\_21\`  d2 = \`d\_22\` ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example shows how the first two uses of the component operator CORRESPONDING in the executable example [Component Operator, Lookup Table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorresponding_using_abexa.htm) can be transformed to method calls for the class CL\_ABAP\_CORRESPONDING. The results are the same in both cases. There is no equivalent for the third option of using the component operator, since the method EXECUTE\_USING uses a CHANGING parameter and the source table therefore always matches the target table.