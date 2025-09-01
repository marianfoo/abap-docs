---
title: "Group Level Processing with Nested Groups"
description: |
  This example demonstrates nested groups in group level processing in internal tables. Source Code  Public class definition CLASS cl_demo_int_tbls_at_nested DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenint_table_sum_abexa.htm"
abapFile: "abenint_table_sum_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenint", "table", "sum", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) →  [AT, Group Level Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_itab.htm) →  [Examples of Group Level Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenat_itab_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Group%20Level%20Processing%20with%20Nested%20Groups%2C%20ABENINT_TABLE_SUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Group Level Processing with Nested Groups

This example demonstrates nested groups in group level processing in internal tables.

Source Code   

\* Public class definition
CLASS cl\_demo\_int\_tbls\_at\_nested DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_int\_tbls\_at\_nested IMPLEMENTATION.
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
  ENDMETHOD.
ENDCLASS.

Description   

The sorted table sflight\_tab is filled with flight data from the database table SFLIGHT. The respective sum is calculated and displayed at the end of nested line groups for the columns CARRID and CONNID and at the end of the complete loop. The content of the lines in a group level can be displayed optionally.

The executable example [Grouping with Nesting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_lvls_nst_abexa.htm) shows how the same function can be provided using the addition [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm).