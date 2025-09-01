  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components: Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

MOVE-CORRESPONDING for Structures

This example demonstrates the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) for structures.

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
      fill\_structures,
      display\_structure1,
      display\_structure2.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    fill\_structures( ).
    out->begin\_section( \`struct1\` ).
    display\_structure1( ).
    out->next\_section( \`struct2\` ).
    display\_structure2( ).
    out->begin\_section(
      \`MOVE-CORRESPONDING\` ).
    MOVE-CORRESPONDING struct1 TO struct2.
    display\_structure2( ).
    out->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ).
    MOVE-CORRESPONDING struct1 TO struct2 EXPANDING NESTED TABLES.
    display\_structure2( ).
    out->display( ).  ENDMETHOD.
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
  METHOD display\_structure1.
    DATA:
      BEGIN OF outl,
        col1  TYPE c3,
        col2  TYPE c3,
        col31 TYPE c3,
        col32 TYPE c3,
      END OF outl.
    DATA output LIKE STANDARD TABLE OF outl WITH EMPTY KEY.
    outl-col1 = struct1-col1.
    outl-col2 = struct1-col2.
    LOOP AT struct1-col3 ASSIGNING FIELD-SYMBOL(<col3>).
      outl-col31 = <col3>-col1.
      outl-col32 = <col3>-col2.
      IF sy-tabix > 1.
        CLEAR outl-col1.
        CLEAR outl-col2.
      ENDIF.
      APPEND outl TO output.
    ENDLOOP.
    out->write( output ).
  ENDMETHOD.
  METHOD display\_structure2.
    DATA:
      BEGIN OF outl,
        col2  TYPE c3,
        col32 TYPE c3,
        col33 TYPE c3,
        col4  TYPE c3,
      END OF outl.
    DATA output LIKE STANDARD TABLE OF outl WITH EMPTY KEY.
    outl-col2 = struct2-col2.
    outl-col4 = struct2-col4.
    LOOP AT struct2-col3 ASSIGNING FIELD-SYMBOL(<col3>).
      outl-col32 = <col3>-col2.
      outl-col33 = <col3>-col3.
      IF sy-tabix > 1.
        CLEAR outl-col2.
        CLEAR outl-col4.
      ENDIF.
      APPEND outl TO output.
    ENDLOOP.
    out->write( output ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding_structure.htm'\)) and the available additions are used to declare two structures, struct1 and struct2, and assign them to each other.

-   struct1 contains two elementary components, col1 and col2, and a tabular component col3 with the components col1 and col2.

-   struct2 contains two elementary components, col2 and col4, and a tabular component col3 with the components col2 and col3.

The structures are filled with values. For the output, the structured components are resolved to elementary components of an output table, output.

The statement MOVE-CORRESPONDING finds the identically named components col2 and col3 in struct1 and struct2 and the assignments work as follows:

-   MOVE-CORRESPONDING

After the assignment, the components col2 and col3 in struct2 have the same content as in struct1. Component col4 keeps its value.

-   MOVE-CORRESPONDING EXPANDING NESTED TABLES

After the assignment, the component col2 in struct2 has the same content as in struc1. col4 preserves its value. The tabular component col3 is resolved and the identically named component col2 found there. The original content of struct2-col3 is deleted. After the assignment, the column col2 has the same content as in struct1-col3, whereas the column col3 remains initial.