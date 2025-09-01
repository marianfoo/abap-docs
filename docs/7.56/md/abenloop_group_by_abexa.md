---
title: "Grouping Internal Tables"
description: |
  The example is a step-by-step introduction to grouping with LOOP AT GROUP BY(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm). Source Code REPORT demo_loop_at_itab_group_by. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS dem
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenloop_group_by_abexa.htm"
abapFile: "abenloop_group_by_abexa.htm"
keywords: ["select", "loop", "do", "method", "class", "data", "internal-table", "abenloop", "group", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Cheat Sheets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_blurb.htm) →  [Grouping Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheets_grouping_iitabs.htm) → 

Grouping Internal Tables

The example is a step-by-step introduction to grouping with [LOOP AT GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_itab_group_by.htm).

Source Code

REPORT demo\_loop\_at\_itab\_group\_by.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA:
      wa      TYPE spfli,
      member  TYPE spfli,
      members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY.
    SELECT \*
           FROM spfli
           INTO TABLE @DATA(spfli\_tab).
    out->begin\_section( \`Representative Binding\` ).
    out->begin\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      out->write( wa-carrid ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      out->write( |{ wa-carrid } { wa-airpfrom }| ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->end\_section( )->next\_section( \`Group Key Binding\` ).
    out->next\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO DATA(key).
      out->write( key ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO key.
      CLEAR members.
      LOOP AT GROUP key INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO DATA(keys).
      out->write( keys ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO keys.
      CLEAR members.
      LOOP AT GROUP keys INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Two column groups without members\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                                 index = GROUP INDEX size = GROUP SIZE )
                      WITHOUT MEMBERS
                      INTO DATA(keysplus).
      out->write( keysplus ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates all syntactical options shown in [Grouping internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheets_grouping_iitabs.htm).