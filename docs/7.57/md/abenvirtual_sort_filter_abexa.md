  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - System Class CL\_ABAP\_ITAB\_UTILITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_itab.htm) →  [itab - Examples of Virtual Sorts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvirtual_sort_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Virtual Sort with Filter Specified, ABENVIRTUAL_SORT_FILTER_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    FINAL(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( rnd->get\_next( ) ) ).
    FINAL(out) = cl\_demo\_output=>new( ).
    out->write( itab ).
    out->next\_section( \`Virtual Sort by table\_line with Filter\` ).
    FINAL(v\_index) =
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