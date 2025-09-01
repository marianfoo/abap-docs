---
title: "Source Code"
description: |
  REPORT demo_select_over_lead_lag. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. FINAL(out) = cl_demo_output=>new( ). SELECT char1, char2, num1, ROW_NUMBER( ) OVER( PARTITION BY char1 ORDER BY char2 ) AS rnum,
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_over_lead_lag_abexa.htm"
abapFile: "abensql_expr_over_lead_lag_abexa.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "method", "class", "data", "types", "abensql", "expr", "over", "lead", "lag", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_win](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm) →  [sql\_win - Examples of Window Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_over_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_win - Window Functions LEAD and LAG, ABENSQL_EXPR_OVER_LEAD_LAG_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_win - Window Functions LEAD and LAG

This example demonstrates [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm) with the [window functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_function_glosry.htm "Glossary Entry") [LEAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm) and [LAG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm).

Source Code   

REPORT demo\_select\_over\_lead\_lag.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    SELECT char1, char2,
           num1,
           ROW\_NUMBER( )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS rnum,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead1,
           LAG( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag1,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead2,
           LAG( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag2,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lead10,
           LAG( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 )
               AS lag10
           FROM demo\_expressions
           ORDER BY char1, char2 "#EC CI\_NOWHERE
           INTO TABLE @FINAL(windowed\_order\_ascending) ##no\_text.
    out->write( windowed\_order\_ascending ).
    SELECT char1, char2,
           num1,
           ROW\_NUMBER( )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS rnum,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead1,
           LAG( CAST( num1 AS CHAR( 11 ) ), 1, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag1,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead2,
           LAG( CAST( num1 AS CHAR( 11 ) ), 2, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag2,
           LEAD( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lead10,
           LAG( CAST( num1 AS CHAR( 11 ) ), 10, 'Nope' )
             OVER( PARTITION BY char1 ORDER BY char2 DESCENDING )
               AS lag10
           FROM demo\_expressions
           ORDER BY char1, char2 "#EC CI\_NOWHERE
           INTO TABLE @FINAL(windowed\_order\_descending) ##no\_text.
    out->write( windowed\_order\_descending ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    TYPES tab\_type TYPE STANDARD TABLE OF
                   demo\_expressions WITH EMPTY KEY.
    DELETE FROM demo\_expressions.  "#EC CI\_NOWHERE.
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

The example shows results of the window functions [LEAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm) and [LAG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm) to which all three possible arguments are passed. Like in the executable example, the windows are determined for [window expressions with sorting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_expr_over_order_by_abexa.htm).

-   The first argument determines the result as a character-like representation of the column NUM1 of the row determined by the second argument.
-   The second argument determines the rows to be evaluated using differently sized distances.
-   The third argument is a literal returned instead of the null value if the row to be evaluated is not in the current window.