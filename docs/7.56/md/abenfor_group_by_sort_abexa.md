  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_grouping_abexas.htm) → 

itab - Grouping with FOR for Sorts

This example demonstrates sorts with FOR expressions.

Source Code

REPORT demo\_for\_groups\_by\_sort.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    DATA(itab) =
      VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` )
                  ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ).
    cl\_demo\_output=>write( itab ).
    DATA jtab TYPE itab.
    jtab = VALUE #( FOR GROUPS <grp1> OF <line> IN itab
                        GROUP BY to\_upper( <line> ) ASCENDING
                    FOR GROUPS <grp2> OF <mbr1> IN GROUP <grp1>
                        GROUP BY <mbr1> DESCENDING
                    FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
    cl\_demo\_output=>display( jtab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_sort_abexa.htm) for sorts across groupings using LOOP. Here, all groupings are collected in a single expression using three [FOR expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor_groups_of.htm).