---
title: "Source Code"
description: |
  REPORT demo_select_over_all. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( ). SELECT char1 && '_' && char2 AS group, num1, COUNT()      OVER( ) AS cnt, ROW_NUMBER( ) OVER( )
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_all_abexa.htm"
abapFile: "abensql_expr_over_all_abexa.htm"
keywords: ["select", "insert", "delete", "do", "method", "class", "data", "types", "abensql", "expr", "over", "all", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_abexas.htm) → 

sql\_win - Window Expressions Without Partition

This example demonstrates [window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) without partition.

Source Code

REPORT demo\_select\_over\_all.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    SELECT char1 && '\_' && char2 AS group,
           num1,
           COUNT(\*)      OVER( ) AS cnt,
           ROW\_NUMBER( ) OVER( ) AS rnum,
           MIN( num1 )   OVER( ) AS min,
           MAX( num1 )   OVER( ) AS max,
           SUM( num1 )   OVER( ) AS sum,
           division( 100 \* num1,
                     SUM( num1 ) OVER( ),
                     2 ) AS perc
           FROM demo\_expressions
           ORDER BY group
           INTO TABLE @DATA(windowed).
    out->display( windowed ).  ENDMETHOD.
  METHOD class\_constructor.
    TYPES tab\_type TYPE STANDARD TABLE OF
                   demo\_expressions WITH EMPTY KEY.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type(
      LET r1 = cl\_abap\_random\_int=>create(
                 seed = CONV i( sy-uzeit ) min = 1 max = 10 )
          r2 = cl\_abap\_random\_int=>create(
                 seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 )
          c = \`AB\` IN
      INIT t TYPE tab\_type
      FOR i = 0 THEN i + 1 UNTIL i >= 25
      NEXT t = VALUE #(
                 BASE t ( id    = sy-abcde+i(1)
                          num1  = r1->get\_next( )
                          char1 = substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) &&
                                  substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 )
                          char2 = substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) &&
                                  substring( val = c
                                             off = r2->get\_next( )
                                             len = 1 ) ) ) ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example defines the same columns as the executable example [Window Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_expr_over_abexa.htm). There is, however, no [PARTITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) addition after [OVER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) of the window expressions. This creates a single window that covers all rows in the result set to which the [window functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_win_func.htm) are applied.