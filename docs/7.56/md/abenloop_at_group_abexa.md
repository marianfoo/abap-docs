  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_abexas.htm) → 

itab - Grouping with LOOP, Output Behavior

This example demonstrates the different output behavior in groupings of internal tables.

Source Code

REPORT demo\_loop\_at\_group\_syntax.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    TYPES:
      BEGIN OF struct,
        key1 TYPE string,
        key2 TYPE string,
        col  TYPE i,
      END OF struct,
      itab TYPE STANDARD TABLE OF struct WITH EMPTY KEY.
    DATA(itab) = VALUE itab(
      ( key1 = \`a\` key2 = \`a\` col = 1 )
      ( key1 = \`a\` key2 = \`b\` col = 2 )
      ( key1 = \`a\` key2 = \`a\` col = 3 )
      ( key1 = \`a\` key2 = \`a\` col = 4 )
      ( key1 = \`a\` key2 = \`b\` col = 5 )
      ( key1 = \`b\` key2 = \`a\` col = 6 )
      ( key1 = \`b\` key2 = \`a\` col = 7 )  ).
    DATA members TYPE itab.
    out->begin\_section( \`Representative Binding\`
      )->begin\_section( \`INTO wa\` ).
    LOOP AT itab INTO DATA(wa)
                 GROUP BY ( key1 = wa-key1 key2 = wa-key2 ).
      DATA(idx) = sy-tabix.
      CLEAR members.
      out->begin\_section( |Group { idx }| ).
      LOOP AT GROUP wa INTO DATA(member).
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`ASSIGNING <fs>\` ).
    LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>)
                 GROUP BY ( key1 = <fs>-key1 key2 = <fs>-key2 ).
      idx = sy-tabix.
      CLEAR members.
      out->begin\_section( |Group { idx }| ).
      LOOP AT GROUP <fs> INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`REFERENCE INTO dref\` ).
    LOOP AT itab REFERENCE INTO DATA(dref)
                 GROUP BY ( key1 = dref->key1 key2 = dref->key2 ).
      idx = sy-tabix.
      CLEAR members.
      out->begin\_section( |Group { idx }| ).
      LOOP AT GROUP dref INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->end\_section( )->end\_section( ).
    out->begin\_section( \`Group Key Binding\`
      )->begin\_section( \`INTO group\` ).
    LOOP AT itab ASSIGNING <fs>
                 GROUP BY ( key1 = <fs>-key1 key2 = <fs>-key2 )
                 INTO DATA(group).
      idx = sy-tabix.
      CLEAR members.
      out->begin\_section(
        |Group { idx }, Key { group-key1 } { group-key2 }| ).
      LOOP AT GROUP group INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`ASSIGNING <group>\` ).
    LOOP AT itab ASSIGNING <fs>
                 GROUP BY ( key1 = <fs>-key1 key2 = <fs>-key2 )
                 ASSIGNING FIELD-SYMBOL(<group>).
      idx = sy-tabix.
      CLEAR members.
      out->begin\_section(
        |Group { idx }, Key { <group>-key1 } { <group>-key2 }| ).
      LOOP AT GROUP <group> INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->next\_section( \`REFERENCE INTO group\_ref\` ).
    LOOP AT itab ASSIGNING <fs>
                 GROUP BY ( key1 = <fs>-key1 key2 = <fs>-key2 )
                 REFERENCE INTO DATA(group\_ref).
      idx = sy-tabix.
      CLEAR members.
      out->begin\_section(
        |Group { idx }, Key { group\_ref->key1 } { group\_ref->key2 }| ).
      LOOP AT GROUP group\_ref INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the [grouping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm) of an internal table itab, the six ways of combining the [output behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm) of the LOOP statement with the [output behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by_binding.htm) of the [group loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_loop_glosry.htm "Glossary Entry") are demonstrated. The three [group loops](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengroup_loop_glosry.htm "Glossary Entry") with [representative binding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by_binding.htm) and three group loops with [group key binding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by_binding.htm) are executed, each using the three ways of defining the [output behavior](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_result.htm) of the LOOP statement.

In each group loop a [member loop](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmember_loop_glosry.htm "Glossary Entry") is executed. Here, the group is specified after [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_group.htm) that is produced by the output behavior. In the member loop, the members are placed in an internal table members using the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm). This table is then output in the group loop. The result is the same in all cases.

In addition, the value of sy-tabix in the group loop is produced, which is different in the representative binding and in the group key binding. In the group key binding, the group key can also be addressed and produced, which is not possible in the representative binding.