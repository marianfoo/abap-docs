  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - System Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_system_classes.htm) →  [itab - System Class CL\_ABAP\_ITAB\_UTILITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_itab.htm) →  [itab - Examples of Virtual Sorts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvirtual_sort_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Virtual%20Sort%20with%20Filter%20Specified%2C%20ABENVIRTUAL_SORT_FILTER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

itab - Virtual Sort with Filter Specified

This example demonstrates the virtual sorting of an internal table with line filtering.

Source Code   

\* Public class definition
CLASS cl\_demo\_virtual\_sort\_filter DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_virtual\_sort\_filter IMPLEMENTATION.
  METHOD main.
    TYPES
      itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 10 ).
    FINAL(itab) = VALUE itab( FOR i = 1 UNTIL i > 10
                             ( rnd->get\_next( ) ) ).
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
  ENDMETHOD.
ENDCLASS.

Description   

An internal table filled with random numbers is sorted in ascending order by its line content using the method VIRTUAL\_SORT of system class CL\_ABAP\_ITAB\_UTILITIES. This passes a table filter\_tab containing the line numbers to be sorted. The returned array contains exactly these line numbers in the sort order. A table sorted\_tab is constructed in this order from the respective lines of itab.