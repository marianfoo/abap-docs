  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab - GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_abexas.htm) → 

Internal Tables, Grouping with LOOP, Nesting

This example demonstrates nested control level processing using [GROUP BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm).

Source Code

REPORT demo\_loop\_group\_by\_levels\_nest.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF group,
             fldate   TYPE sflight-fldate,
             seatsocc TYPE sflight-seatsocc,
           END OF group.
    DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                      WITH UNIQUE KEY carrid connid fldate,
          group       TYPE TABLE OF group WITH EMPTY KEY.
    DATA(display\_members) = abap\_false.
    cl\_demo\_input=>request( EXPORTING text  = \`Display Group Members?\`
                            CHANGING  field = display\_members ).
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab.
    DATA(total\_sum)  = 0.
    LOOP AT sflight\_tab INTO DATA(carrid\_group)
         GROUP BY carrid\_group-carrid.
      DATA(carrid\_sum) = 0.
      LOOP AT GROUP carrid\_group INTO DATA(connid\_group)
           GROUP BY connid\_group-connid.
        out->next\_section( |{ connid\_group-carrid } | &&
                           |{ connid\_group-connid }| ).
        CLEAR group.
        DATA(connid\_sum) = 0.
        LOOP AT GROUP connid\_group INTO DATA(connid\_member).
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
                |{ total\_sum }|
       )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the executable example for [control level processing with nested groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenint_table_sum_abexa.htm). The [member loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmember_loop_glosry.htm "Glossary Entry") of the outer [group loop](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_loop_glosry.htm "Glossary Entry") is itself a group loop (using the addition GROUP BY) and contains a further member loop. The [group keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengroup_key_glosry.htm "Glossary Entry") of the outer and inner grouping are constructed by specifying the required columns explicitly and, unlike in control level processing, do not depend on the structure of the table and its sorting. The totals of the space used per group are calculated explicitly.

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_group_by_lvls_nst_abexa.htm) demonstrates how the nested group loops can be implemented using expressions.