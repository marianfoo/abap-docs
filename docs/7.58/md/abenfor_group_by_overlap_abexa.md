  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20in%20Overlaps%2C%20ABENFOR_GROUP_BY_OVERLAP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

itab - Grouping with FOR in Overlaps

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") if conditions overlap.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_overlap DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES
      i\_tab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA
      itab TYPE i\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_overlap IMPLEMENTATION.
  METHOD main.
    TYPES ot TYPE REF TO if\_demo\_output.
    out->begin\_section( \`LE 5, BT 3 AND 7, GT 5\` ).
    out = REDUCE #(
      INIT ol TYPE ot
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa <= 5 THEN \`LE 5\`
                                  WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa >  5 THEN \`GT 5\` )
      LET members = VALUE i\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT ol = out->begin\_section( <group>
               )->write( members )->end\_section( ) ).
    out->next\_section( \`BT 3 AND 7, LE 5, GT 5\` ).
    out = REDUCE #(
      INIT ol TYPE ot
      FOR GROUPS <group> OF wa IN itab
            GROUP BY COND string( WHEN wa BETWEEN 3 AND 7
                                               THEN \`BT 3 AND 7\`
                                  WHEN wa <= 5 THEN \`LE 5\`
                                               ELSE \`GT 5\` )
      LET members = VALUE i\_tab(
                       FOR <member> IN GROUP <group> ( <member> ) )
      IN NEXT ol = out->begin\_section( <group>
                  )->write( members )->end\_section( ) ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_overlap_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_overlap_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry").