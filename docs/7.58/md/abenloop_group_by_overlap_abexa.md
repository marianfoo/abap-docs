  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20in%20Overlaps%2C%20ABENLOOP_GROUP_BY_OVERLAP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

itab - Grouping with LOOP in Overlaps

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") if conditions overlap.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_overlap DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA
      itab TYPE TABLE OF i WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_overlap IMPLEMENTATION.
  METHOD main.
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
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in a similar way to the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_comparison_abexa.htm) for constructions using comparison expressions. The following shows how the result of comparison expressions that overlap depends on the order in which the expressions are evaluated.

In the first group loop,

-   those lines are identified first whose value is less than or equal to 5,
-   then the lines whose value is between 2 and 7,
-   then the lines whose value is greater than 5.

In the second group loop,

-   those lines are identified first whose value is between 2 and 7,
-   then the lines whose value is less than or equal to 5,
-   then the lines whose value is greater than 5.

The result of this is that the lines with the values 3, 4, and 5 are assigned to different groups. The group assignments of the lines would not change, however, even if the internal table were sorted differently.

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_overlap_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.