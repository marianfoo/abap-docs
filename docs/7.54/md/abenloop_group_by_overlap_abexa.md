  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP in Overlaps

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") if conditions overlap.

Source Code

REPORT demo\_group\_by\_overlap.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA
      itab TYPE TABLE OF i WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA members LIKE itab.
    out->begin\_section( \`LE 5, BT 2 AND 7, GT 5\` ).
    LOOP AT itab INTO DATA(wa)
         GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\`
                               WHEN wa >  2 AND
                                    wa <= 7 THEN \`BT 2 AND 7\`
                               WHEN wa >  5 THEN \`GT 5\` )
                 ASSIGNING FIELD-SYMBOL(<group>).
      out->begin\_section( <group> ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING FIELD-SYMBOL(<wa>).
        members = VALUE #( BASE members ( <wa> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`BT 2 AND 7, LE 5, GT 5\` ).
    LOOP AT itab INTO wa
         GROUP BY COND string( WHEN wa >  2 AND
                                    wa <= 7 THEN \`BT 2 AND 7\`
                               WHEN wa <= 5 THEN \`LE 5\`
                               WHEN wa >  5 THEN \`GT 5\` )
                 ASSIGNING <group>.
      out->begin\_section( <group> ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING <wa>.
        members = VALUE #( BASE members ( <wa> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in a similar way to the [executable example](javascript:call_link\('abenloop_group_by_comparison_abexa.htm'\)) for constructions using comparison expressions. The following shows how the result depends on the order in which expressions are evaluated if the comparison expressions overlap.

In the first group loop,

-   those rows are identified first whose value is less than or equal to 5,

-   then the rows whose value is between 2 and 7,

-   then the rows whose value is greater than 5.

In the second group loop,

-   those rows are identified first whose value is between 2 and 7,

-   then the rows whose value is less than or equal to 5,

-   then the rows whose value is greater than 5.

The result of this is that the rows with the values 3, 4, and 5 are assigned to different groups. The groups of the rows would not change, however, even if the internal table were sorted differently.

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_overlap_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.