---
title: "Internal Tables, Grouping with FOR, Nesting"
description: |
  This example demonstrates nested control level processing using GROUP BY(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_groups_of.htm) in a FOR expression. Source Code REPORT demo_for_groups_by_levels_nest. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLAS
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_group_by_lvls_nst_abexa.htm"
abapFile: "abenfor_group_by_lvls_nst_abexa.htm"
keywords: ["select", "loop", "do", "case", "try", "method", "class", "data", "types", "internal-table", "abenfor", "group", "lvls", "nst", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [FOR - Table Iterations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_itab.htm) →  [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_grouping_abexas.htm) → 

Internal Tables, Grouping with FOR, Nesting

This example demonstrates nested control level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_groups_of.htm) in a FOR expression.

Source Code

REPORT demo\_for\_groups\_by\_levels\_nest.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF group,
             fldate   TYPE sflight-fldate,
             seatsocc TYPE sflight-seatsocc,
           END OF group,
           group\_tab type STANDARD TABLE OF group WITH EMPTY KEY.
    DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                      WITH UNIQUE KEY carrid connid fldate.
    DATA(display\_members) = abap\_false.
    cl\_demo\_input=>request( EXPORTING text  = \`Display Group Members?\`
                            CHANGING  field = display\_members ).
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab.
    DATA(total\_sum) =
      REDUCE i(
        LET wg = xsdbool( to\_upper( display\_members ) = abap\_true ) IN
        INIT t = 0
             o = out
        FOR GROUPS OF carrid\_group IN sflight\_tab
              GROUP BY carrid\_group-carrid
        LET carrid\_sum =
          REDUCE i(
            INIT s1 = 0
                 o1 = out
            FOR GROUPS OF connid\_group IN GROUP carrid\_group
                  GROUP BY connid\_group-connid
            LET connid\_sum =
              REDUCE i(
                INIT s2 = 0
                FOR m IN GROUP connid\_group
                NEXT s2 = s2 + m-seatsocc )
                o2 = out->next\_section(
                    |{ connid\_group-carrid } { connid\_group-connid }| )
                o3 = COND #( WHEN wg = abap\_true
                               THEN LET group = VALUE group\_tab(
                                 FOR m IN GROUP connid\_group
                                   ( CORRESPONDING #( m ) ) ) IN
                                     out->write( group ) ) IN
            NEXT s1 = s1 + connid\_sum
                 o1 = o1->write( |Sum: { connid\_sum }| ) ) IN
        NEXT t = t + carrid\_sum
             o = o->line(
                  )->write( |Carrier Sum: { carrid\_sum }|
                  )->line( ) ).
    out->write( |Overall Sum: | &&
                |{ total\_sum }| )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenloop_group_by_lvls_nst_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor_groups_of.htm) for [table reductions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm) instead of the [group loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY are constructed in exactly the same way. Instead of the [member loops](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmember_loop_glosry.htm "Glossary Entry"), further table reductions and a [table comprehension](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are used here.