  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) → 

Internal Tables, Inserting Rows

This example demonstrates how rows are inserted into internal tables.

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

This example is made up of four parts, in which rows are inserted in different ways. First, two internal tables, itab and jtab, are filled with squared and cubed numbers. These are also used to reset the tables above to their initial values, using an assignment, between the individual parts of the example.

-   In the first part, a new row is inserted before the second row and a row with initial values is inserted before the first row.

-   Next, using a LOOP, a new row is inserted before each existing row.

-   In the third part, the whole of the table itab1 is inserted before the first row of jtab1.

-   In the final part, the whole of the table itab2 is inserted into the sorted table jtab2.