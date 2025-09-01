  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP and Sort

This example demonstrates how groupings are used for sorts.

Source Code

REPORT demo\_loop\_group\_by\_sort.
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
    cl\_demo\_output=>display( jtab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the additions ASCENDING and DESCENDING of [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) are used to sort a character-like table while ignoring case and then sort within the groups to split uppercase and lowercase. A further [executable example](javascript:call_link\('abenfor_group_by_sort_abexa.htm'\)) shows how the LOOPs can be replaced by a single expression.