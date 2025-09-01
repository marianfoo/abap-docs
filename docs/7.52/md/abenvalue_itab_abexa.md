---
title: "VALUE - Operator for Internal Tables"
description: |
  This example demonstrates the value operator VALUE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) for internal tables. Source Code REPORT demo_value_constructor_itab. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS de
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_itab_abexa.htm"
abapFile: "abenvalue_itab_abexa.htm"
keywords: ["select", "insert", "do", "if", "method", "class", "data", "types", "internal-table", "abenvalue", "itab", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [VALUE - Value Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) →  [VALUE - Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) → 

VALUE - Operator for Internal Tables

This example demonstrates the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) for internal tables.

Source Code

REPORT demo\_value\_constructor\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
    DATA(itab1) = itab.
    itab1 = VALUE #(  BASE itab1
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab1 ).
    DATA(itab2) = itab.
    itab2 = VALUE #( ( LINES OF itab2 )
                      ( 4 )
                      ( 5 ) ).
    cl\_demo\_output=>write( itab2 ).
    DATA(itab3) = itab.
    itab3 = VALUE #( BASE itab3
                     ( LINES OF itab3 )
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab3 ).
    DATA(itab4) = itab.
    itab4 = VALUE #( LET x = itab4 IN
                     ( LINES OF x )
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab4 ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example shows various effects when using the left side of an assignment in specified rows of the operator VALUE in the construction of internal tables.

-   In the construction of itab1, the left side is used after BASE. Here, the original three rows are passed as a start value before the specified rows are evaluated. Two single rows are then appended to this start value.

-   In the construction of itab2, the left side is initialized before the specified rows are evaluated. This is why no rows are inserted by LINES OF itab2 and the table contains only two single rows.

-   In the construction of itab3, the left side is given its original three rows as a start row using BASE. These rows are then appended again using LINES OF, before the two single rows are appended.

-   In the construction of itab4, the left side is saved in the helper variable x before it is initialized. It is then used in LINES OF. The result is the same as when the left side is used after BASE.