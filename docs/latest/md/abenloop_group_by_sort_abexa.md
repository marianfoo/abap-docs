  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20and%20Sort%2C%20ABENLOOP_GROUP_BY_SORT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

itab - Grouping with LOOP and Sort

This example demonstrates how groupings are used for sorts.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_sort DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_sort IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    FINAL(itab) =
      VALUE itab( ( \`d\` ) ( \`B\` ) ( \`D\` ) ( \`b\` ) ( \`a\` )
                  ( \`D\` ) ( \`a\` ) ( \`C\` ) ( \`A\` ) ( \`c\` ) ).
    out->write( itab ).
    DATA jtab TYPE itab.
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<line>)
                 GROUP BY to\_upper( <line> ) ASCENDING
                 ASSIGNING FIELD-SYMBOL(<grp1>).
      LOOP AT GROUP <grp1> ASSIGNING FIELD-SYMBOL(<mbr1>)
              GROUP BY <mbr1> DESCENDING
              ASSIGNING FIELD-SYMBOL(<grp2>).
        jtab = VALUE #( BASE jtab
                        FOR <mbr2> IN GROUP <grp2> ( <mbr2> ) ).
      ENDLOOP.
    ENDLOOP.
    out->write( jtab ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, the additions ASCENDING and DESCENDING of [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) are used to sort a character-like table first while ignoring case and then sort within the groups to separate uppercase from lowercase. A further [executable example](javascript:call_link\('abenfor_group_by_sort_abexa.htm'\)) shows how the LOOP statements can be replaced by a single expression.