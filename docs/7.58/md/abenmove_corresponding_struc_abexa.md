  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MOVE-CORRESPONDING%20for%20Structures%2C%20ABENMOVE_CORRESPONDING_STRUC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

MOVE-CORRESPONDING for Structures

This example demonstrates the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) for structures.

Source Code   

\* Public class definition
CLASS cl\_demo\_move\_crrspndng\_struct DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
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
    DATA:
      struct1 TYPE        line1,
      struct2 TYPE        line2.
    METHODS:
      fill\_structures.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_move\_crrspndng\_struct IMPLEMENTATION.
  METHOD main.
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
    out->write( struct2 ).
  ENDMETHOD.
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

Description   

Two structures, struct1 and struct2 are declared using the available additions and [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) assigns struct1 to struct2.

-   struct1 contains two elementary components, col1 and col2, and a tabular component col3 with the components col1 and col2.
-   struct2 contains two elementary components, col2 and col4, and a tabular component col3 with the components col2 and col3.

The structures are filled with values. For the output, the structured components are resolved to elementary components of an output table, output.

The statement MOVE-CORRESPONDING finds the identically named components col2 and col3 in struct1 and struct2 and the assignments work as follows:

-   MOVE-CORRESPONDING
    
    After the assignment, the components col2 and col3 in struct2 have the same content as in struct1. Component col4 keeps its value.
    
-   MOVE-CORRESPONDING EXPANDING NESTED TABLES
    
    After the assignment, the component col2 in struct2 has the same content as in struc1. col4 preserves its value. The tabular component col3 is resolved and the identically named component col2 is found there. The original content of struct2-col3 is deleted. After the assignment, the column col2 has the same content as in struct1-col3, whereas the column col3 remains initial.