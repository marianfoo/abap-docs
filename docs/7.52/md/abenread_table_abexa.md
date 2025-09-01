  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) →  [READ TABLE - result](javascript:call_link\('abapread_table_outdesc.htm'\)) → 

Internal Tables, Output Area

This example demonstrates how, and where to, the row contents of internal tables are read.

Source Code

REPORT demo\_read\_table\_result.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF line,
            col1 TYPE i,
            col2 TYPE i,
          END OF line.
    DATA itab LIKE SORTED TABLE OF line WITH UNIQUE KEY col1.
    DATA subrc TYPE sy-subrc.
    DATA tabix TYPE sy-tabix.
    FIELD-SYMBOLS <fs> LIKE LINE OF itab.
    DATA(out) = cl\_demo\_output=>new( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 4
            ( col1 = j col2 = j \*\* 2 ) ).
    out->write\_data( itab )->line( ).
\* INTO line COMPARING
    line-col1 = 2.
    line-col2 = 3.
    READ TABLE itab FROM line INTO line COMPARING col2.
    subrc = sy-subrc.
    out->write( |sy-subrc: { subrc }| ).
    out->write\_data( line )->line( ).
\* INTO line TRANSPORTING
    CLEAR line.
    READ TABLE itab WITH TABLE KEY col1 = 3
                    INTO line TRANSPORTING col2.
    subrc = sy-subrc.
    tabix = sy-tabix.
    out->write( |sy-subrc: { subrc }|
      )->write( |sy-tabix: { tabix }|
      )->write\_data( line
      )->line( ).
\* TRANSPORTING NO FIELDS
    READ TABLE itab WITH KEY col2 = 16  TRANSPORTING NO FIELDS.
    subrc = sy-subrc.
    tabix = sy-tabix.
    out->write( |sy-subrc: { subrc }|
      )->write( |sy-tabix: { tabix }|
      )->line( ).
\* ASSIGNING
    READ TABLE itab WITH TABLE KEY col1 = 2 ASSIGNING <fs>.
    <fs>-col2 = 100.
    out->write\_data( itab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Four alternatives for output behaviour during the reading of internal tables are shown. First a sorted table is filled with a list of square numbers.

In the first alternative, the work area line, which is compatible with the row type, is filled with the numbers 2 and 3. Using the READ statement the rows of the table are found, in which the keyfield col1 has the same contents as the work area, and these are then copied. sy-subrc is two because different numbers were found during the comparison of field col2.

In the second alternative, the READ statement is used to read those rows in which the keyfield col1 has the value 3. Only the content of col2 is copied to the work area line. sy-subrc has the value zero and sy-tabix is three because itab is an index table.

In the third alternative, the READ statement is used to find the rows of the table in which col2 is 16. The primary table key is not used. No fields are copied to the work area and no rows are assigned a field symbol. Only system fields are set. sy-subrc is zero because a row has been found and sy-tabix is four.

In the READ statement of the final alternative, the rows of the table are read in which the keyfield col1 has the value 2 and are then assigned to the field symbol <fs>. The component col2 of <fs> is assigned the value 100. This also changes the corresponding field of the table.