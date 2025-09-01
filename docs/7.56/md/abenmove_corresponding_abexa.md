  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_abexas.htm) → 

MOVE-CORRESPONDING for Internal Tables

This example demonstrates the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding.htm) for internal tables.

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
      fill\_tables.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA buffer LIKE itab2.
    out = cl\_demo\_output=>new( ).
    fill\_tables( ).
    out->begin\_section( \`itab1\`
      )->write( itab1
      )->next\_section( \`itab2\`
      )->write( itab2 ).
    buffer = itab2.
    out->begin\_section(
      \`MOVE-CORRESPONDING\` ).
    MOVE-CORRESPONDING itab1 TO itab2.
    out->write( itab2 ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING KEEPING TARGET LINES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 KEEPING TARGET LINES.
    out->write( itab2 ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 EXPANDING NESTED TABLES.
    out->write( itab2 ).
    itab2 = buffer.
    out->next\_section(
      \`MOVE-CORRESPONDING EXPANDING NESTED TABLES \` &&
      \`KEEPING TARGET LINES\` ).
    MOVE-CORRESPONDING itab1 TO itab2 EXPANDING NESTED TABLES
                                      KEEPING TARGET LINES.
    out->write( itab2 )->display( ).  ENDMETHOD.
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Two structures, struct1 and struct2 are declared using the available additions and [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm) assigns struct1 to struct2.

-   itab1 contains two elementary components, col1 and col2, and a tabular component col3 with the components col1 and col2.
-   itab2 contains two elementary components, col2 and col4, and a tabular component col3 with the components col2 and col3.

The internal tables are filled with values. For the output, the structured components are resolved to elementary components of an output table, output.

The statement MOVE-CORRESPONDING finds the identically named components col2 and col3 in itab1 and itab2 and the assignments work as follows:

-   MOVE-CORRESPONDING
    
    The original content of itab2 is deleted. After the assignment, the columns col2 and col3 have the same content as in itab1, whereas col4 remains initial.
    
-   MOVE-CORRESPONDING KEEPING TARGET LINES
    
    The original content of itab2 is preserved. Three new lines are added in which the columns col2 and col3 have the same content as in itab1, whereas col4 remains initial.
    
-   MOVE-CORRESPONDING EXPANDING NESTED TABLES
    
    The original content of itab2 is deleted. After the assignment, the column col2 has the same content as in itab1 and col4 remains initial. The tabular component col3 is resolved and the identically named component col2 is found there. The original content of itab2-col3 is deleted. After the assignment, the column col2 has the same content as in itab1-col3, whereas the column col3 remains initial.
    
-   MOVE-CORRESPONDING EXPANDING NESTED TABLES KEEPING TARGET LINES
    
    The original content of itab2 is preserved. Three new lines are added, to which the same applies as to the results of the previous assignment.