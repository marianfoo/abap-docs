  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - System Class CL\_ABAP\_ITAB\_UTILITIES](javascript:call_link\('abencl_abap_itab.htm'\)) →  [itab - Examples of Virtual Sorts](javascript:call_link\('abenvirtual_sort_abexas.htm'\)) → 

itab - Virtual Sort of Two Tables

This example demonstrates the virtual sorting of two internal tables.

Source Code

REPORT demo\_virtual\_sort\_combined.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line1,
        col1 TYPE i,
        col2 TYPE i,
      END OF line1,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      BEGIN OF line2,
        col1 TYPE string,
        col2 TYPE string,
      END OF line2,
      itab2 TYPE STANDARD TABLE OF line2 WITH EMPTY KEY.
    TYPES:
      BEGIN OF test\_line,
        col11 TYPE i,
        col12 TYPE i,
        col21 TYPE string,
        col22 TYPE string,
      END OF test\_line,
      test\_tab TYPE STANDARD TABLE OF test\_line WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 0
                                            max  = 1 ).
    DATA(itab1) = VALUE itab1( FOR i = 1 UNTIL i > 10
                               ( col1 = rnd->get\_next( )
                                 col2 = rnd->get\_next( ) ) ).
    DATA(itab2) =
      VALUE itab2( FOR i = 1 UNTIL i > 10
        ( col1 = cond #( when rnd->get\_next( ) = 0 THEN \`X\`
                                                   ELSE \`Y\` )
          col2 = cond #( when rnd->get\_next( ) = 0 THEN \`X\`
                                                   ELSE \`Y\` ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab1
      )->write( itab2 ).
    out->next\_section(  \`Virtual Sort of Combined Tables\`
      )->begin\_section( \`itab1 by col1, col2, Ascending\`
      )->next\_section(  \`itab2 by col1, col2, Descending\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab1 )
           components = VALUE #( ( name = 'col1' )
                                 ( name = 'col2' ) ) )
         ( source     = REF #( itab2 )
           components = VALUE #( ( name = 'col1'
                                   astext = abap\_true
                                   descending = abap\_true )
                                 ( name = 'col2'
                                   astext = abap\_true
                                   descending = abap\_true ) ) ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab1 TYPE itab1.
    sorted\_tab1 = VALUE #( FOR idx IN v\_index ( itab1\[ idx \] ) ).
    DATA sorted\_tab2 TYPE itab2.
    sorted\_tab2 = VALUE #( FOR idx IN v\_index ( itab2\[ idx \] ) ).
    DATA(comb\_tab) = VALUE test\_tab( FOR i = 1 UNTIL i > 10
                        ( col11 = sorted\_tab1\[ i \]-col1
                          col12 = sorted\_tab1\[ i \]-col2
                          col21 = sorted\_tab2\[ i \]-col1
                          col22 = sorted\_tab2\[ i \]-col2 ) ).
    DATA(test\_tab) = VALUE test\_tab( FOR i = 1 UNTIL i > 10
                        ( col11 = itab1\[ i \]-col1
                          col12 = itab1\[ i \]-col2
                          col21 = itab2\[ i \]-col1
                          col22 = itab2\[ i \]-col2 ) ).
    SORT test\_tab STABLE BY col11
                            col12
                            col21 DESCENDING AS TEXT
                            col22 DESCENDING AS TEXT.
    ASSERT comb\_tab = test\_tab.
    out->write( comb\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table itab1 containing random numbers and an internal table itab2 containing random letters are sorted together virtually using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES, which sorts both columns of itab1 in ascending order and both columns of itab2 in descending alphabetical order. The returned array contains the line numbers in the sort order. This array is used to fill the internal table comb\_tab, combined from the columns of the involved tables, according to the sorting. For comparison, another combined table test\_tab, with the content from itab1 and itab2, is constructed and sorted using the statement [SORT](javascript:call_link\('abapsort_itab.htm'\)). The results are the same. However, in a real example the combined tables are not usually of interest. See the executable example [Virtual Sorting of Flight Data](javascript:call_link\('abenvirtual_sort_flights_abexa.htm'\)).