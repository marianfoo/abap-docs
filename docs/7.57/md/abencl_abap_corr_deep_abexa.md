---
title: "Source Code"
description: |
  REPORT demo_corresponding_class_strtb. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF line1, col1 TYPE i, col2 TYPE i, END OF line1, BEGIN OF line2, col2 TYPE i, col3 TYPE i, END OF line2. DATA: BEGIN OF struc1, itab TY
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corr_deep_abexa.htm"
abapFile: "abencl_abap_corr_deep_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abencl", "abap", "corr", "deep", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_ABAP_CORRESPONDING for Tabular Components, ABENCL_ABAP_CORR_DEEP_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_ABAP\_CORRESPONDING for Tabular Components

This example demonstrates the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm) for tabular components of structures.

Source Code   

REPORT demo\_corresponding\_class\_strtb.
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
    DATA: BEGIN OF struc1,
            itab TYPE TABLE OF line1 WITH EMPTY KEY,
          END OF struc1.
    DATA: BEGIN OF struc2,
            itab TYPE TABLE OF line2 WITH EMPTY KEY,
          END OF struc2.
    data(out) = cl\_demo\_output=>new( ).
    struc1-itab = VALUE #(
      ( col1 = 11 col2 = 12 )
      ( col1 = 21 col2 = 22 ) ).
    out->write( struc1 ).
    MOVE-CORRESPONDING struc1 TO struc2.
    out->write( struc2 ).
    CLEAR struc2-itab.
    MOVE-CORRESPONDING struc1 TO struc2 EXPANDING NESTED TABLES.
    out->write( struc2 ).
    CLEAR struc2-itab.
    struc2 = CORRESPONDING #( struc1 ).
    out->write( struc2 ).
    CLEAR struc2-itab.
    struc2 = CORRESPONDING #( DEEP struc1 ).
    out->write( struc2 ).
    CLEAR struc2-itab.
    cl\_abap\_corresponding=>create(
      source            = struc1
      destination       = struc2
      mapping           = VALUE cl\_abap\_corresponding=>mapping\_table(  )
      )->execute( EXPORTING source      = struc1
                  CHANGING  destination = struc2 ).
    out->write( struc2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example compares the options for component-by-component assignments of structures with tabular components.

-   The statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) can be executed with and without the addition EXPANDING NESTED TABLES. Depending on this, the tabular component is assigned as a whole or by component using identical names.
-   The operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm) can be executed with and without the addition DEEP. Depending on this, the tabular component is assigned as a whole or by component using identical names.
-   The class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm) always resolves tabular components.