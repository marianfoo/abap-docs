  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP in Control Levels

This example demonstrates simple control level processing using [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).

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
    DATA(out) = cl\_demo\_output=>new( ).
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
      LOOP AT GROUP <line> INTO DATA(line).
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

This example works in the same way as the executable example for [control level processing](javascript:call_link\('abenint_table_at_abexa.htm'\)). Here, the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") is constructed explicitly using the value of the column col1 and, unlike in control level processing, does not depend on the structure of the table and its sorting.

The statement [SUM](javascript:call_link\('abapsum.htm'\)) is replaced by a functional method that replaces the implicit behavior of the statement with an explicit and self-defined function.

group and sum could also be filled by the evaluation of a table comprehension or table reduction using [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)), instead of in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)):

sum = REDUCE #( INIT s = VALUE line( )
                FOR line IN GROUP <line>
                NEXT s = sum( EXPORTING line = line
                                        base = s ) ).
group = #( FOR <wa> IN GROUP <line> ( <wa> ) ).

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_levels_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.