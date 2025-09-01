---
title: "Source Code"
description: |
  REPORT demo_loop_at_group_by_expl. CLASS demo_group_by DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. CLASS-DATA: numbers TYPE TABLE OF i WITH EMPTY KEY, out     TYPE REF TO if_demo_output, limit1  TYPE i VALUE 3, limit2  TYPE i VALUE 6. CLASS-METHODS:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_group_by_explicit_abexa.htm"
abapFile: "abenloop_group_by_explicit_abexa.htm"
keywords: ["select", "insert", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenloop", "group", "explicit", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Grouping with LOOP, Explicit and Implicit, ABENLOOP_GROUP_BY_EXPLICIT_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Grouping with LOOP, Explicit and Implicit

This example demonstrates a self-programmed group loop and how it is replaced by [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm).

Source Code   

REPORT demo\_loop\_at\_group\_by\_expl.
CLASS demo\_group\_by DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      numbers TYPE TABLE OF i WITH EMPTY KEY,
      out     TYPE REF TO if\_demo\_output,
      limit1  TYPE i VALUE 3,
      limit2  TYPE i VALUE 6.
    CLASS-METHODS:
      group\_explicit,
      group\_by.
ENDCLASS.
CLASS demo\_group\_by IMPLEMENTATION.
  METHOD class\_constructor.
    numbers = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
  ENDMETHOD.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    group\_explicit( ).
    group\_by( ).
    out->display( ).
  ENDMETHOD.
  METHOD group\_explicit.
    TYPES:
      BEGIN OF helper\_struc,
        key  TYPE string,
        refs TYPE STANDARD TABLE OF REF TO i WITH EMPTY KEY,
      END OF helper\_struc,
      helper\_tab TYPE STANDARD TABLE OF helper\_struc WITH EMPTY KEY.
    DATA(helper\_tab) = VALUE helper\_tab(
     ( key = \`below\`   )
     ( key = \`between\` )
     ( key = \`above\`   ) ).
    out->next\_section( 'Group Explicit' ).
    "Grouping
    LOOP AT numbers REFERENCE INTO FINAL(dref).
      IF dref->\* < limit1.
        ASSIGN helper\_tab\[ key = |below| \]-refs to FIELD-SYMBOL(<fs>).
        INSERT dref INTO TABLE <fs>.
      ELSEIF dref->\* <= limit2.
        ASSIGN helper\_tab\[ key = |between| \]-refs to <fs>.
        INSERT dref INTO TABLE <fs>.
      ELSE.
        ASSIGN helper\_tab\[ key = |above| \]-refs to <fs>.
        INSERT dref INTO TABLE <fs>.
      ENDIF.
    ENDLOOP.
    "Group loop
    DATA members LIKE numbers.
    LOOP AT helper\_tab INTO FINAL(helper\_struc).
      out->begin\_section( helper\_struc-key ).
      members = VALUE #( FOR m IN helper\_struc-refs ( m->\* ) ).
      out->write( members )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD group\_by.
    out->next\_section( 'Group By' ).
    DATA members LIKE numbers.
    LOOP AT numbers INTO FINAL(number)
         GROUP BY COND string(
           WHEN number <  limit1 THEN \`below\`
           WHEN number <= limit2 THEN \`between\`
           ELSE \`above\` )
         INTO FINAL(group).
      out->begin\_section( group ).
      members = VALUE #( FOR m IN GROUP group ( m ) ).
      out->write( members )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_group\_by=>main( ).

Description   

The task of splitting the lines in a single one-column table into three groups by comparison criteria is solved in two different ways:

-   The method group\_explicit works without GROUP BY. Instead, the grouping takes place explicitly in the ABAP program, which requires an explicit helper table helper\_tab. After the grouping, the lines of the nested table refs in helper\_tab point to the associated lines of the original table numbers for each group defined using the column key. This grouping loop is followed by the group loop across the helper table, where every loop pass accesses the group members by evaluating the nested tables refs.
-   The method group\_by works with GROUP BY. The result matches the result of group\_explicit. A comparison of the methods shows that the grouping loop of the first method in the second method is done implicitly by [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) and no explicit helper table is required. Only the group loop can be seen.

Both methods perform three types of loops, the grouping loop, the group loop, and the optional member loops. Using GROUP BY is easier since the grouping loop does not need to be programmed explicitly and the second method becomes significantly shorter.