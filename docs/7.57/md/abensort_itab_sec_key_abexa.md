  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [SORT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Sorting Internal Tables with Secondary Keys, ABENSORT_ITAB_SEC_KEY_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Sorting Internal Tables with Secondary Keys

This example demonstrates how tables with secondary table keys are sorted.

Source Code   

REPORT demo\_int\_tables\_sort\_sec\_key .
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struct,
            col1 TYPE c LENGTH 1,
            col2 TYPE c LENGTH 1,
          END OF struct.
    DATA itab LIKE STANDARD TABLE OF struct
         WITH NON-UNIQUE KEY col1
         WITH UNIQUE HASHED KEY sec\_key COMPONENTS col2.
    DATA jtab LIKE itab.
    FINAL(out) = cl\_demo\_output=>new( ).
    itab = VALUE #( ( col1 = 'A' col2 = '1' )
                    ( col1 = 'A' col2 = '2' )
                    ( col1 = 'B' col2 = '3' )
                    ( col1 = 'B' col2 = '4' ) ).
    LOOP AT itab INTO struct.
      APPEND struct TO jtab.
    ENDLOOP.
    out->write\_data( jtab ).
    CLEAR jtab.
    SORT itab BY col2 DESCENDING.
    LOOP AT itab INTO struct.
      APPEND struct TO jtab.
    ENDLOOP.
    out->write\_data( jtab ).
    CLEAR jtab.
    LOOP AT itab INTO struct USING KEY sec\_key.
      APPEND struct TO jtab.
    ENDLOOP.
    out->write\_data( jtab ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The table itab has a secondary hash key for the column col2. If the table is sorted in descending order using this column, the primary index is applied accordingly and a LOOP without a key produces the new order. If, however, [USING KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm) is used to specify the secondary hash key in the loop, the table is processed in the order in which it was filled.