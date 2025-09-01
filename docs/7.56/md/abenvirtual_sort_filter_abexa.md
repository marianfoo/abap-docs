  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - System Class CL\_ABAP\_ITAB\_UTILITIES](javascript:call_link\('abencl_abap_itab.htm'\)) →  [itab - Examples of Virtual Sorts](javascript:call_link\('abenvirtual_sort_abexas.htm'\)) → 

itab - Virtual Sort with Filter Specified

This example demonstrates the virtual sorting of an internal table with line filtering.

Source Code

REPORT demo\_virtual\_sort\_filter.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES
      itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( rnd->get\_next( ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab ).
    out->next\_section( \`Virtual Sort by table\_line with Filter\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #( ( name = 'table\_line' ) ) ) )
        im\_filter\_index =  VALUE #( ( 1 ) ( 3 ) ( 5 ) ( 7 ) ( 9 ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab TYPE itab.
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    out->write( sorted\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table filled with random numbers is sorted in ascending order by its line content using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES. This passes a table filter\_tab containing the line numbers to be sorted. The returned array contains exactly these line numbers in the sort order. A table sorted\_tab is constructed in this order from the respective lines of itab.