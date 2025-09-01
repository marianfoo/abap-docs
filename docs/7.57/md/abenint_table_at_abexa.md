  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) →  [AT, Group Level Processing](javascript:call_link\('abapat_itab.htm'\)) →  [Examples of Group Level Processing](javascript:call_link\('abenat_itab_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Group Level Processing, ABENINT_TABLE_AT_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Group Level Processing

This example demonstrates group level processing in internal tables.

Source Code   

REPORT demo\_int\_tables\_at.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: BEGIN OF line,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
             col3 TYPE i,
           END OF line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE HASHED TABLE OF line
              WITH UNIQUE KEY col1 col2.
    FINAL(out) = cl\_demo\_output=>new( ).
    itab = VALUE #(
      FOR j = 1 UNTIL j > 3
       ( col1 = 'A'
         col2 = j
         col3 = j \*\* 2 )
       ( col1 = 'B'
         col2 = 2 \* j
         col3 = ( 2 \* j ) \*\* 2 ) ).
    SORT itab.
    out->write( itab )->line( ).
    DATA group LIKE itab.
    LOOP AT itab INTO FINAL(line).
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( line ) ).
      AT END OF col1.
        out->write( group ).
        SUM.
        out->line( )->write( line )->line( ).
      ENDAT.
      AT LAST.
        SUM.
        out->line( )->write( line ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A hashed table itab is created, filled with six lines, and sorted by the primary table key. In the LOOP - ENDLOOP loop, the work area line is used and is displayed for every loop pass. The first field of the primary table key col1 is used for group level processing. The sum of all numeric fields is calculated each time the content of col1 changes and once for the last table line.

The executable example [Grouping in Group Levels](javascript:call_link\('abenloop_group_by_levels_abexa.htm'\)) shows how the same function can be achieved using the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).