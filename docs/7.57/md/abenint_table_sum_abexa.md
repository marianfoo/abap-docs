---
title: "Group Level Processing with Nested Groups"
description: |
  This example demonstrates nested groups in group level processing in internal tables. Source Code REPORT demo_int_tables_at_nested. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. TYPES: BEGIN OF group, fldate   TYPE sflight-fldate, se
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenint_table_sum_abexa.htm"
abapFile: "abenint_table_sum_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenint", "table", "sum", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) →  [AT, Group Level Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm) →  [Examples of Group Level Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenat_itab_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Group Level Processing with Nested Groups, ABENINT_TABLE_SUM_ABEXA, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Group Level Processing with Nested Groups

This example demonstrates nested groups in group level processing in internal tables.

Source Code   

REPORT demo\_int\_tables\_at\_nested.
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
    FINAL(out) = cl\_demo\_output=>new( ).
    SELECT \*
           FROM sflight
           INTO TABLE @sflight\_tab UP TO 1000 ROWS.
    LOOP AT sflight\_tab INTO FINAL(sflight\_wa).
      AT NEW connid.
        out->next\_section( |{ sflight\_wa-carrid } | &&
                           |{ sflight\_wa-connid }| ).
      ENDAT.
      group = VALUE #( BASE group
                     ( CORRESPONDING #( sflight\_wa  ) ) ).
      AT END OF connid.
        IF to\_upper( display\_members ) = abap\_true.
          out->write( group ).
        ENDIF.
        CLEAR group.
        SUM.
        out->write( |Sum: | &&
                    |{ sflight\_wa-seatsocc }| ).
      ENDAT.
      AT END OF carrid.
        SUM.
        out->line(
          )->write( |Carrier Sum: | &&
                    |{ sflight\_wa-seatsocc }|
          )->line( ).
      ENDAT.
      AT LAST.
        SUM.
        out->write( |Overall Sum: | &&
                    |{ sflight\_wa-seatsocc }| ).
      ENDAT.
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The sorted table sflight\_tab is filled with flight data from the database table SFLIGHT. The respective sum is calculated and displayed at the end of nested line groups for the columns CARRID and CONNID and at the end of the complete loop. The content of the lines in a group level can be displayed optionally.

The executable example [Grouping with Nesting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenloop_group_by_lvls_nst_abexa.htm) shows how the same function can be provided using the addition [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm).