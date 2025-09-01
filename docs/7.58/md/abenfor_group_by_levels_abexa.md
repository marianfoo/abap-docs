  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20in%20Group%20Levels%2C%20ABENFOR_GROUP_BY_LEVELS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

itab - Grouping with FOR in Group Levels

This example demonstrates simple group level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm) in a FOR expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_levels DEFINITION
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
           END OF line,
           i\_tab TYPE HASHED TABLE OF line
                 WITH UNIQUE KEY col1 col2.
    METHODS sum IMPORTING line       TYPE line
                          base       TYPE line
                RETURNING VALUE(sum) TYPE line.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_levels IMPLEMENTATION.
  METHOD main.
    DATA itab TYPE i\_tab.
    itab = VALUE #(
      FOR j = 1 UNTIL j > 3
       ( col1 = 'A'
         col2 = j
         col3 = j \*\* 2 )
       ( col1 = 'B'
         col2 = 2 \* j
         col3 = ( 2 \* j ) \*\* 2 ) ).
    out->write( itab )->line( ).
    FINAL(total) = REDUCE line(
      INIT t = VALUE line( )
      FOR GROUPS OF <line> IN itab GROUP BY <line>-col1 ASCENDING
      LET sum = REDUCE line( INIT s = VALUE line( )
                             FOR line IN GROUP <line>
                             NEXT s = sum( EXPORTING line = line
                                                     base = s ) )
          group = VALUE i\_tab( FOR <wa> IN GROUP <line> ( <wa> ) )
          o1 = out->write( group )->line( )->write( sum )->line( ) IN
      NEXT t = sum( EXPORTING
                      line = VALUE line( BASE sum col1 = '\*' )
                      base = t ) ).
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

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_levels_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a structure to which the total of the numeric columns is written. The subtotals and the group members are written to the local helper variables sum and members using a further table reduction and a [table comprehension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry"). This table reduction table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_levels_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry").