  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) → 

itab - Insert Lines

This example demonstrates how lines are inserted into internal tables.

Source Code

REPORT demo\_int\_tables\_insert.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    TYPES: BEGIN OF line,
             col1 TYPE i,
             col2 TYPE i,
           END OF line.
    DATA: itab  TYPE TABLE OF line WITH EMPTY KEY,
          jtab  LIKE itab,
          itab1 TYPE TABLE OF line WITH EMPTY KEY,
          jtab1 LIKE itab,
          itab2 TYPE TABLE OF line WITH EMPTY KEY,
          jtab2 TYPE SORTED TABLE OF line
                WITH NON-UNIQUE KEY col1 col2.
    itab = VALUE #( FOR i = 1 UNTIL i > 3
                   ( VALUE #( col1 = i col2 = i \*\* 2 ) ) ).
    out->write( itab ).
    jtab = VALUE #( FOR i = 1 UNTIL i > 3
                   ( VALUE #( col1 = i col2 = i \*\* 3 ) ) ).
    out->write( jtab ).
    "Insert a single line into an index table
    itab1 = itab.
    INSERT VALUE #( col1 = 11 col2 = 22 ) INTO itab1 INDEX 2.
    INSERT INITIAL LINE INTO itab1 INDEX 1.
    out->write( itab1 ).
    "Insert lines into an index table with LOOP
    itab1 = itab.
    LOOP AT itab1 ASSIGNING FIELD-SYMBOL(<line>).
      INSERT VALUE #( col1 = 3 \* sy-tabix col2 = 5 \* sy-tabix )
             INTO itab1.
    ENDLOOP.
    out->write( itab1 ).
    "Insert lines into an index table
    itab1 = itab.
    jtab1 = jtab.
    INSERT LINES OF itab1 INTO jtab1 INDEX 1.
    out->write( jtab1 ).
    "Insert lines into a sorted table
    itab2 = itab.
    jtab2 = jtab.
    INSERT LINES OF itab2 INTO TABLE jtab2.
    out->write( jtab2 ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example is consists of four parts where lines are inserted in different ways. First, two internal tables, itab and jtab, are filled with squared and cubic numbers. These are also used to reset the tables above to their initial values, using an assignment, between the individual parts of the example.

-   In the first part, a new line is inserted in front of the second line and a line with initial values is inserted in front of the first line.
-   Next, using a LOOP, a new line is inserted before each existing line.
-   In the third part, the whole of the table itab1 is inserted in front of the first line of jtab1.
-   In the final part, the whole of the table itab2 is inserted into the sorted table jtab2.