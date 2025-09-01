---
title: "MOVE-CORRESPONDING for Structures"
description: |
  This example demonstrates the statement MOVE-CORRESPONDING(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) for structures. Source Code REPORT demo_move_corresponding_struct. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. TYPES:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmove_corresponding_struc_abexa.htm"
abapFile: "abenmove_corresponding_struc_abexa.htm"
keywords: ["select", "delete", "do", "if", "method", "class", "data", "types", "abenmove", "corresponding", "struc", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MOVE-CORRESPONDING for Structures, ABENMOVE_CORRESPONDING_STRUC_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

MOVE-CORRESPONDING for Structures

This example demonstrates the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) for structures.

Source Code   

REPORT demo\_move\_corresponding\_struct.
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
      struct1 TYPE        line1,
      struct2 TYPE        line2,
      out     TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      fill\_structures.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    fill\_structures( ).
    out->begin\_section( \`struct1\`
      )->write( struct1
      )->next\_section( \`struct2\`
      )->write( struct2 ).
    out->begin\_section(
      \`MOVE-CORRESPONDING\` ).
    MOVE-CORRESPONDING struct1 TO struct2.
    out->write( struct2
      )->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ).
    MOVE-CORRESPONDING struct1 TO struct2 EXPANDING NESTED TABLES.
    out->write( struct2
      )->display( ).  ENDMETHOD.
  METHOD fill\_structures.
    struct1 = VALUE #(
       col1 = 'a1'
       col2 = 'a2'
       col3 = VALUE #( ( col1 = 'a11'  col2 = 'a12' )
                       ( col1 = 'a21'  col2 = 'a22' ) ) ).
    struct2 = VALUE #(
       col2 = 'x11'
       col3 = VALUE #( ( col2 = 'x11'  col3 = 'x12' )
                       ( col2 = 'x21'  col3 = 'x22' )
                       ( col2 = 'x31'  col3 = 'x32' ) )
       col4 = 'x12'  ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Two structures, struct1 and struct2 are declared using the available additions and [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm) assigns struct1 to struct2.

-   struct1 contains two elementary components, col1 and col2, and a tabular component col3 with the components col1 and col2.
-   struct2 contains two elementary components, col2 and col4, and a tabular component col3 with the components col2 and col3.

The structures are filled with values. For the output, the structured components are resolved to elementary components of an output table, output.

The statement MOVE-CORRESPONDING finds the identically named components col2 and col3 in struct1 and struct2 and the assignments work as follows:

-   MOVE-CORRESPONDING
    
    After the assignment, the components col2 and col3 in struct2 have the same content as in struct1. Component col4 keeps its value.
    
-   MOVE-CORRESPONDING EXPANDING NESTED TABLES
    
    After the assignment, the component col2 in struct2 has the same content as in struc1. col4 preserves its value. The tabular component col3 is resolved and the identically named component col2 is found there. The original content of struct2-col3 is deleted. After the assignment, the column col2 has the same content as in struct1-col3, whereas the column col3 remains initial.