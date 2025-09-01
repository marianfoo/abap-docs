  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) →  [DELETE itab, duplicates](javascript:call_link\('abapdelete_duplicates.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Deleting%20Duplicate%20Lines%2C%20ABENDELETE_DUP_LINES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

itab - Deleting Duplicate Lines

This example demonstrates how adjacent duplicate lines in internal tables can be deleted.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_delete\_adjcnt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_delete\_adjcnt IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF line,
            col1 TYPE i,
            col2 TYPE c LENGTH 1,
          END OF line.
    DATA itab LIKE STANDARD TABLE OF line
              WITH NON-UNIQUE KEY col2.
    itab = VALUE #( ( col1 = 1 col2 = 'A' )
                    ( col1 = 1 col2 = 'A' )
                    ( col1 = 1 col2 = 'B' )
                    ( col1 = 2 col2 = 'B' )
                    ( col1 = 3 col2 = 'B' )
                    ( col1 = 4 col2 = 'B' )
                    ( col1 = 5 col2 = 'A' ) ).
    FINAL(o) = out->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab COMPARING ALL FIELDS.
    out->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab COMPARING col1.
    out->write\_data( itab ).
    DELETE ADJACENT DUPLICATES FROM itab.
    out->write\_data( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

The method main creates and fills a standard table. The first DELETE statement deletes the second line since it has the same content as the first line. The second DELETE statement deletes the second line from the remaining table since the content of the field col1 is the same as in the first line. The third DELETE statement deletes the third and fourth lines of the remaining table since the content of the key field col2 is the same as in the second line. Although the content of the key fields for the first and fifth lines is the same, the fifth line is not deleted because it is not adjacent to the first line.