---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_select_over_all DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. ENDCLASS.  Public class implementation CLASS cl_demo_select_over_all IMPLEMENTATION. METHOD main. SEL
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_over_all_abexa.htm"
abapFile: "abensql_expr_over_all_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "method", "class", "data", "types", "abensql", "expr", "over", "all", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_over_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_win%20-%20Window%20Expressions%20without%20Partition%2C%20ABENSQL_EXPR_OVER_ALL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

sql\_win - Window Expressions without Partition

This example demonstrates [window expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) without partition.

Source Code   

\* Public class definition
CLASS cl\_demo\_select\_over\_all DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_select\_over\_all IMPLEMENTATION.
  METHOD main.
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
           INTO TABLE @FINAL(windowed).
    out->write( windowed ).
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    TYPES tab\_type TYPE STANDARD TABLE OF
                       demo\_expressions WITH EMPTY KEY.
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    DELETE FROM demo\_expressions.
    INSERT demo\_expressions FROM TABLE @( REDUCE tab\_type(
      LET r1 = cl\_abap\_random\_int=>create(
                 seed = CONV i(
                  cl\_demo\_date\_time=>get\_user\_time( ) )
                  min = 1 max = 10 )
          r2 = cl\_abap\_random\_int=>create(
                 seed = CONV i( r1->get\_next( ) ) min = 0 max = 1 )
          c = \`AB\` IN
      INIT t TYPE tab\_type
      FOR i = 0 THEN i + 1 UNTIL i >= 25
      NEXT t = VALUE #(
                 BASE t ( id    = abcde+i(1)
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

Description   

The example defines the same columns as the executable example [Window Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expr_over_abexa.htm). There is, however, no [PARTITION BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) addition after [OVER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_over.htm) of the window expressions. This creates a single window that covers all rows in the result set to which the [window functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_win_func.htm) are applied.