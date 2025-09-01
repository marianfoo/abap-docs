  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20in%20Group%20Levels%2C%20ABENLOOP_GROUP_BY_LEVELS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

itab - Grouping with LOOP in Group Levels

This example demonstrates simple group level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_levels DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    TYPES: BEGIN OF line,
             col1 TYPE c LENGTH 1,
             col2 TYPE i,
             col3 TYPE i,
           END OF line.
    METHODS sum IMPORTING line       TYPE line
                                base       TYPE line
                      RETURNING VALUE(sum) TYPE line.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_levels IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE HASHED TABLE OF line
              WITH UNIQUE KEY col1 col2.
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
    out->line( )->write( total ).
  ENDMETHOD.
  METHOD sum.
    sum = VALUE #( BASE base
                   col1 = line-col1
                   col2 = sum-col2 + line-col2
                   col3 = sum-col3 + line-col3 ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the executable example for [group level processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenint_table_at_abexa.htm). Here, the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") is constructed explicitly using the value of the column col1 and, unlike in group level processing, does not depend on the structure of the table and its sorting.

The statement [SUM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsum.htm) is replaced by a functional method that replaces the implicit behavior of the statement with an explicit and self-definable function.

group and sum could also be filled by the evaluation of a table comprehension or table reduction using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group.htm):

sum = REDUCE #( INIT s = VALUE line( )
                FOR line IN GROUP <line>
                NEXT s = sum( EXPORTING line = line
                                        base = s ) ).
group = #( FOR <wa> IN GROUP <line> ( <wa> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_group_by_levels_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.