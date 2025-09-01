  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Grouping with LOOP in Group Levels, ABENLOOP_GROUP_BY_LEVELS_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Grouping with LOOP in Group Levels

This example demonstrates simple group level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm).

Source Code   

REPORT demo\_loop\_group\_by\_levels.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES: BEGIN OF line,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
             col3 TYPE i,
           END OF line.
    CLASS-METHODS sum IMPORTING line       TYPE line
                                base       TYPE line
                      RETURNING VALUE(sum) TYPE line.
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
    out->write( itab )->line( ).
    DATA sum   TYPE line.
    DATA total TYPE line.
    DATA group LIKE itab.
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<line>)
                 GROUP BY <line>-col1 ASCENDING.
      CLEAR sum.
      CLEAR group.
      LOOP AT GROUP <line> INTO FINAL(line).
        group = VALUE #( BASE group ( line ) ).
        sum = sum( EXPORTING line = line
                             base = sum ).
      ENDLOOP.
      out->write( group )->line( )->write( sum )->line( ).
      total = sum( EXPORTING line = sum
                             base = total ).
    ENDLOOP.
    total-col1 = '\*'.
    out->line( )->write( total )->display( ).  ENDMETHOD.
  METHOD sum.
    sum = VALUE #( BASE base
                   col1 = line-col1
                   col2 = sum-col2 + line-col2
                   col3 = sum-col3 + line-col3 ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example works in the same way as the executable example for [group level processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenint_table_at_abexa.htm). Here, the [group key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_key_glosry.htm "Glossary Entry") is constructed explicitly using the value of the column col1 and, unlike in group level processing, does not depend on the structure of the table and its sorting.

The statement [SUM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsum.htm) is replaced by a functional method that replaces the implicit behavior of the statement with an explicit and self-definable function.

group and sum could also be filled by the evaluation of a table comprehension or table reduction using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_group.htm):

sum = REDUCE #( INIT s = VALUE line( )
                FOR line IN GROUP <line>
                NEXT s = sum( EXPORTING line = line
                                        base = s ) ).
group = #( FOR <wa> IN GROUP <line> ( <wa> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_group_by_levels_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.