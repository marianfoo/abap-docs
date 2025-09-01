  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) →  [itab - Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20for%20Sorts%2C%20ABENFOR_GROUP_BY_SORT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

itab - Grouping with FOR for Sorts

This example demonstrates sorts with FOR expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_sort DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_sort IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    FINAL(itab) =
      VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` )
                  ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ).
    out->write( itab ).
    DATA jtab TYPE itab.
    jtab = VALUE #( FOR GROUPS <grp1> OF <line> IN itab
                        GROUP BY to\_upper( <line> ) ASCENDING
                    FOR GROUPS <grp2> OF <mbr1> IN GROUP <grp1>
                        GROUP BY <mbr1> DESCENDING
                    FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
    out->write( jtab ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the [executable example](javascript:call_link\('abenloop_group_by_sort_abexa.htm'\)) for sorts across groupings using LOOP. Here, all groupings are collected in a single expression using three [FOR expressions](javascript:call_link\('abenfor_groups_of.htm'\)).