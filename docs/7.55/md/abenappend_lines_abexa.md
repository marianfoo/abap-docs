  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [APPEND](javascript:call_link\('abapappend.htm'\)) → 

itab - Appending Lines

This example demonstrates how lines can be appended to internal tables.

Source Code

REPORT demo\_int\_tables\_append.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Part 1
    TYPES: BEGIN OF wa,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
           END OF wa.
    DATA wa\_tab TYPE TABLE OF wa WITH EMPTY KEY.
    DO 3 TIMES.
      APPEND INITIAL LINE TO wa\_tab.
      APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO wa\_tab.
    ENDDO.
    out->write\_data( wa\_tab
      )->line( ).
    "Part 2
    TYPES: BEGIN OF line1,
             col1 TYPE c LENGTH 3,
             col2 TYPE n LENGTH 2,
             col3    TYPE i,
           END OF line1,
           BEGIN OF line2,
             field1 TYPE c LENGTH 1,
             field2 TYPE TABLE OF line1 WITH EMPTY KEY,
           END OF line2.
    DATA: tab1 TYPE TABLE OF line1 WITH EMPTY KEY,
          tab2 TYPE TABLE OF line2 WITH EMPTY KEY.
    APPEND VALUE #( col1 = 'abc' col2 = '12' col3 = 3 ) TO tab1.
    APPEND VALUE #( col1 = 'def' col2 = '34' col3 = 5 ) TO tab1.
    APPEND VALUE #( field1 = 'A' field2 = tab1 ) TO tab2.
    CLEAR tab1.
    APPEND VALUE #( col1 = 'ghi' col2 = '56' col3 = 7 ) TO tab1.
    APPEND VALUE #( col1 = 'jkl' col2 = '78' col3 = 9 ) TO tab1.
    APPEND VALUE #( field1 = 'B' field2 = tab1 ) TO tab2.
    LOOP AT tab2 ASSIGNING FIELD-SYMBOL(<line2>).
      out->write\_data( <line2>-field1 ).
      out->write\_data( <line2>-field2 ).
    ENDLOOP.
    out->line( ).
    "Part 3
    TYPES: BEGIN OF line,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
           END OF line.
    DATA: itab TYPE TABLE OF line WITH EMPTY KEY,
          jtab LIKE itab.
    DO 3 TIMES.
      APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 2 ) TO itab.
      APPEND VALUE #( col1 = sy-index col2 = sy-index \*\* 3 ) TO jtab.
    ENDDO.
    APPEND LINES OF jtab FROM 2 TO 3 TO itab.
    out->write\_data( itab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example has three parts:

-   In the first part, the internal table wa\_tab is created with two columns and filled in the loop DO. In each pass of the loop, a line with initial values is appended, then a structure of the line type is constructed and appended from the loop index and the square of the loop index.

-   In the second part, two internal tables tab1 and tab2 are created. tab2 has a deep structure, since the second component of the line type has the data type of the table tab1. Structures of the line type line1 are appended to tab1. After this, a structure with the line type line2 is constructed and appended to tab2. After tab1 has been initialized using the statement CLEAR, the same process is repeated.

-   In the final part, two lines of the internal table jtab are appended to the internal table itab using the statement APPEND and the addition LINES OF.

Hint

It could be better to use the value operator [VALUE for internal tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) instead of using APPEND VALUE #( ... ) shown here.