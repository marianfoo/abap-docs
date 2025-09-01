  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) →  [AT, Group Level Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_itab.htm) →  [Examples of Group Level Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenat_itab_abexas.htm) → 

Group Level Processing for Unsorted Tables

This example demonstrates group level processing for an unsorted internal table.

Source Code

REPORT demo\_int\_tables\_at\_unsorted.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
      class\_constructor .
  PRIVATE SECTION.
    TYPES: BEGIN OF t\_line,
             col1 TYPE string,
             col2 TYPE string,
           END OF t\_line,
           t\_itab TYPE STANDARD TABLE OF t\_line WITH EMPTY KEY.
    CLASS-DATA itab TYPE t\_itab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    out->begin\_section(
      \`Control Level Processing for Unsorted Table\` ).
    DATA group TYPE t\_itab.
    LOOP AT itab INTO DATA(wa).
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( wa ) ).
      AT END OF col1.
        out->write( group ).
      ENDAT.
    ENDLOOP.
    out->next\_section(
      \`Grouping for Unsorted Table\` ).
    LOOP AT itab INTO wa GROUP BY wa-col1.
      group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).
      out->write( group ).
    ENDLOOP.
    out->begin\_section(
      \`Control Level Processing for Sorted Table\` ).
    SORT itab BY col1 ASCENDING.
    LOOP AT itab INTO wa.
      AT NEW col1.
        CLEAR group.
      ENDAT.
      group = VALUE #( BASE group ( wa ) ).
      AT END OF col1.
        out->write( group ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE t\_itab( ( col1 = \`a\` col2 = \`0\` )
                         ( col1 = \`a\` col2 = \`1\` )
                         ( col1 = \`a\` col2 = \`2\` )
                         ( col1 = \`a\` col2 = \`3\` )
                         ( col1 = \`b\` col2 = \`4\` )
                         ( col1 = \`b\` col2 = \`5\` )
                         ( col1 = \`b\` col2 = \`6\` )
                         ( col1 = \`b\` col2 = \`7\` )
                         ( col1 = \`a\` col2 = \`8\` )
                         ( col1 = \`a\` col2 = \`9\` ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Group level processing using an unsorted internal table with the group key col1. Group breaks result from each change in the content of this column. A grouping using [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) for comparison produces a different result, since it is independent of the sorting of the internal table. Group level processing for the table sorted by col1 has the same result as the grouping.