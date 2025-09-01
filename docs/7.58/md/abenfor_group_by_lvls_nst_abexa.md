  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%2C%20Nesting%2C%20ABENFOR_GROUP_BY_LVLS_NST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

itab - Grouping with FOR, Nesting

This example demonstrates nested group level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm) in a FOR expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_lvls\_nest DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_lvls\_nest IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF group,
             fldate   TYPE sflight-fldate,
             seatsocc TYPE sflight-seatsocc,
           END OF group,
           group\_tab TYPE STANDARD TABLE OF group WITH EMPTY KEY.
    DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                      WITH UNIQUE KEY carrid connid fldate.
    DATA(display\_members) = abap\_false.
    cl\_demo\_input=>new(
     )->request( EXPORTING text  = \`Display Group Members?\`
                 CHANGING  field = display\_members ).
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab UP TO 1000 ROWS.
    FINAL(total\_sum) =
      REDUCE i(
        LET wg = xsdbool( to\_upper( display\_members ) = abap\_true ) IN
        INIT t = 0
             o1 = out
        FOR GROUPS OF carrid\_group IN sflight\_tab
              GROUP BY carrid\_group-carrid
        LET carrid\_sum =
          REDUCE i(
            INIT s1 = 0
                 o2 = out
            FOR GROUPS OF connid\_group IN GROUP carrid\_group
                  GROUP BY connid\_group-connid
            LET connid\_sum =
              REDUCE i(
                INIT s2 = 0
                FOR m IN GROUP connid\_group
                NEXT s2 += m-seatsocc )
                o3 = out->next\_section(
                    |{ connid\_group-carrid } { connid\_group-connid }| )
                o4 = COND #( WHEN wg = abap\_true
                               THEN LET group = VALUE group\_tab(
                                 FOR m IN GROUP connid\_group
                                   ( CORRESPONDING #( m ) ) ) IN
                                     out->write( group ) ) IN
            NEXT s1 += connid\_sum
                 o2 = o2->write( |Sum: { connid\_sum }| ) ) IN
        NEXT t += carrid\_sum
             o1 = o1->line(
                  )->write( |Carrier Sum: { carrid\_sum }|
                  )->line( ) ).
    out->write( |Overall Sum: | &&
                |{ total\_sum }| ).
  ENDMETHOD.
ENDCLASS.

Description   

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_lvls_nst_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm) for [table reductions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) instead of the [group loops](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY are constructed in exactly the same way. Instead of the [member loops](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry"), further table reductions and a [table comprehension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_comprehension_glosry.htm "Glossary Entry") are used here.