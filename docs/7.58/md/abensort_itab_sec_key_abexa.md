  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [SORT itab](javascript:call_link\('abapsort_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Sorting%20Internal%20Tables%20with%20Secondary%20Keys%2C%20ABENSORT_ITAB_SEC_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

Sorting Internal Tables with Secondary Keys

This example demonstrates how tables with secondary table keys are sorted.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_sort\_sec\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_sort\_sec\_key IMPLEMENTATION.
  METHOD main.
    DATA: BEGIN OF struct,
            col1 TYPE c LENGTH 1,
            col2 TYPE c LENGTH 1,
          END OF struct.
    DATA itab LIKE STANDARD TABLE OF struct
         WITH NON-UNIQUE KEY col1
         WITH UNIQUE HASHED KEY sec\_key COMPONENTS col2.
    DATA jtab LIKE itab.
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
  ENDMETHOD.
ENDCLASS.

Description   

The table itab has a secondary hash key for the column col2. If the table is sorted in descending order using this column, the primary index is applied accordingly and a LOOP without a key produces the new order. If, however, [USING KEY](javascript:call_link\('abaploop_at_itab_cond.htm'\)) is used to specify the secondary hash key in the loop, the table is processed in the order in which it was filled.