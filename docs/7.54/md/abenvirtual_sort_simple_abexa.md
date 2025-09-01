  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [System Class for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_itab.htm) →  [Examples of Virtual Sorting of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvirtual_sort_abexas.htm) → 

Virtual Sorting of an Internal Table

This example demonstrates the virtual sorting of a single internal table.

Source Code

REPORT demo\_virtual\_sort\_simple.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
        col4 TYPE string,
      END OF line,
      itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
    DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( col1 = rnd->get\_next( )
                               col2 = rnd->get\_next( )
                               col3 = substring(
                                        val = sy-abcde
                                        off = rnd->get\_next( ) - 1
                                        len = 1 )
                               col4 = substring(
                                        val = sy-abcde
                                        off = rnd->get\_next( ) - 1
                                        len = 1 ) ) ).
    DATA(out) = cl\_demo\_output=>new( ).
    out->write( itab ).
    out->next\_section( \`Virtual Sort by col1, col2, Ascending\` ).
    DATA(v\_index) =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #( ( name = 'col1' )
                                 ( name = 'col2' ) ) ) ) ).
    out->write( v\_index ).
    DATA sorted\_tab TYPE itab.
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    DATA(test\_tab) = itab.
    SORT test\_tab STABLE BY col1 col2.
    ASSERT sorted\_tab = test\_tab.
    out->write( sorted\_tab ).
    out->next\_section( \`Virtual Sort by col3, col4, Descending\` ).
    v\_index =
      cl\_abap\_itab\_utilities=>virtual\_sort(
        im\_virtual\_source = VALUE #(
         ( source     = REF #( itab )
           components = VALUE #(
                         ( name = 'col3'
                           astext = abap\_true
                           descending = abap\_true )
                         ( name = 'col4'
                           astext = abap\_true
                           descending = abap\_true ) ) ) ) ).
    out->write( v\_index ).
    sorted\_tab = VALUE #( FOR idx IN v\_index ( itab\[ idx \] ) ).
    test\_tab = itab.
    SORT test\_tab STABLE BY col3 AS TEXT DESCENDING
                            col4 AS TEXT DESCENDING.
    ASSERT sorted\_tab = test\_tab.
    out->write( sorted\_tab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table filled with random numbers and letters is sorted virtually using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES, first in ascending order by the first two columns and then in descending alphabetical order by the last two columns. The returned array contains the row numbers in the respective sort order. This array is used to fill an internal table sorted\_tab according to the sorting. To compare, an internal table test\_tab with the same content is constructed and sorted with the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm). The results are the same in both cases.