  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Grouping with FOR for Sorts, ABENFOR_GROUP_BY_SORT_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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
    FINAL(itab) =
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

This example works in the same way as the [executable example](javascript:call_link\('abenloop_group_by_sort_abexa.htm'\)) for sorts across groupings using LOOP. Here, all groupings are collected in a single expression using three [FOR expressions](javascript:call_link\('abenfor_groups_of.htm'\)).