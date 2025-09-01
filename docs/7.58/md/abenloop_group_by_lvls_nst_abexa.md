---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_loop_grp_by_levels_nst DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_loop_grp_by_levels_nst IMPLEMENTATION. METHOD main. TYPES:
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_lvls_nst_abexa.htm"
abapFile: "abenloop_group_by_lvls_nst_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenloop", "group", "lvls", "nst", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%2C%20Nesting%2C%20ABENLOOP_GROUP_BY_LVLS_NST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

itab - Grouping with LOOP, Nesting

This example demonstrates nested group level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_levels\_nst DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_levels\_nst IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF group,
             fldate   TYPE sflight-fldate,
             seatsocc TYPE sflight-seatsocc,
           END OF group.
    DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                      WITH UNIQUE KEY carrid connid fldate,
          group       TYPE TABLE OF group WITH EMPTY KEY.
    DATA(display\_members) = abap\_false.
    cl\_demo\_input=>new(
     )->request( EXPORTING text  = \`Display Group Members?\`
                 CHANGING  field = display\_members ).
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab UP TO 1000 ROWS.
    DATA(total\_sum)  = 0.
    LOOP AT sflight\_tab INTO FINAL(carrid\_group)
         GROUP BY carrid\_group-carrid.
      DATA(carrid\_sum) = 0.
      LOOP AT GROUP carrid\_group INTO FINAL(connid\_group)
           GROUP BY connid\_group-connid.
        out->next\_section( |{ connid\_group-carrid } | &&
                           |{ connid\_group-connid }| ).
        CLEAR group.
        DATA(connid\_sum) = 0.
        LOOP AT GROUP connid\_group INTO FINAL(connid\_member).
          group = VALUE #( BASE group
                         ( CORRESPONDING #( connid\_member ) ) ).
          connid\_sum += connid\_member-seatsocc.
        ENDLOOP.
        carrid\_sum += connid\_sum.
        IF to\_upper( display\_members ) = abap\_true.
          out->write( group ).
        ENDIF.
        out->write( |Sum: | &&
                    |{ connid\_sum }| ).
      ENDLOOP.
      out->line(
        )->write( |Carrier Sum: | &&
                  |{ carrid\_sum }|
        )->line( ).
      total\_sum += carrid\_sum.
    ENDLOOP.
    out->write( |Overall Sum: | &&
                |{ total\_sum }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the executable example for [group level processing with nested groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenint_table_sum_abexa.htm). The [member loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry") of the outer [group loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry") is itself a group loop using the addition GROUP BY and contains a further member loop. The [group keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") of the outer and inner grouping are constructed by specifying the required columns explicitly and, unlike in group level processing, do not depend on the structure of the table and its sorting. The totals of the space used per group are calculated explicitly.

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_lvls_nst_abexa.htm) demonstrates how the nested group loops can be implemented using expressions.