  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of an Internal Table with Filters

This example demonstrates the virtual sorting of an internal table with row filtering.

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

An internal table filled with random numbers is sorted in ascending order by its row content using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES. This passes a table filter\_tab containing the row numbers to be sorted. The returned array contains exactly these row numbers in the sort order. A table sorted\_tab is constructed in this order from the respective rows of itab.